'use client'
import { useState } from 'react'
import Title from '@/components/common/title/title'
import { cn } from '@/utils'
import { WithVerticalLines as Table } from '@/components/tailwind-ui/tables/with-vertical-lines'
const TH_KEY = [
  { title: '타순', key: '' },
  // { title: '타순', key: 'oneturn' },
  { title: '포지션', key: 'position' },
  { title: '이름', key: 'name' },
  { title: '1', key: 'inn1' },
  { title: '2', key: 'inn2' },
  { title: '3', key: 'inn3' },
  { title: '4', key: 'inn4' },
  { title: '5', key: 'inn5' },
  { title: '6', key: 'inn6' },
  { title: '7', key: 'inn7' },
  { title: '8', key: 'inn8' },
  { title: '9', key: 'inn9' },
  { title: '10', key: 'inn10' },
  { title: '11', key: 'inn11' },
  { title: '12', key: 'inn12' },
  { title: '타수', key: 'ab' },
  { title: '득점', key: 'run' },
  { title: '안타', key: 'hit' },
  { title: '타점', key: 'rbi' },
  { title: '타율', key: '' },
]

function BatterRecords({
  data,
  // type,
  home,
  visit,
}: {
  data: any
  // type: 'batter' | 'pitcher'
  home: string
  visit: string
}) {
  // const title = type === 'batter' ? '타자 기록' : '투수 기록'
  const title = '타자 기록'

  // const DATA_TYPE = {
  //   BATTER_VISIT: data.vbatters,
  //   BATTER_HOME: data.hbatters,
  //   PITCHERS_VISIT: data.vpitchers,
  //   PITCHERS_HOME: data.hpitchers,
  // }
  const DATA_TYPE = {
    BATTER_VISIT: data.vbatters,
    BATTER_HOME: data.hbatters,
  }
  const [activeTab, setActiveTab] = useState({ ishome: true, name: home })

  const tableData = activeTab.ishome
    ? DATA_TYPE.BATTER_HOME
    : DATA_TYPE.BATTER_VISIT
  function handleTab() {
    setActiveTab((prev) =>
      prev.ishome
        ? { ishome: false, name: visit }
        : { ishome: true, name: home },
    )
  }

  return (
    <section className="gray-red-400 w-full pt-6">
      <Title text={title} />
      <TabMenu
        activeTab={activeTab}
        setActiveTab={handleTab}
        home={home}
        visit={visit}
      />
      <Table team={activeTab} data={tableData} thKey={TH_KEY} />
    </section>
  )
}

export default BatterRecords

function TabMenu({
  activeTab,
  setActiveTab,
  home,
  visit,
}: {
  activeTab: { ishome: boolean; name: string }
  setActiveTab: any
  home: string
  visit: string
}) {
  return (
    <div className="mt-3 flex gap-1" onClick={setActiveTab}>
      <div
        className={`rounded-md px-4 py-1 ${activeTab.ishome ? 'bg-gray-200' : ''}`}
      >
        {home}
      </div>
      <div
        className={`rounded-md px-4 py-1 ${!activeTab.ishome ? 'bg-gray-200' : ''}`}
      >
        {visit}
      </div>
    </div>
  )
}
