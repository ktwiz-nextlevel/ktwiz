'use client'

import { useState, useEffect } from 'react'
import ChartScatter from './rechart/hits-spray'

interface HitSprayItem {
  info: string
  style: string
}

interface PlayerChartProps {
  data: HitSprayItem[]
}

interface ProcessedChartItem {
  x: number
  y: number
  info: string
}

export default function PlayerChart({ data }: PlayerChartProps) {
  const [processedData, setProcessedData] = useState<ProcessedChartItem[]>([])

  // 데이터 가공 함수
  const processChartData = (data: HitSprayItem[]): ProcessedChartItem[] => {
    return data.map((item) => {
      const left = parseFloat(item.style.match(/left:([\d.]+)%/)?.[1] || '0')
      const top = parseFloat(item.style.match(/top:([\d.]+)%/)?.[1] || '0')
      return {
        x: left,
        y: top,
        info: item.info,
      }
    })
  }

  useEffect(() => {
    if (data && Array.isArray(data)) {
      const processed = processChartData(data)
      setProcessedData(processed)
    }
  }, [data])

  return (
    <div className="flex w-full items-center justify-center space-x-4 p-4">
      <div className="h-96 w-1/2">
        <h3 className="mb-2 text-center font-bold">히트스프레이</h3>
        <ChartScatter scatterData={processedData} />
      </div>

      <div className="h-96 w-1/2">
        <h3 className="mb-2 text-center font-bold">24시즌vs23시즌</h3>
        {/* <ChartRadar2 data={data2} /> */}
      </div>
    </div>
  )
}
