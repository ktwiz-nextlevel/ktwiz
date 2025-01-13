export type Team =
  | 'HH'
  | 'KT'
  | 'HT'
  | 'LG'
  | 'LT'
  | 'NC'
  | 'OB'
  | 'SK'
  | 'SS'
  | 'WO'
  | 'KIA'
export interface VsTeam {
  drawn: number
  lose: number
  teamCode: Team
  teamName: string
  vsTeamCode: Team
  win: number
}

export type TeamStats = Record<Team, string | undefined>

export interface VsTeamTableData extends TeamStats {
  name: string
  key: string
}

export type PartialVsTeamTableData = Partial<VsTeamTableData>

export type TeamDataArray = PartialVsTeamTableData[]

export type RawData = {
  date: string
  rank: string
}
export type RawDataType = RawData & Record<string, string | number | undefined>

export type AdaptedData = {
  date: string
  ranking: number
}

export interface TeamRank {
  ab: number // 타석 수
  bra: string // 타율
  continue1: string // 연속 게임
  drawn: number // 무승부 수
  er: number // 실점 수
  era: string // 평균자책점
  game: number // 경기 수
  gameFlag: number // 게임 플래그 (필요시 사용)
  gb: string // 경기 차
  gyear: string // 연도
  hr: number // 홈런 수
  hra: string // 홈런 대비 타율
  lastrank: number // 이전 순위
  lose: number // 패배 수
  lra: string // 패배 대비 실점
  r: number // 득점 수
  rank: number // 순위
  run: number // 팀 점수
  sb: number // 도루 수
  teamCode: string // 팀 코드
  teamName: string // 팀 이름 (한글)
  teamNameEng: string // 팀 이름 (영문)
  win: number // 승리 수
  wra: string // 승리 대비 실점
}

export interface TeamRankResponse {
  data: {
    list: TeamRank[] // 팀 순위 데이터 리스트
  }
}

export interface TeampitchingData {
  ab: number
  bb: number
  bb9: number
  bbhp: number
  bk: number
  bs: number
  cg: number
  cs: number
  er: number
  era: string
  err: number
  gd: number
  gyear: string
  h2: number
  h3: number
  hit: number
  hit9: number
  hold: number
  hp: number
  hr: number
  ib: number
  inn: number
  iso: string
  kk: number
  kk9: number
  oavg: string
  obp: string
  oops: string
  oslg: string
  pa: number
  qs: number
  r: number
  sb: number
  sf: number
  sh: number
  sho: number
  sv: number
  teamCode: string
  teamName: string
  tugucount: number
  tugucountinn: number
  whip: string
  wp: number
  wra: string
}

export interface TeampitchingResponse {
  data: {
    list: TeampitchingData[]
  }
}
export interface TeamBattingData {
  ab: number
  bb: number
  bbhp: number
  bbkk: string
  bra: string
  cs: number
  der: string
  err: number
  gd: number
  gyear: string
  h2: number
  h3: number
  hit: number
  hp: number
  hr: number
  hra: string
  hrab: number
  ib: number
  iso: string
  kk: number
  kkab: number
  ops: string
  pa: number
  rbi: number
  run: number
  sb: number
  sbTryCn: number
  sba: string
  sf: number
  sh: number
  slab: number
  slg: string
  teamCode: string
  teamName: string
}

export interface TeamBattingResponse {
  data: {
    list: TeamBattingData[]
  }
}

export interface TeamVSResponse {
  data: {
    list: VsTeam[]
  }
}
