import type { NitroFetchOptions, NitroFetchRequest } from 'nitropack'

/**
 * fetch のオプションに独自のオプションを付与した型
 * @template R - リクエストの型
 */
export type AppFetchOptions<R extends NitroFetchRequest = NitroFetchRequest> = NitroFetchOptions<R> & {
  /** レスポンスをキャッシュするかどうか */
  isCache?: boolean
}

/**
 * `$fetch.raw` に渡す引数（リクエストとオプション）のタプル
 * @template _T - レスポンスデータの型
 * @template R - リクエストの型
 */
export type FetchRawParameters<_T = unknown, R extends NitroFetchRequest = NitroFetchRequest> = [request: R, options?: AppFetchOptions<R>]

/**
 * Client Front が扱う fetch レスポンス
 * @template T - レスポンスデータの型
 */
export type AppFetchResponse<T> = {
  /** レスポンスデータ */
  _data: T | undefined
  /** レスポンスヘッダー */
  headers: Record<string, string>
  /** ステータスコード */
  status: number
  /** ステータステキスト */
  statusText: string
}
