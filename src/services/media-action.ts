'use server'
import { http } from '@/http'
import { PhotoResponse, VideoResponse } from '@/types/media'

export async function getPhotoList(
  category: number,
  offset: number,
  limit: number,
  query?: string,
  startDate?: string,
  endDate?: string,
) {
  const currentPage = Math.floor(offset / limit) + 1
  if (startDate && endDate) {
    const url = `/article/wizphotolist${category}page`
    const response = await http.get<PhotoResponse>(url, {
      searchParams: {
        itemCount: `${limit}`,
        pageNum: `${currentPage}`,
        startDate: `${startDate}`,
        endDate: `${endDate}`,
      },
    })
    return response.data.data.list
  } else {
    const url = `/article/wizphotolist${category}page`
    const response = await http.get<PhotoResponse>(url, {
      searchParams: {
        searchWord: `${query}`,
        itemCount: `${limit}`,
        pageNum: `${currentPage}`,
      },
    })
    return response.data.data.list
  }
}

export async function getVideoList(
  offset: number,
  limit: number,
  query?: string,
) {
  const currentPage = Math.floor(offset / limit) + 1
  const url = `/article/wizhighlightlistpage`
  const response = await http.get<VideoResponse>(url, {
    searchParams: {
      searchWord: `${query}`,
      itemCount: `${limit}`,
      pageNum: `${currentPage}`,
    },
  })
  return response.data.data.list
}
