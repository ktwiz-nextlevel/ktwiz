export default function PlayerDetail() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col p-4 md:flex-row">
      <div className="flex w-full flex-col items-center space-y-4 md:w-1/3">
        <div className="flex h-96 w-full items-center justify-center bg-gray-300">
          메인 이미지
        </div>
      </div>

      <div className="w-full p-6 md:w-2/3">
        <h2 className="text-xl font-bold text-red-500">NO.60</h2>
        <h1 className="mb-4 text-4xl font-bold">김동혁</h1>
        <table className="mb-6 w-full table-auto text-sm">
          <tbody>
            <tr className="border-b">
              <td className="py-2 text-gray-500">포지션</td>
              <td className="py-2">투수</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 text-gray-500">생년월일</td>
              <td className="py-2">1999-03-10</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 text-gray-500">체격</td>
              <td className="py-2">186cm / 87kg</td>
            </tr>
            <tr>
              <td className="py-2 text-gray-500">투타</td>
              <td className="py-2">우투우타</td>
            </tr>
          </tbody>
        </table>

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
