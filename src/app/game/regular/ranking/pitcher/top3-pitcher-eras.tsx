import { BestPlayersTop3 } from '../../../../../components/rank/best-players-Top3'
import { createPlayerList } from './_lib/adapter'

import { Player } from '@/types'

export function Top3PitcherEras({ data }: { data?: [Player, Player, Player] }) {
  return (
    <div>
      {data && (
        <BestPlayersTop3
          playerPrvwImg={data[0]?.playerPrvwImg}
          playerList={createPlayerList(data, 'era')}
          title="평균자책점"
        />
      )}
    </div>
  )
}
