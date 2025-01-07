import { TabNavigation } from '@/components/common/tab-menu/tab'
import React from 'react'

import { createTeamERAOverview, TeamERAOverview } from './team-era-overview'
import RankingTable from './ranking-table'
import { getTop5battertotal } from './_lib/api'
import { TABS } from '../team/_lib/constants'
import { Top3BatterHra } from './top3-batter-hra'
import { Top3BatterHr } from './top3-batter-hr'

async function RankBatterPage() {
  const top5total = await getTop5battertotal()
  // console.log(top5total)
  return (
    <div className="mb-[250px] w-full">
      <TabNavigation tabs={TABS} activeTab={TABS[2]} />
      <section className="pitcher-board mt-10 flex justify-between gap-10">
        <div className="best-players flex items-center gap-2 rounded-lg bg-gray-100 p-6">
          <Top3BatterHra />
          <Top3BatterHr />
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
