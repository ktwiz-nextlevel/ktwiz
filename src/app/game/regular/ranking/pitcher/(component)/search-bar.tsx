'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function SearchBar({ label }: { label?: string }) {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  const [query, setQuery] = useState(searchParams.get('query') || '')

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams)
    if (query) {
      params.set('query', query)
    } else {
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="flex gap-[5px] align-middle text-[12px]">
      <form onSubmit={handleSearch} className="flex items-end gap-2">
        <label className="h-[30px] text-center leading-[30px]">{label}</label>
        <input
          type="text"
          className="h-[30px] w-[220px] rounded-md border border-gray-300 px-[8px] focus:outline-red-300"
          placeholder="선수를 검색해 보세요"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="h-[30px] w-[50px] rounded-md bg-[#333] py-0 text-white">
          검색
        </button>
      </form>
    </div>
  )
}
