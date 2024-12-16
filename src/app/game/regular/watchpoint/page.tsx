import KeyRecords from '@/components/boxscore/key-records/key-records'
import { ScoreBoard } from '@/components/boxscore/score-board/score-board'
import { TabNavigation } from '@/components/boxscore/score-board/tab-navigation'
import { Banner } from '@/components/common/banner'
import TabMenu from '@/components/common/tab-menu2'
import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'

import { GAME_BANNER_DATA } from '@/contants/index'

async function BoxscorePage() {
  const TABS = [
    { title: '박스스코어', href: '/game/regular/boxscore', path: 'boxscore' },
    {
      title: '관전 포인트',
      href: '/game/regular/watchpoint',
      path: 'watchpoint',
    },
  ]
  return (
    <div className="w-full">
      <Banner {...GAME_BANNER_DATA['/regular']}>
        <TabMenu tabs={GAME_BANNER_DATA['/regular'].tabs} />
      </Banner>
      <div className="page">
        <div className="mt-[50px] flex w-full justify-end">
          <Breadcrumbs pages={['HOME', '정규리그', '박스스코어']} />
        </div>
        <ScoreBoard />
        <TabNavigation tabs={TABS} activeTab={TABS[1]} />
      </div>
    </div>
  )
}

export default BoxscorePage
