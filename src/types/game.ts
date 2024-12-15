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
