import { isUndefined } from './lang'

/**
 * 関数を渡さない場合は引数をそのまま返す identity 関数を返す
 * @returns 引数をそのまま返す関数
 */
export function flowRight(): <T>(value: T) => T
/**
 * 与えられた関数を右から左へ合成した関数を返す
 * @param f1 合成する関数
 * @returns 合成後の関数
 */
export function flowRight<A extends unknown[], R1>(f1: (...args: A) => R1): (...args: A) => R1
/**
 * 与えられた関数を右から左へ合成した関数を返す
 * @param f2 合成する関数
 * @param f1 合成する関数
 * @returns 合成後の関数
 */
export function flowRight<A extends unknown[], R1, R2>(f2: (arg: R1) => R2, f1: (...args: A) => R1): (...args: A) => R2
/**
 * 与えられた関数を右から左へ合成した関数を返す
 * @param f3 合成する関数
 * @param f2 合成する関数
 * @param f1 合成する関数
 * @returns 合成後の関数
 */
export function flowRight<A extends unknown[], R1, R2, R3>(
  f3: (arg: R2) => R3,
  f2: (arg: R1) => R2,
  f1: (...args: A) => R1
): (...args: A) => R3
/**
 * 与えられた関数を右から左へ合成した関数を返す
 * @param f4 合成する関数
 * @param f3 合成する関数
 * @param f2 合成する関数
 * @param f1 合成する関数
 * @returns 合成後の関数
 */
export function flowRight<A extends unknown[], R1, R2, R3, R4>(
  f4: (arg: R3) => R4,
  f3: (arg: R2) => R3,
  f2: (arg: R1) => R2,
  f1: (...args: A) => R1
): (...args: A) => R4
/**
 * 与えられた関数を右から左へ合成した関数を返す（5つ以上の関数に対応）
 * @param funcs 合成する関数群
 * @returns 合成後の関数
 */
export function flowRight(...funcs: Array<(...args: unknown[]) => unknown>): (...args: unknown[]) => unknown
/**
 * 与えられた関数を右から左へ合成した関数を返す
 * 例: flowRight(f, g, h)(x) は f(g(h(x))) と等価
 * @param funcs 合成する関数群
 * @returns 合成後の関数
 */
export function flowRight(...funcs: Array<(...args: unknown[]) => unknown>): (...args: unknown[]) => unknown {
  const [first, ...rest] = [...funcs].reverse()
  return (...args: unknown[]): unknown => {
    if (isUndefined(first)) {
      return args.at(0)
    }
    return rest.reduce(
      (accumulator, func) => {
        return func(accumulator)
      },
      first(...args)
    )
  }
}
