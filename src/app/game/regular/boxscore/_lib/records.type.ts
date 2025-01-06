import { Batter, Pitcher } from '@/types'

export const TABLE_TITLE_KEY_BATTER: {
  title: string
  key: keyof Batter | 'avg'
}[] = [
  { title: '타순', key: 'oneturn' },
  { title: '포지션', key: 'position' },
  { title: '이름', key: 'name' },
  { title: '1', key: 'inn1' },
  { title: '2', key: 'inn2' },
  { title: '3', key: 'inn3' },
  { title: '4', key: 'inn4' },
  { title: '5', key: 'inn5' },
  { title: '6', key: 'inn6' },
  { title: '7', key: 'inn7' },
  { title: '8', key: 'inn8' },
  { title: '9', key: 'inn9' },
  { title: '10', key: 'inn10' },
  { title: '11', key: 'inn11' },
  { title: '12', key: 'inn12' },
  { title: '타수', key: 'ab' },
  { title: '득점', key: 'run' },
  { title: '안타', key: 'hit' },
  { title: '타점', key: 'rbi' },
  { title: '타율', key: 'avg' },
]

export const TABLE_TITLE_KEY_PITCHER: {
  title: string
  key: keyof Pitcher | 'result' | 'era'
}[] = [
  { title: '선수', key: 'name' },
  { title: '등판', key: 'changeinn' },
  { title: '결과', key: 'result' },
  { title: '승', key: 'w' },
  { title: '패', key: 'l' },
  { title: '세', key: 's' },
  { title: '이닝', key: 'inn' },
  { title: '타자', key: 'pa' },
  { title: '타구수', key: 'bf' },
  { title: '타수', key: 'ab' },
  { title: '피안타', key: 'hit' },
  { title: '피홈런', key: 'hr' },
  { title: '사구', key: 'bbhp' },
  { title: '삼진', key: 'kk' },
  { title: '실점', key: 'r' },
  { title: '자책', key: 'er' },
  { title: '평균 자책점', key: 'era' },
]
