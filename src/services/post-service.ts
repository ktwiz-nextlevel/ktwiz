import { PostListItem } from '@/types'
import { createClient } from '@/utils/supabase/server'

export async function fetchPostsPages(query: string): Promise<number | null> {
  try {
    const limit = 10
    const supabase = await createClient()
    const { count, error } = await supabase
      .from('posts')
      .select('id', { count: 'exact', head: true })
      .or(`title.ilike.%${query}%,content.ilike.%${query}%`)
    if (error) {
      throw new Error(`Error fetching posts: ${error.message}`)
    }
    if (!count) {
      return null
    }
    const totalPages = Math.ceil(count / limit)
    return totalPages
  } catch (error) {
    console.error(error)
    return null
  }
}

export async function fetchFilteredPost(
  query: string,
  currentPage: number,
  type: 'title' | 'content',
): Promise<PostListItem[] | null> {
  try {
    const limit = 10
    const offset = (currentPage - 1) * limit
    const supabase = await createClient()
    const columnToSearch = type === 'title' ? 'title' : 'content'
    const { data, error } = await supabase
      .from('posts')
      .select(
        `
        id,
        user_id,
        title,
        content,
        created_at,
        view_count,
        author
      `,
      )
      .ilike(columnToSearch, `%${query}%`)
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)

    if (error) {
      throw new Error(`Error fetching posts: ${error.message}`)
    }
    if (!data) {
      return null
    }

    const clientData: PostListItem[] = data.map((post) => ({
      id: post.id,
      userId: post.user_id,
      title: post.title,
      content: post.content,
      createdAt: new Date(post.created_at).toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      }),
      viewCount: post.view_count,
      author: post.author,
    }))

    return clientData
  } catch (error) {
    console.error(error)
    return null
  }
}
