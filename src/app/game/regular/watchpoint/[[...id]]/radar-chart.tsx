'use client'
import React from 'react'

import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import { ChartData, WatchPointData } from './_lib/watch-point.type'

const data: ChartData[] = [
  {
    subject: 'sb',
    key: 'sb',
    A: 1,
    B: 1,
    fullMark: 100,
  },
  {
    subject: 'hr',
    key: 'hr',
    A: 0.5,
    B: 1,
    fullMark: 150,
  },
  {
    subject: 'game 경기수 ',
    key: 'game',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'win 승률',
    key: 'win',
    A: 0.5,
    B: 0.3,
    fullMark: 100,
  },
  {
    subject: '패배율',
    key: 'lose',
    A: 70,
    B: 80,
    fullMark: 100,
  },
]
function creatChartData(res: WatchPointData | null) {
  if (res) {
    return data.map((info) => {
      const homeData = res.homeTeamRank[info.key]
      const visitData = res.visitTeamRank[info.key]
      return {
        ...info,
        A: homeData,
        B: visitData,
      }
    })
  }
}
export function RadarChartComponent({ data }: { data: WatchPointData }) {
  let chartData = creatChartData(data)

  return (
    <ResponsiveContainer width="80%" height="80%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />

        <Radar
          name={data?.homeTeamRank.teamName}
          dataKey="B"
          stroke="#ea0101"
          fill="#ea0101"
          fillOpacity={0.2}
        />
        <Radar
          name={data?.visitTeamRank.teamName}
          dataKey="A"
          stroke={'#0098af'}
          fill="#0098af"
          fillOpacity={0.3}
        />
        <Legend />
        <Tooltip />
      </RadarChart>
    </ResponsiveContainer>
  )
}
