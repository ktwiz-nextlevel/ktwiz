import KeyRecords from '@/components/boxscore/key-records/key-records'
import { ScoreBoard } from '@/app/game/regular/boxscore/[[...id]]/score-board'
import { TabNavigation } from '@/components/boxscore/score-board/tab-navigation'
import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'

async function BoxscorePage({ params }: { params: Promise<{ id: string[] }> }) {
  const { id } = await params
  const gameDate = id ? id[0] : '20241008'
  const gmkey = id ? id[1] : '33331008LGKT0'
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/game/boxscore?gameDate=${gameDate}&gmkey=${gmkey} `,
  )
  if (!response.ok) {
    return (
      <div>
        <BreadCrumb />
        게임 정보가 없습니다.
      </div>
    )
  }
  const data = await response.json()
  const TABS = [
    { title: '박스스코어', href: '/game/regular/boxscore', path: 'boxscore' },
    {
      title: '관전 포인트',
      href: '/game/regular/watchpoint',
      path: 'watchpoint',
    },
  ]
  return (
    <div className="w-full">
      <BreadCrumb />
      <ScoreBoard gameDate={gameDate} gmkey={gmkey} />
      <TabNavigation tabs={TABS} activeTab={TABS[0]} />
      <KeyRecords />
    </div>
  )
}

export default BoxscorePage

function BreadCrumb() {
  return (
    <div className="mt-[50px] flex w-full justify-end">
      <Breadcrumbs pages={['HOME', '정규리그', '박스스코어']} />
    </div>
  )
}
