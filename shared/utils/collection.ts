import { isNull, isUndefined } from './lang'
import { get } from './object'

/**
 * iteratee を比較値の解決関数に変換する
 * 未指定の場合は要素自身、文字列の場合はプロパティパスとして解決する
 * @param iteratee 変換対象の iteratee
 * @returns 比較値の解決関数
 */
const resolveIteratee = <T>(iteratee?: ((item: T) => unknown) | string): (item: T) => unknown => {
  if (isUndefined(iteratee)) {
    return (item: T): unknown => {
      return item
    }
  }
  if (typeof iteratee === 'string') {
    return (item: T): unknown => {
      return get(item, iteratee)
    }
  }
  return iteratee
}

/**
 * 昇順の比較を行う（undefined は末尾、null はその直前に並ぶ）
 * @param a 比較する値
 * @param b 比較する値
 * @returns 比較結果（負: a が先、正: b が先、0: 同順）
 */
const compareAscending = (a: unknown, b: unknown): number => {
  if (a === b) {
    return 0
  }
  if (isUndefined(a)) {
    return 1
  }
  if (isUndefined(b)) {
    return -1
  }
  if (isNull(a)) {
    return 1
  }
  if (isNull(b)) {
    return -1
  }
  if ((a as number | string) < (b as number | string)) {
    return -1
  }
  if ((a as number | string) > (b as number | string)) {
    return 1
  }
  return 0
}

/**
 * iteratee で解決した比較値の昇順にソートした新しい配列を返す（安定ソート）
 * @param collection 対象の配列
 * @param iteratee 比較値の解決関数またはプロパティパス文字列（省略時は要素自身で比較）
 * @returns ソート後の新しい配列
 */
export const sortBy = <T>(collection: readonly T[], iteratee?: ((item: T) => unknown) | string): T[] => {
  const resolve = resolveIteratee(iteratee)
  return collection
    .map((item) => {
      return { item, criteria: resolve(item) }
    })
    .sort((a, b) => {
      return compareAscending(a.criteria, b.criteria)
    })
    .map(({ item }) => {
      return item
    })
}
