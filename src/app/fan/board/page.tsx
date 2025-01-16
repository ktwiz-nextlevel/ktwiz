import BoardSearchBar from '@/components/board/board-search-bar'
import LiveTalk from '@/components/board/live-talk'
import { LoadingSkeleton } from '@/components/board/loading-skeleton'
import { CreatePost } from '@/components/board/post-buttons'
import PostCardWrapper from '@/components/board/post-card-wrapper'
import Pagination from '@/components/common/pagination'
import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'
import { fetchPostsPages } from '@/services/post-service'
import { fetchProfile } from '@/services/user-service'
import { Metadata } from 'next'
import { Suspense } from 'react'
export const metadata: Metadata = {
  title: '게시판',
  description:
    'kt wiz의 게시판 페이지입니다. 게시글 작성과 실시간 응원톡으로 kt wiz 구단을 응원해보세요! ',
}
export default async function FanBoardPage({
  searchParams,
}: {
  searchParams: {
    query?: string
    page?: number
    type?: 'title' | 'content'
  }
}) {
  const query = searchParams?.query || ''
  const currentPage = Number(searchParams?.page) || 1
  const type = searchParams?.type || 'title'
  const [totalPages, userData] = await Promise.all([
    fetchPostsPages(query),
    fetchProfile(),
  ])

  return (
    <div className="page-large lg:px-10">
      <div className="flex justify-between space-x-16">
        <div className="page">
          <div className="mb-10 mt-[50px] flex w-full justify-between pl-4">
            <BoardSearchBar />
            <div className="hidden xl:block">
              <Breadcrumbs pages={['HOME', 'FAN', '팬 소통공간']} />
            </div>
          </div>
          <Suspense fallback={<LoadingSkeleton />}>
            <PostCardWrapper
              query={query}
              currentPage={currentPage}
              type={type}
            />
          </Suspense>
          <div className="flex items-center justify-between px-2 py-4">
            <div className="mx-auto">
              {totalPages && <Pagination totalPages={totalPages} />}
            </div>
            <CreatePost userData={userData} />
          </div>
        </div>
        <div className="hidden lg:block">
          <LiveTalk userData={userData} />
        </div>
      </div>
    </div>
  )
}
