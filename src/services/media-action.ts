'use server'

import { Photo, Video } from '@/types/media'
import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

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
      const url = `${process.env.NEXT_PUBLIC_API_SERVER_URL}/article/wizphotolist${category}page?itemCount=${limit}&pageNum=${currentPage}&startDate=${startDate}&endDate=${endDate}`
      const response = await fetch(url)
      const result = await response.json()
      return result.data.list as Photo[]
    } else {
      const url = `${process.env.NEXT_PUBLIC_API_SERVER_URL}/article/wizphotolist${category}page?searchWord=${query}&itemCount=${limit}&pageNum=${currentPage}`
      const response = await fetch(url)
      const result = await response.json()
      return result.data.list as Photo[]
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
    const url = `${process.env.NEXT_PUBLIC_API_SERVER_URL}/article/wizhighlightlistpage?searchWord=${query}&itemCount=${limit}&pageNum=${currentPage}`
    const response = await fetch(url)
    const result = await response.json()
    return result.data.list as Video[]
  } catch (error: unknown) {
    console.log(error)
    throw new Error(`An error happened: ${error}`)
  }
}

export async function getPopularVideoList() {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_SERVER_URL}/article/wizhighlight_top3`
    const response = await fetch(url)
    const result = await response.json()
    return result.top3 as Video[]
  } catch (error: unknown) {
    console.log(error)
    throw new Error(`An error happened: ${error}`)
  }
}

export async function getVideoDetail(videoId: number) {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_SERVER_URL}/article/wizhighlightdetail?artcSeq=${videoId}`
    const response = await fetch(url)
    const result = await response.json()
    return result.data.article as Video
  } catch (error: unknown) {
    console.log(error)
    throw new Error(`An error happened: ${error}`)
  }
}

export async function addBookmark(
  videoId: number,
  videoTitle: string,
  videoThumbnail: string,
  videoReg: number,
) {
  const supabase = await createClient()
  const { data: userData, error: userError } = await supabase.auth.getUser()
  if (userError || !userData?.user) {
    return { message: '로그인이 필요합니다' }
  }
  const userId = userData.user.id

  const { error: bookmarkError } = await supabase.from('bookmarks').insert([
    {
      user_id: userId,
      video_id: videoId,
      video_title: videoTitle,
      video_thumbnail: videoThumbnail,
      video_reg: videoReg,
    },
  ])

  if (bookmarkError) {
    return { message: '북마크 저장에 실패했습니다' }
  }
  revalidatePath(`/media/highlight/${videoId}`)
}

export async function checkBookmarked(videoId: number) {
  const supabase = await createClient()
  const { data: userData, error: userError } = await supabase.auth.getUser()
  if (userError || !userData?.user) {
    return false
  }
  const userId = userData.user.id

  const { data, error } = await supabase
    .from('bookmarks')
    .select('id')
    .match({ user_id: userId, video_id: videoId })
    .limit(1)

  if (error) {
    console.error('Error fetching bookmark status:', error)
    return false
  }
  return data && data.length > 0
}

export async function removeBookmark(videoId: number) {
  const supabase = await createClient()

  const { data: userData, error: userError } = await supabase.auth.getUser()
  if (userError || !userData?.user) {
    return { message: '로그인이 필요합니다' }
  }
  const userId = userData.user.id

  const { error: bookmarkError } = await supabase
    .from('bookmarks')
    .delete()
    .match({ user_id: userId, video_id: videoId })

  if (bookmarkError) {
    return { message: '북마크 삭제에 실패했습니다' }
  }
  revalidatePath(`/media/highlight/${videoId}`)
}
