import { getPitcherPlayerDetail } from '@/app/api/player/api'
import PlayerDetailData from './player-detail/player-detail-data'
import PlayerImg from './player-detail/player-img'
import PlayerSeasonData from './player-detail/player-season-data'
import { useEffect, useState } from 'react'
import { PlayerCode } from '@/types/player.type'

interface PlayerDetailProps {
  pcode: PlayerCode
}

export default function PlayerDetail({ pcode }: PlayerDetailProps) {
  const [detailData, setDetailData] = useState()
  const [seasonData, setSeasonData] = useState()
  const [playerImg, setPlayerImg] = useState()

  useEffect(() => {
    const fetchPitcherPlayerDetail = async () => {
      try {
        const data = await getPitcherPlayerDetail(pcode)
        console.log('API 요청 성공 : ', data)
        setDetailData(data.data.gameplayer)
        setPlayerImg(data.data.gameplayer.playerPrvwImg1)
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
        {detailData && <PlayerImg img={playerImg} />}
      </div>

      <div className="flex w-full flex-col gap-6 md:w-1/2">
        {detailData && <PlayerDetailData playerData={detailData} />}
        {seasonData && <PlayerSeasonData seasonData={seasonData} />}
      </div>
    </div>
  )
}
