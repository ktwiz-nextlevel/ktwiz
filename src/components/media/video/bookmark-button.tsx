'use client'

import { addBookmark, removeBookmark } from '@/services/bookmark-action'
import { BookmarkIcon as SolidBookmarkIcon } from '@heroicons/react/20/solid'
import { BookmarkIcon as OutlineBookmarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

export default function BookmarkButton({
  videoId,
  videoTitle,
  videoThumbnail,
  videoReg,
  isBookmarked,
}: {
  videoId: number
  videoTitle: string
  videoThumbnail: string
  videoReg: number
  isBookmarked: boolean
}) {
  const handleClick = async () => {
    if (isBookmarked) {
      const removeResult = await removeBookmark(videoId)
      if (removeResult && removeResult.message) {
        alert(removeResult.message)
        return
      }
      alert('북마크에서 삭제되었습니다.')
    } else {
      const result = await addBookmark(
        videoId,
        videoTitle,
        videoThumbnail,
        videoReg,
      )
      if (result && result.message) {
        alert(result.message)
        return
      }
      alert('북마크에 저장되었습니다.')
    }
  }

  return (
    <button
      onClick={handleClick}
      className={clsx(
        'flex w-44 items-center justify-center px-4 py-2 text-xs text-white lg:text-sm',
        {
          'bg-[--main-red-color] hover:bg-red-800': isBookmarked,
          'bg-[--black-color-600] hover:bg-gray-500': !isBookmarked,
        },
      )}
    >
      {isBookmarked ? (
        <SolidBookmarkIcon className="mr-2 h-4 w-4" />
      ) : (
        <OutlineBookmarkIcon className="mr-2 h-4 w-4" />
      )}
      {isBookmarked ? '북마크에 저장됨' : '북마크에 저장하기'}
    </button>
  )
}
