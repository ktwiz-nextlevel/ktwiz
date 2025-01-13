export interface BoxscoreData {
  data: BoxScore
}
export interface BoxScore {
  etcgames: EtcGames[]
  gameFlag: '0' | '1'
  hbatters: Batter[]
  hpitchers: Pitcher[]
  schedule: ScheduleType
  scoreboard: ScoreboardList
  vbatters: Batter[]
  vpitchers: Pitcher[]
}
export interface EtcGames {
  gday: string
  gmkey: string
  how: string
  result: string
  seq: number
}
export type EtcKey =
  | '결승타'
  | '홈런'
  | '3루타'
  | '2루타'
  | '1루타'
  | '볼넷'
  | '사구'
  | '포일'
  | '희생번트'
  | '도루'
  | '실책'
  | '병살타'
  | '심판'
  | '주루사'
  | '폭투'
  | '보크'

export interface Batter {
  ab: number /** 타수 (At-Bats) */
  accmAb: number /** 누적 타수 (Accumulated At-Bats) */
  accmHit: number /** 누적 안타 (Accumulated Hits) */
  changeinn: string /** 이닝 변경 */
  gday: string /** 경기 날짜 (Game Day) */
  gmkey: string /** 경기 키 (Game Key) */
  hit: number /** 안타 여부 (Hits in Game) */
  il1: string /** 각 이닝 별 결과 */
  il2: string
  il3: string
  il4: string
  il5: string
  il6: string
  il7: string
  il8: string
  il9: string
  il10: string
  il11: string
  il12: string
  il13: string
  il14: string
  il15: string
  il16: string
  il17: string
  il18: string
  il19: string
  il20: string
  il21: string
  il22: string
  il23: string
  il24: string
  il25: string
  /** 각 이닝 별 타격 결과 */
  inn1: string
  inn2: string
  inn3: string
  inn4: string
  inn5: string
  inn6: string
  inn7: string
  inn8: string
  inn9: string
  inn10: string
  inn11: string
  inn12: string
  inn13: string
  inn14: string
  inn15: string
  inn16: string
  inn17: string
  inn18: string
  inn19: string
  inn20: string
  inn21: string
  inn22: string
  inn23: string
  inn24: string
  inn25: string
  /** 선수 이름 (Player Name) */
  name: string
  /** 이번 타석 (Current At-Bat Turn) */
  oneturn: string
  /** 선수 코드 (Player Code) */
  pcode: string
  /** 포지션 (Position) */
  position: string
  /** 타점 (Runs Batted In) */
  rbi: number
  /** 득점 (Runs) */
  run: number
  /** 누적 총루 (Total Bases) */
  tb: string
  /** 타순 (Batting Order) */
  turn: string
}
export interface Pitcher {
  ab: number // 타석 수
  accmEr: number // 누적 자책점
  accmInn2: number // 누적 이닝 (2/3 형식)
  bbhp: number // 볼넷 + 몸에 맞는 공
  bf: number // 상대 타자 수
  changeinn: string // 변경된 이닝 (예시에서 빈 문자열)
  er: number // 자책점
  game: number // 경기 수
  gday: string // 경기 날짜 (YYYYMMDD 형식)
  gmkey: string // 경기 키
  hit: number // 안타
  hr: number // 홈런
  inn: string // 이닝 (문자열 형식)
  kk: number // 삼진
  l: number // 패전 수
  name: string // 투수 이름
  pa: number // 타석 수 (타격 기회)
  pcode: string // 선수 코드
  pos: string // 포지션
  tb: string // 팀 약어
  w: number // 승리 수
  wls: 'W' | 'L' | 'S' // 승패 (W: 승, L: 패)
  s: number
  r: number
}
export interface GameSchedule {
  broadcast: string // 방송사
  cancelFlag: '0' | '1' // 경기 취소 여부 ('0': 취소 안됨, '1': 취소됨)
  crowdCn: number // 관중 수
  endFlag: '0' | '1' // 경기 종료 여부 ('0': 진행 중, '1': 종료됨)
  game: 'current' | 'prev' | 'next' // 경기 상태
  gameDate: number // 경기 날짜 (YYYYMMDD 형식)
  gday: number // 경기 일 (일자)
  gmkey: string // 경기 고유 키
  gmonth: number // 경기 월
  gtime: string // 경기 시간 (HH:mm 형식)
  gyear: string // 경기 연도
  home: string // 홈팀 이름
  homeKey: string // 홈팀 키
  homeLogo: string // 홈팀 로고 URL
  hscore: number // 홈팀 점수
  stadium: string // 경기장 이름
  stadiumKey: string // 경기장 키
  visit: string // 원정팀 이름
  visitKey: string // 원정팀 키
  visitLogo: string // 원정팀 로고 URL
  vscore: number // 원정팀 점수
}

