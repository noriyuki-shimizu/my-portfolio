import {
  DIGIT_TO_LETTER_BOUNDARY_REGEX,
  EDGE_HYPHENS_REGEX,
  FULL_WIDTH_DIGITS_REGEX,
  LETTER_TO_DIGIT_BOUNDARY_REGEX,
  LOWER_TO_UPPER_BOUNDARY_REGEX,
  NON_ALPHANUMERIC_SEQUENCE_REGEX,
  REG_EXP_SPECIAL_CHARS_REGEX,
  UPPER_SEQUENCE_BOUNDARY_REGEX
} from '#shared/constants/common/regExp'
import { CHAR_CODE_OFFSET } from '#shared/constants/common/string'
import { isEmptyArray } from '#shared/utils/lang'

/**
 * 文字列内の全角数字を半角数字に変換する
 * @param originalText - 変換したい文字列
 * @returns 半角数字に変換された文字列
 */
export const formatFullWidthToHalfWidth = (originalText: string): string => {
  const formatText = (text: string): string => {
    // MEMO: 全角数字の文字コードから CHAR_CODE_OFFSET を減算して半角数字の文字コードに変換する
    return String.fromCharCode(text.charCodeAt(0) - CHAR_CODE_OFFSET)
  }

  return originalText.replace(FULL_WIDTH_DIGITS_REGEX, formatText)
}

/**
 * 文字列が空であるかどうかを判定する
 * @param value - 判定する文字列
 * @returns 文字列が空の場合に true を返す
 */
export const isEmptyString = (value: string): value is '' => {
  return typeof value === 'string' && value === ''
}

/**
 * 文字列のバイトサイズを取得
 * @param value - 取得対象の文字列
 * @returns バイト数
 */
export const calculateByteSize = (value: string): number => {
  const textEncoder = new TextEncoder()
  return textEncoder.encode(value).length
}

/**
 * 文字列の文字数を取得
 * @param value - 取得対象の文字列
 * @returns 文字数
 */
export const getCharacterCount = (value: string): number => {
  return [...value].length
}

/**
 * 文字列の先頭を大文字に変換する
 * @param value - 対象の文字列
 * @returns 先頭が大文字に変換された文字列
 */
export const capitalizeFirstLetter = (value: string): string => {
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`
}

/**
 * 文字列を区切り文字（`_`、`-`、空白）および小文字/数字→大文字、連続大文字→大文字+小文字の境界でワード分割する。
 * 連続大文字（略語）を含む UpperCamelCase（例: `URLValue` / `APIResponseCode`）にも対応する。
 * @param value - 対象の文字列
 * @returns ワード分割された文字列の配列
 */
const splitWords = (value: string): string[] => {
  return value
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .split(/[\s_-]+/)
    .filter((word) => {
      return !isEmptyString(word)
    })
}

/**
 * 文字列を lowerCamelCase に変換する。
 * snake_case / kebab-case / 空白区切り / 既存の lowerCamelCase / UpperCamelCase に対応する。
 * 区切り文字（`_`、`-`、空白）を境界として分割し、先頭ワードは小文字、以降のワードは先頭大文字で連結する。
 * @param value - 対象の文字列
 * @returns lowerCamelCase に変換された文字列
 */
export const toCamelCase = (value: string): string => {
  if (isEmptyString(value)) {
    return value
  }
  const words = splitWords(value)
  if (isEmptyArray(words)) {
    return ''
  }
  return words
    .map((word, index) => {
      const lowered = word.toLowerCase()
      return index === 0 ? lowered : capitalizeFirstLetter(lowered)
    })
    .join('')
}

/**
 * 文字列を snake_case に変換する。
 * lowerCamelCase / UpperCamelCase / kebab-case / 空白区切り / 既存の snake_case に対応する。
 * 区切り文字（`_`、`-`、空白）および小文字→大文字の境界でワード分割し、すべて小文字化して `_` で連結する。
 * @param value - 対象の文字列
 * @returns snake_case に変換された文字列
 */
export const toSnakeCase = (value: string): string => {
  if (isEmptyString(value)) {
    return value
  }
  const words = splitWords(value)
  if (isEmptyArray(words)) {
    return ''
  }
  return words
    .map((word) => {
      return word.toLowerCase()
    })
    .join('_')
}

/**
 * 正規表現の特殊文字をエスケープした文字列を返す
 * @param value - 対象の文字列
 * @returns エスケープ後の文字列
 */
export const escapeRegExp = (value: string): string => {
  return value.replace(REG_EXP_SPECIAL_CHARS_REGEX, '\\$&')
}

/**
 * 文字列をケバブケースに変換する
 * 例: 'bestPractices' → 'best-practices', 'Foo Bar' → 'foo-bar', 'add32Items' → 'add-32-items'
 * @param value - 対象の文字列
 * @returns ケバブケースに変換された文字列
 */
export const kebabCase = (value: string): string => {
  return value
    .replace(UPPER_SEQUENCE_BOUNDARY_REGEX, '$1-$2')
    .replace(LOWER_TO_UPPER_BOUNDARY_REGEX, '$1-$2')
    .replace(LETTER_TO_DIGIT_BOUNDARY_REGEX, '$1-$2')
    .replace(DIGIT_TO_LETTER_BOUNDARY_REGEX, '$1-$2')
    .replace(NON_ALPHANUMERIC_SEQUENCE_REGEX, '-')
    .replace(EDGE_HYPHENS_REGEX, '')
    .toLowerCase()
}
