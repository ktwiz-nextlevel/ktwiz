export interface ChartData {
  subject: string
  key: keyof TeamRank
  A: string | number
  B: string | number
  fullMark: number
}

export interface WatchPointData {
  gameScore: GameScore
  homeLineup: Lineup[]
  homePitcher: PitcherStats
  homeTeamRank: TeamRank
  homeTeamWinLose: WinLoseStats
  schedule: Schedule
  visitLineup: Lineup[]
  visitPitcher: PitcherStats
  visitTeamRank: TeamRank
  visitTeamWinLose: WinLoseStats
}

interface GameScore {
  bhomeName: string
  displayDate: string
  endFlag: string
  gameDate: number
  gmKey: string
  gtime: string
  hOutcome: string
  home: string
  homeKey: string
  homeLogo: string
  homeYn: string
  hpcode: string
  hscore: number
  inning: number
  stadium: string
  stadiumKey: string
  tbSc: string
  vOutcome: string
  visit: string
  visitKey: string
  visitLogo: string
  vpcode: string
  vscore: number
}

export interface Lineup {
  backnum: string
  birth: string
  career: string
  curBra: string
  curHra: string
  height: string
  hittype: string
  money: string
  pcode: string
  playerName: string
  playerPrvwImg: string
  pos: string
  posidName: string
  position: string
  promise: string
  seq: number
  teamCode: string
  teamName: string
  weight: string
}

interface PitcherStats {
  babip: string
  bb: number
  bf: number
  bk: number
  bs: number
  er: number
  era: string
  err: number
  fip: string
  fo: number
  gamenum: number
  go: number
  gyear: string
  havg: string
  hit: number
  hold: number
  hp: number
  hr: number
  ib: number
  inn2: number
  innDisplay: string
  kbb: string
  kk: number
  l: number
  oavg: string
  pcode: string
  playerName: string
  qs: number
  qsPlus: number
  r: number
  ravg: string
  sf: number
  sh: number
  sho: number
  start: number
  sv: number
  svo: number
  tugucount: number
  turfSave: number
  w: number
  wCg: number
  war: string
  whip: string
  winShares: string
  wl: string
  wp: number
  wra: string
}

interface TeamRank {
  ab: number
  bra: string
  continue1: string
  drawn: number
  er: number
  era: string
  game: number
  gameFlag: number
  gb: string
  gyear: string
  hr: number
  hra: string
  lastrank: number
  lose: number
  lra: string
  r: number
  rank: number
  run: number
  sb: number
  teamCode: string
  teamName: string
  teamNameEng: string
  win: number
  wra: string
}

interface WinLoseStats {
  drawn: number
  lose: number
  teamCode: string
  teamName: string
  vsTeamCode: string
  win: number
}

interface Schedule {
  current: GameSchedule
  next: GameSchedule
  prev: GameSchedule
}

interface GameSchedule {
  broadcast: string
  cancelFlag: string
  crowdCn: number
  endFlag: string
  game: string
  gameDate: number
  gday: number
  gmkey: string
  gmonth: number
  gtime: string
  gyear: string
  home: string
  homeKey: string
  hscore: number
  stadium: string
  stadiumKey: string
  visit: string
  visitKey: string
  vscore: number
}
