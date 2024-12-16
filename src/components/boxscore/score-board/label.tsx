import { twMerge } from 'tailwind-merge'
import { GameData, GameSchedule, GameStatus } from '@/types'
import { GAME_STATUS } from '@/contants/game'
function checkFlag(flag: '0' | '1') {
  return flag === '1'
}
const formatDate = (dateString: string) => {
  if (dateString.length !== 8) {
    new Error('Invalid dateString format not YYYYMMDD')
  }
  return dateString.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3')
}

function getGameStatus({
  gameDate,
  cancelFlag,
  endFlag,
}: GameData): GameStatus {
  if (checkFlag(cancelFlag)) {
    return GAME_STATUS.CANCEL
  }
  const currentDate = new Date()
  gameDate = new Date(formatDate(gameDate as string))

  if (currentDate < gameDate) {
    return GAME_STATUS.BEFORE
  }
  if (currentDate === gameDate) {
    return checkFlag(endFlag) ? GAME_STATUS.DONE : GAME_STATUS.PROGRESS
  }
  return GAME_STATUS.DONE
}
export function Label({ data }: { data: GameSchedule }) {
  let status: GameStatus = getGameStatus({
    gameDate: data.gameDate.toString(),
    cancelFlag: data.cancelFlag,
    endFlag: data.cancelFlag,
  })

  const statusStyles: Record<GameStatus['status'], string> = {
    before: 'bg-gray-200 text-gray-500',
    progress: 'bg-[--main-red-color] text-white',
    done: 'bg-gray-400 text-white',
    cancel: 'bg-gray-400 text-white',
  }

  return (
    <span
      className={twMerge(
        'rounded-xl px-3 py-1 text-xs',
        statusStyles[status.status],
      )}
    >
      {status.title}
    </span>
  )
}
