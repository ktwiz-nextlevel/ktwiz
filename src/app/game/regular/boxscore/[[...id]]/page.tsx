import KeyRecords from '@/app/game/regular/boxscore/[[...id]]/key-records'

import { TabNavigation } from '@/components/common/tab-menu/tab-navigation'
import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'
import BatterRecords from './batter-records'
import PitcherRecords from './pitcher-records'
import { ScoreBoard } from './score-board'
import { http } from '@/http'
import { BoxscoreData } from '@/types'
import { Suspense } from 'react'
import { BoxscorePageProps } from '../_lib/records.type'
import { TABS } from '../_lib/constants'

export async function generateMetadata({ params }: BoxscorePageProps) {
  const { id } = await params
  const gameDate = id ? id[0] : '20241008'
  const gmkey = id ? id[1] : '33331008LGKT0'

  return {
    title: `박스스코어 - ${gameDate} 경기`,
    description: `${gameDate} 경기에 대한 박스스코어 정보를 제공합니다.`,
  }
}
async function BoxscorePage({ params }: BoxscorePageProps) {
  const { id } = await params
  const gameDate = id ? id[0] : '20241008'
  const gmkey = id ? id[1] : '33331008LGKT0'

  let data: BoxscoreData
  try {
    const response = await http.get<BoxscoreData>(`/game/boxscore`, {
      searchParams: { gameDate, gmkey },
    })
    data = response.data
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
      <Suspense fallback={<div>Loading...</div>}>
        <ScoreBoard data={data.data} />
      </Suspense>
      <TabNavigation tabs={TABS} activeTab={TABS[0]} />
      <br />
      <KeyRecords data={data.data} />
      <Suspense fallback={<div>Loading...</div>}>
        <BatterRecords
          data={data.data}
          home={data.data.schedule.current.home}
          visit={data.data.schedule.current.visit}
        />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <PitcherRecords
          data={data.data}
          home={data.data.schedule.current.home}
          visit={data.data.schedule.current.visit}
        />
      </Suspense>
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
