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
        <TabMenu tabs={MYPAGE_BANNER_DATA['/'].tabs} />
      </Banner>
      <div className="flex w-full space-x-8 px-10 pb-16">
        <div className="mx-auto max-w-[1100px] flex-1">
          <div className="mt-[50px] flex w-full justify-end pb-6">
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
    </div>
  )
}
