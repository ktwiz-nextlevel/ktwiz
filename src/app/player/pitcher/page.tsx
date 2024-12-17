'use client'

import PlayerCardList from '@/components/player/player-card-list'
import PlayerDetail from '@/components/player/player-detail'
import PlayerChart from '@/components/player/player-chart'
import { useState } from 'react'

export default function Pitcher() {
  const [playerId, setPlayerId] = useState(1)

  return (
    <div className="page-large mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8">
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="w-full flex-shrink-0 rounded-lg p-4 shadow-md md:w-1/5">
          <PlayerCardList onCardClick={setPlayerId} />
        </div>

        <div className="w-full flex-grow rounded-lg p-4 shadow-md md:w-4/5">
          <PlayerDetail playerId={playerId} />
        </div>
      </div>

      <div className="mb-6 w-full rounded-lg p-4 shadow-md">
        <PlayerChart />
      </div>
    </div>
  )
}
