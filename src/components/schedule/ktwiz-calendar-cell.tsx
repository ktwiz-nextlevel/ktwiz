import { GameScheduleData } from '@/types'
import Link from 'next/link'

interface CalendarCellProps {
  cellData: GameScheduleData
  gameOutcomes: string
}

export default function KtwizCalendarCell({
  cellData,
  gameOutcomes,
}: CalendarCellProps) {
  return (
    <Link
      className="mt-2 text-xs"
      href={`/game/regular/boxscore/${cellData.gameDate}/${cellData.gmkey}`}
    >
      <div className="mt-2 text-center">
        <img
          src={cellData.visit === 'KT' ? cellData.homeLogo : cellData.visitLogo}
          alt={`KT logo`}
          className="mx-auto w-16"
        />
        <span>
          {cellData.gtime} {cellData.stadium} / {cellData.broadcast}
        </span>
      </div>
      <div className="absolute right-0 top-0">
        <div
          className={`h-0 w-0 border-l-[40px] border-t-[40px] border-l-transparent text-sm font-bold ${
            gameOutcomes.includes('승')
              ? 'border-t-[#FE653B]'
              : gameOutcomes.includes('무')
                ? 'border-[#495A8D]'
                : gameOutcomes.includes('패')
                  ? 'border-t-[#D6D6D6]'
                  : gameOutcomes.includes('취')
                    ? 'border-t-[#555]'
                    : ''
          }`}
        ></div>
        <span
          className={`absolute right-1.5 top-2 ${
            gameOutcomes.includes('패') && !gameOutcomes.includes('/')
              ? 'text-[#222]'
              : 'text-white'
          }`}
        >
          {gameOutcomes}
        </span>
      </div>
    </Link>
  )
}
