import { http } from '@/http'
import {
  PhotoResponse,
  PopularVideoResponse,
  VideoDetailResponse,
  VideoResponse,
} from '@/types/media'

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
