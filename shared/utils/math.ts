import { isNil, isNumber, isString, isUndefined } from './lang'
import { get } from './object'

/**
 * 数値配列の最大値を返す
 * lodash の max と同様、空配列・null・undefined の場合は undefined を返す
 * （Math.max と異なり空配列で -Infinity を返さない）
 * また lodash と同様に NaN は無視する（例: [NaN, 1, 2] は 2、[NaN] は undefined）
 * @param array 対象の数値配列
 * @returns 最大値（空配列・nullish・全要素が NaN の場合は undefined）
 */
export const max = (array: readonly number[] | null | undefined): number | undefined => {
  if (isNil(array)) {
    return undefined
  }
  let result: number | undefined
  for (const value of array) {
    if (!Number.isNaN(value) && (isUndefined(result) || value > result)) {
      result = value
    }
  }
  return result
}

/**
 * iteratee で解決した比較値が最大となる要素を返す
 * lodash の maxBy と同様、比較値が NaN の要素は無視する
 * @param array 対象の配列
 * @param iteratee 比較値の解決関数またはプロパティパス文字列（例: 'contents.length'）
 * @returns 比較値が最大の要素（空配列・nullish・全要素の比較値が NaN の場合は undefined）
 */
export const maxBy = <T>(
  array: readonly T[] | null | undefined,
  iteratee: ((item: T) => number) | string
): T | undefined => {
  if (isNil(array)) {
    return undefined
  }
  const resolve = isString(iteratee)
    ? (item: T): unknown => {
      return get(item, iteratee)
    }
    : iteratee
  let result: T | undefined
  let maxValue: number | undefined
  for (const item of array) {
    const value = resolve(item)
    if (isNumber(value) && !Number.isNaN(value) && (isUndefined(maxValue) || value > maxValue)) {
      result = item
      maxValue = value
    }
  }
  return result
}
