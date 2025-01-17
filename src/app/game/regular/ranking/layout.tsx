import Banner from '@/components/common/banner/banner'
import TabMenu from '@/components/common/tab-menu/tab-menu'
import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'
import { GAME_BANNER_DATA } from '@/contants'
import React from 'react'

export const metadata = {
  title: {
    absolute: '',
    default: '팀순위',
    template: '순위기록 내 %s 페이지입니다.',
  },
  description: '팀순위, 타자순위, 투수순위를 알아보세요!',
}
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
