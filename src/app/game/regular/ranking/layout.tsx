import Banner from '@/components/common/banner/banner'
import TabMenu from '@/components/common/tab-menu2'
import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'
import { GAME_BANNER_DATA } from '@/contants'
import React from 'react'

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <BreadCrumb />
      {children}
    </div>
  )
}

export default Layout
function BreadCrumb() {
  return (
    <div className="mt-[50px] flex w-full justify-end">
      <Breadcrumbs pages={['HOME', 'Game', '정규리그', '순위기록']} />
    </div>
  )
}
