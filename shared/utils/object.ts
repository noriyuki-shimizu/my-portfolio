import { isNil, isPlainObject, isUndefined } from './lang'
import { BRACKET_INDEX_REGEX } from '#shared/constants/common/regExp'

/**
 * プロパティパスをセグメント配列に変換する
 * 例: 'a.b[0].c' → ['a', 'b', '0', 'c']
 * @param path 変換対象のパス
 * @returns パスのセグメント配列
 */
const toPathSegments = (path: PropertyKey): PropertyKey[] => {
  if (typeof path !== 'string') {
    return [path]
  }
  return path
    .replace(BRACKET_INDEX_REGEX, '.$1')
    .split('.')
    .filter((segment) => {
      return segment !== ''
    })
}

/**
 * オブジェクトから指定パスの値を取得する
 * パスは 'a.b' のドット記法、'a[0].b' のブラケット記法に対応する
 * @param object 対象のオブジェクト
 * @param path 取得するプロパティのパス
 * @param defaultValue 解決した値が undefined の場合に返す値
 * @returns 解決した値
 */
export const get = (object: unknown, path: PropertyKey, defaultValue?: unknown): unknown => {
  const resolved = toPathSegments(path).reduce<unknown>((current, segment) => {
    if (isNil(current)) {
      return undefined
    }
    return (current as Record<PropertyKey, unknown>)[segment]
  }, object)
  return isUndefined(resolved) ? defaultValue : resolved
}

/**
 * オブジェクトが指定パスのプロパティを自身のプロパティとして持つか判定する
 * ドット記法・ブラケット記法のネストパスにも対応するため、lodash の has と同様に boolean を返す
 * @param object 対象のオブジェクト
 * @param path 判定するプロパティのパス
 * @returns 判定結果
 */
export const has = (object: unknown, path: PropertyKey): boolean => {
  if (isNil(object)) {
    return false
  }
  let current: unknown = object
  return toPathSegments(path).every((segment) => {
    if (isNil(current) || !Object.prototype.hasOwnProperty.call(current, segment)) {
      return false
    }
    current = (current as Record<PropertyKey, unknown>)[segment]
    return true
  })
}

/**
 * オブジェクトが指定キーを自身のプロパティとして保持しているかを判定する
 * @param obj 判定対象オブジェクト
 * @param key 判定対象キー
 * @returns 指定キーを保持していれば true
 */
export const hasKey = <K extends PropertyKey>(obj: object, key: K): obj is object & Record<K, unknown> => {
  return Object.hasOwn(obj, key)
}

/**
 * オブジェクトの各プロパティの値を iteratee で変換した新しいオブジェクトを返す
 * MEMO: カンマを含むジェネリクス付きの const アロー関数は Nuxt の auto-import に誤認されるため function 宣言とする
 * @param object 変換対象のオブジェクト
 * @param iteratee 値と key を受け取り変換後の値を返す関数
 * @returns 変換後のオブジェクト
 */
export function mapValues<T extends object, R>(
  object: T,
  iteratee: (value: T[keyof T], key: string) => R
): { [P in keyof T]: R } {
  const entries = Object.entries(object).map(([key, value]) => {
    return [key, iteratee(value as T[keyof T], key)]
  })
  return Object.fromEntries(entries) as { [P in keyof T]: R }
}

/**
 * オブジェクトのプロパティの値を string に変換する
 * @param obj 変換対象オブジェクト
 * @returns 変換後のオブジェクト
 */
export const mapValuesToStrings = (obj: Record<string, unknown>): Record<string, string> => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => {
      return [key, String(value)]
    })
  )
}

/**
 * オブジェクト自身および継承された列挙可能なキーを取得する
 * lodash の getAllKeysIn と同様、プロトタイプチェーン上の列挙可能プロパティも対象に含める
 * @param object 対象のオブジェクト
 * @returns 自身・継承を含む列挙可能なキーの配列
 */
const getAllKeysIn = (object: object): string[] => {
  const keys = new Set<string>()
  let current: object | null = object
  while (!isNil(current)) {
    Object.keys(current).forEach((key) => {
      keys.add(key)
    })
    current = Object.getPrototypeOf(current)
  }
  return Array.from(keys)
}

/**
 * 指定したキーを除外した新しいオブジェクトを返す
 * 自身・継承の列挙可能プロパティを対象とするため、lodash の omit と同様に getAllKeysIn を用いる
 * MEMO: カンマを含むジェネリクス付きの const アロー関数は Nuxt の auto-import に誤認されるため function 宣言とする
 * @param object 対象のオブジェクト
 * @param paths 除外するキー（string / number の単一または配列。number は文字列化して比較する）
 * @returns 除外後の新しいオブジェクト
 */
