'use client'
import { Video } from '@/types/media'
import { useRouter } from 'next/navigation'
import ClientImageFallback from '../common/client-image-fallback'

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
            <ClientImageFallback
              src={photo.imgFilePath}
              alt={`post-image-${photo.artcTitle}`}
              fallbackSrc="/images/fallback-img.png"
              fill
              className="rounded-xl object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
