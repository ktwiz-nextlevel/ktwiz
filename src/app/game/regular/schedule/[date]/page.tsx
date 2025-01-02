import Calendar from '@/components/schedule/calendar'
import ScoreCardGroup from '@/components/schedule/score-card-group'
import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'
import { format } from 'date-fns'

async function SchedulePage({ params }: { params: Promise<{ date: string }> }) {
  const { date } = await params
  const currentDate = date || format(new Date(), 'yyyyMM')
  // 월 스케쥴 api
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/game/monthschedule?yearMonth=${currentDate}`,
  )

  if (!res.ok) {
    return <div>게임 정보가 없습니다.</div>
  }

  const data = await res.json()

  return (
    <div className="w-full">
      <div className="my-[50px] flex w-full justify-end">
        <Breadcrumbs pages={['HOME', '정규리그', '경기일정']} />
      </div>
      {currentDate}
      <ScoreCardGroup />
      {data && <Calendar gameData={data.data.list} currentDate={currentDate} />}
    </div>
  )
}

export default SchedulePage
