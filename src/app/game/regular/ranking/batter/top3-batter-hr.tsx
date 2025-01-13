'use client'
import { BestPlayersTop3 } from '@/components/rank/best-players-Top3'
import useYearStore from '@/store/useYearStore'
import React, { useEffect, useState } from 'react'

import { getTop3batterHr } from './_lib/api'
import { createPlayerList } from '../pitcher/_lib/adapter'

export function Top3BatterHr() {
  const { currentYear } = useYearStore()
  const [data, setData] = useState<string | any>('')
  const fetchData = async () => {
    const res = await getTop3batterHr(currentYear)
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
          playerList={createPlayerList(data, 'hr')}
          title="홈런"
        />
      )}
    </div>
  )
}
