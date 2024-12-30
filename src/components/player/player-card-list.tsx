'use client'

import { getPitcherPlayerList } from '@/app/api/player/api'
import { PlayerCode } from '@/types/player'
import { useEffect, useState } from 'react'

interface PlayerCard {
  pcode: PlayerCode
  playerName: string
  playerPrvwImg?: string
}

interface PlayerCardListProps {
  onCardClick: (pcode: PlayerCode) => void
}

export default function PlayerCardList({ onCardClick }: PlayerCardListProps) {
  const [cards, setCards] = useState<PlayerCard[]>([])

  useEffect(() => {
    const fetchPitcherPlayerList = async () => {
      try {
        const data = await getPitcherPlayerList()
        setCards(data)
      } catch (error) {
        console.error('fetchPitcherPlayerList 요청 실패:', error)
      }
    }
    fetchPitcherPlayerList()
  }, [])

  return (
    <div className="h-[32rem] overflow-y-auto p-2">
      <div className="flex flex-col gap-4">
        {cards.map((card, index) => (
          <div
            key={index} //pcode 로 키값 하려했는데 경고가 계속 떠서 일단 임시
            className="group relative flex h-60 w-full cursor-pointer items-center justify-center rounded-lg bg-gray-200 transition-all duration-300 hover:bg-gray-300 hover:shadow-md active:scale-95"
            onClick={() => onCardClick(card.pcode)}
          >
            <img
              src={card.playerPrvwImg || '/images/ktwiz-basic-img.png'}
              alt={card.playerName}
              className="h-full w-full rounded-lg object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {card.playerName}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
