'use client'

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  TooltipProps,
  Line,
  LineChart,
} from 'recharts'

const data = [
  {
    date: '3월1일',
    ranking: 3,
  },
  {
    date: '4월1일',
    ranking: 4,
  },
  {
    date: '5월1일',
    ranking: 2,
  },
  {
    date: '6월1일',
    ranking: 5,
  },
  {
    date: '7월1일',
    ranking: 4,
    amt: 2181,
  },
  {
    date: '8월1일',

    ranking: 3,
    amt: 2500,
  },
  {
    date: '9월1일',

    ranking: 1,
    amt: 2100,
  },
  {
    date: '10월1일',

    ranking: 2,
    amt: 2100,
  },
  {
    date: '11월1일',

    ranking: 1,
    amt: 2100,
  },
  {
    date: '12월1일',

    ranking: 1,
    amt: 2100,
  },
]

const LineChartComponent = () => {
  return (
    <div className="mt-10 h-[500px] w-full border-2 border-gray-300 p-3">
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
            reversed={true}
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
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LineChartComponent
