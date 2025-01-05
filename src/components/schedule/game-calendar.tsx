import Calendar from './calendar'

interface GameCalendarProps {
  currentDate: string
}

export default async function GameCalendar({ currentDate }: GameCalendarProps) {
  // 월 스케쥴 api
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/game/monthschedule?yearMonth=${currentDate}`,
  )

  if (!res.ok) {
    return <div>게임 정보가 없습니다.</div>
  }

  const { data } = await res.json()
  return (
    <div>
      {data && <Calendar gameData={data.list} currentDate={currentDate} />}
    </div>
  )
}
