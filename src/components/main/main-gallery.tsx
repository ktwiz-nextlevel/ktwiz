'use client'

import { Photo } from '@/types/media'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useState } from 'react'
import clsx from 'clsx'

interface MainGalleryProps {
  photoList: Photo[]
}

export default function MainGallery({ photoList }: MainGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dragStartX, setDragStartX] = useState<number | null>(null)
  const [dragDistance, setDragDistance] = useState(0)

  const handleNext = () => {
    if (currentIndex < photoList.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1)
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStartX(e.clientX)
    setDragDistance(0) // 초기화
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragStartX !== null) {
      setDragDistance(e.clientX - dragStartX)
    }
  }

  const handleMouseUp = () => {
    if (dragStartX !== null) {
      // 드래그 거리에 따라 슬라이드 전환
      if (dragDistance > 100 && currentIndex > 0) {
        handlePrev()
      } else if (dragDistance < -100 && currentIndex < photoList.length - 1) {
        handleNext()
      }
    }
    setDragStartX(null)
    setDragDistance(0)
  }

  if (!photoList[currentIndex]) return null

  return (
    <div className="py-10">
      <div className="relative flex flex-col items-center justify-center py-16">
        <div className="absolute top-0 z-0 flex w-full justify-center">
          <img
            src="/images/main/img-title-gallery.png"
            alt="wiz gallery"
            className="h-[150px] w-[700px] overflow-hidden"
          />
        </div>

        <div className="relative z-10 h-full w-full pt-14">
          <div
            className="h-full w-full items-center justify-center overflow-hidden pb-20"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            <div
              className="flex h-full transition-transform duration-300"
              style={{
                transform: `translateX(-${currentIndex * 450}px)`,
              }}
            >
              <div className="flex w-[15%] flex-shrink-0 sm:w-[40%]" />
              {photoList.map((photo, index) => (
                <div
                  key={index}
                  className={
                    'flex w-[450px] flex-shrink-0 items-center justify-center'
                  }
                >
                  <img
                    src={photo.imgFilePath}
                    alt={photo.artcTitle}
                    className={clsx(
                      'h-[500px] w-full rounded-xl object-cover transition-transform duration-300',
                      {
                        'scale-100 shadow-2xl shadow-red-400':
                          currentIndex === index,
                        'scale-90 opacity-50': currentIndex !== index,
                      },
                    )}
                    draggable={false}
                    style={{
                      transition: 'transform 0.3s ease-in-out',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex w-full max-w-[1100px] items-center justify-between space-x-4 py-10">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex h-16 w-16 items-center justify-center p-2 disabled:opacity-50 sm:p-4"
          >
            <ArrowLeftIcon className="h-16 w-16" />
          </button>
          <Link
            href="/media/photos/1"
            className="flex h-14 w-80 items-center justify-center rounded-md border border-black font-bold"
          >
            더 많은 사진보기
          </Link>
          <button
            onClick={handleNext}
            disabled={currentIndex === photoList.length - 1}
            className="flex h-16 w-16 items-center justify-center p-2 disabled:opacity-50 sm:p-4"
          >
            <ArrowRightIcon className="h-16 w-16" />
          </button>
        </div>
      </div>
    </div>
  )
}
