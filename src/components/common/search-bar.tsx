'use client'
import { useState } from 'react'

interface SearchBarProps {
  onSearch: (query: string) => void
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('')

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const trimmedQuery = query.trim()
    if (!trimmedQuery) return
    onSearch(query)
  }

  return (
    <div className="flex gap-[5px] align-middle text-[12px]">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          className="h-[30px] w-[220px] border border-[#9a9a9a] px-[8px]"
          placeholder="검색어를 입력해주세요"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="h-[30px] rounded-none bg-[#333] py-0 text-white">
          검색
        </button>
      </form>
    </div>
  )
}
export default SearchBar
