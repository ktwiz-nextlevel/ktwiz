import PlayerDetailData from './player-detail/player-detail-data'
import PlayerImg from './player-detail/player-img'
import PlayerSeasonData from './player-detail/player-season-data'
import { PlayerDetailDataList, SeasonData } from '@/types/player'
interface DetailProps {
  detailData: PlayerDetailDataList | undefined
  seasonData: SeasonData | undefined
  playerImg: string | undefined
}

export default function PlayerDetail({
  detailData,
  seasonData,
  playerImg,
}: DetailProps) {
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
