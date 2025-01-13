'use client'
import useYearStore from '@/store/useYearStore'
import { useEffect, useState } from 'react'
import { BestPlayersTop3 } from '../../../../../components/rank/best-players-Top3'
import { getTop3PitcherWins } from './_lib/api'
import { createPlayerList } from './_lib/adapter'

export function Top3PitcherWins() {
  const { currentYear } = useYearStore()
  const [data, setData] = useState<string | any>('')
  const fetchData = async () => {
    const res = await getTop3PitcherWins(currentYear) // 예시 API 호출
    setData(res)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      {data.length !== 0 && (
        <BestPlayersTop3
          isErrored={data === '' || data.length === 0}
          playerPrvwImg={data[0]?.playerPrvwImg}
          playerList={createPlayerList(data, 'w')}
          title="승리"
        />
      )}
    </div>
  )
}
