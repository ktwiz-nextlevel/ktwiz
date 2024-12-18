import { getPitcherPlayerDetail } from '@/app/api/player/api'
import PlayerDetailData from './player-detail/player-detail-data'
import PlayerImg from './player-detail/player-img'
import PlayerSeasonData from './player-detail/player-season-data'
import { useEffect } from 'react'

export default function PlayerDetail({ pcode }) {
  // 받아온 playerId 아이디로 GET 요청해서 컴포넌트별로 필요한 데이터 뿌려주기

  console.log('넘겨받은 Id : ', pcode)

  useEffect(() => {
    const fetchPitcherPlayerDetail = async () => {
      try {
        const data = await getPitcherPlayerDetail(pcode)
        console.log('API 요청 성공 : ', data)
      } catch (error) {
        console.error('getPlayerDetail 요청 실�� : ', error)
      }
    }
    fetchPitcherPlayerDetail()
  }, [pcode])

  const fetchPitcherPlayerDetail = async () => {
    try {
      const data = await getPitcherPlayerDetail(pcode)
      console.log('API 요청 성공 : ', data)
    } catch (error) {
      console.error('getPlayerDetail 요청 실�� : ', error)
    }
  }

  return (
    <div className="mx-auto flex max-w-6xl flex-col rounded-lg p-6 md:flex-row md:gap-12">
      <div className="flex w-full flex-col items-center space-y-4 md:w-1/2">
        <PlayerImg />
      </div>

      <div className="flex w-full flex-col gap-6 md:w-1/2">
        <PlayerDetailData />
        <PlayerSeasonData />
      </div>
    </div>
  )
}
