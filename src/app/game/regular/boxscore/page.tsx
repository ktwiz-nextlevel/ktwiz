import { Banner } from '@/components/common/banner'
import TabMenu from '@/components/common/tab-menu'
import { GAME_BANNER_DATA } from '@/contants/index'

function BoxscorePage({ params }: { params: { id: string } }) {
  return (
    <div className="w-full">
      <Banner {...GAME_BANNER_DATA['/regular']}>
        <TabMenu tabs={GAME_BANNER_DATA['/regular'].tabs} />
      </Banner>
      <div className="page">BoxscorePage</div>
    </div>
  )
}

export default BoxscorePage
