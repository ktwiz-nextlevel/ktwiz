import { PlayerSeasonDataProps } from '@/types/player.type'
import useYearStore from '@/store/useYearStore'

export default function PlayerSeasonData({
  seasonData,
}: PlayerSeasonDataProps) {
  const { currentYear } = useYearStore()

  return (
    <>
      <h3 className="mb-2 text-lg font-semibold">{currentYear} 시즌 기록</h3>

      <div className="w-full border border-gray-300">
        {seasonData.era ? (
          <>
            <div className="flex bg-gray-100 text-center">
              <div className="flex-1 border px-4 py-2 font-semibold">ERA</div>
              <div className="flex-1 border px-4 py-2 font-semibold">승</div>
              <div className="flex-1 border px-4 py-2 font-semibold">패</div>
              <div className="flex-1 border px-4 py-2 font-semibold">
                세이브
              </div>
              <div className="flex-1 border px-4 py-2 font-semibold">경기</div>
            </div>
            <div className="flex text-center">
              <div className="flex-1 border px-4 py-2">
                {seasonData.era || '0'}
              </div>
              <div className="flex-1 border px-4 py-2">
                {seasonData.w || '0'}
              </div>
              <div className="flex-1 border px-4 py-2">
                {seasonData.l || '0'}
              </div>
              <div className="flex-1 border px-4 py-2">
                {seasonData.sv || '0'}
              </div>
              <div className="flex-1 border px-4 py-2">
                {seasonData.gamenum || '0'}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex bg-gray-100 text-center">
              <div className="flex-1 border px-4 py-2 font-semibold">타율</div>
              <div className="flex-1 border px-4 py-2 font-semibold">
                출루율
              </div>
              <div className="flex-1 border px-4 py-2 font-semibold">홈런</div>
              <div className="flex-1 border px-4 py-2 font-semibold">타점</div>
              <div className="flex-1 border px-4 py-2 font-semibold">경기</div>
            </div>
            <div className="flex text-center">
              <div className="flex-1 border px-4 py-2">
                {seasonData.hra || '0'}
              </div>
              <div className="flex-1 border px-4 py-2">
                {seasonData.bra || '0'}
              </div>
              <div className="flex-1 border px-4 py-2">
                {seasonData.hr || '0'}
              </div>
              <div className="flex-1 border px-4 py-2">
                {seasonData.rbi || '0'}
              </div>
              <div className="flex-1 border px-4 py-2">
                {seasonData.gamenum || '0'}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}
