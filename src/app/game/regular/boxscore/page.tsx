import { Banner } from '@/components/common/banner'
import TabMenu from '@/components/common/tab-menu'
import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'
import { ScoreBoard } from '@/components/boxscore/score-board'

import { GAME_BANNER_DATA } from '@/contants/index'

async function BoxscorePage({ params }: { params: { id: string } }) {
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
        <KeyRecords />
      </div>
    </div>
  )
}

export default BoxscorePage
function KeyRecords() {
  return <></>
}
