/** isEmpty がオブジェクトを空と判定したときに絞り込む型 */
type EmptyObject<T extends object> = { [K in keyof T]?: never }

/** EmptyObject が T へ代入可能なときのみ採用する型 */
type EmptyObjectOf<T extends object> = EmptyObject<T> extends T ? EmptyObject<T> : never

/** Object#toString の plain object 判定値 */
const OBJECT_TAG = '[object Object]'

/** Function.prototype.toString への参照 */
const funcToString = Function.prototype.toString

/** Object.prototype.hasOwnProperty への参照 */
const hasOwnProperty = Object.prototype.hasOwnProperty

/** ネイティブ Object コンストラクタの文字列表現 */
const objectCtorString = funcToString.call(Object)

/**
 * 配列が空であるかどうかを判定する
 * @param arr - 判定する配列
 * @returns 配列が空の場合に true を返す
 */
export const isEmptyArray = <T extends unknown[]>(arr: T): boolean => {
  return Array.isArray(arr) && arr.length === 0
}

/**
 * 与えられた値が undefined であるか判定する
 * @param value 対象の要素
 * @returns 判定結果
 */
export const isUndefined = (value: unknown): value is undefined => {
  return value === undefined
}

/**
 * 与えられた値が null であるか判定する
 * @param value 対象の要素
 * @returns 判定結果
 */
export const isNull = (value: unknown): value is null => {
  return value === null
}

/**
 * 与えられた値が undefined ではないか判定する
 * @param value 対象の要素
 * @returns 判定結果
 */
export const isNotUndefined = <T>(value: T | undefined): value is T => {
  return !isUndefined(value)
}

/**
 * 与えられた値が null または undefined であるか判定する
 * @param value 対象の要素
 * @returns 判定結果
 */
export const isNil = (value: unknown): value is null | undefined => {
  return value == null
}

/**
 * 与えられた値が文字列であるか判定する
 * @param value 対象の要素
 * @returns 判定結果
 */
export const isString = (value: unknown): value is string => {
  return typeof value === 'string'
}

/**
 * 与えられた値が数値であるか判定する
 * @param value 対象の要素
 * @returns 判定結果
 */
export const isNumber = (value: unknown): value is number => {
  return typeof value === 'number'
}

/**
 * 与えられた値が真偽値であるか判定する
 * @param value 対象の要素
 * @returns 判定結果
 */
export const isBoolean = (value: unknown): value is boolean => {
  return typeof value === 'boolean'
}

/**
 * 与えられた値が関数であるか判定する
 * - class などの非 callable な値も typeof で function となるため、callable を保証しない Function へ絞り込む
 * @param value 対象の要素
 * @returns 判定結果
 */
export const isFunction = (
  value: unknown
): value is (...args: unknown[]) => unknown | (new(...args: unknown[]) => unknown) => {
  return typeof value === 'function'
}

/**
 * 与えられた値がオブジェクトであるか判定する
 * @param value 対象の要素
 * @returns 判定結果
 */
export const isObject = (value: unknown): value is object => {
  const type = typeof value
  return value != null && (type == 'object' || type == 'function')
}

/**
 * 与えられた値が plain object（Object コンストラクタで生成されたオブジェクト、
 * もしくは [[Prototype]] が null のオブジェクト）であるか判定する
 * @see https://github.com/lodash/lodash/blob/main/src/isPlainObject.ts
 * @param value 対象の要素
 * @returns 判定結果
 */
export const isPlainObject = (value: unknown): boolean => {
  if (!isObject(value) || Object.prototype.toString.call(value) !== OBJECT_TAG) {
    return false
  }
  const proto = Object.getPrototypeOf(value)
  if (proto === null) {
    return true
  }
  const hasOwnConstructor = hasOwnProperty.call(proto, 'constructor')
  if (!hasOwnConstructor) {
    return false
  }
  const ctor = (proto as Record<'constructor', unknown>).constructor
  return typeof ctor === 'function' && ctor instanceof ctor && funcToString.call(ctor) === objectCtorString
}

