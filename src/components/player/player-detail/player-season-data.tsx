export default function PlayerSeasonData() {
  return (
    <>
      <h3 className="mb-2 text-lg font-semibold">2024 시즌 기록</h3>

      <div className="w-full border border-gray-300">
        <div className="flex bg-gray-100 text-center">
          <div className="flex-1 border px-4 py-2 font-semibold">ERA</div>
          <div className="flex-1 border px-4 py-2 font-semibold">승</div>
          <div className="flex-1 border px-4 py-2 font-semibold">패</div>
          <div className="flex-1 border px-4 py-2 font-semibold">세</div>
          <div className="flex-1 border px-4 py-2 font-semibold">경기</div>
        </div>
        <div className="flex text-center">
          <div className="flex-1 border px-4 py-2">6.35</div>
          <div className="flex-1 border px-4 py-2">0</div>
          <div className="flex-1 border px-4 py-2">2</div>
          <div className="flex-1 border px-4 py-2">0</div>
          <div className="flex-1 border px-4 py-2">9</div>
        </div>
      </div>
    </>
  )
}
