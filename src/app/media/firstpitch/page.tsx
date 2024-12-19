import Banner from '@/components/common/banner/banner'
import { MEDIA_BANNER_DATA } from '@/contants/index'

function Page() {
  return (
    <div className="w-full">
      <Banner>
        <Banner.Heading
          title={MEDIA_BANNER_DATA['/firstpitch'].title}
          subtitle={MEDIA_BANNER_DATA['/firstpitch'].description}
        />
        <div></div>
      </Banner>
      <div className="page">page</div>
    </div>
  )
}

export default Page
