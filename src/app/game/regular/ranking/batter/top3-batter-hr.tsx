'use client'
import { BestPlayersTop3 } from '@/components/rank/best-players-Top3'
import useYearStore from '@/store/useYearStore'
import React, { useEffect, useState } from 'react'

import { createPlayerList } from '../pitcher/(lib)/adapter'
import { getTop3batterHr } from './_lib/api'

export function Top3BatterHr() {
  const { currentYear } = useYearStore()
  const [data, setData] = useState<string | any>('')
  const fetchData = async () => {
    const res = await getTop3batterHr(currentYear)
    setData(res)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      {data.length !== 0 && (
        <BestPlayersTop3
          isErrored={data === '' || data.length === 0}
          playerPrvwImg={data[0]?.playerPrvwImg}
          playerList={createPlayerList(data, 'hr')}
          title="홈런"
        />
      )}
    </div>
  )
}
// export async function Top3BatterEras() {
//   const top3PitcherEras: [Player, Player, Player] | string =
//     await getTop3BatterHra()
//   if (top3PitcherEras === 'string' || top3PitcherEras.length === 0) {
//     return (
//       <div className="flex">
//         {/* 이미지 */}
//         평균 자책점 정보가 없습니다.
//       </div>
//     )
//   }
//   return (
//     <div className="flex">
//       {/* 이미지 */}
//       <div className="relative w-[200px]">
//         {typeof top3PitcherEras !== 'string' && (
//           <Image
//             src={top3PitcherEras[0].playerPrvwImg}
//             alt="player"
//             width={180}
//             height={180}
//             className="relative left-3 w-[180px]"
//           />
//         )}
//         <div className="ribbon absolute left-0 top-0 h-[100px] w-[60px] justify-center bg-[url('/images/bow.png')] bg-contain bg-no-repeat pt-3 text-center">
//           <h4 className="text-xs text-white">타율</h4>
//           <span className="text-xs text-white">TOP3</span>
//         </div>
//       </div>
//       {/* 순위 */}
//       <div className="flex flex-col items-start justify-center gap-2">
//         {typeof top3PitcherEras !== 'string' && (
//           <>
//             <span className="font-bold">{`1. ${top3PitcherEras[0].playerName} (${top3PitcherEras[0]?.hra})`}</span>
//             <span className="text-gray-400">{`2. ${top3PitcherEras[1].playerName} (${top3PitcherEras[1]?.hra})`}</span>
//             <span className="text-gray-400">{`3. ${top3PitcherEras[2].playerName} (${top3PitcherEras[2].hra})`}</span>
//           </>
//         )}
//       </div>
//     </div>
//   )
// }
