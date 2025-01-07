'use client'
import { Video } from '@/types/media'
import { useRouter } from 'next/navigation'

interface TopVideoListProps {
  videos: Video[]
}

export default function PopularVideoList({ videos }: TopVideoListProps) {
  const router = useRouter()

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {videos.map((photo: Video, index: number) => (
        <div
          key={`${photo.artcSeq}-${index}`}
          className="flex cursor-pointer flex-col overflow-hidden"
          onClick={() => router.push(`/media/highlight/${photo.artcSeq}`)}
        >
          <div className="relative pt-[56.25%]">
            <img
              src={photo.imgFilePath}
              alt={`post-image-${photo.artcSeq}`}
              className="absolute left-0 top-0 h-full w-full rounded-xl object-cover"
              loading="lazy"
            />
          </div>
          <div className="p-2">
            <p className="mb-1 text-sm font-semibold">{photo.artcTitle}</p>
            <p className="text-xs text-gray-400">
              {new Date(photo.regDttm).toLocaleDateString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
