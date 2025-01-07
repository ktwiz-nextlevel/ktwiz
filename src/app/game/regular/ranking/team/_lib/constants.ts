import { TeamRank } from '@/types/team-rank'
import { PartialVsTeamTableData, Team } from './team.type'

export const TABS = [
  { title: '팀순위', href: '/game/regular/ranking/team', path: 'team' },
  {
    title: '투수순위',
    href: '/game/regular/ranking/pitcher',
    path: 'pitcher',
  },
  {
    title: '타자순위',
    href: '/game/regular/ranking/batter',
    path: 'batter',
  },
]
export const TH_KEY: {
  title: string
  key: keyof TeamRank
}[] = [
  { title: '순위', key: 'rank' },
  { title: '팀명', key: 'teamName' },
  { title: '경기 수', key: 'game' },
  { title: '승', key: 'win' },
  { title: '패', key: 'lose' },
  { title: '무', key: 'drawn' },
  { title: '승률', key: 'wra' },
  { title: '타수', key: 'ab' },
  { title: '연속', key: 'continue1' },
  { title: '출루율', key: 'bra' },
  { title: '장타율', key: 'hra' },
  { title: '타율', key: 'era' }, // 'era'가 타율 대신 사용됩니다.
  { title: '자책점', key: 'er' },
  { title: '득점', key: 'r' },
  { title: '실점', key: 'run' }, // 실점은 'run'입니다.
  { title: '홈런', key: 'hr' },
]

export const TH_KEY_PITCHER = [
  { title: '팀명', key: 'teamName' },
  { title: '타석', key: 'pa' },
  { title: '타수', key: 'ab' },
  { title: '희타', key: 'sh' },
  { title: '희비', key: 'sf' },
  { title: '볼넷', key: 'bb' },
  { title: '고의4구', key: 'ib' },
  { title: '사구', key: 'hp' },
  { title: '탈삼진', key: 'kk' },
  { title: '9이닝당 탈삼진', key: 'kk9' },
  { title: '폭투', key: 'wp' },
  { title: '보크', key: 'bk' },
  { title: '실점', key: 'r' },
  { title: '자책점', key: 'er' },
  { title: 'ERA', key: 'era' },
  { title: '블론세이브', key: 'bs' },
  { title: '세이브', key: 'sv' },
  { title: '홀드', key: 'hold' },
  { title: 'WHIP', key: 'whip' },
  { title: '피안타율', key: 'oavg' },
  { title: '출루율', key: 'obp' },
  { title: '장타율', key: 'oslg' },
  { title: 'OPS', key: 'oops' },
  { title: 'QS', key: 'qs' },
  { title: '완투', key: 'cg' },
  { title: '완봉', key: 'sho' },
  { title: '투구수', key: 'tugucount' },
  { title: '이닝당 투구수', key: 'tugucountinn' },
]

export const TH_KEY_BATTER = [
  { title: '팀명', key: 'teamName' },
  { title: '안타', key: 'hit' },
  { title: '2루타', key: 'h2' },
  { title: '3루타', key: 'h3' },
  { title: '홈런', key: 'hr' },
  { title: '타점', key: 'rbi' },
  { title: '득점', key: 'run' }, // 추가됨
  { title: '도루', key: 'sb' },
  { title: '도루 성공률', key: 'sba' }, // 추가됨
  { title: '볼넷', key: 'bb' },
  { title: '고의4구', key: 'ib' },
  { title: '사구', key: 'hp' },
  { title: '삼진', key: 'kk' },
  { title: '병살타', key: 'gd' },
  { title: '장타율', key: 'slg' },
  { title: '출루율', key: 'bra' },
  { title: 'OPS', key: 'ops' },
  { title: 'ISO', key: 'iso' }, // 추가됨
  { title: '실책', key: 'err' },
  { title: 'DER', key: 'der' }, // 추가됨
  { title: '타석', key: 'pa' }, // 추가됨
  { title: '타수', key: 'ab' }, // 추가됨
  { title: '타율', key: 'hra' },
]
//승-패-무
export const TH_KEY_TEAM: {
  title: string
  key: Team | 'name'
}[] = [
  { title: '팀명', key: 'name' },
  { title: '키움 ', key: 'WO' },
  { title: '삼성 ', key: 'SS' },
  { title: 'SSG ', key: 'SK' },
  { title: '두산 ', key: 'OB' },
  { title: 'NC', key: 'NC' },
  { title: '롯데 ', key: 'LT' },
  { title: 'LG ', key: 'LG' },
  { title: 'KT ', key: 'KT' },
  { title: 'KIA ', key: 'HT' },
  { title: '한화 ', key: 'HH' },
]
