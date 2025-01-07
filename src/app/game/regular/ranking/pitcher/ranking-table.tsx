'use client'

import { TabMenu } from './(component)/tab-menu'
import SearchBar from './(component)/search-bar'
import { useSelection } from './(lib)/use-selection'
import { TabMenuProps } from './(lib)/tabmenu.type'
import SelectBox from './(component)/select-box'
import { WithVerticalLines as Table } from '@/components/tailwind-ui/tables/with-vertical-lines'
import { useEffect, useState } from 'react'
import { getKTPitcherRankings, getPitcherRankings } from './(lib)/api'
import { useSearchParams } from 'next/navigation'
const TH_KEY = [
  { title: '선수명', key: 'playerName' },
  { title: '팀명', key: 'teamName' },
  { title: '평균자책점', key: 'era' },
  { title: '경기', key: 'gamenum' },
  { title: '승', key: 'w' },
  { title: '패', key: 'l' },
  { title: '세', key: 'sv' },
  { title: '홀', key: 'hold' },
  { title: '승률', key: 'wra' },
  { title: '이닝', key: 'inn' },
  { title: '피안타', key: 'hit' },
  { title: '피홈런', key: 'hr' },
  { title: '볼넷', key: 'bb' },
  { title: '사구', key: 'hp' },
  { title: '탈삼진', key: 'kk' },
  { title: '실점', key: 'r' },
  { title: '자책점', key: 'er' },
]

function RankingTable() {
  const searchParams = useSearchParams()
  const { items, activeItem, handleSelect } = useSelection<TabMenuProps>([
    { name: 'kt wiz 투수', id: 'kt wiz pitcher' },
    { name: '전체 투수 순위', id: 'all pitcher' },
  ])
  const {
    items: selectItems,
    activeItem: activeSeason,
    handleSelect: handleSelectBox,
  } = useSelection([
    { name: '2024', displayString: '2024 시즌' },
    { name: '2023', displayString: '2023 시즌' },
    { name: '2022', displayString: '2022 시즌' },
    { name: '2021', displayString: '2021 시즌' },
    { name: '2020', displayString: '2020 시즌' },
  ])

  const [data, setData] = useState<any[]>([])
  const [searchValue, setSearch] = useState(searchParams.get('pname') || '')
  // console.log(data)
  const fetchRankings = async () => {
    try {
      const rankings =
        activeItem.id === 'kt wiz pitcher'
          ? await getKTPitcherRankings({
              gyear: activeSeason.name,
              pname: searchValue,
            })
          : await getPitcherRankings({
              gyear: activeSeason.name,
              pname: searchValue,
            })
      setData(rankings)
    } catch (error) {
      console.error('Failed to fetch rankings:', error)
      setData([])
    }
  }

  useEffect(() => {
    fetchRankings()
  }, [activeItem, activeSeason])
  return (
    <section className="mt-20">
      <div className="flex items-end justify-between border-y-2 border-gray-50 bg-[#dfdfd]">
        <TabMenu
          tabs={items}
          activeTab={activeItem}
          setActiveTab={handleSelect}
        />
        <div className="flex gap-3 pb-3">
          <SearchBar
            query={searchValue}
            setQuery={setSearch}
            onSearch={fetchRankings}
          />
          <SelectBox
            options={selectItems}
            onChange={handleSelectBox}
            selected={activeSeason}
          />
        </div>
      </div>
      <Table data={data} thKey={TH_KEY} />
    </section>
  )
}

export default RankingTable
