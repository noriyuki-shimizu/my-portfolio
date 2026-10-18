/**
 * 数値文字列からカンマを除去する
 * @param value - 対象の文字列
 * @returns カンマを除去した文字列
 */
export const removeCommaFromNumberString = (value: string): string => {
  return value.replaceAll(',', '')
}
