'use client'

import ChartScatter from './rechart/hits-spray'

export default function PlayerChart({}) {
  return (
    <div className="flex w-full items-center justify-center space-x-4 p-4">
      {/* 첫 번째 레이더 차트 */}
      <div className="h-96 w-1/2">
        <h3 className="mb-2 text-center font-bold">히트스프레이</h3>
        <ChartScatter />
      </div>

      {/* 두 번째 레이더 차트 */}
      <div className="h-96 w-1/2">
        <h3 className="mb-2 text-center font-bold">24시즌vs23시즌</h3>
        {/* <ChartRadar2 data={data2} /> */}
      </div>
    </div>
  )
}
