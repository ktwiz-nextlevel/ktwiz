import { TabsType } from '@/types'
import Link from 'next/link'

export function TabNavigation({
  tabs,
  activeTab,
}: {
  tabs?: TabsType[] | null
  activeTab?: TabsType
}) {
  return (
    <div className="flex gap-1">
      {tabs?.map((tab, index) => {
        const isActive = tab.path === activeTab?.path
        return (
          <Link
            href={tab.href || ''}
            key={index + 'tab'}
            className={`${isActive ? 'text-[--main-red-color]' : 'text-gray-700'} text-s mt-[50px] px-4 py-2 hover:text-[--main-red-color]`}
          >
            {tab.title}
          </Link>
        )
      })}
    </div>
  )
}
