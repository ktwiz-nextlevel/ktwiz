import { twMerge } from 'tailwind-merge'
import { GameStatus } from '@/types'
export function Label({
  status = { status: 'before', title: '경기 전' },
}: {
  status?: GameStatus
}) {
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
