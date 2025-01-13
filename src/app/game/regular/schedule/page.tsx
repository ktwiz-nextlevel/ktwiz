import GameCalendar from '@/components/schedule/game-calendar'
import ScoreCardGroup from '@/components/schedule/score-card-group'
import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'

async function SchedulePage({ params }: { params: Promise<{ date: string }> }) {
  const { date } = await params
  const currentDate = date || '202410'

  return (
    <div className="w-full">
      <div className="my-[50px] flex w-full justify-end">
        <Breadcrumbs pages={['HOME', '정규리그', '경기일정']} />
      </div>
      {/* 최근 경기 */}
      <ScoreCardGroup />
      {/* 게임 스케쥴 달력 */}
      <GameCalendar currentDate={currentDate} />
    </div>
  )
}

export default SchedulePage
