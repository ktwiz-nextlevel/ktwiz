export type Player = {
  ab: number
  bb: number
  bb9: number
  bf: number
  bk: number
  bs: number
  cba: string
  cg: number
  cs: number
  dpp: string
  er: number
  era: string
  err: number
  fo: number
  gamenum: number
  go: number
  gofo: string
  gyear: string
  h1: number
  h2: number
  h3: number
  hit: number
  hit9: number
  hold: number
  hp: number
  hr: number
  ib: number
  inBa: string
  inFlag: string
  inn: number
  inn2: number
  iso: string
  kk: number
  kk9: number
  kkbb: string
  l: number
  lCg: number
  lba: string
  oavg: string
  obp: string
  oops: string
  oslg: string
  outBa: string
  pcode: string
  playerName: string
  playerPrvwImg: string
  po: number
  qs: number
  qsPlus: number
  quit: number
  quitInn2: number
  r: number
  rba: string
  sb: number
  sbTryCn: number
  sf: number
  sh: number
  sho: number
  start: number
  startInn2: number
  sv: number
  svo: number
  teamName: string
  tugucount: number
  tugucountinn: number
  w: number
  wCg: number
  whip: string
  wp: number
  wra: string
}
//getTop3PitcherWins 에 사용되는 Top3playerWin 타입
export interface Top3player {
  data: {
    list: [Player, Player, Player]
  }
}

export interface Top5player {
  data: {
    list: [Player, Player, Player, Player, Player]
  }
}
export type Top5PitcherEras = [Player, Player, Player, Player, Player] | string

export interface TeamERAOverPlayer {
  playerName: string
  teamName: string
  era: string
}
