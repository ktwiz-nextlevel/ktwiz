import { ProfileDetail } from '@/types'
import { BookmarkListItem } from '@/types/media'
import { createClient } from '@/utils/supabase/server'

export async function fetchProfile(): Promise<ProfileDetail | null> {
  try {
    const supabase = await createClient()
    const { data: userData } = await supabase.auth.getUser()
    const userId = userData.user?.id
    if (!userData.user) {
      return null
    }
    const { data: memberData } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()

    if (!memberData) {
      return null
    }
    const clientData: ProfileDetail = {
      id: memberData.id,
      nickname: memberData.nickname,
      email: userData.user.email,
    }
    return clientData
  } catch (error) {
    console.error(error)
    return null
  }
}

const BOOKMARKS_PER_PAGE = 8
export async function fetchBookmarkPages(): Promise<number | null> {
  try {
    const supabase = await createClient()
    const { count, error } = await supabase
      .from('bookmarks')
      .select('id', { count: 'exact', head: true })
    if (error) {
      throw new Error(`Error fetching posts: ${error.message}`)
    }
    if (!count) {
      return null
    }
    const totalPages = Math.ceil(count / BOOKMARKS_PER_PAGE)
    return totalPages
  } catch (error) {
    console.error(error)
    return null
  }
}

export async function fetchBookmarkList(currentPage: number) {
  try {
    const offset = (currentPage - 1) * BOOKMARKS_PER_PAGE
    const supabase = await createClient()
    const { data: userData } = await supabase.auth.getUser()
    const userId = userData.user?.id
    const { data: bookmarkData } = await supabase
      .from('bookmarks')
      .select('*')
      .eq('user_id', userId)
      .range(offset, offset + BOOKMARKS_PER_PAGE - 1)

    if (!bookmarkData) {
      return []
    }
    const clientData = bookmarkData.map((data) => ({
      id: data.id,
      userId: data.user_id,
      videoId: data.video_id,
      videoTitle: data.video_title,
      videoThumbnail: data.video_thumbnail,
      videoReg: data.video_reg,
    }))
    return clientData as BookmarkListItem[]
  } catch (error) {
    console.error(error)
    return []
  }
}
