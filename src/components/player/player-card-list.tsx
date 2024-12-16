'use client'
import Image from 'next/image'

export default function PlayerCardList({ onCardClick }) {
  const cards = [
    { id: 1, name: '이미지 1' },
    { id: 2, name: '이미지 2' },
    { id: 3, name: '이미지 3' },
    { id: 4, name: '이미지 4' },
    { id: 5, name: '이미지 5' },
  ]

  return (
    <div className="h-96 overflow-y-auto border p-2">
      <div className="flex flex-col gap-4">
        {cards.map(({ id, name }) => (
          <div
            key={id}
            className="flex h-24 items-center justify-center bg-gray-200"
            onClick={() => onCardClick(id)}
          >
            <img
              src="/images/player-test-img.jpg"
              alt={name}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
