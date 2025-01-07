'use client'

import { BookmarkListItem } from '@/types/media'
import { useRouter } from 'next/navigation'

interface BookmarkListProps {
  bookmarks: BookmarkListItem[]
}

export default function BookmarkList({ bookmarks }: BookmarkListProps) {
  const router = useRouter()

  return (
    <div className="container mx-auto mt-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {bookmarks.map((bookmark: BookmarkListItem) => (
          <div
            key={bookmark.id}
            className="flex cursor-pointer flex-col overflow-hidden"
            onClick={() => router.push(`/media/highlight/${bookmark.videoId}`)}
          >
            <div className="relative pt-[56.25%]">
              <img
                src={bookmark.videoThumbnail || '/images/placeholder-img.png'}
                alt={`post-image-${bookmark.id}`}
                className="absolute left-0 top-0 h-full w-full rounded-xl object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-2">
              <p className="mb-1 text-sm font-semibold">
                {bookmark.videoTitle}
              </p>
              <p className="text-xs text-gray-400">
                {new Date(bookmark.videoReg).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
