import Banner from '@/components/common/banner/banner'
import TabMenu from '@/components/common/tab-menu2'
import { PLAYER_BANNER_DATA } from '@/contants/player'

import React from 'react'

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <div className="page-lage"> {children}</div>
    </div>
  )
}

export default Layout