import KeyRecords from '@/app/game/regular/boxscore/[[...id]]/key-records'

import { TabNavigation } from '@/components/common/tab-menu/tab-navigation'
import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'
import BatterRecords from './batter-records'
import PitcherRecords from './pitcher-records'
import { ScoreBoard } from './score-board'
import { http } from '@/http'
import { BoxScore } from '@/types'

// 탭 정의 타입
interface Tab {
  title: string
  href: string
  path: string
}

const TABS: Tab[] = [
  { title: '박스스코어', href: '/game/regular/boxscore', path: 'boxscore' },
  {
    title: '관전 포인트',
    href: '/game/regular/watchpoint',
    path: 'watchpoint',
  },
]

// Boxscore 데이터 타입 정의
interface BoxscoreData {
  data: BoxScore
}

// 데이터 fetch 함수
async function fetchBoxscoreData(
  gameDate: string,
  gmkey: string,
): Promise<BoxscoreData> {
  try {
    const response = await http.get<BoxscoreData>(`/game/boxscore`, {
      searchParams: { gameDate, gmkey },
    })
    return response.data
  } catch (error) {
    console.error('데이터를 가져오는 중 오류가 발생했습니다:', error)
    throw error
  }
}

// 페이지 컴포넌트 타입
interface BoxscorePageProps {
  params: Promise<{ id: string[] }>
}

// 메인 페이지 컴포넌트
async function BoxscorePage({ params }: BoxscorePageProps) {
  const { id } = await params
  const gameDate = id ? id[0] : '20241008'
  const gmkey = id ? id[1] : '33331008LGKT0'

  let data: BoxscoreData
  try {
    data = await fetchBoxscoreData(gameDate, gmkey)
  } catch {
    return (
      <div>
        <BreadCrumb />
        <div>게임 정보를 불러올 수 없습니다.</div>
      </div>
    )
  }

  return (
    <div className="w-full">
      <BreadCrumb />
      <ScoreBoard gameDate={gameDate} gmkey={gmkey} />
      <TabNavigation tabs={TABS} activeTab={TABS[0]} />
      <br />
      <KeyRecords gameDate={gameDate} gmkey={gmkey} />
      <BatterRecords
        data={data.data}
        home={data.data.schedule.current.home}
        visit={data.data.schedule.current.visit}
      />
      <PitcherRecords
        data={data.data}
        home={data.data.schedule.current.home}
        visit={data.data.schedule.current.visit}
      />
    </div>
  )
}

export default BoxscorePage

// Breadcrumb 컴포넌트
function BreadCrumb() {
  return (
    <div className="mt-[50px] flex w-full justify-end">
      <Breadcrumbs pages={['HOME', '정규리그', '박스스코어']} />
    </div>
  )
}
