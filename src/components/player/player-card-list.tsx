'use client'
import Image from 'next/image'

export default function PlayerCardList({ onCardClick }) {
  const cards = [
    { id: 1, name: '이미지 1' },
    { id: 2, name: '이미지 2' },
    { id: 3, name: '이미지 3' },
    { id: 4, name: '이미지 4' },
    { id: 5, name: '이미지 5' },
    { id: 6, name: '이미지 6' },
    { id: 7, name: '이미지 7' },
    { id: 8, name: '이미지 8' },
    { id: 9, name: '이미지 9' },
  ]

  return (
    <div className="h-[32rem] overflow-y-auto p-2">
      <div className="flex flex-col gap-4">
        {cards.map(({ id, name }) => (
          <div
            key={id}
            className="group relative flex h-60 w-full cursor-pointer items-center justify-center rounded-lg bg-gray-200 transition-all duration-300 hover:bg-gray-300 hover:shadow-md active:scale-95"
            onClick={() => onCardClick(id)}
          >
            <img
              src="/images/player-test-img.jpg"
              alt={name}
              className="h-full w-full rounded-lg object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
