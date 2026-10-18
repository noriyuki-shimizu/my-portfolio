import dayjs from 'dayjs'
import type { ConfigType, Dayjs } from 'dayjs'
import ja from 'dayjs/locale/ja.js'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter.js'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore.js'
import relativeTime from 'dayjs/plugin/relativeTime.js'
import timezone from 'dayjs/plugin/timezone.js'
import utc from 'dayjs/plugin/utc.js'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)
dayjs.extend(relativeTime)

/**
 * 日本タイムゾーン・日本語ロケール適用の dayjs を生成する
 * @returns タイムゾーンが設定されたDay.jsオブジェクト
 */
export const getCurrentDayjsJst = (): Dayjs => {
  return dayjs().tz('Asia/Tokyo').locale(ja)
}

/**
 * 日本タイムゾーン・日本語ロケール適用の dayjs を生成する
 * @param date 生成対象の日付（文字列、数値、Dateオブジェクト、Day.jsオブジェクト）
 * @returns タイムゾーンが設定されたDay.jsオブジェクト、または無効な日付の場合はnull
 */
export const createDayjsJst = (date: ConfigType): Dayjs | null => {
  if (!dayjs(date).isValid()) {
    return null
  }
  return dayjs.tz(date, 'Asia/Tokyo').locale(ja)
}

/**
 * 現在時刻を UTC に変換する
 * @returns UTCに変換されたDay.jsオブジェクト
 */
export const getCurrentDayjsUtc = (): Dayjs => {
  return dayjs.utc()
}
