'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import TextSearchBar from '../media/common/text-search-bar'
import CustomSelectBox from '../media/common/custom-select-box'

const options = [
  { name: 'title', displayString: '제목' },
  { name: 'content', displayString: '내용' },
]

export default function BoardSearchBar() {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()
  const defaultQuery = searchParams.get('query') || ''
  const defaultType = searchParams.get('type') || options[0].name

  const defaultOption =
    options.find((option) => option.name === defaultType) || options[0]

  const [query, setQuery] = useState(defaultQuery)
  const [type, setType] = useState(defaultOption)

  const handleTextSearch = ({ query }: { query: string }) => {
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
      <CustomSelectBox
        options={options}
        selected={type}
        onChange={(option) => setType(option)}
      />
      <TextSearchBar
        query={query}
        setQuery={setQuery}
        onSubmit={handleTextSearch}
      />
    </div>
  )
}
