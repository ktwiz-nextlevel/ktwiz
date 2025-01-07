'use client'

import { Video } from '@/types/media'
import Link from 'next/link'

interface RelatedVideoListProps {
  videos: Video[]
}

export default function RelatedVideoList({ videos }: RelatedVideoListProps) {
  return (
    <div className="flex flex-col space-y-2">
      {videos.map(
        (video, index) =>
          video && (
            <Link
              key={index}
              href={`/media/highlight/${video.artcSeq}`}
              className="flex items-center space-x-4 p-2"
            >
              <div className="h-24 w-44 flex-shrink-0">
                <img
                  src={video.imgFilePath || '/images/placeholder-img.png'}
                  alt={video.artcTitle}
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-4">
                <p className="line-clamp-1 font-bold">{video.artcTitle}</p>
                <div className="mt-2 flex items-center text-xs text-gray-500">
                  <p>조회수 {video.viewCnt}회</p>
                  <span className="mx-2 text-gray-400">•</span>
                  <p>{new Date(video.regDttm).toLocaleDateString()}</p>
                </div>
              </div>
            </Link>
          ),
      )}
    </div>
  )
}
