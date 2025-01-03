'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import TextSearchBar from '../common/text-search-bar'

const options = [{ name: 'title', displayString: '제목' }]

export default function VideoSearchBar() {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()
  const defaultQuery = searchParams.get('query') || ''

  const handleTextSearch = ({
    query,
    type,
  }: {
    query: string
    type?: string
  }) => {
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
        options={options}
        defaultQuery={defaultQuery}
        onSubmit={handleTextSearch}
      />
    </div>
  )
}