/**
 * 与えられた値が空であるか判定する
 * - null / undefined の場合は true
 * - 文字列・配列の場合は length が 0 のとき true
 * - Map / Set の場合は size が 0 のとき true
 * - オブジェクトの場合は Object.keys で取得できる自身のプロパティを持たないとき true
 * - 上記以外（boolean / number など）は true
 * @param value 対象の要素
 * @returns 判定結果
 */
export function isEmpty(value: string): value is ''
export function isEmpty(value: Map<unknown, unknown> | Set<unknown> | readonly unknown[] | null | undefined): boolean
export function isEmpty<T extends object>(value: T | null | undefined): value is EmptyObjectOf<T> | null | undefined
export function isEmpty(value?: unknown): boolean
export function isEmpty(value?: unknown): boolean {
  if (isNil(value)) {
    return true
  }
  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length === 0
  }
  if (value instanceof Map || value instanceof Set) {
    return value.size === 0
  }
  if (isObject(value)) {
    return Object.keys(value).length === 0
  }
  return true
}

/**
 * 2つの値が同値（SameValueZero: NaN 同士も等しいとみなす）であるか判定する
 * @param value 比較する値
 * @param other 比較する値
 * @returns 判定結果
 */
const isSameValueZero = (value: unknown, other: unknown): boolean => {
  return value === other || (Number.isNaN(value) && Number.isNaN(other))
}

/**
 * 2つの値が深い等価（deep equal）であるか判定する
 * - プリミティブは SameValueZero（NaN 同士は等しい）で比較する
 * - 配列は長さと各要素を再帰的に比較する
 * - Date は時刻、RegExp は文字列表現で比較する
 * - boxed primitive（Number / String / Boolean のラッパー）は valueOf の値で比較する
 * - Error は name と message で比較する
 * - Map はキーを参照（SameValueZero）で照合し、対応する値を再帰的に比較する。Set は要素の参照（SameValueZero）で比較する
 * - オブジェクトは自身の列挙可能なプロパティを再帰的に比較する
 * - 関数は参照一致のみ等価とみなす（異なる関数同士は常に false）
 * - 循環参照を含むオブジェクトには非対応（無限再帰となるため呼び出し側で渡さないこと）
 * @param value 比較する値
 * @param other 比較する値
 * @returns 判定結果
 */
export const isEqual = (value: unknown, other: unknown): boolean => {
  if (isSameValueZero(value, other)) {
    return true
  }
  if (!isObject(value) || !isObject(other)) {
    return false
  }
  if (isFunction(value) || isFunction(other)) {
    return false
  }
  if (Object.prototype.toString.call(value) !== Object.prototype.toString.call(other)) {
    return false
  }
  if (Array.isArray(value) && Array.isArray(other)) {
    return (
      value.length === other.length
      && value.every((item, index) => {
        return isEqual(item, other.at(index))
      })
    )
  }
  if (value instanceof Date && other instanceof Date) {
    return value.getTime() === other.getTime()
  }
  if (value instanceof RegExp && other instanceof RegExp) {
    return value.toString() === other.toString()
  }
  if (value instanceof Number && other instanceof Number) {
    return isSameValueZero(value.valueOf(), other.valueOf())
  }
  if (value instanceof String && other instanceof String) {
    return value.valueOf() === other.valueOf()
  }
  if (value instanceof Boolean && other instanceof Boolean) {
    return value.valueOf() === other.valueOf()
  }
  if (value instanceof Error && other instanceof Error) {
    return value.name === other.name && value.message === other.message
  }
  if (value instanceof Map && other instanceof Map) {
    return (
      value.size === other.size
      && [...value.entries()].every(([key, item]) => {
        return other.has(key) && isEqual(item, other.get(key))
      })
    )
  }
  if (value instanceof Set && other instanceof Set) {
    return (
      value.size === other.size
      && [...value].every((item) => {
        return other.has(item)
      })
    )
  }
  const valueKeys = Object.keys(value)
  const otherKeys = Object.keys(other)
  return (
    valueKeys.length === otherKeys.length
    && valueKeys.every((key) => {
      return (
        hasOwnProperty.call(other, key)
        && isEqual((value as Record<string, unknown>)[key], (other as Record<string, unknown>)[key])
      )
    })
  )
}
