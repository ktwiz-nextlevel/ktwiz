import PlayerCardList from '@/components/player/player-card-list'
import PlayerDetail from '@/components/player/player-detail'

export default function Pitcher() {
  return (
    <div className="page-large mx-auto flex max-w-6xl flex-col p-4 md:flex-row">
      <div className="w-auto flex-shrink-0 p-2">
        <PlayerCardList />
      </div>

      <div className="w-full p-2">
        <PlayerDetail />
      </div>
    </div>
  )
}
