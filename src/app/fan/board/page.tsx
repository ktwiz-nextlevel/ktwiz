import BoardSearchBar from '@/components/board/board-search-bar'
import LiveTalk from '@/components/board/live-talk'
import { CreatePost } from '@/components/board/post-buttons'
import PostCard from '@/components/board/post-card'
import Pagination from '@/components/common/pagination'
import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'
import { fetchFilteredPost, fetchPostsPages } from '@/services/post-service'
import { fetchProfile } from '@/services/user-service'

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
  const [totalPages, postData, userData] = await Promise.all([
    fetchPostsPages(query),
    fetchFilteredPost(query, currentPage, type),
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
          <PostCard posts={postData} />
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
