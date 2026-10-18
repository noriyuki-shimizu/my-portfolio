import { isNull } from './lang'

/**
 * 最後の呼び出しから wait ミリ秒経過するまで func の実行を遅延させた関数を返す
 * trailing edge（最後の呼び出し後に1回だけ実行）のみをサポートする
 * @param func 遅延実行する関数
 * @param wait 待機時間（ミリ秒）
 * @returns debounce された関数（cancel / flush メソッド付き）
 */
export const debounce = <T extends (...args: never[]) => unknown>(
  func: T,
  wait: number
): {
  (...args: Parameters<T>): void
  /** 待機中の呼び出しをキャンセルする */
  cancel: () => void
  /** 待機中の呼び出しを即時実行する */
  flush: () => void
} => {
  /** 待機中のタイマー ID */
  let timerId: ReturnType<typeof setTimeout> | null = null
  /** 最後に呼び出された際の引数 */
  let lastArgs: Parameters<T> | null = null

  /**
   * 待機中のタイマーを解除する
   */
  const clearTimer = (): void => {
    if (!isNull(timerId)) {
      clearTimeout(timerId)
      timerId = null
    }
  }

  /**
   * 最後の引数で func を実行する
   */
  const invoke = (): void => {
    if (!isNull(lastArgs)) {
      const args = lastArgs
      lastArgs = null
      func(...args)
    }
  }

  /**
   * debounce された関数本体
   * @param args func に渡す引数
   */
  const debounced = (...args: Parameters<T>): void => {
    lastArgs = args
    clearTimer()
    timerId = setTimeout(() => {
      timerId = null
      invoke()
    }, wait)
  }

  /**
   * 待機中の呼び出しをキャンセルする
   */
  const cancel = (): void => {
    clearTimer()
    lastArgs = null
  }

  /**
   * 待機中の呼び出しを即時実行する
   */
  const flush = (): void => {
    clearTimer()
    invoke()
  }

  return Object.assign(debounced, { cancel, flush })
}
