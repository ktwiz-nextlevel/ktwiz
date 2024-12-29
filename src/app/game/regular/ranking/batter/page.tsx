import { TabNavigation } from '@/components/common/tab-menu/tab-navigation'
import React from 'react'
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
function RankBatterPage() {
  return (
    <div className="w-full">
      <TabNavigation tabs={TABS} activeTab={TABS[2]} />
      RankBatterPage
    </div>
  )
}

export default RankBatterPage
