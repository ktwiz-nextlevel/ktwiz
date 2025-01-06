'use client'

import PlayerCardList from '@/components/player/player-card-list'
import PlayerDetail from '@/components/player/player-detail'
import { useState, useEffect } from 'react'
import Banner from '@/components/common/banner/banner'
import { PLAYER_BANNER_DATA } from '@/contants/player'
import TabMenu from '@/components/common/tab-menu/tab-menu'
import { PlayerCode } from '@/types'
import {
  getInfielderPlayerList,
  getCatcherPlayerList,
  getInfielderPlayerDetail,
  getCatcherPlayerDetail,
  getPlayerChart,
  getOutfielderPlayerList,
  getOutfielderPlayerDetail,
} from '@/app/api/player/api'
import PlayerChart from '@/components/player/batter-chart'

interface PlayerCard {
  pcode: PlayerCode
  playerName: string
  playerPrvwImg?: string
}

interface HitSprayItem {
  info: string
  style: string
}

export default function Batter() {
  const [playerPcode, setPlayerPcode] = useState<PlayerCode>(50066)
  const [playerName, setPlayerName] = useState('강현우')
  const [cards, setCards] = useState<PlayerCard[]>([])
  const [detailData, setDetailData] = useState()
  const [seasonData, setSeasonData] = useState()
  const [playerImg, setPlayerImg] = useState()
  const [hitSprayData, setHitSprayData] = useState<HitSprayItem[]>([])

  useEffect(() => {
    const fetchBatterList = async () => {
      try {
        const [infielderPlayerList, catcherPlayerList, outfielderPlayerList] =
          await Promise.all([
            getInfielderPlayerList(),
            getCatcherPlayerList(),
            getOutfielderPlayerList(),
          ])

        setCards([
          ...infielderPlayerList,
          ...catcherPlayerList,
          ...outfielderPlayerList,
        ])
      } catch (error) {
        console.error('타자데이터 요청 실패:', error)
      }
    }
    fetchBatterList()
  }, [])

  useEffect(() => {
    const fetchBatterData = async () => {
      try {
        //이게 왜 되면 안되는건데 돌아가네...
        const [batterData] = await Promise.all([
          getInfielderPlayerDetail(playerPcode),
          getCatcherPlayerDetail(playerPcode),
          getOutfielderPlayerDetail(playerPcode),
        ])
        setDetailData(batterData.data.gameplayer)
        setPlayerImg(batterData.data.gameplayer.playerPrvwImg1)
        setSeasonData(batterData.data.yearrecordlist[0])
        setPlayerName(batterData.data.gameplayer.playerName)
      } catch (error) {
        console.error('fetchBatterData 요청 실패:', error)
      }
    }

    fetchBatterData()
  }, [playerPcode])

  useEffect(() => {
    const fetchHitSprayData = async () => {
      try {
        const data = await getPlayerChart(playerName)

        const addData = []

        addData.push(...(data['course double'] || []))
        addData.push(...(data['course home_run'] || []))
        addData.push(...(data['course single'] || []))
        addData.push(...(data['course triple'] || []))
        setHitSprayData(addData)
      } catch (error) {
        console.error('fetchHitSprayData 요청 실패:', error)
      }
    }

    fetchHitSprayData()
  }, [playerName])

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

        <div className="mb-6 h-[800px] w-full rounded-lg p-10">
          <PlayerChart data={hitSprayData} />
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
