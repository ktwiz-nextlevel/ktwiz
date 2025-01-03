'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import TextSearchBar from '../media/common/text-search-bar'

const options = [
  { name: 'title', displayString: '제목' },
  { name: 'content', displayString: '내용' },
]

export default function BoardSearchBar() {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()
  const defaultQuery = searchParams.get('query') || ''

  const handleTextSearch = ({
    query,
    type,
  }: {
    query: string
    type: string
  }) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', '1')
    params.set('type', type)
    if (query) {
      params.set('query', query)
    } else {
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <TextSearchBar
      options={options}
      defaultQuery={defaultQuery}
      onSubmit={handleTextSearch}
    />
  )
}
