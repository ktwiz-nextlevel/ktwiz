import Banner from '@/components/common/banner/banner'
import TabMenu from '@/components/common/tab-menu/tab-menu'
import { GAME_BANNER_DATA } from '@/contants'
import { TabsType } from '@/types'
import React from 'react'

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // const customIsActiveCondition = (pathname: string, tab: TabsType) => {
  //   if (pathname === '/game/regular/watchpoint' && tab.path === 'boxscore') {
  //     return true
  //   }
  //   if (tab.href === pathname) {
  //     return true
  //   } else false
  // }

  return (
    <div>
      <Banner>
        <Banner.Heading
          title={GAME_BANNER_DATA['/regular'].title}
          subtitle={GAME_BANNER_DATA['/regular'].description}
        />
        {GAME_BANNER_DATA['/regular'].tabs && (
          <TabMenu
            tabs={GAME_BANNER_DATA['/regular'].tabs}
            // isActiveCondition={customIsActiveCondition}
          />
        )}
      </Banner>
      <div className="page"> {children}</div>
    </div>
  )
}

export default Layout
