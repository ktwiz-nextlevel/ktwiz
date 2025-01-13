import { isHttpError } from './error'
import type { ApiSuccessResponse } from './type'
import { createHttp } from './create-http'

const http = createHttp({ prefixUrl: process.env.NEXT_PUBLIC_API_SERVER_URL })

export { createHttp, isHttpError, http }

export type { ApiSuccessResponse }
