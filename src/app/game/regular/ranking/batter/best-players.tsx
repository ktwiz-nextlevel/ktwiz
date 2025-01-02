import { Player, Top3player } from '@/types'
import Image from 'next/image'
import React from 'react'

const getTop3BatterHra = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/game/rank/batter/hra/top3 `,
    )
    if (!response.ok) {
      return '게임 평균자책점 정보가 없습니다.'
    }
    const {
      data: { list: list },
    }: Top3player = await response.json()
    return list
  } catch (error) {
    throw new Error('Error fetching data')
  }
}

const getTop3PitcherHr = async (): Promise<
  [Player, Player, Player] | string
> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/game/rank/batter/hr/top3 `,
    )

    if (!response.ok) {
      return '게임 승리 정보가 없습니다.'
    }
    const {
      data: { list: list },
    }: Top3player = await response.json()
    list.sort((a, b) => b.w - a.w)
    return list
  } catch (error) {
    throw new Error('Error fetching data')
  }
}

export async function Top3BatterWins() {
  const winlist: [Player, Player, Player] | string = await getTop3PitcherHr()

  if (winlist === 'string') {
    return (
      <div className="flex">
        {/* 이미지 */}
        승리 정보가 없습니다.
      </div>
    )
  }
  return (
    <div className="flex">
      {/* 이미지 */}
      <div className="relative w-[200px]">
        {typeof winlist !== 'string' && (
          <Image
            src={winlist[0].playerPrvwImg}
            alt="player"
            width={180}
            height={180}
            className="relative left-3 object-contain"
          />
        )}
        <div className="ribbon absolute left-0 top-0 h-[100px] w-[60px] justify-center bg-[url('/images/bow.png')] bg-contain bg-no-repeat pt-3 text-center">
          <h4 className="text-xs text-white">홈런</h4>
          <span className="text-xs text-white">TOP3</span>
        </div>
      </div>
      {/* 순위 */}
      <div className="flex flex-col items-start justify-center gap-2">
        {typeof winlist !== 'string' && (
          <>
            <span className="font-bold">{`1. ${winlist[0].playerName} (${winlist[0].hr})`}</span>
            <span className="text-gray-400">{`2. ${winlist[1].playerName} (${winlist[1].hr})`}</span>
            <span className="text-gray-400">{`3. ${winlist[2].playerName} (${winlist[2].hr})`}</span>
          </>
        )}
      </div>
    </div>
  )
}
export async function Top3BatterEras() {
  const top3PitcherEras: [Player, Player, Player] | string =
    await getTop3BatterHra()
  if (top3PitcherEras === 'string') {
    return (
      <div className="flex">
        {/* 이미지 */}
        평균 자책점 정보가 없습니다.
      </div>
    )
  }
  return (
    <div className="flex">
      {/* 이미지 */}
      <div className="relative w-[200px]">
        {typeof top3PitcherEras !== 'string' && (
          <Image
            src={top3PitcherEras[0].playerPrvwImg}
            alt="player"
            width={180}
            height={180}
            className="relative left-3 w-[180px]"
          />
        )}
        <div className="ribbon absolute left-0 top-0 h-[100px] w-[60px] justify-center bg-[url('/images/bow.png')] bg-contain bg-no-repeat pt-3 text-center">
          <h4 className="text-xs text-white">타율</h4>
          <span className="text-xs text-white">TOP3</span>
        </div>
      </div>
      {/* 순위 */}
      <div className="flex flex-col items-start justify-center gap-2">
        {typeof top3PitcherEras !== 'string' && (
          <>
            <span className="font-bold">{`1. ${top3PitcherEras[0].playerName} (${top3PitcherEras[0].hra})`}</span>
            <span className="text-gray-400">{`2. ${top3PitcherEras[1].playerName} (${top3PitcherEras[1].hra})`}</span>
            <span className="text-gray-400">{`3. ${top3PitcherEras[2].playerName} (${top3PitcherEras[2].hra})`}</span>
          </>
        )}
      </div>
    </div>
  )
}
