import { TabNavigation } from '@/components/common/tab-menu/tab-navigation'
import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'
import LineChartComponent from './charts'
import Title from '@/components/common/title/title'

const TABS = [
  { title: '팀순위', href: '/game/regular/ranking/team', path: 'team' },
  {
    title: '투수순위',
    href: '/game/regular/ranking/pitcher',
    path: 'pitcher',
  },
  {
    title: '타자순위',
    href: '/game/regular/ranking/batter',
    path: 'batter',
  },
  {
    title: '관중현황',
    href: '/game/regular/ranking/crowd',
    path: 'crowd',
  },
]

function RankingPage() {
  return (
    <div className="w-full">
      <TabNavigation tabs={TABS} activeTab={TABS[0]} />
      <Rank>
        <Title text={`2024 시즌 팀 순위`} />
        <p className="mt-2 font-thin text-gray-400">
          올해 kt wiz 순위를 살펴보세요.
        </p>
        <LineChartComponent />
      </Rank>

      {/* 
      Graph 
      Records
      Table
      TeamPitcherStats
      TeamBatterStats
      TeamMatchupResults
      */}
    </div>
  )
}

export default RankingPage

function Rank({ children }: { children: React.ReactNode }) {
  return <div className="mt-10 h-[1000px] w-full">{children}</div>
}
