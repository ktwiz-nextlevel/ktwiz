import { LoadingSkeleton } from '@/components/board/loading-skeleton'
import PostDetailWrapper from '@/components/board/post-detail-wrapper'
import Pagination from '@/components/common/pagination'
import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'
import { fetchCommentsPages } from '@/services/post-service'
import { Suspense } from 'react'

export async function generateMetadata({
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

  return {
    title: `게시판  ${postId} 세부 정보 `,
    description: ` ${currentPage} 페이지에 해당하는 게시판 목록입니다. 게시글 별로 제목, 작성자,작성일, 조회수를 살펴볼 수 있어요!`,
  }
}
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
  const totalPages = await fetchCommentsPages(postId)

  return (
    <div className="flex w-full space-x-8 px-10 pb-16">
      <div className="mx-auto max-w-[1100px] flex-1">
        <div className="mt-[50px] flex w-full justify-end">
          <Breadcrumbs pages={['HOME', 'FAN', '팬 소통공간']} />
        </div>
        <Suspense fallback={<LoadingSkeleton />}>
          <PostDetailWrapper postId={postId} currentPage={currentPage} />
        </Suspense>
        {totalPages && <Pagination totalPages={totalPages} />}
      </div>
    </div>
  )
}
