'use client'
import { BestPlayersTop3 } from '@/components/rank/best-players-Top3'
import useYearStore from '@/store/useYearStore'
import React, { useEffect, useState } from 'react'
import { getTop3BatterHra } from './_lib/api'
import { createPlayerList } from '../pitcher/_lib/adapter'
import { Player } from '@/types'

export function Top3BatterHra({ data }: { data: [Player, Player, Player] }) {
  // const { currentYear } = useYearStore()
  // const [data, setData] = useState<string | any>('')
  // const fetchData = async () => {
  //   const res = await getTop3BatterHra(currentYear)
  //   setData(res)
  // }
  // useEffect(() => {
  //   fetchData()
  // }, [])
  return (
    <div>
      {data && (
        <BestPlayersTop3
          playerPrvwImg={data[0]?.playerPrvwImg}
          playerList={createPlayerList(data, 'hra')}
          title="타율"
        />
      )}
    </div>
  )
}
