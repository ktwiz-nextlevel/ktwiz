import PostDetailBox from '@/components/board/post-detail-box'
import Pagination from '@/components/common/pagination'
import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'
import { fetchCommentsPages, fetchPostById } from '@/services/post-service'
import { fetchProfile } from '@/services/user-service'
import { notFound } from 'next/navigation'

export default async function BoardDetailPage({
  params,
  searchParams,
}: {
  params: {
    postId: number
  }
  searchParams: {
    page?: number
  }
}) {
  const { postId } = params
  const currentPage = Number(searchParams?.page) || 1
  const [post, totalPages, userData] = await Promise.all([
    fetchPostById(postId, currentPage),
    fetchCommentsPages(postId),
    fetchProfile(),
  ])
  if (!post) {
    notFound()
  }
  return (
    <div className="flex w-full space-x-8 px-10 pb-16">
      <div className="mx-auto max-w-[1100px] flex-1">
        <div className="mt-[50px] flex w-full justify-end">
          <Breadcrumbs pages={['HOME', 'FAN', '팬 소통공간']} />
        </div>
        <PostDetailBox post={post} userData={userData} />
        {totalPages && <Pagination totalPages={totalPages} />}
      </div>
    </div>
  )
}
