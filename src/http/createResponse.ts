import type { KyResponse } from 'ky'
import { ApiSuccessResponse } from './type'

export const createResponse = async <T>(
  response: KyResponse<T>,
): Promise<ApiSuccessResponse<T>> => {
  const data = await response.json()
  return {
    success: true,
    data: data,
    status: response.status,
    response: response,
  }
}
