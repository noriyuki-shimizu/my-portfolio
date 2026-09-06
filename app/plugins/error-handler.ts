import type { ErrorLogRequestBody } from '#shared/types/business/error-log/http'
import { postRequest } from '@/infrastructures/rest/nuxt/api/error-logs'

/**
 * エラー発生時にエラーログを送信するプラグイン
 */
export default defineNuxtPlugin((nuxtApp) => {
  /**
   * エラーログを送信する
   * @param error - 発生したエラー
   */
  const sendErrorLog = (error: unknown): void => {
    const route = nuxtApp.$router.currentRoute.value
    const err = error instanceof Error ? error : new Error(String(error))

    const body: ErrorLogRequestBody = {
      level: 'ERROR',
      method: 'GET',
      path: route.path,
      query: route.fullPath.split('?').slice(1).join('?'),
      context: {
        renderingMode: import.meta.server ? 'ssr' : 'csr'
      },
      status: '500',
      message: err.message,
      stackTrace: err.stack ?? ''
    }

    postRequest(body).catch(() => {
      // ログ送信の失敗は握りつぶす
    })
  }

  nuxtApp.hook('vue:error', (error): void => {
    sendErrorLog(error)
  })

  nuxtApp.hook('app:error', (error): void => {
    sendErrorLog(error)
  })
})
