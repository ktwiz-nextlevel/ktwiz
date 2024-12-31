import { TabNavigation } from '@/components/common/tab-menu/tab-navigation'
import { Top3PitcherEras, Top3PitcherWins } from './best-players'

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

async function RankPitcherPage() {
  return (
    <div className="w-full">
      <TabNavigation tabs={TABS} activeTab={TABS[1]} />

      <div className="pitcher-board mt-10 flex justify-between">
        <section className="best-players flex gap-2 rounded-lg bg-gray-100 p-6">
          <Top3PitcherEras />
          <Top3PitcherWins />
        </section>
        {/* TeamERAOverview */}
        <div className="">TeamERAOverview</div>
      </div>
    </div>
  )
}

export default RankPitcherPage
