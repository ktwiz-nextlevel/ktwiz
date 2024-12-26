'use client'
import { useState } from 'react'
import Title from '@/components/common/title/title'
import { WithVerticalLines as Table } from '@/components/tailwind-ui/tables/with-vertical-lines'
import { BoxScore } from '@/types'

const TH_KEY = [
  { title: '선수', key: 'name' },
  { title: '등판', key: 'changeinn' },
  { title: '결과', key: '' },
  { title: '승', key: 'w' },
  { title: '패', key: 'l' },
  { title: '세', key: 's' },
  { title: '이닝', key: 'inn' },
  { title: '타자', key: 'pa' },
  { title: '타구수', key: 'bf' },
  { title: '타수', key: 'ab' },
  { title: '피안타', key: 'hit' },
  { title: '피홈런', key: 'hr' },
  { title: '사구', key: 'bbhp' },
  { title: '삼진', key: 'kk' },
  { title: '실점', key: 'r' },
  { title: '자책', key: 'er' },
  { title: '평균 자책점', key: '' },
]

function PitcherRecords({
  data,
  home,
  visit,
}: {
  data: BoxScore
  home: string
  visit: string
}) {
  const title = '투수 기록'

  const DATA_TYPE = {
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
    <section className="gray-red-400 w-full pt-5">
      <Title text={title} />
      <TabMenu
        activeTab={activeTab}
        setActiveTab={handleTab}
        home={home}
        visit={visit}
      />
      <Table data={tableData} thKey={TH_KEY} />
    </section>
  )
}

export default PitcherRecords

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
