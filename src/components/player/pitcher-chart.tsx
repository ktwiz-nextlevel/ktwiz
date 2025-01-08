'use client'

import ChartRadar from './rechart/radar-chart'
import ChartRadar2 from './rechart/radar-chart2'

interface ChartItem {
  subject: string
  A: number
  B: number
  fullMark: number
}

interface PlayerChartProps {
  pitchingRatioChart?: { [key: string]: number }
  pitchingValueChart?: { [key: string]: number }
  thisYearChart?: { [key: string]: number }
  lastYearChart?: { [key: string]: number }
}

export default function PlayerChart({
  pitchingRatioChart = {},
  pitchingValueChart = {},
  thisYearChart = {},
  lastYearChart = {},
}: PlayerChartProps) {
  const data1: ChartItem[] = Object.keys({
    ...pitchingRatioChart,
    ...pitchingValueChart,
  }).map((key) => ({
    subject: key,
    A: pitchingRatioChart[key] ?? 0,
    B: pitchingValueChart[key] ?? 0,
    fullMark: 100,
  }))

  const data2: ChartItem[] = Object.keys({
    ...thisYearChart,
    ...lastYearChart,
  }).map((key) => ({
    subject: key,
    A: thisYearChart[key] ?? 0,
    B: lastYearChart[key] ?? 0,
    fullMark: 100,
  }))

  return (
    <div className="flex w-full items-center justify-center space-x-4 p-4">
      <div className="h-96 w-1/2">
        <h3 className="mb-2 text-center font-bold">투구비율&피칭값</h3>
        <ChartRadar data={data1} />
      </div>

      <div className="h-96 w-1/2">
        <h3 className="mb-2 text-center font-bold">24시즌vs23시즌</h3>
        <ChartRadar2 data={data2} />
      </div>
    </div>
  )
}
