import { GameScheduleData } from '@/types'
import Link from 'next/link'

interface CalendarCellProps {
  cellData: GameScheduleData
}

export default function KtwizCalendarCell({ cellData }: CalendarCellProps) {
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
            cellData.outcome.includes('승')
              ? 'border-t-[#FE653B]'
              : cellData.outcome.includes('무')
                ? 'border-[#495A8D]'
                : cellData.outcome.includes('패')
                  ? 'border-t-[#D6D6D6]'
                  : cellData.outcome.includes('취')
                    ? 'border-t-[#555]'
                    : ''
          }`}
        ></div>
        <span
          className={`absolute right-1.5 top-2 ${
            cellData.outcome.includes('패') && !cellData.outcome.includes('/')
              ? 'text-[#222]'
              : 'text-white'
          }`}
        >
          {cellData.outcome}
        </span>
      </div>
    </Link>
  )
}
