import { PostDetail, PostListItem } from '@/types'
import { createClient } from '@/utils/supabase/server'

const POSTS_PER_PAGE = 10
const COMMENTS_PER_PAGE = 5

export async function fetchPostsPages(query: string): Promise<number | null> {
  try {
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
    const totalPages = Math.ceil(count / POSTS_PER_PAGE)
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
    const offset = (currentPage - 1) * POSTS_PER_PAGE
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
      .range(offset, offset + POSTS_PER_PAGE - 1)

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

export async function fetchCommentsPages(
  postId: number,
): Promise<number | null> {
  const supabase = await createClient()
  try {
    const { count, error } = await supabase
      .from('comments')
      .select('id', { count: 'exact', head: true })
      .eq('post_id', postId)

    if (error) {
      throw new Error(`Error fetching comments: ${error.message}`)
    }
    if (!count) {
      return null
    }
    const totalPages = Math.ceil(count / COMMENTS_PER_PAGE)
    return totalPages
  } catch (error) {
    console.error('Unexpected error:', error)
    return null
  }
}

export async function fetchPostById(
  postId: number,
  currentPage: number,
): Promise<PostDetail | null> {
  try {
    const supabase = await createClient()
    const { data: postData, error: postError } = await supabase
      .from('posts')
      .select(
        `
        id,
        user_id,
        title,
        content,
        created_at,
        view_count,
        author,
        images (
          image_url
        ),
        comments (
          id,
          post_id,
          user_id,
          content,
          created_at,
          author
        )
      `,
      )
      .eq('id', postId)
      .single()

    if (postError) {
      throw new Error(`Error fetching post: ${postError.message}`)
    }

    if (!postData) {
      return null
    }

    const { error: viewError } = await supabase
      .from('posts')
      .update({ view_count: postData.view_count + 1 })
      .eq('id', postId)

    if (viewError) {
      throw new Error(`Error updating view count: ${viewError.message}`)
    }

    const offset = (currentPage - 1) * COMMENTS_PER_PAGE
    const { data: commentsData, error: commentsError } = await supabase
      .from('comments')
      .select(
        `
        id,
        post_id,
        user_id,
        content,
        created_at,
        author
      `,
      )
      .eq('post_id', postId)
      .order('created_at', { ascending: false })
      .range(offset, offset + COMMENTS_PER_PAGE - 1)

    if (commentsError) {
      throw new Error(`Error fetching comments: ${commentsError.message}`)
    }

    const clientProjectData: PostDetail = {
      id: postData.id,
      userId: postData.user_id,
      title: postData.title,
      content: postData.content,
      createdAt: new Date(postData.created_at).toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }),
      viewCount: postData.view_count + 1,
      author: postData.author,
      images: postData.images.map((image) => image.image_url),
      comments: commentsData.map((comment) => ({
        id: comment.id,
        postId: comment.post_id,
        userId: comment.user_id,
        content: comment.content,
        createdAt: new Date(comment.created_at).toLocaleDateString('ko-KR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        }),
        author: comment.author,
      })),
    }
    return clientProjectData
  } catch (error) {
    console.error(error)
    return null
  }
}
