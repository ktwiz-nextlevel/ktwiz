import { fetchFilteredPost } from '@/services/post-service'
import PostCard from './post-card'

interface PostCardWrapperProps {
  query: string
  currentPage: number
  type: 'title' | 'content'
}

export default async function PostCardWrapper({
  query,
  currentPage,
  type,
}: PostCardWrapperProps) {
  const postData = await fetchFilteredPost(query, currentPage, type)

  return (
    <>
      <PostCard posts={postData} />
    </>
  )
}
