export type TeamRank = {
  rank: number // 순위
  teamName: string // 팀명
  game: number // 경기 수
  win: number // 승
  lose: number // 패
  drawn: number // 무
  wra: string // 승률
  ab: number // 타수
  continue1: string // 연속
  bra: string // 출루율
  hra: string // 장타율
  era: string // 타율 (대체용으로 사용)
  er: number // 자책점
  r: number // 득점
  run: number // 실점
  hr: number // 홈런
}
