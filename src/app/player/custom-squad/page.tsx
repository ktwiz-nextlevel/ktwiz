'use client'

import { useEffect, useState } from 'react'
import { PlayerCode } from '@/types/player'
import Banner from '@/components/common/banner/banner'
import TabMenu from '@/components/common/tab-menu/tab-menu'
import { PLAYER_BANNER_DATA } from '@/contants/player'
import Image from 'next/image'
import { getPitcherPlayerList } from '@/app/api/player/api'

interface PlayerCard {
  pcode: PlayerCode
  playerName: string
  playerPrvwImg?: string
}

export default function CustomSquad() {
  const [playerPcode, setPlayerPcode] = useState<PlayerCode>({ pcode: 53006 })
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
    <>
      <BannerTest />
      <div className="page-large">
        <div className="flex h-screen flex-col gap-6 md:flex-row">
          <div className="w-full flex-shrink-0 rounded-lg p-4 shadow-md md:w-1/5">
            <div className="flex max-h-screen flex-col gap-4 overflow-y-auto md:max-h-[80vh]">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="group relative flex h-60 w-full cursor-pointer items-center justify-center rounded-lg bg-gray-200 transition-all duration-300 hover:bg-gray-300 hover:shadow-md active:scale-95"
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

          <div className="relative h-full w-full flex-grow rounded-lg p-4 shadow-md md:w-4/5">
            <Image
              src="/images/players/rb.png"
              alt="Player Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg p-8"
            />
          </div>
        </div>
      </div>
    </>
  )
}

const BannerTest = () => {
  return (
    <Banner>
      <Banner.Heading
        title="투수"
        subtitle="수 관련 정보 및 데이터를 확인하세요"
      />

      <TabMenu tabs={PLAYER_BANNER_DATA['/player'].tabs} />
    </Banner>
  )
}
