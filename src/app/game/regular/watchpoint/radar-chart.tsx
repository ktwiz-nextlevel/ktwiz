'use client'
import React, { PureComponent } from 'react'

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

const data = [
  {
    subject: 'ERA (자책점 평균)',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'WHIP',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'K/9 ',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'BB/9 (9이닝당 볼넷 허용)',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'IP (이닝)',
    A: 136,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'BAbip',
    A: 140,
    B: 85,
    fullMark: 150,
  },
]

function RadarChartComponent() {
  return (
    <ResponsiveContainer width="80%" height="80%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />

        <Radar
          name="KT"
          dataKey="B"
          stroke="#ea0101"
          fill="#ea0101"
          fillOpacity={0.2}
        />
        <Radar
          name="LG"
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

export default RadarChartComponent
