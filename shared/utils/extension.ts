import { isNil } from './lang'

/**
 * ファイル名から拡張子を取得する
 * @param fileName - 拡張子を抽出するファイル名
 * @returns ファイルの拡張子。拡張子が見つからない場合は空文字列を返す
 */
export const getExtension = (fileName: string | null | undefined): string => {
  if (isNil(fileName) || fileName === '') {
    return ''
  }
  const fileTypes = fileName.split('.')
  if (fileTypes.length <= 1) {
    return ''
  }
  return fileTypes.at(-1) ?? ''
}
