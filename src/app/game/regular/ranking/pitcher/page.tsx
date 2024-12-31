import { TabNavigation } from '@/components/common/tab-menu/tab-navigation'
import { Top3PitcherEras, Top3PitcherWins } from './best-players'

import { Top5PitcherEras } from '@/types'
import { TeamERAOverview } from './(component)/team-era-overview'
import { createTeamERAOverview } from './(lib)/adapter'
import { getTop5PitcherEras } from './(lib)/api'

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
  const top5PitcherEras: Top5PitcherEras = await getTop5PitcherEras()
  return (
    <div className="w-full">
      <TabNavigation tabs={TABS} activeTab={TABS[1]} />

      <section className="pitcher-board mt-10 flex justify-between gap-10">
        <div className="best-players flex gap-2 rounded-lg bg-gray-100 p-6">
          <Top3PitcherEras />
          <Top3PitcherWins />
        </div>
        <TeamERAOverview
          {...createTeamERAOverview(top5PitcherEras, '전체 투수 평균자책점')}
        />
      </section>
    </div>
  )
}

export default RankPitcherPage
