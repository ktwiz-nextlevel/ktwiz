import { Banner } from '@/components/common/banner'
import TabMenu from '@/components/common/tab-menu'
import { MEDIA_BANNER_DATA } from '@/contants/index'

function Page() {
  return (
    <div>
      <Banner {...MEDIA_BANNER_DATA['/firstpitch']}>
        {/* <TabMenu tabs={MEDIA_BANNER_DATA['/firstpitch'].tabs} /> */}
        <div></div>
      </Banner>
      <div className="page">page</div>
    </div>
  )
}

export default Page
