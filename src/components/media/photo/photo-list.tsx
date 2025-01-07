'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import { NUMBER_OF_PHOTOS_TO_FETCH } from '@/contants/media'
import { Photo } from '@/types/media'
import { getPhotoList } from '@/services/media-action'
import PhotoModal from './photo-modal'
import { ArrowUpIcon } from '@heroicons/react/24/outline'
import ClientImageFallback from '../common/client-image-fallback'

interface PhotoListProps {
  initialPhotos: Photo[]
  category: number
  query?: string
  startDate?: string
  endDate?: string
}

export default function PhotoList({
  initialPhotos,
  category,
  query,
  startDate,
  endDate,
}: PhotoListProps) {
  const [photoList, setPhotoList] = useState<Photo[]>(initialPhotos)
  const [offset, setOffset] = useState(NUMBER_OF_PHOTOS_TO_FETCH)
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const observerRef = useRef<HTMLDivElement | null>(null)
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null,
  )
  const [showScrollToTop, setShowScrollToTop] = useState(false)

  const loadMorePhotos = useCallback(async () => {
    if (isLoading || !hasMore) return
    setIsLoading(true)

    try {
      const apiPhotos = await getPhotoList(
        category,
        offset,
        NUMBER_OF_PHOTOS_TO_FETCH,
        query,
        startDate,
        endDate,
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
      if (apiPhotos.length < NUMBER_OF_PHOTOS_TO_FETCH) {
        setHasMore(false)
      }
      setOffset((offset) => offset + NUMBER_OF_PHOTOS_TO_FETCH)
    } catch (error) {
      console.error('Failed to load more photos:', error)
    } finally {
      setIsLoading(false)
    }
  }, [category, offset, isLoading, query, startDate, endDate, hasMore])

  useEffect(() => {
    setPhotoList(initialPhotos)
    setHasMore(true)
    setOffset(NUMBER_OF_PHOTOS_TO_FETCH)
  }, [initialPhotos, category])

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
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {photoList.map((photo: Photo, index: number) => (
          <div
            key={`${photo.artcSeq}-${index}`}
            className="flex cursor-pointer flex-col overflow-hidden"
            onClick={() => setSelectedPhotoIndex(index)}
          >
            <div className="relative pt-[56.25%]">
              <ClientImageFallback
                src={
                  photo.imgFilePath
                    ? photo.imgFilePath
                    : '/images/fallback-img.png'
                }
                alt={`post-image-${photo.artcTitle}`}
                fallbackSrc="/images/fallback-img.png"
                className="absolute left-0 top-0 h-full w-full rounded-xl object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <p className="mb-1 line-clamp-1 text-xs text-[--main-red-color]">
                {photo.artcTitle}
              </p>
              <p className="mb-1 text-sm font-semibold">{photo.artcSubTitle}</p>
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
        {!hasMore && <p className="py-4 text-gray-400">마지막 사진입니다.</p>}
      </div>
      {selectedPhotoIndex !== null && (
        <PhotoModal
          photoList={photoList}
          selectedIndex={selectedPhotoIndex}
          onClose={() => setSelectedPhotoIndex(null)}
        />
      )}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[--main-red-color] text-white shadow-lg hover:bg-red-600"
        >
          <ArrowUpIcon className="h-6 w-6" />
        </button>
      )}
    </div>
  )
}