export function omit<T extends object, K extends Extract<keyof T, string | number>>(
  object: T,
  paths: K | readonly K[]
): Omit<T, K>
export function omit<T extends object>(object: T, paths: string | number | readonly (string | number)[]): Partial<T>
export function omit<T extends object>(object: T, paths: string | number | readonly (string | number)[]): Partial<T> {
  const pathList = Array.isArray(paths) ? paths : [paths]
  const excludeKeys = new Set<string>(pathList.map(String))
  const source = object as Record<string, unknown>
  const entries = getAllKeysIn(object)
    .filter((key) => {
      return !excludeKeys.has(key)
    })
    .map((key) => {
      return [key, source[key]]
    })
  return Object.fromEntries(entries) as Partial<T>
}

/**
 * 指定したキーのみを抽出した新しいオブジェクトを返す
 * オブジェクトに存在しないキーは無視される
 * MEMO: カンマを含むジェネリクス付きの const アロー関数は Nuxt の auto-import に誤認されるため function 宣言とする
 * @param object 対象のオブジェクト
 * @param paths 抽出するキーの配列
 * @returns 抽出後の新しいオブジェクト
 */
export function pick<T extends object, K extends keyof T>(object: T, paths: readonly K[]): Pick<T, K>
export function pick<T extends object>(object: T, paths: readonly PropertyKey[]): Partial<T>
export function pick<T extends object>(object: T, paths: readonly PropertyKey[]): Partial<T> {
  const source = object as Record<PropertyKey, unknown>
  const result: Record<PropertyKey, unknown> = {}
  paths.forEach((key) => {
    if (key in object) {
      result[key] = source[key]
    }
  })
  return result as Partial<T>
}

/**
 * predicate が true を返すプロパティのみを抽出した新しいオブジェクトを返す（Type Guard 対応）
 * MEMO: カンマを含むジェネリクス付きの const アロー関数は Nuxt の auto-import に誤認されるため function 宣言とする
 * @param object 対象のオブジェクト
 * @param predicate 値と key を受け取り判定結果を返す関数
 * @returns 抽出後の新しいオブジェクト
 */
export function pickBy<T extends object, S extends T[keyof T]>(
  object: T,
  predicate: (value: T[keyof T], key: string) => value is S
): Record<string, S>
export function pickBy<T extends object>(object: T, predicate: (value: T[keyof T], key: string) => boolean): Partial<T>
export function pickBy<T extends object>(
  object: T,
  predicate: (value: T[keyof T], key: string) => boolean
): Partial<T> {
  const entries = Object.entries(object).filter(([key, value]) => {
    return predicate(value as T[keyof T], key)
  })
  return Object.fromEntries(entries) as Partial<T>
}

/**
 * predicate が true を返すプロパティを除外した新しいオブジェクトを返す（Type Guard 対応）
 * MEMO: カンマを含むジェネリクス付きの const アロー関数は Nuxt の auto-import に誤認されるため function 宣言とする
 * @param object 対象のオブジェクト
 * @param predicate 値と key を受け取り判定結果を返す関数
 * @returns 除外後の新しいオブジェクト
 */
export function omitBy<T extends object, S extends T[keyof T]>(
  object: T,
  predicate: (value: T[keyof T], key: string) => value is S
): Partial<{ [K in keyof T]: Exclude<T[K], S> }>
export function omitBy<T extends object>(object: T, predicate: (value: T[keyof T], key: string) => boolean): Partial<T>
export function omitBy<T extends object>(
  object: T,
  predicate: (value: T[keyof T], key: string) => boolean
): Partial<T> {
  const entries = Object.entries(object).filter(([key, value]) => {
    return !predicate(value as T[keyof T], key)
  })
  return Object.fromEntries(entries) as Partial<T>
}

/**
 * 再帰的なマージが可能な値（配列または plain object）であるか判定する
 * @param value 対象の要素
 * @returns 判定結果
 */
const isMergeable = (value: unknown): value is object => {
  return Array.isArray(value) || isPlainObject(value)
}

/**
 * source のプロパティを object へ再帰的にマージする
 * customizer が undefined 以外を返した場合はその値を採用し、
 * undefined を返した場合は配列・plain object を再帰的にマージする
 * 注意: lodash の mergeWith と同様、第1引数 object を破壊的に変更する
 * MEMO: カンマを含むジェネリクス付きの const アロー関数は Nuxt の auto-import に誤認されるため function 宣言とする
 * @param object マージ先のオブジェクト（破壊的に変更される）
 * @param source マージ元のオブジェクト
 * @param customizer マージ方法をカスタマイズする関数
 * @returns マージ後の object
 */
export function mergeWith<T extends object, S extends object>(
  object: T,
  source: S,
  customizer: (objValue: unknown, srcValue: unknown, key: string) => unknown
): T & S {
  const target = object as Record<string, unknown>
  Object.entries(source).forEach(([key, srcValue]) => {
    const objValue = target[key]
    const customized = customizer(objValue, srcValue, key)
    if (!isUndefined(customized)) {
      target[key] = customized
      return
    }
    if (isMergeable(objValue) && isMergeable(srcValue)) {
      mergeWith(objValue, srcValue, customizer)
      return
    }
    if (!isUndefined(srcValue)) {
      target[key] = srcValue
    }
  })
  return object as T & S
}
