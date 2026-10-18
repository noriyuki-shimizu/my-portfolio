import type { AppFetchResponse, FetchRawParameters } from '#shared/types/business/http/rest'
import {
  convertAppFetchResponse,
  createCommonFetchOption,
  generateRequestHashKey,
  getCacheValue,
  getCommonApiHeader
} from '@/functions/business/http/rest'

/** Rest API 用の fetch 関数定義 */
export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      /**
       * Nuxt Server API 用の fetch 関数
       * @see $fetch.raw
       * @param request - Fetch request
       * @param options - Fetch options
       * @returns Client Front が扱うレスポンスデータ
       */
      restNuxtServerApi: async <T = object>(
        request: FetchRawParameters<T>[0],
        options?: FetchRawParameters<T>[1]
      ): Promise<AppFetchResponse<T>> => {
        const commonFetchOption = createCommonFetchOption(options)
        const fetchOption: FetchRawParameters<T, string>[1] = {
          ...commonFetchOption,
          headers: {
            ...commonFetchOption?.headers,
            ...getCommonApiHeader()
          }
        }

        if (options?.isCache === true) {
          const requestHashKey = await generateRequestHashKey(request)
          return nuxtApp.runWithContext(() => {
            return getCacheValue<T>(requestHashKey, $fetch, { request, options: fetchOption })
          })
        }

        const response = await $fetch.raw<T>(request, fetchOption)
        return convertAppFetchResponse(response)
      }
    }
  }
})
