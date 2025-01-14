import { TabNavigation } from '@/components/common/tab-menu/tab'
import React, { Suspense } from 'react'

import { createTeamERAOverview, TeamERAOverview } from './team-era-overview'
import RankingTable from './ranking-table'

import { TABS } from '../team/_lib/constants'
import { Top3BatterHra } from './top3-batter-hra'
import { Top3BatterHr } from './top3-batter-hr'
import { http } from '@/http'
import { ApiResponse, Playerbatter } from './_lib/type'
import { Player, Top3player } from '@/types'

async function RankBatterPage() {
  const currentYear = 2024
  let top5total: Playerbatter[]
  let top3Hra: [Player, Player, Player]
  let top3hr: [Player, Player, Player]
  try {
    const response = await http.get<ApiResponse>(
      `/game/rank/batter/total/top5`,
      {
        cache: 'force-cache',
      },
    )
    top5total = response.data.data.list
  } catch {
    return (
      <div className="mb-[250px] w-full">
        <TabNavigation tabs={TABS} activeTab={TABS[2]} />
        <section className="pitcher-board mt-10 flex flex-wrap justify-between gap-10">
          정보가 없습니다.
        </section>
      </div>
    )
  }
  try {
    const response = await http.get<Top3player>('/game/rank/batter/hra/top3', {
      searchParams: { gyear: currentYear },
      cache: 'force-cache',
    })
    top3Hra = response.data.data.list
  } catch {
    return <div> 데이터가 없습니다.</div>
  }

  try {
    const response = await http.get<Top3player>('/game/rank/batter/hr/top3', {
      searchParams: { gyear: currentYear },
      cache: 'force-cache',
    })

    top3hr = response.data.data.list
  } catch {
    return <div> 데이터가 없습니다.</div>
  }

  return (
    <div className="mb-[250px] w-full">
      <TabNavigation tabs={TABS} activeTab={TABS[2]} />
      <section className="pitcher-board mt-10 flex flex-wrap justify-between gap-10">
        <div className="best-players flex items-center gap-2 rounded-lg bg-gray-100 p-6">
          <Suspense fallback={<div>Loading...</div>}>
            <Top3BatterHra data={top3Hra} />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Top3BatterHr data={top3hr} />
          </Suspense>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <TeamERAOverview
            {...createTeamERAOverview(top5total, '전체 타자 타율')}
          />
        </Suspense>
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <RankingTable />
      </Suspense>
    </div>
  )
}

export default RankBatterPage
