export default function PlayerDetailData() {
  return (
    <>
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
    </>
  )
}
