'use client'
import { BestPlayersTop3 } from '@/components/rank/best-players-Top3'
import useYearStore from '@/store/useYearStore'
import React, { useEffect, useState } from 'react'

import { createPlayerList } from '../pitcher/_lib/adapter'
import { getTop3BatterHr } from './_lib/api'

export function Top3BatterHr() {
  const { currentYear } = useYearStore()
  const [data, setData] = useState<string | any>('')
  const fetchData = async () => {
    const res = await getTop3BatterHr(currentYear)
    setData(res)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      {data.length !== 0 && (
        <BestPlayersTop3
          playerPrvwImg={data[0]?.playerPrvwImg}
          playerList={createPlayerList(data, 'hr')}
          title="홈런"
        />
      )}
    </div>
  )
}
