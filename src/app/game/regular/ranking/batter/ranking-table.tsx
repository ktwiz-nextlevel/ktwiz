'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useSelection } from './_lib/use-selection'

import { TabMenu } from './_component/tab-menu'
import SearchBar from './_component/search-bar'
import { TableWhithHoverPopup } from '@/components/tailwind-ui/tables/hover-popup-table'
import SelectBox from './_component/select-box'
import {
  fetchRankings,
  getBatterRankings,
  getKTBatterRankings,
} from '@/services/table-action'

const TH_KEY = [
  { title: '선수명', key: 'playerName' },
  { title: '팀명', key: 'teamName' },
  { title: '타율', key: 'bra' },
  { title: '경기', key: 'gamenum' },
  { title: '타수', key: 'ab' },
  { title: '득점', key: 'run' },
  { title: '홈런', key: 'hr' },
  { title: '타점', key: 'rbi' },
  { title: '도루', key: 'sb' },
  { title: '볼넷', key: 'bb' },
  { title: '삼진', key: 'kk' },
  { title: '장타율', key: 'slg' },

  { title: '출루율', key: 'ops' },
]
type NamedItem = { id: string; name: string }
const yearTab: NamedItem[] = [
  { id: '2024', name: '2024 시즌' },
  { id: '2023', name: '2023 시즌' },
  { id: '2022', name: '2022 시즌' },
  { id: '2021', name: '2021 시즌' },
  { id: '2020', name: '2020 시즌' },
]
type PlayerType = { name: string; id: string }
const playerTab: PlayerType[] = [
  { name: 'kt wiz 타자', id: 'ktwizbatter' },
  { name: '전체 타자 순위', id: 'allbatter' },
]
function RankingTable({ rankingData }: { rankingData: any[] }) {
  const searchParams = useSearchParams()

  const gyear = searchParams.get('gyear') || '2024'

  const matchingYear: NamedItem = yearTab.find((item) => item.id === gyear) || {
    id: '2024',
    name: '2024 시즌',
  }

  const playerType = searchParams.get('playerType') || 'ktwizbatter'

  const matchingType: PlayerType = playerTab.find(
    (item) => item.id === playerType,
  ) || { name: 'kt wiz 타자', id: 'ktwizbatter' }

  const { items, activeItem, handleSelect } = useSelection(
    playerTab,
    'playerType',
    matchingType,
  )

  const {
    items: selectItems,
    activeItem: activeSeason,
    handleSelect: handleSelectBox,
  } = useSelection(yearTab, 'gyear', matchingYear)

  const [data, setData] = useState<any[]>(rankingData)
  const [searchValue, setSearch] = useState(searchParams.get('pname') || '')

  const fetchServer = async () => {
    const res = await fetchRankings({
      playerType: playerType,
      gyear: gyear,
      pname: searchParams.get('pname') || '',
    })
    if (res) {
      setData(res)
    }
  }
  return (
    <section className="mt-20">
      <div className="flex items-end justify-between border-y-2 border-gray-50 bg-[#dfdfd]">
        <TabMenu
          tabs={items}
          activeTab={activeItem}
          setActiveTab={(item) => {
            handleSelect(item)
            fetchServer()
          }}
        />
        <div className="flex gap-3 pb-3">
          <SearchBar
            query={searchValue}
            setQuery={setSearch}
            onSearch={() => {
              fetchServer()
            }}
          />
          <SelectBox
            options={selectItems}
            onChange={(item) => {
              handleSelectBox(item)
              fetchServer()
            }}
            selected={activeSeason}
          />
        </div>
      </div>
      <TableWhithHoverPopup data={data} thKey={TH_KEY} />
    </section>
  )
}

export default RankingTable
