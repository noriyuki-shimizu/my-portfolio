import type { AccessLogRequestBody } from '#shared/types/business/access-log/http'
import { postRequest } from '@/infrastructures/rest/nuxt/api/access-logs'

/**
 * 画面遷移ごとにアクセスログを送信するグローバルミドルウェア
 * @param to - 遷移先のルート情報
 */
export default defineNuxtRouteMiddleware(async (to): Promise<void> => {
  const query = to.fullPath.split('?').slice(1).join('?')

  const body: AccessLogRequestBody = {
    level: 'INFO',
    method: 'GET',
    path: to.path,
    query,
    context: {
      renderingMode: import.meta.server ? 'ssr' : 'csr'
    },
    status: '200'
  }

  const request = postRequest(body).catch(() => {
    // ログ送信の失敗は画面遷移に影響させない
  })

  // SSR ではレスポンス確定前に送信を完了させる
  if (import.meta.server) {
    await request
  }
})
