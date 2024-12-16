import BoardSearchBar from '@/components/board/board-search-bar'
import { CreatePost } from '@/components/board/post-buttons'
import PostCard from '@/components/board/post-card'
import { Banner } from '@/components/common/banner'
import Pagination from '@/components/common/pagination'
import TabMenu from '@/components/common/tab-menu2'
import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'
import { FAN_BANNER_DATA } from '@/contants'

export default async function FanBoardPage() {
  const totalPages = 10
  return (
    <div className="w-full">
      <Banner {...FAN_BANNER_DATA['/']}>
        <TabMenu tabs={FAN_BANNER_DATA['/'].tabs} />
      </Banner>
      <div className="mx-auto h-full w-[1100px]">
        <div className="mt-[50px] flex w-full justify-between">
          <BoardSearchBar />
          <Breadcrumbs pages={['HOME', 'FAN', '팬 소통공간']} />
        </div>
        <PostCard />
        {totalPages && <Pagination totalPages={totalPages} />}
        <div className="flex justify-end py-4">
          <CreatePost />
        </div>
      </div>
    </div>
  )
}
