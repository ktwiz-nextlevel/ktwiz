import { TabNavigation as TabMenu } from '@/components/common/tab-menu/tab'

import { Top5PitcherEras } from '@/types'

import RankingTable from './ranking-table'
import { Top3PitcherWins } from './top3-pitcher-wins'
import { TABS } from '../team/_lib/constants'
import { Top3PitcherEras } from './top3-pitcher-eras'
import { getTop5PitcherEras } from './_lib/api'
import {
  createTeamERAOverview,
  TeamERAOverview,
} from '../batter/team-era-overview'
import { ERAType } from '../batter/_lib/type'

async function Page() {
  let top5PitcherEras: ERAType[] | null = null
  try {
    top5PitcherEras = await getTop5PitcherEras()
  } catch (err) {
    return (
      <div className="mb-[250px] w-full">
        <TabMenu tabs={TABS} activeTab={TABS[1]} />

        <section className="pitcher-board mt-10 flex flex-wrap justify-between gap-10">
          에러가 났습니다.
        </section>
      </div>
    )
  }
  return (
    <div className="mb-[250px] w-full">
      <TabMenu tabs={TABS} activeTab={TABS[1]} />

      <section className="pitcher-board mt-10 flex flex-wrap justify-between gap-10">
        <div className="best-players flex items-center gap-2 rounded-lg bg-gray-100 p-6">
          <Top3PitcherEras />
          <Top3PitcherWins />
        </div>
        {top5PitcherEras && typeof top5PitcherEras !== 'string' && (
          <TeamERAOverview
            {...createTeamERAOverview(top5PitcherEras, '전체 투수 평균자책점')}
          />
        )}
      </section>
      <RankingTable />
    </div>
  )
}

export default Page
