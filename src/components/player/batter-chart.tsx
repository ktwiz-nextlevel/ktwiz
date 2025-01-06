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
    <div className="flex w-full flex-col items-stretch justify-center space-y-4 p-4 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0">
      {/* 히트스프레이 섹션 */}
      <div className="h-96 w-full rounded-lg border bg-white p-4 shadow-md lg:w-1/2">
        <h3 className="mb-4 text-center text-xl font-bold text-gray-800">
          히트스프레이
        </h3>

        <div className="w-full flex-1 overflow-auto">
          <ChartScatter scatterData={processedData} />
        </div>

        <p className="mt-1 text-center text-sm text-gray-600">
          그래프의 빨간 점 위에 마우스를 올리면 해당 데이터에 대한 자세한 정보를
          확인할 수 있습니다.
        </p>
      </div>

      {/* 24시즌 vs 23시즌 섹션 */}
      <div className="h-96 w-full rounded-lg border bg-white p-4 shadow-md lg:w-1/2">
        <h3 className="mb-4 text-center text-xl font-bold text-gray-800">
          24시즌vs23시즌
        </h3>
        {/* <ChartRadar2 data={data2} /> */}
      </div>
    </div>
  )
}
