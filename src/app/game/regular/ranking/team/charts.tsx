'use client'

import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  LineChart,
} from 'recharts'
import { AdaptedData, RawData } from './_lib/team.type'

function adaptData(rawData: RawData[]): AdaptedData[] {
  return rawData.map((item) => {
    const month = parseInt(item.date.substring(4, 6), 10) // 월
    const day = parseInt(item.date.substring(6, 8), 10) // 일

    return {
      date: `${month}월 ${day}일`,
      ranking: Number(item.rank), // 순위를 숫자로 변환
    }
  })
}

export default function LineChartComponent({ datas }: { datas: RawData[] }) {
  const data = adaptData(datas)

  return (
    <div className="mt-10 h-[500px] w-full border-2 border-gray-300 p-3">
      {data ? (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 20,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              tick={{ fill: '#686868' }}
            />
            <YAxis
              reversed
              tickMargin={10}
              interval={0}
              tickLine={false}
              tickFormatter={(value) => `${value}위`}
              domain={[1, 12]} // Y축 범위 설정
              ticks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
              tick={{ fill: '#c1c1c1' }}
            />
            <Tooltip />
            <Legend />
            <Line
              strokeWidth={3}
              type="monotone"
              dataKey="ranking"
              stroke={'#ea0101'}
              activeDot={{ r: 8 }}
              isAnimationActive
            />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p>Failed to load team rank data.</p>
      )}
    </div>
  )
}
