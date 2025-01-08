'use client'
import { getTop3PitcherEras } from './(lib)/api'
import useYearStore from '@/store/useYearStore'
import { useEffect, useState } from 'react'
import { BestPlayersTop3 } from '../../../../../components/rank/best-players-Top3'
import { createPlayerList } from './(lib)/adapter'

export function Top3PitcherEras() {
  const { currentYear } = useYearStore()
  const [data, setData] = useState<string | any>('')
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    try {
      setIsLoading(true)
      const res = await getTop3PitcherEras(currentYear)
      setData(res)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return (
      <div className="loading-container">
        <p>Loading...</p>
      </div>
    )
  }
  return (
    <div>
      {data.length !== 0 && (
        <BestPlayersTop3
          isErrored={data === '' || data.length === 0}
          playerPrvwImg={data[0]?.playerPrvwImg}
          playerList={createPlayerList(data, 'era')}
          title="평균자책점"
        />
      )}
    </div>
  )
}
