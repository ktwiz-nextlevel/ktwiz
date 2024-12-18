'use client'

import ChartRadar from './rechart/radar-chart'

export default function PlayerChart() {
  const data = [
    { subject: '평균자책점', A: 120, B: 110, fullMark: 150 },
    { subject: '경기', A: 98, B: 130, fullMark: 150 },
    { subject: '승리', A: 86, B: 130, fullMark: 150 },
    { subject: '패배', A: 99, B: 100, fullMark: 150 },
    { subject: '세이브', A: 85, B: 90, fullMark: 150 },
    { subject: '홀드', A: 65, B: 85, fullMark: 150 },
  ]

  const data2 = [
    { subject: '1', A: 120, B: 110, fullMark: 150 },
    { subject: '2', A: 98, B: 130, fullMark: 150 },
    { subject: '3', A: 86, B: 130, fullMark: 150 },
    { subject: '4', A: 99, B: 100, fullMark: 150 },
    { subject: '5', A: 85, B: 90, fullMark: 150 },
    { subject: '6', A: 65, B: 85, fullMark: 150 },
  ]

  return (
    <div className="flex w-full items-center justify-center space-x-4 p-4">
      <div className="h-96 w-1/2">
        <ChartRadar data={data} />
      </div>

      <div className="h-96 w-1/2">
        <ChartRadar data={data2} />
      </div>
    </div>
  )
}
