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

interface RadarChartData {
  subject: string
  A: number
  B: number
  fullMark: number
}

interface ChartRadarProps {
  data: RadarChartData[]
}

export default function ChartRadar2({ data }: ChartRadarProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar
          name="24시즌"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.3}
        />
        <Radar
          name="23시즌"
          dataKey="B"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.9}
        />
        <Legend />
        <Tooltip />
      </RadarChart>
    </ResponsiveContainer>
  )
}