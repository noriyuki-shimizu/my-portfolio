import type { Ref } from 'vue'

/**
 * リクエストを横断して利用するトレース ID を管理するストア
 * @returns トレース ID とその設定関数
 */
export const useCommonTraceIdApiStore = (): {
  /** トレース ID */
  traceId: Ref<string>
  /** トレース ID を設定する関数 */
  setTraceId: (id: string) => void
} => {
  const traceId = useCookie<string>('device-trace-id', {
    // デバイス単位で識別できるよう長期間保持する（約400日）
    maxAge: 60 * 60 * 24 * 400,
    sameSite: 'lax',
    path: '/',
    default: () => {
      return crypto.randomUUID()
    }
  })

  /**
   * トレース ID を設定する
   * @param id - 設定するトレース ID
   */
  const setTraceId = (id: string): void => {
    traceId.value = id
  }

  return { traceId, setTraceId }
}
