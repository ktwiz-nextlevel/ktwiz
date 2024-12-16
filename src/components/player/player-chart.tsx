'use client'

import ChartRadar from './rechart/radar-chart'

export default function PlayerChart() {
  const data = [
    { subject: 'Math', A: 120, B: 110, fullMark: 150 },
    { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
    { subject: 'English', A: 86, B: 130, fullMark: 150 },
    { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
    { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
    { subject: 'History', A: 65, B: 85, fullMark: 150 },
  ]

  return (
    <div className="flex w-full items-center justify-center space-x-4 p-4">
      <div className="h-96 w-1/2">
        <ChartRadar data={data} />
      </div>

      <div className="h-96 w-1/2">
        <ChartRadar data={data} />
      </div>
    </div>
  )
}
