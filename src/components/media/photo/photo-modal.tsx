'use client'
import { Photo } from '@/types/media'
import {
  MagnifyingGlassMinusIcon,
  MagnifyingGlassPlusIcon,
  XMarkIcon,
  PlayIcon,
  PauseIcon,
} from '@heroicons/react/20/solid'
import { useState, useEffect } from 'react'

interface PhotoModalProps {
  photoList: Photo[]
  selectedIndex: number
  onClose: () => void
}

export default function PhotoModal({
  photoList,
  selectedIndex,
  onClose,
}: PhotoModalProps) {
  const [currentIndex, setCurrentIndex] = useState(selectedIndex)
  const [scale, setScale] = useState(1) // 확대/축소 비율
  const [isAutoSliding, setIsAutoSliding] = useState(false)

  const handleZoomIn = () => {
    setScale((prevScale) => Math.min(prevScale + 0.5, 5)) // 최대 5배 확대
  }

  const handleZoomOut = () => {
    setScale((prevScale) => Math.max(prevScale - 0.5, 1)) // 최소 1배 축소
  }

  const handleNext = () => {
    if (currentIndex < photoList.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1)
      setScale(1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1)
      setScale(1)
    }
  }

  const toggleAutoSlide = () => {
    setIsAutoSliding((prev) => !prev)
  }

  useEffect(() => {
    const slideInterval = isAutoSliding
      ? setInterval(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex < photoList.length - 1 ? prevIndex + 1 : 0,
          )
        }, 5000) // 5초 간격으로 슬라이드
      : null

    return () => {
      if (slideInterval) clearInterval(slideInterval)
    }
  }, [isAutoSliding, photoList.length])

  if (!photoList[currentIndex]) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      onClick={onClose}
    >
      <div
        className="relative h-full w-full max-w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute left-0 top-0 z-20 flex w-full items-center justify-between bg-black bg-opacity-75 p-4 text-white">
          <p className="pl-4 text-sm">{`${currentIndex + 1} / ${photoList.length}`}</p>
          <div className="flex flex-col items-center justify-center space-y-1">
            <h2 className="font-bold">{photoList[currentIndex].artcTitle}</h2>
            <p className="text-sm">{photoList[currentIndex].artcSubTitle}</p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleZoomOut}
              disabled={scale === 1}
              className={`p-2 text-gray-300 hover:text-white ${scale === 1 ? 'opacity-50' : ''}`}
            >
              <MagnifyingGlassMinusIcon className="h-6 w-6" />
            </button>
            <button
              onClick={handleZoomIn}
              disabled={scale === 5}
              className={`p-2 text-gray-300 hover:text-white ${scale === 5 ? 'opacity-50' : ''}`}
            >
              <MagnifyingGlassPlusIcon className="h-6 w-6" />
            </button>
            <button
              onClick={toggleAutoSlide}
              className="p-2 text-gray-300 hover:text-white"
            >
              {isAutoSliding ? (
                <PauseIcon className="h-6 w-6" />
              ) : (
                <PlayIcon className="h-6 w-6" />
              )}
            </button>
            <button
              className="p-2 text-gray-300 hover:text-white"
              onClick={onClose}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="relative flex h-full items-center justify-center overflow-hidden">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute left-4 z-10 rounded-full bg-black bg-opacity-50 p-4 text-white disabled:opacity-50"
          >
            {'<'}
          </button>
          <div
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {photoList.map((photo, index) => (
              <div
                key={index}
                className="flex w-full flex-shrink-0 items-center justify-center"
              >
                <img
                  src={photo.imgFilePath}
                  alt={photo.artcTitle}
                  className="max-h-[1000px] max-w-[1600px] object-contain"
                  style={{
                    transform: `scale(${scale})`,
                    transition: 'transform 0.3s ease-in-out',
                  }}
                />
              </div>
            ))}
          </div>
          <button
            onClick={handleNext}
            disabled={currentIndex === photoList.length - 1}
            className="absolute right-4 z-10 rounded-full bg-black bg-opacity-50 p-4 text-white disabled:opacity-50"
          >
            {'>'}
          </button>
        </div>
      </div>
    </div>
  )
}