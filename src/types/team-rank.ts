export type TeamRank = {
  rank: number // 순위
  teamName: string // 팀 이름
  games: number // 경기 수
  wins: number // 승리 수
  losses: number // 패배 수
  draws: number // 무승부 수
  winRate: number // 승률
  atBats: number // 타석 수
  streak: string // 연승/연패 기록 (예: '3W', '2L')
  onBasePercentage: number // 출루율
  sluggingPercentage: number // 장타율
  battingAverage: number // 타율
  earnedRunAverage: number // 평균자책점
  runsScored: number // 득점
  runsAllowed: number // 실점
  homeRuns: number // 홈런 수
}
