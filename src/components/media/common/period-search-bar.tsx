import { useState } from 'react'

interface PeriodSearchBarProps {
  onSubmit: (searchParams: { startDate: string; endDate: string }) => void
}

export default function PeriodSearchBar({ onSubmit }: PeriodSearchBarProps) {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!startDate || !endDate) {
      return
    }
    onSubmit({ startDate, endDate })
  }

  return (
    <div className="flex gap-[5px] align-middle text-[12px]">
      <form onSubmit={handleSearch} className="flex items-end gap-2">
        <input
          id="start-date"
          type="date"
          className="h-[30px] w-[120px] border border-[#9a9a9a] px-[8px]"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          id="end-date"
          type="date"
          className="h-[30px] w-[120px] border border-[#9a9a9a] px-[8px]"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button className="h-[30px] w-[50px] rounded-none bg-[#333] py-0 text-white">
          검색
        </button>
      </form>
    </div>
  )
}
