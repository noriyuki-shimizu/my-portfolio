/** ブラケット記法のインデックス（例: `[0]`）を抽出する正規表現 */
export const BRACKET_INDEX_REGEX = /\[([^[\]]+)\]/g

/** 全角数字にマッチする正規表現 */
export const FULL_WIDTH_DIGITS_REGEX = /[０-９]/g

/** 正規表現の特殊文字にマッチする正規表現 */
export const REG_EXP_SPECIAL_CHARS_REGEX = /[.*+?^${}()|[\]\\]/g

/** 連続する大文字と、それに続く「大文字 + 小文字」の境界にマッチする正規表現 */
export const UPPER_SEQUENCE_BOUNDARY_REGEX = /([A-Z]+)([A-Z][a-z])/g

/** 小文字から大文字への境界にマッチする正規表現 */
export const LOWER_TO_UPPER_BOUNDARY_REGEX = /([a-z])([A-Z])/g

/** 英字から数字への境界にマッチする正規表現 */
export const LETTER_TO_DIGIT_BOUNDARY_REGEX = /([a-zA-Z])([0-9])/g

/** 数字から英字への境界にマッチする正規表現 */
export const DIGIT_TO_LETTER_BOUNDARY_REGEX = /([0-9])([a-zA-Z])/g

/** 連続する英数字以外の文字にマッチする正規表現 */
export const NON_ALPHANUMERIC_SEQUENCE_REGEX = /[^a-zA-Z0-9]+/g

/** 文字列の先頭・末尾のハイフンにマッチする正規表現 */
export const EDGE_HYPHENS_REGEX = /^-+|-+$/g
