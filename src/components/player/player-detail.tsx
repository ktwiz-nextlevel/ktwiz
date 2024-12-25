import { getPitcherPlayerDetail } from '@/app/api/player/api'
import PlayerDetailData from './player-detail/player-detail-data'
import PlayerImg from './player-detail/player-img'
import PlayerSeasonData from './player-detail/player-season-data'
import { useEffect, useState } from 'react'

export default function PlayerDetail(pcode) {
  const [detailData, setDetailData] = useState([])
  const [seasonData, setSeasonData] = useState([])

  console.log('seasonData : ', seasonData)

  useEffect(() => {
    const fetchPitcherPlayerDetail = async () => {
      try {
        const data = await getPitcherPlayerDetail(pcode.pcode)
        console.log('API 요청 성공 : ', data)
        setDetailData(data.data.gameplayer)
        setSeasonData(data.data.yearrecordlist[0])
      } catch (error) {
        console.error('getPlayerDetail 요청 실패 : ', error)
      }
    }
    fetchPitcherPlayerDetail()
  }, [pcode])

  return (
    <div className="mx-auto flex max-w-6xl flex-col rounded-lg p-6 md:flex-row md:gap-12">
      <div className="flex w-full flex-col items-center space-y-4 md:w-1/2">
        <PlayerImg img={detailData.playerPrvwImg1} />
      </div>

      <div className="flex w-full flex-col gap-6 md:w-1/2">
        <PlayerDetailData playerData={detailData} />
        <PlayerSeasonData seasonData={seasonData} />
      </div>
    </div>
  )
}
