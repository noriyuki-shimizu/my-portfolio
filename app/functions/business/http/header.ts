/**
 * タプル配列のヘッダーを受け取り、それをレコードオブジェクトに変換する
 * @param arrayHeaders - タプル配列のヘッダー
 * @returns 変換されたレコードオブジェクト
 */
export const convertArrayHeadersToRecord = (arrayHeaders: [string, string][]): Record<string, string> => {
  return arrayHeaders.reduce<Record<string, string>>((a, c) => {
    const [key, value] = c
    return Object.assign(a, { [key]: value })
  }, {})
}

/**
 * Headers オブジェクトをレコードオブジェクトに変換
 * @param [headers] - fetch options のヘッダーオブジェクト
 * @returns 変換されたレコードオブジェクト
 */
export const convertHeaderToRecord = (headers?: HeadersInit): Record<string, string> => {
  if (isUndefined(headers)) {
    return {}
  }
  if (Array.isArray(headers)) {
    return convertArrayHeadersToRecord(headers)
  }
  if (headers instanceof Headers) {
    return convertArrayHeadersToRecord(Array.from(headers.entries()))
  }
  return headers
}
