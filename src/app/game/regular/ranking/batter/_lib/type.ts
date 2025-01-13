export type PitcherERA = {
  playerName: string
  teamName: string
  hra: string // 홈런 허용 평균 (예시)
}
export type ERAType = PitcherERA & Record<string, string | number | undefined>
export type TeamERAOverviewProps = {
  isError: boolean
  title: string
  list?: PitcherERA[]
}

export interface Playerbatter {
  ab: number // 타수
  babip: string // BABIP
  bb: number // 볼넷
  bbhp: number // 볼넷과 몸에 맞는 공의 합
  bbkk: string // 볼넷과 삼진 비율
  bra: string // 타율
  cba: string // CBA (이 타자는 의미를 파악하기 위한 예시로 사용)
  cgopo: string // CGOPO (타자의 상황)
  cs: number // 도루 실패
  fl: number // 플라이 아웃
  gamenum: number // 게임 수
  gd: number // 좋은 플레이 수
  gofo: string // GOFO (상대적 성과)
  gr: number // 게임에서의 총 홈런 수
  gyear: string // 게임 년도
  h1: number // 1루타
  h2: number // 2루타
  h3: number // 3루타
  hit: number // 안타 수
  hp: number // 몸에 맞는 공 수
  hr: number // 홈런
  hra: string // 홈런 타율
  hrab: number // 홈런 비율
  ib: number // 볼넷 이후 타자 출루
  iso: string // ISO
  kk: number // 삼진
  kkab: number // 삼진 비율
  lba: string // LBA (상대적 의미)
  lgopo: string // LGOPO (상대 성과)
  nppa: number // NPPA (선수와 관련된 값)
  ops: string // OPS
  opsPlus: string // OPS 플러스
  pa: number // 타석
  paFlag: string // 타석 플래그
  pcode: string // 선수 코드
  playerName: string // 선수 이름
  playerPrvwImg: string // 선수 이미지 URL
  po: number // 포지션 아웃 수
  rba: string // RBA (타율 관련)
  rbi: number // 타점
  rgopo: string // RGOPO (상대 성과)
  run: number // 득점
  sb: number // 도루
  sbTryCn: number // 도루 시도
  sba: string // 도루 성공률
  sf: number // 희생 플라이
  sh: number // 희생 번트
  slab: number // SLAB (이 타자는 의미를 파악하기 위한 예시)
  slg: string // SLG (장타율)
  spHra: string // SP HRA (상대적 홈런 비율)
  startCn: number // 시작 게임 수
  subCn: number // 교체 게임 수
  teamName: string // 팀 이름
  wrHit: string // 예상 타격
}

export interface ApiResponse {
  data: {
    list: Playerbatter[]
  }
}
