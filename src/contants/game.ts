import { GameStatusInterface } from '@/types'

export const GAME_STATUS: GameStatusInterface = {
  BEFORE: { status: 'before', title: '경기 전' },
  PROGRESS: { status: 'progress', title: '경기 중' },
  DONE: { status: 'done', title: '경기 종료' },
  CANCEL: { status: 'cancel', title: '경기 취소' },
}
