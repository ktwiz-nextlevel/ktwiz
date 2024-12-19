'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import BoardSelectBox from './board-select-box'

const options = [
  { name: 'title', displayString: '제목' },
  { name: 'content', displayString: '내용' },
]

export default function BoardSearchBar() {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  const [query, setQuery] = useState(searchParams.get('query') || '')
  const [type, setType] = useState(options[0])

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams)
    params.set('page', '1')
    params.set('type', type.name)
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
        <BoardSelectBox
          options={options}
          onChange={(option) => setType(option)}
          selected={type}
        />
        <input
          type="text"
          className="h-[30px] w-[220px] border border-[#9a9a9a] px-[8px]"
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
