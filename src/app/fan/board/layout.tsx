import Banner from '@/components/common/banner/banner'
import TabMenu from '@/components/common/tab-menu/tab-menu'
import { FAN_BANNER_DATA } from '@/contants'

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Banner>
        <Banner.Heading
          title={FAN_BANNER_DATA['/'].title}
          subtitle={FAN_BANNER_DATA['/'].description}
        />
        {FAN_BANNER_DATA['/'].tabs && (
          <TabMenu tabs={FAN_BANNER_DATA['/'].tabs} />
        )}
      </Banner>
      <div> {children}</div>
    </div>
  )
}

export default Layout
