import BoardHeader from '@/components/boxscore/score-board/board-header'
import { ScoreBoard } from '@/components/boxscore/score-board/score-board'
import Board from '@/components/common/board/board'
import { TabNavigation } from '@/components/common/tab-menu/tab-navigation'
import Title from '@/components/common/title/title'
import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'
import RadarChartComponent from './radar-chart'
const TABS = [
  { title: '박스스코어', href: '/game/regular/boxscore', path: 'boxscore' },
  {
    title: '관전 포인트',
    href: '/game/regular/watchpoint',
    path: 'watchpoint',
  },
]
async function BoxscorePage({ params }: { params: Promise<{ id: string[] }> }) {
  const { id } = await params
  const gameDate = id ? id[0] : '20241008'
  const gmkey = id ? id[1] : '33331008LGKT0'

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/game/boxscore?gameDate=${gameDate}&gmkey=${gmkey} `,
  )
  if (!response.ok) {
    return <div>게임 정보가 없습니다.</div>
  }
  const data = await response.json()

  return (
    <div className="w-full">
      <BreadCrumb />
      <Board>
        <Board.li style="w-full flex justify-center">
          <BoardHeader />
        </Board.li>
        <Board.li style="flex justify-center">
          <>승패무 승률</>
        </Board.li>
      </Board>
      <TabNavigation tabs={TABS} activeTab={TABS[1]} />
      <div className="flex w-full flex-wrap justify-center">
        <SectionWrapper>
          <Title text={`선발 투수 비교`} />
          <p className="my-5 mt-2 font-thin text-gray-400">
            각 팀의 선발 투수의 데이터입니다.
          </p>
          <RadarChartComponent />
        </SectionWrapper>
        <SectionWrapper>
          <Title text={`라인업`} />
          <p className="my-5 mt-2 font-thin text-gray-400">
            각 구단의 라인업을 살펴보세요.
          </p>
        </SectionWrapper>
        <SectionWrapper>
          <Title text={`중계 채널`} />
          <p className="my-5 mt-2 font-thin text-gray-400">
            sportsTV.news.naver.com에서 중계를 시청하세요.
          </p>
        </SectionWrapper>
        <SectionWrapper>
          <Title text={`홈구장 날씨`} />
          <p className="my-5 mt-2 font-thin text-gray-400">
            경기 당일 날씨만 제공됩니다.
          </p>
        </SectionWrapper>
      </div>
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
function SectionWrapper({ children }: { children: React.ReactNode }) {
  return <section className="mt-10 h-[700px] w-1/2">{children}</section>
}
