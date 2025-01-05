'use client'
import { TabsType } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function TabMenu({ tabs }: { tabs: TabsType[] }) {
  const pathname = usePathname()
  type TabsType = {
    path: string
    href: string
  }

  // 특정 경로와 탭 매핑
  const customIsActiveCondition = (
    pathname: string,
    tab: TabsType,
  ): boolean => {
    const specialCases: Record<string, (path: string) => boolean> = {
      '/game/regular/watchpoint': (path) => tab.path === 'boxscore',
      '/game/regular/ranking/pitcher': (path) => tab.path === 'ranking/team',
      '/game/regular/ranking/batter': (path) => tab.path === 'ranking/team',
      '/game/regular/ranking/crowd': (path) => tab.path === 'ranking/team',
      '/game/regular/boxscore': (path) =>
        path.startsWith('/game/regular/boxscore') && tab.path === 'boxscore', // 동적 경로 지원
    }

    for (const basePath in specialCases) {
      if (pathname.startsWith(basePath) && specialCases[basePath](pathname)) {
        return true
      }
    }

    return tab.href === pathname
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
