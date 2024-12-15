export function Label({
  status = 'prev',
}: {
  status?: 'prev' | 'current' | 'next'
}) {
  if (status === 'prev') {
    return (
      <span className="rounded-xl bg-gray-200 px-3 py-1 text-xs text-gray-500">
        경기전
      </span>
    )
  }
  if (status === 'current') {
    return (
      <span className="rounded-xl bg-[--main-red-color] px-3 py-1 text-xs text-white">
        경기중
      </span>
    )
  }
  return (
    <span className="rounded-xl bg-gray-400 px-3 py-1 text-xs text-white">
      경기종료
    </span>
  )
}
