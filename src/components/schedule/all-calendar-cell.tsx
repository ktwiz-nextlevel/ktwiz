import { GameScheduleData } from '@/types'

interface AllCalendarCellProps {
  cellData: GameScheduleData[]
}

export default function AllCalendarCell({ cellData }: AllCalendarCellProps) {
  return (
    <div className="pt-6">
      {cellData.slice(0, 5).map((el) => (
        <div
          key={el.gmkey}
          className={`mt-0.5 bg-gray-200 text-xs ${(el.home === 'KT' || el.visit === 'KT') && 'font-bold'}`}
        >
          {el.home}
          {el.homeScore}:{el.visit}
          {el.visitScore} [{el.stadium}]
        </div>
      ))}
    </div>
  )
}
