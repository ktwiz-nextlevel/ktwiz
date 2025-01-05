'use client'
import { TabsType } from '@/types'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { object } from 'zod'

export function TabNavigation({
  tabs,
  activeTab,
}: {
  tabs?: TabsType[] | null
  activeTab?: TabsType
}) {
  const { id } = useParams()
  const gameDate = id ? id[0] : '20241008'
  const gmkey = id ? id[1] : '33331008LGKT0'
  console.log(id)
  // `/${gameDate}/${gmkey}`
  return (
    <div className="flex gap-1">
      {tabs?.map((tab, index) => {
        let isActive = tab.path === activeTab?.path

        return (
          <Link
            href={tab.href + `/${gameDate}/${gmkey}` || ''}
            key={index + 'tab'}
            className={`${isActive ? 'bg-[--red-color-300] text-[--main-red-color]' : 'text-gray-700'} text-s mt-[50px] px-4 py-2 hover:text-[--main-red-color]`}
          >
            {tab.title}
          </Link>
        )
      })}
    </div>
  )
}
