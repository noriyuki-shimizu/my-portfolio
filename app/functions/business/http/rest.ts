import camelcaseKeys from 'camelcase-keys'
import type { $Fetch, NitroFetchRequest, TypedInternalResponse } from 'nitropack'
import type { FetchResponse } from 'ofetch'
import snakecaseKeys from 'snakecase-keys'
import { SHORT_HASH_LENGTH } from '#shared/constants/common/hash'
import type { AppFetchResponse, FetchRawParameters } from '#shared/types/business/http/rest'
import { convertArrayHeadersToRecord, convertHeaderToRecord } from '@/functions/business/http/header'
import { useCommonTraceIdApiStore } from '@/store/common/trace-id'

/**
 * リクエストボディが Record 形式のオブジェクトであるか
 * @param body リクエストボディ
 * @returns 判定結果
 */
const isRequestBodyRecordObject = (body?: BodyInit | Record<string, unknown> | null): body is Record<string, unknown> => {
  return !(
    isNil(body)
    || isString(body)
    || body instanceof ReadableStream
    || body instanceof Blob
    || body instanceof ArrayBuffer
    || ArrayBuffer.isView(body)
    || body instanceof FormData
    || body instanceof URLSearchParams
  )
}

/**
 * API における共通のヘッダー取得
 * @returns ヘッダー情報
 */
export const getCommonApiHeader = (): Record<string, string> => {
  const { traceId } = useCommonTraceIdApiStore()
  const headers: Record<string, string> = {}

  if (!isEmpty(traceId.value)) {
    Object.assign(headers, {
      'x-amzn-trace-id': traceId.value
    })
  }

  if (import.meta.server) {
    const requestHeaders = useRequestHeaders(['user-agent', 'x-forwarded-for', 'x-forwarded-port', 'x-forwarded-proto'])
    Object.assign(headers, requestHeaders)
  }

  return headers
}

/**
 * 指定されたリクエストのURLからハッシュキーを生成
 *
 * @param request リクエストのURLまたはリクエストオブジェクト
 * @returns リクエストURLから派生したハッシュキー
 */
export const generateRequestHashKey = async (request: NitroFetchRequest): Promise<string> => {
  const requestUrl = isString(request) ? request : request.url
  const hash = await calculateSHA256Hash(requestUrl)
  return hash.slice(0, SHORT_HASH_LENGTH)
}

/**
 * フェッチリクエストを行うための共通のオプションのセットを作成
 * @param [options] - Fetch Option
 * @returns 共通のオプションのセット
 */
export const createCommonFetchOption = <T = unknown>(options?: FetchRawParameters<T>[1]): FetchRawParameters<T>[1] => {
  return {
    ...options,
    headers: {
      ...convertHeaderToRecord(options?.headers)
    },
    onRequest(context): void {
      const { query, body } = context.options

      if (!isUndefined(query)) {
        context.options.query = snakecaseKeys(query, { deep: true })
      }
      if (isRequestBodyRecordObject(body)) {
        context.options.body = snakecaseKeys(body, { deep: true })
      }
    },
    onResponse(context): void {
      context.response._data = camelcaseKeys(context.response._data, { deep: true })
    }
  }
}

/**
 * キャッシュされた値を取得する
 * @description
 * キャッシュされた値があればそちら取得し、ない場合はフェッチして、レスポンスをキャッシュする
 * @param cacheKey - キャッシュキー
 * @param fetch - fetch オブジェクト
 * @param fetchRequest - フェッチリクエストオブジェクト
 * @param fetchRequest.request - リクエスト情報
 * @param fetchRequest.options - オプション情報
 * @returns Client Front が扱うレスポンスデータ
 */
export const getCacheValue = async <T = unknown>(
  cacheKey: string,
  fetch: $Fetch,
  fetchRequest: {
    /** リクエスト情報 */
    request: FetchRawParameters<T>[0]
    /** オプション情報 */
    options: FetchRawParameters<T>[1]
  }
): Promise<AppFetchResponse<T>> => {
  /** リクエスト情報 */
  const { request, options } = fetchRequest

  const cached = useState<AppFetchResponse<T> | null>(cacheKey, () => {
    return null
  })

  if (isNull(cached.value)) {
    const response = await fetch.raw<T>(request, options)
    cached.value = convertAppFetchResponse(response)
  }

  return cached.value
}

/**
 * http client で取得されたレスポンスを Client Front が扱うレスポンスデータに変換
 *
 * @param response http client で取得されたレスポンスデータ
 * @returns Client Front が扱うレスポンスデータ
 */
export const convertAppFetchResponse = <T>(
  response: FetchResponse<TypedInternalResponse<NitroFetchRequest, T>>
): AppFetchResponse<T> => {
  return {
    _data: response._data as T | undefined,
    headers: convertArrayHeadersToRecord(Array.from(response.headers.entries())),
    status: response.status,
    statusText: response.statusText
  }
}
