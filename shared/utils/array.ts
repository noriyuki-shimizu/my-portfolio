/**
 * 配列から重複を除いた新しい配列を返す（SameValueZero で比較）
 * @param array 対象の配列
 * @returns 重複を除いた新しい配列
 */
export const uniq = <T>(array: readonly T[]): T[] => {
  return [...new Set(array)]
}

/**
 * array のうち values に含まれない要素のみの新しい配列を返す（SameValueZero で比較）
 * @param array 対象の配列
 * @param values 除外する値の配列
 * @returns 除外後の新しい配列
 */
export const difference = <T>(array: readonly T[], values: readonly T[]): T[] => {
  const excludeValues = new Set(values)
  return array.filter((item) => {
    return !excludeValues.has(item)
  })
}

/**
 * 2つの配列の両方に含まれる要素のみの新しい配列を返す（SameValueZero で比較）
 * 結果は array の出現順で重複は除かれる
 * @param array 対象の配列
 * @param other 比較する配列
 * @returns 両方に含まれる要素の新しい配列
 */
export const intersection = <T>(array: readonly T[], other: readonly T[]): T[] => {
  const includeValues = new Set(other)
  return uniq(array).filter((item) => {
    return includeValues.has(item)
  })
}

/**
 * 配列から指定した値をすべて取り除く（SameValueZero で比較）
 * 注意: lodash の pull と同様、第1引数 array を破壊的に変更して返す
 * @param array 対象の配列（破壊的に変更される）
 * @param values 取り除く値
 * @returns 変更後の array
 */
export const pull = <T>(array: T[], ...values: T[]): T[] => {
  const removeValues = new Set(values)
  const remaining = array.filter((item) => {
    return !removeValues.has(item)
  })
  array.length = 0
  array.push(...remaining)
  return array
}

/**
 * 2つの配列の同じインデックスの要素を iteratee で結合した新しい配列を返す
 * 配列の長さが異なる場合、足りない要素には undefined が渡される
 * MEMO: カンマを含むジェネリクス付きの const アロー関数は Nuxt の auto-import に誤認されるため function 宣言とする
 * MEMO: iteratee の引数型を T / U とする（undefined を含めない）のは lodash の zipWith と同一の型契約を保つための意図的な仕様
 *       （@types/lodash も undefined を型に含めていない）。長さの異なる配列を渡す場合は呼び出し側で undefined を考慮すること
 * @param array 1つ目の配列
 * @param other 2つ目の配列
 * @param iteratee 各要素の組を受け取り結合後の値を返す関数
 * @returns 結合後の新しい配列
 */
export function zipWith<T, U, R>(array: readonly T[], other: readonly U[], iteratee: (a: T, b: U) => R): R[] {
  const length = Math.max(array.length, other.length)
  return Array.from({ length }, (_, index) => {
    return iteratee(array.at(index) as T, other.at(index) as U)
  })
}
