'use client'
import { NUMBER_OF_VIDEOS_TO_FETCH } from '@/contants/media'
import { Video } from '@/types/media'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowUpIcon } from '@heroicons/react/24/outline'
import ClientImageFallback from '../common/client-image-fallback'
import { getVideoList } from '@/services/media-service'

interface VideoListProps {
  initialVideos: Video[]
  query?: string
}

export default function VideoList({ initialVideos, query }: VideoListProps) {
  const [videoList, setVideoList] = useState<Video[]>(initialVideos)
  const [offset, setOffset] = useState(NUMBER_OF_VIDEOS_TO_FETCH)
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const observerRef = useRef<HTMLDivElement | null>(null)
  const router = useRouter()
  const [showScrollToTop, setShowScrollToTop] = useState(false)

  const loadMorePhotos = useCallback(async () => {
    if (isLoading || !hasMore) return
    setIsLoading(true)

    try {
      const apiVideos = await getVideoList(
        offset,
        NUMBER_OF_VIDEOS_TO_FETCH,
        query,
      )
      setVideoList((prevVideos) => {
        const uniqueVideos = [...prevVideos]
        apiVideos.forEach((newVideo) => {
          if (
            !uniqueVideos.some((video) => video.artcSeq === newVideo.artcSeq)
          ) {
            uniqueVideos.push(newVideo)
          }
        })
        return uniqueVideos
      })
      if (apiVideos.length < NUMBER_OF_VIDEOS_TO_FETCH) {
        setHasMore(false)
      }
      setOffset((offset) => offset + NUMBER_OF_VIDEOS_TO_FETCH)
    } catch (error) {
      console.error('Failed to load more videos:', error)
    } finally {
      setIsLoading(false)
    }
  }, [offset, isLoading, query, hasMore])

  useEffect(() => {
    setVideoList(initialVideos)
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

  useEffect(() => {
    // if (typeof window === 'undefined') return;
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 200) // 200px 이상 스크롤되면 보이기
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="py-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {videoList.map((video: Video, index: number) => (
          <div
            key={`${video.artcSeq}-${index}`}
            className="flex cursor-pointer flex-col overflow-hidden"
            onClick={() => router.push(`/media/highlight/${video.artcSeq}`)}
          >
            <div className="relative pt-[56.25%]">
              <ClientImageFallback
                src={video.imgFilePath}
                alt={`post-image-${video.artcTitle}`}
                fallbackSrc="/images/fallback-img.png"
                fill
                className="rounded-xl object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
            <div className="p-2">
              <p className="mb-1 text-sm font-semibold">{video.artcTitle}</p>
              <p className="text-xs text-gray-400">
                {new Date(video.regDttm).toLocaleDateString()}
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
        {!hasMore && <p className="py-4 text-gray-400">마지막 영상입니다.</p>}
        {showScrollToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[--main-red-color] text-white shadow-lg hover:bg-red-600"
          >
            <ArrowUpIcon className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  )
}
