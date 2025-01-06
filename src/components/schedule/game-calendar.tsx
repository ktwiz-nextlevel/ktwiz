import Calendar from './calendar'

interface GameCalendarProps {
  currentDate: string
}

export default async function GameCalendar({ currentDate }: GameCalendarProps) {
  // kt 월 스케쥴 api
  const ktRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/game/monthschedule?yearMonth=${currentDate}`,
  )

  // 전체 경기 월 스케쥴 api
  const allRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/game/allgameschedule?yearMonth=${currentDate}`,
  )

  if (!ktRes.ok || !allRes.ok) {
    return <div>게임 정보가 없습니다.</div>
  }

  const { data: ktData } = await ktRes.json()
  const { data: allData } = await allRes.json()
  return (
    <div>
      {ktData && (
        <Calendar
          ktGameData={ktData.list}
          allGameData={allData.list}
          currentDate={currentDate}
        />
      )}
    </div>
  )
}
