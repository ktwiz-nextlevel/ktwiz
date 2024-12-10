import { Banner } from '@/components/common/banner'
import TabMenu from '@/components/common/tab-menu'
import { KTWIZ_BANNER_DATA } from '@/contants/index'

function HistoryPage() {
  return (
    <div>
      <Banner {...KTWIZ_BANNER_DATA['']}>
        <TabMenu tabs={KTWIZ_BANNER_DATA[''].tabs} />
      </Banner>
      <div className="page">HistoryPage</div>
    </div>
  )
}

export default HistoryPage
