export interface TeamRank {
  ab: number // At-bats
  bra: string // Batting average
  continue1: string // String for win streak (e.g., "3승")
  drawn: number // Number of drawn games
  er: number // Earned runs
  era: string // Earned run average
  game: number // Number of games played
  gameFlag: number // Game flag (could represent some kind of state)
  gb: string // Games behind (as a string)
  gyear: string // Year of the stats
  hr: number // Home runs
  hra: string // Home run average
  lastrank: number // Last rank position
  lose: number // Number of losses
  lra: string // Loss rate
  r: number // Runs scored
  rank: number // Team rank
  run: number // Runs allowed (or scored depending on context)
  sb: number // Stolen bases
  teamCode: string // Team code
  teamName: string // Team name (in native language)
  teamNameEng: string // Team name (in English)
  win: number // Number of wins
  wra: string // Win rate average
}
export interface WatchPointData {
  homeTeamRank: TeamRank
  visitTeamRank: TeamRank
  [key: string]: any
}
export interface ChartData {
  subject: string
  key: keyof TeamRank
  A: string | number
  B: string | number
  fullMark: number
}
