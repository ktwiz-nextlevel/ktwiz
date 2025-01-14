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

export async function getPopularVideoList() {
  const url = '/article/wizhighlight_top3'
  const response = await http.get<PopularVideoResponse>(url)
  return response.data.top3
}

export async function getVideoDetail(videoId: number) {
  const url = `/article/wizhighlightdetail`
  const response = await http.get<VideoDetailResponse>(url, {
    searchParams: { artcSeq: `${videoId}` },
  })
  return response.data.data.article
}

export async function getMainVideoList() {
  const url = '/media/highlightlist'
  const response = await http.get<VideoResponse>(url, {
    searchParams: { count: '5' },
  })
  return response.data.data.list
}

export async function getMainPhotoList() {
  const url = '/media/photolist'
  const response = await http.get<PhotoResponse>(url, {
    searchParams: { count: '12' },
  })
  return response.data.data.list
}
