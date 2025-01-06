import { TabNavigation } from '@/components/common/tab-menu/tab'
import React from 'react'
import { Top3BatterEras, Top3BatterWins } from './best-players'

import { createTeamERAOverview, TeamERAOverview } from './team-era-overview'
import RankingTable from './ranking-table'
import { getTop5battertotal } from './_lib/api'
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
async function RankBatterPage() {
  const top5total = await getTop5battertotal()
  // console.log(top5total)
  return (
    <div className="w-full">
      <TabNavigation tabs={TABS} activeTab={TABS[2]} />
      <section className="pitcher-board mt-10 flex justify-between gap-10">
        <div className="best-players flex items-center gap-2 rounded-lg bg-gray-100 p-6">
          <Top3BatterEras />
          <Top3BatterWins />
        </div>
        <TeamERAOverview
          {...createTeamERAOverview(top5total, '전체 타자 타율')}
        />
      </section>
      <RankingTable />
    </div>
  )
}

export default RankBatterPage
