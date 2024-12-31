import Image from 'next/image'
import React from 'react'
type Player = {
  ab: number
  bb: number
  bb9: number
  bf: number
  bk: number
  bs: number
  cba: string
  cg: number
  cs: number
  dpp: string
  er: number
  era: string
  err: number
  fo: number
  gamenum: number
  go: number
  gofo: string
  gyear: string
  h1: number
  h2: number
  h3: number
  hit: number
  hit9: number
  hold: number
  hp: number
  hr: number
  ib: number
  inBa: string
  inFlag: string
  inn: number
  inn2: number
  iso: string
  kk: number
  kk9: number
  kkbb: string
  l: number
  lCg: number
  lba: string
  oavg: string
  obp: string
  oops: string
  oslg: string
  outBa: string
  pcode: string
  playerName: string
  playerPrvwImg: string
  po: number
  qs: number
  qsPlus: number
  quit: number
  quitInn2: number
  r: number
  rba: string
  sb: number
  sbTryCn: number
  sf: number
  sh: number
  sho: number
  start: number
  startInn2: number
  sv: number
  svo: number
  teamName: string
  tugucount: number
  tugucountinn: number
  w: number
  wCg: number
  whip: string
  wp: number
  wra: string
}
//getTop3PitcherWins 에 사용되는 Top3playerWin 타입
interface Top3player {
  data: {
    list: [Player, Player, Player]
  }
}

const getTop3PitcherEras = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/game/rank/pitcher/era/top3 `,
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

const getTop3PitcherWins = async (): Promise<
  [Player, Player, Player] | string
> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/game/rank/pitcher/win/top3 `,
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

export async function Top3PitcherWins() {
  const winlist: [Player, Player, Player] | string = await getTop3PitcherWins()

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
            className="relative left-3 w-[180px] object-contain"
          />
        )}
        <div className="ribbon absolute left-0 top-0 h-[100px] w-[60px] justify-center bg-[url('/images/bow.png')] bg-contain bg-no-repeat pt-3 text-center">
          <h4 className="text-xs text-white">승리</h4>
          <span className="text-xs text-white">TOP3</span>
        </div>
      </div>
      {/* 순위 */}
      <div className="flex flex-col items-start justify-center gap-2">
        {typeof winlist !== 'string' && (
          <>
            <span className="font-bold">{`1. ${winlist[0].playerName} (${winlist[0].w})`}</span>
            <span className="text-gray-400">{`2. ${winlist[1].playerName} (${winlist[1].w})`}</span>
            <span className="text-gray-400">{`3. ${winlist[2].playerName} (${winlist[2].w})`}</span>
          </>
        )}
      </div>
    </div>
  )
}
export async function Top3PitcherEras() {
  const top3PitcherEras: [Player, Player, Player] | string =
    await getTop3PitcherEras()
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
            layout="fill"
            objectFit="contain"
            className="relative left-3 w-[180px]"
          />
        )}
        <div className="ribbon absolute left-0 top-0 h-[100px] w-[60px] justify-center bg-[url('/images/bow.png')] bg-contain bg-no-repeat pt-3 text-center">
          <h4 className="text-xs text-white">평균자책점</h4>
          <span className="text-xs text-white">TOP3</span>
        </div>
      </div>
      {/* 순위 */}
      <div className="flex flex-col items-start justify-center gap-2">
        {typeof top3PitcherEras !== 'string' && (
          <>
            <span className="font-bold">{`1. ${top3PitcherEras[0].playerName} (${top3PitcherEras[0].era})`}</span>
            <span className="text-gray-400">{`2. ${top3PitcherEras[1].playerName} (${top3PitcherEras[1].era})`}</span>
            <span className="text-gray-400">{`3. ${top3PitcherEras[2].playerName} (${top3PitcherEras[2].era})`}</span>
          </>
        )}
      </div>
    </div>
  )
}
