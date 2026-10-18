import camelcaseKeys from 'camelcase-keys'
import { consola } from 'consola'
import snakecaseKeys from 'snakecase-keys'
import { DATE_TIME_YYYYMMDDHHMMSS_COLON } from '#shared/constants/common/date'
import { STATUS_CODE_NO_CONTENT } from '#shared/constants/common/statusCode'
import type { AccessLogRequestBody } from '#shared/types/business/access-log/http'

/**
 * アクセスログの送信 API
 */
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  consola.level = config.public.logLevel
  const rawBody = await readBody(event)

  if (!isPlainObject(rawBody)) {
    setResponseStatus(event, STATUS_CODE_NO_CONTENT)
    return
  }

  const body: AccessLogRequestBody = camelcaseKeys(rawBody, { deep: true })

  consola.log(
    JSON.stringify({
      id: getHeader(event, 'x-amzn-trace-id'),
      time: getCurrentDayjsUtc().format(DATE_TIME_YYYYMMDDHHMMSS_COLON),
      'x-forwarded-for': getHeader(event, 'x-forwarded-for'),
      'user-agent': getHeader(event, 'user-agent'),
      ...snakecaseKeys(body, { deep: true })
    })
  )

  setResponseStatus(event, STATUS_CODE_NO_CONTENT)
})
