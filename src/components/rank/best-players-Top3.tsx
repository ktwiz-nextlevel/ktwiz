import Image from 'next/image'

// type BestPlayer = {
//   playerName: string
//   data: string | number
// }
export function BestPlayersTop3({
  isErrored,
  playerPrvwImg,
  playerList,
  title,
}: {
  isErrored: boolean
  playerPrvwImg: string
  playerList: [BestPlayer, BestPlayer, BestPlayer]
  title: string
}) {
  if (isErrored) {
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
        {!isErrored && (
          <Image
            src={playerPrvwImg}
            alt="player"
            width={180}
            height={180}
            className="relative left-3 w-[180px]"
          />
        )}
        <div className="ribbon absolute left-0 top-0 h-[100px] w-[60px] justify-center bg-[url('/images/bow.png')] bg-contain bg-no-repeat pt-3 text-center">
          <h4 className="text-xs text-white">{title}</h4>
          <span className="text-xs text-white">TOP3</span>
        </div>
      </div>
      {/* 순위 */}
      <div className="flex flex-col items-start justify-center gap-2">
        <div className="flex flex-col items-start justify-center gap-2">
          <span className="font-bold">{`1. ${playerList[0].playerName} (${playerList[0].data})`}</span>
          <span className="text-gray-400">{`2. ${playerList[1].playerName} (${playerList[1].data})`}</span>
          <span className="text-gray-400">{`3. ${playerList[2].playerName} (${playerList[2].data})`}</span>
        </div>
      </div>
    </div>
  )
}
