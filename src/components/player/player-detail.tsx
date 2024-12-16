import PlayerDetailData from './player-detail/player-detail-data'
import PlayerImg from './player-detail/player-img'
import PlayerSeasonData from './player-detail/player-season-data'

export default function PlayerDetail({ playerId }) {
  //받아온아이디로 get 요청 해서 컴포넌트별로 필요한 데이터 뿌려주기

  return (
    <div className="mx-auto flex max-w-7xl flex-col md:flex-row">
      <div className="flex w-full flex-col items-center space-y-4">
        <PlayerImg />
      </div>

      <div className="w-full p-6 md:w-2/3">
        <PlayerDetailData />
        <PlayerSeasonData />
      </div>
    </div>
  )
}
