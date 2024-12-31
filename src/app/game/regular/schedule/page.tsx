import GameCalendar from '@/components/schedule/game-calendar'
import ScoreCardGroup from '@/components/schedule/score-card-group'
import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'

async function SchedulePage() {
  // 월 스케쥴 api
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/game/monthschedule?yearMonth=202409`,
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
      <ScoreCardGroup />
      <GameCalendar />
    </div>
  )
}

export default SchedulePage
