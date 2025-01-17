import { fetchPostById } from '@/services/post-service'
import { fetchProfile } from '@/services/user-service'
import PostDetailBox from './post-detail-box'
import { notFound } from 'next/navigation'

interface PostDetailWrapperProps {
  postId: number
  currentPage: number
}

export default async function PostDetailWrapper({
  postId,
  currentPage,
}: PostDetailWrapperProps) {
  const [post, userData] = await Promise.all([
    fetchPostById(postId, currentPage),
    fetchProfile(),
  ])
  if (!post) {
    notFound()
  }

  return (
    <>
      <PostDetailBox post={post} userData={userData} />
    </>
  )
}
