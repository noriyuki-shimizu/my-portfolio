import type { AccessLogRequestBody } from '#shared/types/business/access-log/http'
import type { AppFetchResponse } from '#shared/types/business/http/rest'

/**
 * アクセスログの送信 API
 * @param body - リクエストボディ
 * @returns - API レスポンス
 */
export const postRequest = (body: AccessLogRequestBody): Promise<AppFetchResponse<void>> => {
  const { $restNuxtServerApi } = useNuxtApp()

  return $restNuxtServerApi('/api/access-logs', {
    method: 'POST',
    body
  })
}
