import Banner from '@/components/common/banner/banner'
import TabMenu from '@/components/common/tab-menu/tab-menu'
import { KTWIZ_BANNER_DATA } from '@/contants/index'

function HistoryPage() {
  return (
    <div className="w-full">
      <Banner>
        <Banner.Heading
          title={KTWIZ_BANNER_DATA[''].title}
          subtitle={KTWIZ_BANNER_DATA[''].description}
        />
        <TabMenu tabs={KTWIZ_BANNER_DATA[''].tabs!} />
      </Banner>
      {/* dfdf */}
      <div className="page">HistoryPage</div>
    </div>
  )
}

export default HistoryPage
