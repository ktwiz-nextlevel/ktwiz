'use client'

import { useState, useEffect } from 'react'
import ChartScatter from './rechart/hits-spray'
import ChartRadar2 from './rechart/radar-chart2'

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
    <div className="flex w-full flex-col items-stretch justify-center space-y-4 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0">
      <div className="w-full rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-md lg:w-1/2">
        <h3 className="mb-4 text-center text-xl font-bold text-gray-800">
          2023 히트스프레이
        </h3>
        <p className="mb-4 text-center text-sm text-gray-600">
          그래프의 빨간 점 위에 마우스를 올리면 해당 데이터에 대한 자세한 정보를
          확인할 수 있습니다.
        </p>

        <div className="h-[600px] w-full overflow-auto rounded-lg border border-gray-100 bg-white shadow-inner">
          <ChartScatter scatterData={processedData} />
        </div>
      </div>
      <div className="w-full rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-md lg:w-1/2">
        <h3 className="mb-4 text-center text-xl font-bold text-gray-800">
          2024 히트스프레이
        </h3>
        <p className="mb-4 text-center text-sm text-gray-600">
          그래프의 빨간 점 위에 마우스를 올리면 해당 데이터에 대한 자세한 정보를
          확인할 수 있습니다.
        </p>

        <div className="h-[600px] w-full overflow-auto rounded-lg border border-gray-100 bg-white p-4 shadow-inner">
          <ChartScatter scatterData={processedData} />
        </div>
      </div>
    </div>
  )
}
