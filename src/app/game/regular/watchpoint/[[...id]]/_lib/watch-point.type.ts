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
export interface LineUp {
  backnum: string // Player's jersey number
  birth: string // Player's birthdate (in YYYYMMDD format)
  career: string // Player's career history
  curBra: string // Current batting average
  curHra: string // Current home run average
  height: string // Player's height in centimeters
  hittype: string // Player's hitting type (e.g., "Right-handed pitcher, switch hitter")
  money: string // Player's salary or contract value
  pcode: string // Player's unique code
  playerName: string // Player's name
  playerPrvwImg: string // URL to player's profile image
  pos: string // Player's position number
  posidName: string // Position abbreviation (e.g., "LF" for Left Field)
  position: string // Position description (e.g., "Outfield")
  promise: string // Player's promise (could be a monetary value or contract promise)
  seq: number // Sequence number, possibly used for ordering or identification
  teamCode: string // Team code (e.g., "KT")
  teamName: string // Team name (e.g., "KT")
  weight: string // Player's weight in kilograms
}
export interface WatchPointData {
  homeTeamRank: TeamRank
  visitTeamRank: TeamRank
  homeLineup: LineUp[]
  visitLineup: LineUp[]
  [key: string]: any
}
export interface ChartData {
  subject: string
  key: keyof TeamRank
  A: string | number
  B: string | number
  fullMark: number
}
