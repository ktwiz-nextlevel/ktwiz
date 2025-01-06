'use client'
import { useState } from 'react'
import Title from '@/components/common/title/title'
import { WithVerticalLines as Table } from '@/components/tailwind-ui/tables/with-vertical-lines'
import { Batter, BoxScore } from '@/types'
import { TabMenu } from '../_component/tabmenu-records'
import { TABLE_TITLE_KEY_BATTER } from '../_lib/records.type'

function BatterRecords({
  data,
  home,
  visit,
}: {
  data: BoxScore
  home: string
  visit: string
}) {
  const [activeTab, setActiveTab] = useState({ ishome: true, name: home })
  const tableData = activeTab.ishome ? data.hbatters : data.vbatters

  function handleTab() {
    setActiveTab((prev) =>
      prev.ishome
        ? { ishome: false, name: visit }
        : { ishome: true, name: home },
    )
  }

  return (
    <section className="gray-red-400 w-full pt-6">
      <Title text={'타자 기록'} />
      <TabMenu
        activeTab={activeTab}
        setActiveTab={handleTab}
        home={home}
        visit={visit}
      />
      <Table
        data={createBatterTableData(tableData)}
        thKey={TABLE_TITLE_KEY_BATTER}
      />
    </section>
  )
}
function createBatterTableData(data: Batter[]) {
  return data.map((player) => {
    const seasonAvg = player.accmAb > 0 ? player.accmHit / player.accmAb : 0
    const truncatedAvg = Math.floor(seasonAvg * 1000) / 1000
    return { ...player, avg: truncatedAvg }
  })
}

export default BatterRecords
