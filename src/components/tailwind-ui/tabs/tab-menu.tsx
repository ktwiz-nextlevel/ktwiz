'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback } from 'react'

interface Tab {
  name: string
  href: string
}

interface TabMenuProps {
  tabs: Tab[]
}

export default function TabMenu({ tabs }: TabMenuProps) {
  const pathname = usePathname()
  //현재 탭이 활성 상태인지 확인하는 함수
  const isActive = useCallback((href: string) => href === pathname, [pathname])

  return (
    <div className="border-b border-gray-200">
      <nav aria-label="Tabs" className="-mb-px flex space-x-8">
        {tabs.map((tab) => {
          return (
            <Link
              key={tab.name}
              href={tab.href}
              aria-current={isActive(tab.href) ? 'page' : undefined}
              className={clsx(
                isActive(tab.href)
                  ? 'border-[--main-red-color] text-[--main-red-color]'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                'whitespace-nowrap border-b-2 px-1 py-4 text-xs font-medium sm:text-sm',
              )}
            >
              {tab.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
