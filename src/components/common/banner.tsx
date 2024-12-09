'use client'

import { usePathname } from 'next/navigation'
import {
  KTWIZ_BANNER_DATA,
  WIZ_PARK_BANNER_DATA,
  GAME_BANNER_DATA,
} from '@/contants/index'
import { TabsType } from '@/types'
import Link from 'next/link'

function findMatchingData(pathname: string) {
  if (pathname.startsWith('/ktwiz')) {
    return KTWIZ_BANNER_DATA
  } else if (pathname.startsWith('/wizpark')) {
    return WIZ_PARK_BANNER_DATA
  } else if (pathname.startsWith('/game')) {
    return GAME_BANNER_DATA
  } else if (pathname.startsWith('/player')) {
    return {}
  } else if (pathname.startsWith('/media')) {
    return {}
  } else if (pathname.startsWith('/fan')) {
    return {}
  }
  // 추가작성
}
function getSecondSegment(path: string) {
  const parts = path.split('/')
  return parts.length === 3 ? '' : `/${parts[2]}` // 앞에 '/'를 붙여서 반환
}

export function Banner() {
  const pathname = usePathname()
  const data = findMatchingData(pathname)
  const path = getSecondSegment(pathname)
  return (
    <div className="h-[244px] w-full bg-[url('/images/banner.webp')] bg-cover bg-center">
      {data && (
        <div className="m-auto flex h-full w-fit flex-col items-center justify-between">
          <div> </div>
          <div className="flex flex-col items-center">
            <h3 className="text-5xl text-white">{data[path]?.title}</h3>
            <p className="mt-2 text-sm">{data[path]?.description}</p>
          </div>

          <TabMenu tabs={data[path]?.tabs} />
        </div>
      )}
    </div>
  )
}

function TabMenu({ tabs }: { tabs?: TabsType[] | null }) {
  const pathname = usePathname()
  return (
    <div className="flex gap-1">
      {tabs?.map((tab, index) => (
        <Link
          href={tab.href || ''}
          key={index + 'tab'}
          className={`${pathname === tab.href ? 'border-b-2 border-[--main-red-color] text-[--main-red-color] hover:text-[--main-red-color]' : 'text-white hover:text-white'} text-s px-4 py-2`}
        >
          {tab.title}
        </Link>
      ))}
    </div>
  )
}
