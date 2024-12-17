'use client'

import PlayerCardList from '@/components/player/player-card-list'
import PlayerDetail from '@/components/player/player-detail'
import PlayerChart from '@/components/player/player-chart'
import { useState } from 'react'

export default function Pitcher() {
  const [playerId, setPlayerId] = useState(1)

  return (
    <div className="page-large mx-auto flex max-w-6xl flex-col p-4">
      <div className="flex w-full flex-col md:flex-row">
        <div className="w-auto flex-shrink-0 p-2">
          <PlayerCardList onCardClick={setPlayerId} />
        </div>

        <div className="w-full p-2">
          <PlayerDetail playerId={playerId} />
        </div>
      </div>

      <div className="w-full p-2">
        <PlayerChart />
      </div>
    </div>
  )
}
