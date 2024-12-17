'use client'
import { useState } from 'react'
import Title from '@/components/common/title/title'
import { cn } from '@/utils'
import { WithVerticalLines as Table } from '@/components/tailwind-ui/tables/with-vertical-lines'
function Records({
  data,
  type,
  home,
  visit,
}: {
  data: any
  type: 'batter' | 'pitcher'
  home: string
  visit: string
}) {
  const title = type === 'batter' ? '타자 기록' : '투수 기록'

  const DATA_TYPE = {
    BATTER_VISIT: data.vbatters,
    BATTER_HOME: data.hbatters,
    PITCHERS_VISIT: data.vpitchers,
    PITCHERS_HOME: data.hpitchers,
  }
  const [activeTab, setActiveTab] = useState({ ishome: true, name: home })
  const tableData = activeTab.ishome
    ? DATA_TYPE.PITCHERS_HOME
    : DATA_TYPE.PITCHERS_VISIT
  function handleTab() {
    setActiveTab((prev) =>
      prev.ishome
        ? { ishome: false, name: visit }
        : { ishome: true, name: home },
    )
  }

  return (
    <section className="gray-red-400 w-full pt-3">
      <Title text={title} />
      <TabMenu
        activeTab={activeTab}
        setActiveTab={handleTab}
        home={home}
        visit={visit}
      />
      <Table team={activeTab} data={tableData} />
    </section>
  )
}

export default Records

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
