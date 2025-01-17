'use client'

import PlayerCardList from '@/components/player/player-card-list'
import PlayerDetail from '@/components/player/player-detail'
import PlayerChart from '@/components/player/pitcher-chart'
import { useState, useEffect } from 'react'

import {
  ChartData2,
  PitchingRatio,
  PitchingValue,
  PlayerCode,
  PlayerDetailDataList,
  SeasonData,
} from '@/types'
import {
  getPitcherPlayerList,
  getPitcherPlayerDetail,
  getPlayerChart,
  getPitcherChart,
} from '@/app/api/player/api'
import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'
export const metadata = {
  title: '투수',
  description:
    '투수의 이름, 포지션, 생년월일, 체격, 시즌 기록 등을 살펴보세요!',
}
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

export default function PitcherPage() {
  const [playerPcode, setPlayerPcode] = useState<PlayerCode>(53006)
  const [playerName, setPlayerName] = useState<string | undefined>('강건')
  const [cards, setCards] = useState<PlayerCard[]>([])
  const [detailData, setDetailData] = useState<PlayerDetailDataList>()
  const [seasonData, setSeasonData] = useState<SeasonData | undefined>()
  const [playerImg, setPlayerImg] = useState<string | undefined>()

  const [thisYearChart, setThisYearChart] = useState<ChartData | undefined>(
    undefined,
  )
  const [lastYearChart, setLastYearChart] = useState<ChartData | undefined>(
    undefined,
  )

  const [pitchingRatioChart, setPitchingRatioChart] = useState<
    PitchingRatio | undefined
  >()
  const [pitchingValueChart, setPitchingValueChart] = useState<
    PitchingValue | undefined
  >()

  useEffect(() => {
    const fetchPitcherData = async () => {
      try {
        const playerList = await getPitcherPlayerList()
        setCards(playerList as PlayerCard[])

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
        const data = (await getPlayerChart(playerName)) as ChartData2
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
