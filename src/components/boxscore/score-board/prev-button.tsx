'use client'

import { useRouter } from 'next/navigation'

function PrevButton({
  gameDate,
  gmkey,
}: {
  gameDate?: number
  gmkey?: string
}) {
  const router = useRouter()
  function handlePrevDate(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault()

    if (gameDate && gmkey) {
      router.push(`/game/regular/boxscore/${gameDate}/${gmkey}`)
    }
    return
  }
  return (
    <div
      className={`group flex flex-1 items-center justify-end text-center`}
      onClick={handlePrevDate}
    >
      <div className="flex h-full w-10 items-center justify-center rounded-lg text-gray-300 transition-all duration-100 ease-in-out group-hover:bg-gray-200 group-hover:text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </div>
    </div>
  )
}

export default PrevButton
