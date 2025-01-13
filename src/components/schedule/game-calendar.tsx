import { http } from '@/http'
import Calendar from './calendar'

interface GameCalendarProps {
  currentDate: string
}

export default async function GameCalendar({ currentDate }: GameCalendarProps) {
  try {
    // kt 월 스케쥴 API 호출
    const { data: ktData } = await http.get('/game/monthschedule', {
      searchParams: { yearMonth: currentDate },
    })

    // 전체 경기 월 스케쥴 API 호출
    const { data: allData } = await http.get('/game/allgameschedule', {
      searchParams: { yearMonth: currentDate },
    })

    // 데이터가 없을 경우
    if (!ktData || !allData) {
      return <div>게임 정보가 없습니다.</div>
    }

    return (
      <div>
        <Calendar
          ktGameData={ktData.data.list}
          allGameData={allData.data.list}
          currentDate={currentDate}
        />
      </div>
    )
  } catch (error) {
    console.error('Error fetching game schedules:', error)
    return <div>게임 정보를 불러오는 중 오류가 발생했습니다.</div>
  }
}
