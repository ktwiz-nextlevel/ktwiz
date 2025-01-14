import { TabNavigation as TabMenu } from '@/components/common/tab-menu/tab'

import RankingTable from './ranking-table'
import { Top3PitcherWins } from './top3-pitcher-wins'
import { TABS } from '../team/_lib/constants'
import { Top3PitcherEras } from './top3-pitcher-eras'

import { TeamERAOverview } from '../batter/team-era-overview'
import { Suspense } from 'react'
import { http } from '@/http'
import { PitcherData, PitcherList } from './_lib/pitcher.type'
import { PitcherERA, TeamERAOverviewProps } from '../batter/_lib/type'
const createTeamERAOverview = (
  top5PitcherEras: PitcherData[],
  title: string,
): TeamERAOverviewProps => {
  const eralist: PitcherERA[] = top5PitcherEras.map((player, idx) => {
    return {
      playerName: player.playerName,
      teamName: player.playerName,
      hra: player.era,
    } as PitcherERA
  })

  return {
    isError: typeof top5PitcherEras === 'string',
    title: title,
    list: typeof top5PitcherEras !== 'string' ? eralist : undefined,
  } as const
}

async function Page() {
  let top5total: PitcherData[]
  try {
    const response = await http.get<PitcherList>(
      `/game/rank/pitcher/total/top5 `,
      {
        cache: 'force-cache',
      },
    )
    top5total = response.data.data.list
  } catch {
    return (
      <div className="mb-[250px] w-full">
        <TabMenu tabs={TABS} activeTab={TABS[2]} />
        <section className="pitcher-board mt-10 flex flex-wrap justify-between gap-10">
          정보가 없습니다.
        </section>
      </div>
    )
  }

  // const top5PitcherEras = await getTop5PitcherEras()

  return (
    <div className="mb-[250px] w-full">
      <TabMenu tabs={TABS} activeTab={TABS[1]} />

      <section className="pitcher-board mt-10 flex flex-wrap justify-between gap-10">
        <div className="best-players flex items-center gap-2 rounded-lg bg-gray-100 p-6">
          <Suspense fallback={<div>Loading...</div>}>
            <Top3PitcherEras />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Top3PitcherWins />
          </Suspense>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <TeamERAOverview
            {...createTeamERAOverview(top5total, '전체 투수 평균자책점')}
          />
        </Suspense>
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <RankingTable />
      </Suspense>
    </div>
  )
}

export default Page
