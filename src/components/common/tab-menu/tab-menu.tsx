'use client'
import { TabsType } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function TabMenu({ tabs }: { tabs?: TabsType[] | null }) {
  const pathname = usePathname()
  const customIsActiveCondition = (pathname: string, tab: TabsType) => {
    if (pathname === '/game/regular/watchpoint' && tab.path === 'boxscore') {
      return true
    }
    if (
      pathname === '/game/regular/ranking/pitcher' &&
      tab.path === 'ranking/team'
    ) {
      return true
    }
    if (
      pathname === '/game/regular/ranking/batter' &&
      tab.path === 'ranking/team'
    ) {
      return true
    }
    if (
      pathname === '/game/regular/ranking/crowd' &&
      tab.path === 'ranking/team'
    ) {
      return true
    }
    if (tab.href === pathname) {
      return true
    } else false
  }
  return (
    <div className="flex gap-1">
      {tabs?.map((tab, index) => {
        let isActive = customIsActiveCondition(pathname, tab)

        return (
          <Link
            href={tab.href || ''}
            key={index + 'tab'}
            className={`${isActive ? 'border-b-2 border-white text-white hover:font-bold hover:text-white' : 'text-gray-700 hover:font-bold'} text-s px-4 py-2`}
          >
            {tab.title}
          </Link>
        )
      })}
    </div>
  )
}
