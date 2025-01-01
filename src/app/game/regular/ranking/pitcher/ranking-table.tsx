'use client'

import { TabMenu } from './(component)/tab-menu'
import SearchBar from './(component)/search-bar'
import { useSelection } from './(lib)/use-selection'
import BoardSelectBox from '@/components/board/board-select-box'
import { TabMenuProps } from './(lib)/tabmenu.type'
import SelectBox from './(component)/select-box'
function RankingTable() {
  const { items, activeItem, handleSelect } = useSelection<TabMenuProps>([
    { name: 'kt wiz 투수', id: 'kt wiz pitcher' },
    { name: '전체 투수 순위', id: 'all pitcher' },
  ])
  const {
    items: selectItems,
    activeItem: activeActiveItem,
    handleSelect: handleSelectBox,
  } = useSelection([
    { name: '2024', displayString: '2024 시즌' },
    { name: '2023', displayString: '2023 시즌' },
  ])

  return (
    <section className="mt-20">
      <div className="flex items-end justify-between border-y-2 border-gray-50 bg-[#dfdfd]">
        <TabMenu
          tabs={items}
          activeTab={activeItem}
          setActiveTab={handleSelect}
        />
        <div className="flex gap-3 pb-3">
          <SearchBar />
          <SelectBox
            options={selectItems}
            onChange={handleSelectBox}
            selected={activeActiveItem}
          />
        </div>
      </div>
    </section>
  )
}

export default RankingTable

// export function useSelection<T>(items: T[]) {
//   const [activeItem, setActiveItem] = useState<T>(items[0])

//   const handleSelect = (item: T) => {
//     setActiveItem(item)
//   }

//   return { items, activeItem, handleSelect }
// }
