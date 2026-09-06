/**
 * 指定した時間だけ待機する
 * @param ms - 待機時間（ミリ秒）
 * @returns Promise
 */
export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
