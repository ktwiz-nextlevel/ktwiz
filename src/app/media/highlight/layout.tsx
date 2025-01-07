import Banner from '@/components/common/banner/banner'
import TabMenu from '@/components/common/tab-menu/tab-menu'
import { MEDIA_BANNER_DATA } from '@/contants'

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Banner>
        <Banner.Heading
          title={MEDIA_BANNER_DATA['/highlight'].title}
          subtitle={MEDIA_BANNER_DATA['/highlight'].description}
        />
        {MEDIA_BANNER_DATA['/highlight'].tabs && (
          <TabMenu tabs={MEDIA_BANNER_DATA['/highlight'].tabs} />
        )}
      </Banner>
      <div> {children}</div>
    </div>
  )
}

export default Layout
