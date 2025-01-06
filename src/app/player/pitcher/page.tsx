'use client'

import PlayerCardList from '@/components/player/player-card-list'
import PlayerDetail from '@/components/player/player-detail'
import PlayerChart from '@/components/player/pitcher-chart'
import { useState, useEffect } from 'react'
import Banner from '@/components/common/banner/banner'
import { PLAYER_BANNER_DATA } from '@/contants/player'
import TabMenu from '@/components/common/tab-menu/tab-menu'
import { PlayerCode, PlayerData } from '@/types/player'
import {
  getPitcherPlayerList,
  getPitcherPlayerDetail,
  getPlayerChart,
} from '@/app/api/player/api'

interface PlayerCard {
  pcode: PlayerCode
  playerName: string
  playerPrvwImg?: string
}

export default function Pitcher() {
  const [playerPcode, setPlayerPcode] = useState<PlayerCode>(53006)
  const [playerName, setPlayerName] = useState('강건')
  const [cards, setCards] = useState<PlayerCard[]>([])
  const [detailData, setDetailData] = useState()
  const [seasonData, setSeasonData] = useState()
  const [playerImg, setPlayerImg] = useState()
  const [thisYearChart, setThisYearChart] = useState()
  const [lastYearChart, setLastYearChart] = useState()
  const [pitchingRatioChart, setPitchingRatioChart] = useState()
  const [pitchingValueChart, setPitchingValueChart] = useState()

  useEffect(() => {
    const fetchPitcherData = async () => {
      try {
        const playerList = await getPitcherPlayerList()
        setCards(playerList)

        const playerDetail = await getPitcherPlayerDetail(playerPcode)
        const records = playerDetail.data.yearrecordlist

        // // 필요한 속성만 추출하는 함수
        // const extractRelevantData = (record) => {
        //   const { bb, bf, er, hit, hold, hp, hr, kk } = record
        //   return { bb, bf, er, hit, hold, hp, hr, kk }
        // }

        // // 첫 번째와 두 번째 기록에서 필요한 데이터만 추출
        // const thisYearData = records[0] ? extractRelevantData(records[0]) : null
        // const lastYearData = records[1] ? extractRelevantData(records[1]) : null

        // setThisYearChart(thisYearData)
        // setLastYearChart(lastYearData)
        setDetailData(playerDetail.data.gameplayer)
        setPlayerImg(playerDetail.data.gameplayer.playerPrvwImg1)
        setSeasonData(records[0])
        setPlayerName(playerDetail.data.gameplayer.playerName)
      } catch (error) {
        console.error('fetchPitcherData 요청 실패 :', error)
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
          <PlayerChart
            pitchingRatioChart={pitchingRatioChart}
            pitchingValueChart={pitchingValueChart}
            // thisYearChart={thisYearChart}
            // lastYearChart={lastYearChart}
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
