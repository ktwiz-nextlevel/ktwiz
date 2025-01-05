'use client'

import PlayerCardList from '@/components/player/player-card-list'
import PlayerDetail from '@/components/player/player-detail'
import PlayerChart from '@/components/player/player-chart'
import { useState, useEffect } from 'react'
import Banner from '@/components/common/banner/banner'
import { PLAYER_BANNER_DATA } from '@/contants/player'
import TabMenu from '@/components/common/tab-menu/tab-menu'
import { PlayerCode } from '@/types/player'
import {
  getInfielderPlayerList,
  getCatcherPlayerList,
} from '@/app/api/player/api'

interface PlayerCard {
  pcode: PlayerCode
  playerName: string
  playerPrvwImg?: string
}

export default function Batter() {
  const [playerPcode, setPlayerPcode] = useState<PlayerCode>({ pcode: 69064 })
  const [cards, setCards] = useState<PlayerCard[]>([])

  useEffect(() => {
    const fetchBatterPlayerList = async () => {
      try {
        const [infielderData, catcherData] = await Promise.all([
          getInfielderPlayerList(),
          getCatcherPlayerList(), //외야수 데이터도 필요함
        ])

        setCards([...infielderData, ...catcherData])
      } catch (error) {
        console.error('타자데이터 요청 실패:', error)
      }
    }
    fetchBatterPlayerList()
  }, [])

  return (
    <>
      <BannerTest />
      <div className="page-large mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="w-full flex-shrink-0 rounded-lg p-4 shadow-md md:w-1/5">
            <PlayerCardList onCardClick={setPlayerPcode} cards={cards} />
          </div>

          <div className="w-full flex-grow rounded-lg p-4 shadow-md md:w-4/5">
            <PlayerDetail pcode={playerPcode} />
          </div>
        </div>

        <div className="mb-6 w-full rounded-lg p-4 shadow-md">
          {/* <PlayerChart /> */}
        </div>
      </div>
    </>
  )
}

const BannerTest = () => {
  return (
    <Banner>
      <Banner.Heading
        title="타자"
        subtitle="타자 관련 정보 및 데이터를 확인하세요"
      />

      <TabMenu tabs={PLAYER_BANNER_DATA['/player'].tabs} />
    </Banner>
  )
}
