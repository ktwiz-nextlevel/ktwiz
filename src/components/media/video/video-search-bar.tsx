'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import TextSearchBar from '../common/text-search-bar'
import { useState } from 'react'

export default function VideoSearchBar() {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()
  const defaultQuery = searchParams.get('query') || ''

  const [query, setQuery] = useState(defaultQuery)

  const handleTextSearch = ({ query }: { query: string }) => {
    const params = new URLSearchParams(searchParams)
    if (query) {
      params.set('query', query)
    } else {
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="flex space-x-4">
      <TextSearchBar
        query={query}
        setQuery={setQuery}
        onSubmit={handleTextSearch}
      />
    </div>
  )
}
