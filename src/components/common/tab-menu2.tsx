'use client'
import { TabsType } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// import { usePathname } from 'next/navigation'

export default function TabMenu({
  tabs,
  // currentPath,   const [activeTab,setActiveTab  ]=  useState({name:"kt ",ref});
}: {
  tabs?: TabsType[] | null
  // currentPath?: string
}) {
  const pathname = usePathname()
  // console.log('params', tabs)

  return (
    <div className="flex gap-1">
      {tabs?.map((tab, index) => {
        const isActive = tab.href === pathname
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
