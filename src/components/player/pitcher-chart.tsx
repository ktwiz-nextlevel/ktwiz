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
  thisYearChart?: ChartData
  lastYearChart?: ChartData
}

interface ChartData {
  bb_val: number
  er_val: number
  hit_val: number
  hold_val: number
  hp_val: number
  hr_val: number
  kk_val: number
}

export default function PlayerChart({
  pitchingRatioChart = {},
  pitchingValueChart = {},
  thisYearChart = {
    bb_val: 0,
    er_val: 0,
    hit_val: 0,
    hold_val: 0,
    hp_val: 0,
    hr_val: 0,
    kk_val: 0,
  },
  lastYearChart = {
    bb_val: 0,
    er_val: 0,
    hit_val: 0,
    hold_val: 0,
    hp_val: 0,
    hr_val: 0,
    kk_val: 0,
  },
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

  const data2: ChartItem[] = Object.keys(thisYearChart).map((key) => ({
    subject: key,
    A: thisYearChart[key as keyof ChartData] ?? 0,
    B: lastYearChart[key as keyof ChartData] ?? 0,
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
