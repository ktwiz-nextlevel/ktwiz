import Image from 'next/image'
export default function PlayerDetail({ playerId }) {
  console.log('playerId: ', playerId)
  return (
    <div className="mx-auto flex max-w-7xl flex-col md:flex-row">
      <div className="flex w-full flex-col items-center space-y-4">
        <div className="flex h-96 w-full items-center justify-center bg-gray-300">
          <img src="/images/testimg.jpg" alt="선수이미지" />
        </div>
      </div>

      <div className="w-full p-6 md:w-2/3">
        <h2 className="text-xl font-bold text-red-500">NO.60</h2>
        <h1 className="mb-4 text-4xl font-bold">김동혁</h1>

        <div className="mb-6 w-full text-sm">
          <div className="flex border-b py-2">
            <div className="flex-1 text-gray-500">포지션</div>
            <div className="flex-1">투수</div>
          </div>
          <div className="flex border-b py-2">
            <div className="flex-1 text-gray-500">생년월일</div>
            <div className="flex-1">1999-03-10</div>
          </div>
          <div className="flex border-b py-2">
            <div className="flex-1 text-gray-500">체격</div>
            <div className="flex-1">186cm / 87kg</div>
          </div>
          <div className="flex py-2">
            <div className="flex-1 text-gray-500">투타</div>
            <div className="flex-1">우투우타</div>
          </div>
        </div>

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
      </div>
    </div>
  )
}
