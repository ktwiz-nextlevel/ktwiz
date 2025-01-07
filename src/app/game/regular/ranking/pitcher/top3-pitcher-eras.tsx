'use client'
import { getTop3PitcherEras } from './(lib)/api'
import useYearStore from '@/store/useYearStore'
import { useEffect, useState } from 'react'
import { BestPlayersTop3 } from '../../../../../components/rank/best-players-Top3'
import { createPlayerList } from './(lib)/adapter'

export function Top3PitcherEras() {
  const { currentYear } = useYearStore()
  const [data, setData] = useState<string | any>('')
  const fetchData = async () => {
    const res = await getTop3PitcherEras(currentYear) // 예시 API 호출
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
          playerList={createPlayerList(data, 'era')}
          title="승리"
        />
      )}
    </div>
  )
}
