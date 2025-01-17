import Banner from '@/components/common/banner/banner'
import TabMenu from '@/components/common/tab-menu/tab-menu'
import { GAME_BANNER_DATA, WIZ_PARK_BANNER_DATA } from '@/contants'
import React from 'react'
import WizparkContainer from '@/components/wizpark/wizpark-container'

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Banner>
        <Banner.Heading
          title={WIZ_PARK_BANNER_DATA['/iksan'].title}
          subtitle={WIZ_PARK_BANNER_DATA['/iksan'].description}
        />
        <TabMenu tabs={WIZ_PARK_BANNER_DATA['/iksan'].tabs!} />
      </Banner>
      <WizparkContainer> {children}</WizparkContainer>
    </div>
  )
}

export default Layout
