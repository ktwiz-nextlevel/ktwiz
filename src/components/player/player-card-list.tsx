'use client'

import { PlayerCode } from '@/types/player'

interface PlayerCard {
  pcode: PlayerCode
  playerName: string
  playerPrvwImg?: string
  position?: string // position 속성 추가
}

interface PlayerCardListProps {
  onCardClick: (pcode: PlayerCode) => void
  cards: PlayerCard[]
}

export default function PlayerCardList({
  onCardClick,
  cards,
}: PlayerCardListProps) {
  return (
    <div className="h-[32rem] overflow-y-auto p-2">
      <div className="flex flex-col gap-4">
        {cards.map((card) => (
          <div
            key={card.pcode}
            role="button"
            aria-label={`${card.playerName} 카드`}
            className="group relative flex h-60 w-full cursor-pointer items-center justify-center rounded-lg bg-gray-200 transition-all duration-300 hover:bg-gray-300 hover:shadow-md active:scale-95"
            onClick={() => onCardClick(card.pcode)}
          >
            <img
              src={card.playerPrvwImg || '/images/ktwiz-basic-img.png'}
              alt={card.playerName}
              className="h-full w-full rounded-lg object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="text-lg font-bold">{card.playerName}</div>
              {card.position && (
                <div className="mt-1 text-sm text-gray-300">
                  {card.position}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
