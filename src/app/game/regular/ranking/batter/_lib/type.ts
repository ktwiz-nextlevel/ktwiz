export type PitcherERA = {
  playerName: string
  teamName: string
  hra: number // 홈런 허용 평균 (예시)
}
export type ERAType = PitcherERA & Record<string, string | number | undefined>
export type TeamERAOverviewProps = {
  isError: boolean
  title: string
  list?: PitcherERA[]
}
