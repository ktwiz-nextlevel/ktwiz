import Banner from '@/components/common/banner/banner'
import { PLAYER_BANNER_DATA } from '@/contants/player'

import React from 'react'

export const metadata = {
  title: {
    absolute: '',
    default: '투수',
    template: ' %s 선수 관련 정보',
  },
  description: '선수 사진 및 인적사항, 기록들을 살펴보세요. ',
}
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
