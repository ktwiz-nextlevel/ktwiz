import { Banner } from '@/components/common/banner'
import TabMenu from '@/components/common/tab-menu2'
import { GAME_BANNER_DATA } from '@/contants/index'

function SchedulePage({ params }: { params: { route: string } }) {
  console.log(params)
  return (
    <div className="w-full">
      <Banner {...GAME_BANNER_DATA['/regular']}>
        <TabMenu tabs={GAME_BANNER_DATA['/regular'].tabs} />
      </Banner>
      <div className="page">SchedulePage</div>
    </div>
  )
}

export default SchedulePage
