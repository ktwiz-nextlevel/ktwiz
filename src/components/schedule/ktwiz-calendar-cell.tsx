import { GameScheduleData } from '@/types'
import Link from 'next/link'

interface CalendarCellProps {
  cellData: GameScheduleData
  className?: string
}

export default function KtwizCalendarCell({
  cellData,
  className,
}: CalendarCellProps) {
  return (
    <Link
      className={`text-xs ${className} w-full`}
      href={`/game/regular/boxscore/${cellData.gameDate}/${cellData.gmkey}`}
    >
      <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center opacity-60 md:opacity-100">
        <img
          src={cellData.visit === 'KT' ? cellData.homeLogo : cellData.visitLogo}
          alt={`KT logo`}
          className="mx-auto w-16"
        />
        <span className="hidden md:block">
          {cellData.gtime} {cellData.stadium} / {cellData.broadcast}
        </span>
      </div>
      <div className="absolute right-0 top-0">
        <div
          className={`h-0 w-0 border-l-[20px] border-t-[20px] text-sm font-bold md:border-l-[40px] md:border-t-[40px] md:border-l-transparent ${
            cellData.outcome.includes('승')
              ? 'border-[#FE653B]'
              : cellData.outcome.includes('무')
                ? 'border-[#495A8D]'
                : cellData.outcome.includes('패')
                  ? 'border-[#D6D6D6]'
                  : cellData.outcome.includes('취')
                    ? 'border-[#555]'
                    : ''
          }`}
        ></div>
        <span
          className={`absolute right-1.5 top-1 text-xs md:top-2 md:text-sm ${
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
