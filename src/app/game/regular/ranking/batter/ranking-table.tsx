'use client'

import SelectBox from '../pitcher/(component)/select-box'
import { WithVerticalLines as Table } from '@/components/tailwind-ui/tables/with-vertical-lines'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useSelection } from './_lib/use-selection'
import { getbatterRankings, getKTBatterRankings } from './_lib/api'
import { TabMenu } from './_component/tab-menu'
import SearchBar from './_component/search-bar'

const TH_KEY = [
  { title: '선수명', key: 'playerName' },
  { title: '팀명', key: 'teamName' },
  { title: '경기', key: 'gamenum' },
  { title: '타수', key: 'ab' },
  { title: '타율', key: 'bra' },
  { title: '출루율', key: 'ops' },
  { title: '장타율', key: 'slg' },
  { title: '홈런', key: 'hr' },
  { title: '타점', key: 'rbi' },
  { title: '득점', key: 'run' },
  { title: '볼넷', key: 'bb' },
  { title: '삼진', key: 'kk' },
  { title: '타격비율', key: 'babip' },
  { title: 'ISO', key: 'iso' },
  { title: 'OPS+', key: 'opsPlus' },
  { title: '희생플라이', key: 'sf' },
  { title: '도루', key: 'sb' },
  { title: '도루시도', key: 'sbTryCn' },
  { title: '희생번트', key: 'sh' },
  { title: '플라이아웃', key: 'fl' },
  { title: '골든글러브', key: 'gd' },
  { title: '기타', key: 'wrHit' },
]

function RankingTable() {
  const searchParams = useSearchParams()
  const { items, activeItem, handleSelect } = useSelection([
    { name: 'kt wiz 타자', id: 'kt wiz batter' },
    { name: '전체 타자 순위', id: 'all batter' },
  ])
  const {
    items: selectItems,
    activeItem: activeSeason,
    handleSelect: handleSelectBox,
  } = useSelection([
    { name: '2024', displayString: '2024 시즌' },
    { name: '2023', displayString: '2023 시즌' },
  ])

  const [data, setData] = useState<any[]>([])
  const [searchValue, setSearch] = useState(searchParams.get('pname') || '')
  console.log(data)
  const fetchRankings = async () => {
    try {
      const rankings =
        activeItem.id === 'kt wiz batter'
          ? await getKTBatterRankings({
              gyear: activeSeason.name,
              pname: searchValue,
            })
          : await getbatterRankings({
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
