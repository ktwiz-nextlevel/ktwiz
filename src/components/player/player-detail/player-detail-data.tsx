import { PlayerData } from '@/types/player.type'

export default function PlayerDetailData({ playerData }: PlayerData) {
  return (
    <>
      <h2 className="text-xl font-bold text-red-500">
        NO.{playerData.backnum}
      </h2>
      <h1 className="mb-4 text-4xl font-bold">{playerData.playerName}</h1>

      <div className="mb-6 w-full text-sm">
        <div className="flex border-b py-2">
          <div className="flex-1 text-gray-500">포지션</div>
          <div className="flex-1">{playerData.position}</div>
        </div>
        <div className="flex border-b py-2">
          <div className="flex-1 text-gray-500">생년월일</div>
          <div className="flex-1">{playerData.birth}</div>
        </div>
        <div className="flex border-b py-2">
          <div className="flex-1 text-gray-500">체격</div>
          <div className="flex-1">
            {playerData.height}cm / {playerData.weight}kg
          </div>
        </div>
        <div className="flex py-2">
          <div className="flex-1 text-gray-500">투타</div>
          <div className="flex-1">{playerData.hittype}</div>
        </div>
      </div>
    </>
  )
}
