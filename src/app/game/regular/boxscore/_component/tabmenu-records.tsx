export function TabMenu({
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
