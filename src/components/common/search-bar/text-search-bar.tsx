interface TextSearchBarProps {
  query: string
  setQuery: (query: string) => void
  onSubmit: (searchParams: { query: string }) => void
}

export default function TextSearchBar({
  query,
  setQuery,
  onSubmit,
}: TextSearchBarProps) {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit({ query })
  }

  return (
    <div className="flex gap-[5px] align-middle text-[12px]">
      <form onSubmit={handleSearch} className="flex items-end gap-2">
        <input
          type="text"
          className="h-[30px] border border-[#9a9a9a] px-[8px] focus:outline-red-300 lg:w-[220px]"
          placeholder="검색어를 입력해주세요"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="h-[30px] w-[50px] rounded-none bg-[#333] py-0 text-white">
          검색
        </button>
      </form>
    </div>
  )
}
