import Banner from '@/components/common/banner/banner'
import Pagination from '@/components/common/pagination'
import TabMenu from '@/components/common/tab-menu/tab-menu'
import BookmarkList from '@/components/mypage/bookmark-list'
import UserInfo from '@/components/mypage/user-info'
import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'
import { MYPAGE_BANNER_DATA } from '@/contants'
import {
  fetchBookmarkList,
  fetchBookmarkPages,
  fetchProfile,
} from '@/services/user-service'
import { notFound } from 'next/navigation'

export default async function MyPage({
  searchParams,
}: {
  searchParams: {
    page?: number
  }
}) {
  const currentPage = Number(searchParams?.page) || 1
  const [bookmarks, totalPages, userData] = await Promise.all([
    fetchBookmarkList(currentPage),
    fetchBookmarkPages(),
    fetchProfile(),
  ])

  if (!userData) {
    notFound()
  }

  return (
    <div className="h-full w-full">
      <Banner>
        <Banner.Heading
          title={MYPAGE_BANNER_DATA['/'].title}
          subtitle={MYPAGE_BANNER_DATA['/'].description}
        />
        {MYPAGE_BANNER_DATA['/'].tabs && (
          <TabMenu tabs={MYPAGE_BANNER_DATA['/'].tabs} />
        )}
      </Banner>
      <div className="page px-10">
        <div className="mb-10 mt-[50px] flex w-full justify-end">
          <Breadcrumbs pages={['HOME', 'MYPAGE']} />
        </div>
        <div className="border p-10">
          <p className="pb-12 font-semibold">내 정보</p>
          <UserInfo userData={userData} />
          {bookmarks && (
            <div className="mt-6">
              <p className="text-sm font-bold">북마크한 영상 목록</p>
              <BookmarkList bookmarks={bookmarks} />
            </div>
          )}
          <div className="mt-8 flex justify-center">
            {totalPages && <Pagination totalPages={totalPages} />}
          </div>
        </div>
      </div>
    </div>
  )
}
