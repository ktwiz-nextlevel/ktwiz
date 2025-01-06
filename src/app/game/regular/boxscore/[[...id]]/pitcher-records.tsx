'use client'
import { useState } from 'react'
import Title from '@/components/common/title/title'
import { WithVerticalLines as Table } from '@/components/tailwind-ui/tables/with-vertical-lines'
import { BoxScore } from '@/types'
import { TabMenu } from '../_component/tabmenu-records'
import { TABLE_TITLE_KEY_PITCHER } from '../_lib/records.type'
import { createPitcherTableData } from '../_lib/adapter'

function PitcherRecords({
  data,
  home,
  visit,
}: {
  data: BoxScore
  home: string
  visit: string
}) {
  const [activeTab, setActiveTab] = useState({ ishome: true, name: home })
  const tableData = activeTab.ishome ? data.hpitchers : data.vpitchers
  function handleTab() {
    setActiveTab((prev) =>
      prev.ishome
        ? { ishome: false, name: visit }
        : { ishome: true, name: home },
    )
  }

  return (
    <section className="gray-red-400 mb-[300px] w-full pt-5">
      <Title text="투수 기록" />
      <TabMenu
        activeTab={activeTab}
        setActiveTab={handleTab}
        home={home}
        visit={visit}
      />
      <Table
        data={createPitcherTableData(tableData)}
        thKey={TABLE_TITLE_KEY_PITCHER}
      />
    </section>
  )
}

export default PitcherRecords
