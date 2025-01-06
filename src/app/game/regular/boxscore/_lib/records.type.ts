import { Batter } from '@/types'

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
