import PlayerCardList from '@/components/player/player-card-list'
import PlayerDetail from '@/components/player/player-detail'
import PlayerChartData from '@/components/player/PlayerChartData'

export default function Pitcher() {
  return (
    <div className="page-large mx-auto flex max-w-6xl flex-col p-4">
      <div className="flex w-full flex-col md:flex-row">
        <div className="w-auto flex-shrink-0 p-2">
          <PlayerCardList />
        </div>

        <div className="w-full p-2">
          <PlayerDetail />
        </div>
      </div>

      <div className="w-full p-2">
        <PlayerChartData />
      </div>
    </div>
  )
}
