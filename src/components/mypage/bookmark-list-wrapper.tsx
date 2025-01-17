import { fetchBookmarkList } from '@/services/user-service'
import BookmarkList from './bookmark-list'

export default async function BookmarkListWrapper({
  currentPage,
}: {
  currentPage: number
}) {
  const bookmarks = await fetchBookmarkList(currentPage)

  return (
    <>
      {bookmarks && (
        <div className="mt-6">
          <p className="text-sm font-bold">북마크한 영상 목록</p>
          <BookmarkList bookmarks={bookmarks} />
        </div>
      )}
    </>
  )
}
