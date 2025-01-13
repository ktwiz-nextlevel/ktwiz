'use client'

import PlayerCardList from '@/components/player/player-card-list'
import PlayerDetail from '@/components/player/player-detail'
import PlayerChart from '@/components/player/pitcher-chart'
import { useState, useEffect } from 'react'
import Banner from '@/components/common/banner/banner'
import { PLAYER_BANNER_DATA } from '@/contants/player'
import TabMenu from '@/components/common/tab-menu/tab-menu'
import { PlayerCode, PlayerData } from '@/types'
import {
  getPitcherPlayerList,
  getPitcherPlayerDetail,
  getPlayerChart,
  getPitcherChart,
} from '@/app/api/player/api'
import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'

interface PlayerCard {
  pcode: PlayerCode
  playerName: string
  playerPrvwImg?: string
}

interface ChartData {
  bb_val: number
  er_val: number
  hit_val: number
  hold_val: number
  hp_val: number
  hr_val: number
  kk_val: number
}

export default function Pitcher() {
  const [playerPcode, setPlayerPcode] = useState<PlayerCode>(53006)
  const [playerName, setPlayerName] = useState('강건')
  const [cards, setCards] = useState<PlayerCard[]>([])
  const [detailData, setDetailData] = useState()
  const [seasonData, setSeasonData] = useState()
  const [playerImg, setPlayerImg] = useState()
  const [thisYearChart, setThisYearChart] = useState<ChartData | undefined>(
    undefined,
  )
  const [lastYearChart, setLastYearChart] = useState<ChartData | undefined>(
    undefined,
  )

  const [pitchingRatioChart, setPitchingRatioChart] = useState()
  const [pitchingValueChart, setPitchingValueChart] = useState()
  useEffect(() => {
    const fetchPitcherData = async () => {
      try {
        const playerList = await getPitcherPlayerList()
        setCards(playerList)

        const playerDetail = await getPitcherPlayerDetail(playerPcode)

        setDetailData(playerDetail.data.gameplayer)
        setPlayerImg(playerDetail.data.gameplayer.playerPrvwImg1)
        setPlayerName(playerDetail.data.gameplayer.playerName)

        const data = await getPitcherChart(playerPcode)
        const record1 = data.data.yearrecordlist[0]
        const record2 = data.data.yearrecordlist[1]

        const valData1 = Object.fromEntries(
          Object.entries(record1).filter(([key]) => key.endsWith('_val')),
        ) as unknown as ChartData

        const valData2 = Object.fromEntries(
          Object.entries(record2).filter(([key]) => key.endsWith('_val')),
        ) as unknown as ChartData

        setThisYearChart(valData1)
        setLastYearChart(valData2)
        setSeasonData(playerDetail.data.yearrecordlist[0])
      } catch (error) {
        console.error('fetchPitcherData 요청 실패:', error)
      }
    }

    fetchPitcherData()
  }, [playerPcode])

  useEffect(() => {
    const fetchPitcherChart = async () => {
      try {
        const data = await getPlayerChart(playerName)
        setPitchingRatioChart(data.pitchingRatio)
        setPitchingValueChart(data.pitchingValue)
      } catch (error) {
        console.error('fetchPitcherChart 요청 실패:', error)
      }
    }
    fetchPitcherChart()
  }, [playerName])

  return (
    <>
      <BannerTest />
      <div className="page-large mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8">
        <div className="mb-7 mt-[50px] flex w-full justify-end">
          <Breadcrumbs pages={['HOME', 'Player', '투수']} />
        </div>
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="w-full flex-shrink-0 rounded-lg p-4 shadow-md md:w-1/5">
            <PlayerCardList
              onCardClick={setPlayerPcode}
              cards={cards}
              pcode={playerPcode}
            />
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
          <PlayerChart
            pitchingRatioChart={pitchingRatioChart}
            pitchingValueChart={pitchingValueChart}
            thisYearChart={thisYearChart}
            lastYearChart={lastYearChart}
          />
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
