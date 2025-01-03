'use server'

import { Photo, Video } from '@/types/media'

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
      const url = `${process.env.SERVER_API_URL}/article/wizphotolist${category}page?itemCount=${limit}&pageNum=${currentPage}&startDate=${startDate}&endDate=${endDate}`
      const response = await fetch(url)
      const result = await response.json()
      return result.data.list as Photo[]
    } else {
      const url = `${process.env.SERVER_API_URL}/article/wizphotolist${category}page?searchWord=${query}&itemCount=${limit}&pageNum=${currentPage}`
      const response = await fetch(url)
      const result = await response.json()
      return result.data.list as Photo[]
    }
  } catch (error: unknown) {
    console.log(error)
  }
}

export async function getVideoList(
  offset: number,
  limit: number,
  query?: string,
) {
  try {
    const currentPage = Math.floor(offset / limit) + 1
    const url = `${process.env.SERVER_API_URL}/article/wizhighlightlistpage?searchWord=${query}&itemCount=${limit}&pageNum=${currentPage}`
    const response = await fetch(url)
    const result = await response.json()
    return result.data.list as Video[]
  } catch (error: unknown) {
    console.log(error)
  }
}

export async function getPopularVideoList() {
  try {
    const url = `${process.env.SERVER_API_URL}/article/wizhighlight_top3`
    const response = await fetch(url)
    const result = await response.json()
    return result.top3 as Video[]
  } catch (error: unknown) {
    console.log(error)
  }
}

export async function getVideoDetail(videoId: number) {
  try {
    const url = `${process.env.SERVER_API_URL}/article/wizhighlightdetail?artcSeq=${videoId}`
    const response = await fetch(url)
    const result = await response.json()
    return result.data.article as Video
  } catch (error: unknown) {
    console.log(error)
  }
}
