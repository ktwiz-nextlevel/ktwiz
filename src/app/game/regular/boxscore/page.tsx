import { Banner } from '@/components/common/banner'
import TabMenu from '@/components/common/tab-menu'
import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'

import { GAME_BANNER_DATA } from '@/contants/index'

function BoxscorePage({ params }: { params: { id: string } }) {
  const pages = ['HOME', '정규리그', '박스스코어']
  return (
    <div className="w-full">
      <Banner {...GAME_BANNER_DATA['/regular']}>
        <TabMenu tabs={GAME_BANNER_DATA['/regular'].tabs} />
      </Banner>
      <div className="page border border-red-400">
        <div className="mt-[50px] flex w-full justify-end">
          <Breadcrumbs pages={pages} />
        </div>
        <section className="mt-6 border border-red-500"></section>
      </div>
    </div>
  )
}

export default BoxscorePage
