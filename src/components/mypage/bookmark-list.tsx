'use client'

import { BookmarkListItem } from '@/types/media'
import { useRouter } from 'next/navigation'
import ClientImageFallback from '../media/common/client-image-fallback'

interface BookmarkListProps {
  bookmarks: BookmarkListItem[]
}

export default function BookmarkList({ bookmarks }: BookmarkListProps) {
  const router = useRouter()

  return (
    <div className="py-7">
      <div className="grid min-h-[480px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {bookmarks.map((bookmark: BookmarkListItem) => (
          <div
            key={bookmark.id}
            className="flex cursor-pointer flex-col overflow-hidden"
            onClick={() => router.push(`/media/highlight/${bookmark.videoId}`)}
          >
            <div className="relative pt-[56.25%]">
              <ClientImageFallback
                src={bookmark.videoThumbnail}
                alt={`post-image-${bookmark.id}`}
                fallbackSrc="/images/fallback-img.png"
                fill
                className="rounded-xl object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
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
