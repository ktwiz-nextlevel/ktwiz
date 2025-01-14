import { http } from '@/http'
import {
  PhotoResponse,
  PopularVideoResponse,
  VideoDetailResponse,
  VideoResponse,
} from '@/types/media'

export async function getPhotoList(
  category: number,
  offset: number,
  limit: number,
  query?: string,
  startDate?: string,
  endDate?: string,
) {
  try {
    const currentPage = Math.floor(offset / limit) + 1
    if (startDate && endDate) {
      const url = `/article/wizphotolist${category}page?itemCount=${limit}&pageNum=${currentPage}&startDate=${startDate}&endDate=${endDate}`
      const response = await http.get<PhotoResponse>(url)
      return response.data.data.list
    } else {
      const url = `/article/wizphotolist${category}page?searchWord=${query}&itemCount=${limit}&pageNum=${currentPage}`
      const response = await http.get<PhotoResponse>(url)
      return response.data.data.list
    }
  } catch (error: unknown) {
    console.log(error)
    throw new Error(`An error happened: ${error}`)
  }
}

export async function getVideoList(
  offset: number,
  limit: number,
  query?: string,
) {
  try {
    const currentPage = Math.floor(offset / limit) + 1
    const url = `/article/wizhighlightlistpage?searchWord=${query}&itemCount=${limit}&pageNum=${currentPage}`
    const response = await http.get<VideoResponse>(url)
    return response.data.data.list
  } catch (error: unknown) {
    console.log(error)
    throw new Error(`An error happened: ${error}`)
  }
}

export async function getPopularVideoList() {
  try {
    const url = '/article/wizhighlight_top3'
    const response = await http.get<PopularVideoResponse>(url)
    return response.data.top3
  } catch (error: unknown) {
    console.log(error)
    throw new Error(`An error happened: ${error}`)
  }
}

export async function getVideoDetail(videoId: number) {
  try {
    const url = `/article/wizhighlightdetail?artcSeq=${videoId}`
    const response = await http.get<VideoDetailResponse>(url)
    return response.data.data.article
  } catch (error: unknown) {
    console.log(error)
    throw new Error(`An error happened: ${error}`)
  }
}

export async function getMainVideoList() {
  try {
    const url = '/media/highlightlist?count=5'
    const response = await http.get<VideoResponse>(url)
    return response.data.data.list
  } catch (error: unknown) {
    console.log(error)
    throw new Error(`An error happened: ${error}`)
  }
}

export async function getMainPhotoList() {
  try {
    const url = '/media/photolist?count=12'
    const response = await http.get<PhotoResponse>(url)
    return response.data.data.list
  } catch (error: unknown) {
    console.log(error)
    throw new Error(`An error happened: ${error}`)
  }
}