export interface ScheduleType {
  current: GameSchedule
  prev: GameSchedule
  next: GameSchedule
}
export type Scoreboard = {
  ballfour: string // 볼넷 수
  bhome: number // 홈팀 여부 (1: 홈팀, 0: 원정팀)
  bhomeName: string // 팀 이름
  error: string // 실책 수
  gameDate: number // 경기 날짜 (YYYYMMDD 형식)
  hit: string // 안타 수
  run: string // 득점
  score1: string // 1회 점수
  score2: string // 2회 점수
  score3: string // 3회 점수
  score4: string // 4회 점수
  score5: string // 5회 점수
  score6: string // 6회 점수
  score7: string // 7회 점수
  score8: string // 8회 점수
  score9: string // 9회 점수
  score10?: string // 연장 10회 점수
  score11?: string // 연장 11회 점수
  score12?: string // 연장 12회 점수
}

export type ScoreboardList = Scoreboard[]

export interface GameStatusInterface {
  BEFORE: GameStatus
  PROGRESS: GameStatus
  DONE: GameStatus
  CANCEL: GameStatus
}
export interface GameStatus {
  status: GameStatusName
  title: '경기 전' | '경기 중' | '경기 종료' | '경기 취소'
}

export type GameStatusName = 'before' | 'progress' | 'done' | 'cancel'
export interface GameData {
  gameDate: string | Date
  cancelFlag: '0' | '1'
  endFlag: '0' | '1'
}

// 게임 데이터 타입 정의
export interface GameScheduleData {
  broadcast: string
  displayDate: string
  gameDate: number
  gmkey: string
  gtime: string
  home: string
  homeKey: string
  homeLogo: string
  homeScore: number
  matchTeamCode: string
  matchTeamName: string
  outcome: string
  stadium: string
  stadiumKey: string
  status: string
  visit: string
  visitKey: string
  visitLogo: string
  visitScore: number
}

// 경기정보 타입 정의
export interface GameInfo {
  displayDate: string // 경기 날짜 (표시용) - YYYYMMDD 형식
  game: string // 경기 상태 - 현재 경기 (예: "current")
  gameDate: number // 경기 날짜 (숫자형) - YYYYMMDD 형식
  gday: number // 경기 일자 - 일(day) 정보
  gmkey: string // 경기 고유 키
  gmonth: number // 경기 월 - 월(month) 정보
  gtime: string // 경기 시간 - HH:mm 형식
  gyear: string // 경기 연도
  home: string // 홈팀 코드
  homeDecision: string // 홈팀 경기 결과 (승리, 패배 등)
  homeDecisionPitcher: string // 홈팀 경기 결과 투수
  homeFullname: string // 홈팀 이름
  homeKey: string // 홈팀 키
  homeLogo: string // 홈팀 로고 이미지 URL
  homeScore: number // 홈팀 점수
  homeStarter: string // 홈팀 선발 투수
  matchTeamCode: string // 대진팀 코드
  matchTeamName: string // 대진팀 이름
  outcome: string // 경기 결과 (현재 팀 기준, 승/패)
  stadium: string // 경기장 이름
  stadiumKey: string // 경기장 코드
  status: string // 경기 상태 코드 (예: "3" - 경기 종료)
  visit: string // 원정팀 코드
  visitDecision: string // 원정팀 경기 결과
  visitDecisionPitcher: string // 원정팀 경기 결과 투수
  visitFullname: string // 원정팀 이름
  visitKey: string // 원정팀 키
  visitLogo: string // 원정팀 로고 이미지 URL
  visitScore: number // 원정팀 점수
  visitStarter: string // 원정팀 선발 투수
}
