import type { ErrorLogRequestBody } from '#shared/types/business/error-log/http'
import type { AppFetchResponse } from '#shared/types/business/http/rest'

/**
 * エラーログの送信 API
 * @param body - リクエストボディ
 * @returns - API レスポンス
 */
export const postRequest = (body: ErrorLogRequestBody): Promise<AppFetchResponse<void>> => {
  const { $restNuxtServerApi } = useNuxtApp()

  return $restNuxtServerApi('/api/error-logs', {
    method: 'POST',
    body
  })
}
