import PlayerDetailData from './player-detail/player-detail-data'
import PlayerImg from './player-detail/player-img'
import PlayerSeasonData from './player-detail/player-season-data'

export default function PlayerDetail({ playerId }) {
  // 받아온 playerId 아이디로 GET 요청해서 컴포넌트별로 필요한 데이터 뿌려주기

  console.log(playerId)

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
