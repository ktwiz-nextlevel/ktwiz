import Banner from '@/components/common/banner/banner'
import TabMenu from '@/components/common/tab-menu/tab-menu'
import { KTWIZ_BANNER_DATA } from '@/contants/index'

function KtwizAboutPage() {
  return (
    <div className="w-full">
      <Banner>
        <Banner.Heading
          title={KTWIZ_BANNER_DATA[''].title}
          subtitle={KTWIZ_BANNER_DATA[''].description}
        />
        <TabMenu tabs={KTWIZ_BANNER_DATA[''].tabs} />
      </Banner>

      <div className="page">KtwizPage</div>
    </div>
  )
}

export default KtwizAboutPage
