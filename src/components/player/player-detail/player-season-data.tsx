interface SeasonData {
  era: string // 방어율 (Earned Run Average)
  gamenum: number // 출전 경기 수
  w: number // 승리 수 (Wins)
  l: number // 패배 수 (Losses)
  sv: number // 세이브 (Saves)
}

interface PlayerSeasonDataProps {
  seasonData: SeasonData
}

export default function PlayerSeasonData({
  seasonData,
}: PlayerSeasonDataProps) {
  return (
    <>
      <h3 className="mb-2 text-lg font-semibold">2024 시즌 기록</h3>

      <div className="w-full border border-gray-300">
        <div className="flex bg-gray-100 text-center">
          <div className="flex-1 border px-4 py-2 font-semibold">ERA</div>
          <div className="flex-1 border px-4 py-2 font-semibold">승</div>
          <div className="flex-1 border px-4 py-2 font-semibold">패</div>
          <div className="flex-1 border px-4 py-2 font-semibold">세이브</div>
          <div className="flex-1 border px-4 py-2 font-semibold">경기</div>
        </div>
        <div className="flex text-center">
          <div className="flex-1 border px-4 py-2">
            {seasonData?.era || '0'}
          </div>
          <div className="flex-1 border px-4 py-2">{seasonData?.w || '0'}</div>
          <div className="flex-1 border px-4 py-2">{seasonData?.l || '0'}</div>
          <div className="flex-1 border px-4 py-2">{seasonData?.sv || '0'}</div>
          <div className="flex-1 border px-4 py-2">
            {seasonData?.gamenum || '0'}
          </div>
        </div>
      </div>
    </>
  )
}
