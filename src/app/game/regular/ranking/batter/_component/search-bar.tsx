'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function SearchBar({
  query,
  setQuery,
  onSearch,
  label,
}: {
  query: any
  setQuery: any
  onSearch: any
  label?: string
}) {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  // const [query, setQuery] = useState(searchParams.get('pname') || '')

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams)
    if (query) {
      params.set('pname', query)
    } else {
      params.delete('pname')
    }
    replace(`${pathname}?${params.toString()}`)
    onSearch()
  }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch()
    }
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
          onKeyDown={handleKeyDown}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="h-[30px] w-[50px] rounded-md bg-[#333] py-0 text-white">
          검색
        </button>
      </form>
    </div>
  )
}
