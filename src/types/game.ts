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
  score10: string // 연장 10회 점수
  score11: string // 연장 11회 점수
  score12: string // 연장 12회 점수
}

export type ScoreboardList = Scoreboard[]
