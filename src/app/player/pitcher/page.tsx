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
  getPitcherPlayerList,
  getPitcherPlayerDetail,
} from '@/app/api/player/api'

interface PlayerCard {
  pcode: PlayerCode
  playerName: string
  playerPrvwImg?: string
}

export default function Pitcher() {
  const [playerPcode, setPlayerPcode] = useState<PlayerCode>(53006)
  const [cards, setCards] = useState<PlayerCard[]>([])
  const [detailData, setDetailData] = useState()
  const [seasonData, setSeasonData] = useState()
  const [playerImg, setPlayerImg] = useState()

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

  useEffect(() => {
    const fetchPitcherPlayerDetail = async () => {
      try {
        const data = await getPitcherPlayerDetail(playerPcode)
        console.log('투수상세 API 요청 성공 : ', data)
        setDetailData(data.data.gameplayer)
        setPlayerImg(data.data.gameplayer.playerPrvwImg1)
        setSeasonData(data.data.yearrecordlist[0])
      } catch (error) {
        console.error('getPlayerDetail 요청 실패 : ', error)
      }
    }
    fetchPitcherPlayerDetail()
  }, [playerPcode])

  return (
    <>
      <BannerTest />
      <div className="page-large mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="w-full flex-shrink-0 rounded-lg p-4 shadow-md md:w-1/5">
            <PlayerCardList onCardClick={setPlayerPcode} cards={cards} />
          </div>

          <div className="w-full flex-grow rounded-lg p-4 shadow-md md:w-4/5">
            <PlayerDetail
              detailData={detailData}
              seasonData={seasonData}
              playerImg={playerImg}
            />
          </div>
        </div>

        <div className="mb-6 w-full rounded-lg p-4 shadow-md">
          <PlayerChart />
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
        subtitle="투수 관련 정보 및 데이터를 확인하세요"
      />
      <TabMenu tabs={PLAYER_BANNER_DATA['/player'].tabs} />
    </Banner>
  )
}
