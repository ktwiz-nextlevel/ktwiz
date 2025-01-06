'use client'
import { NUMBER_OF_VIDEOS_TO_FETCH } from '@/contants/media'
import { getVideoList } from '@/services/media-action'
import { Video } from '@/types/media'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'

interface VideoListProps {
  initialVideos: Video[]
  query?: string
}

export default function VideoList({ initialVideos, query }: VideoListProps) {
  const [photoList, setPhotoList] = useState<Video[]>(initialVideos)
  const [offset, setOffset] = useState(NUMBER_OF_VIDEOS_TO_FETCH)
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const observerRef = useRef<HTMLDivElement | null>(null)
  const router = useRouter()

  const loadMorePhotos = useCallback(async () => {
    if (isLoading || !hasMore) return
    setIsLoading(true)

    try {
      const apiPhotos = await getVideoList(
        offset,
        NUMBER_OF_VIDEOS_TO_FETCH,
        query,
      )
      setPhotoList((prevPhotos) => {
        const uniquePhotos = [...prevPhotos]
        apiPhotos.forEach((newPhoto) => {
          if (
            !uniquePhotos.some((photo) => photo.artcSeq === newPhoto.artcSeq)
          ) {
            uniquePhotos.push(newPhoto)
          }
        })
        return uniquePhotos
      })
      if (apiPhotos.length < NUMBER_OF_VIDEOS_TO_FETCH) {
        setHasMore(false)
      }
      setOffset((offset) => offset + NUMBER_OF_VIDEOS_TO_FETCH)
    } catch (error) {
      console.error('Failed to load more photos:', error)
    } finally {
      setIsLoading(false)
    }
  }, [offset, isLoading, query, hasMore])

  useEffect(() => {
    setPhotoList(initialVideos)
    setHasMore(true)
    setOffset(NUMBER_OF_VIDEOS_TO_FETCH)
  }, [initialVideos])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMorePhotos()
        }
      },
      { threshold: 0.5 },
    )

    const currentObserverRef = observerRef.current
    if (currentObserverRef) {
      observer.observe(currentObserverRef)
    }

    return () => {
      if (currentObserverRef) {
        observer.unobserve(currentObserverRef)
      }
    }
  }, [loadMorePhotos])

  return (
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {photoList.map((photo: Video, index: number) => (
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
      <div ref={observerRef} className="py-10 text-center">
        {isLoading && (
          <div className="flex flex-col items-center py-10">
            <div className="mb-6 h-10 w-10 animate-spin rounded-full border-4 border-gray-400 border-t-transparent"></div>
          </div>
        )}
        {!hasMore && <p className="text-gray-400">마지막 영상입니다.</p>}
      </div>
    </div>
  )
}
