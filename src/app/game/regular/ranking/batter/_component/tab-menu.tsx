import { TabMenuProps } from '../../pitcher/(lib)/tabmenu.type'

export function TabMenu({
  activeTab,
  setActiveTab,
  tabs,
}: {
  activeTab: TabMenuProps
  setActiveTab: (tab: TabMenuProps) => void
  tabs: TabMenuProps[]
}) {
  return (
    <div className="mt-3 flex gap-1">
      {tabs.map((tab, idx) => {
        return (
          <button
            key={tab.id + idx}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-3 ${activeTab.id === tab.id ? 'border-b-2 border-red-300 text-[--main-red-color]' : ''}`}
          >
            {tab.name}
          </button>
        )
      })}
    </div>
  )
}
