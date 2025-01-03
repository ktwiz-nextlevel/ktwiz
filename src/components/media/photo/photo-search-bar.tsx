'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import TextSearchBar from '../common/text-search-bar'
import PeriodSearchBar from '../common/period-search-bar'

const options = [
  { name: 'title', displayString: '제목' },
  { name: 'content', displayString: '내용' },
  { name: 'player', displayString: '선수' },
]

export default function PhotoSearchBar() {
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
    params.delete('startDate')
    params.delete('endDate')

    params.set('type', type)
    if (query) {
      params.set('query', query)
    } else {
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`)
  }

  const handlePeriodSearch = ({
    startDate,
    endDate,
  }: {
    startDate: string
    endDate: string
  }) => {
    const params = new URLSearchParams(searchParams)
    params.delete('query')
    params.delete('type')

    params.set('startDate', startDate)
    params.set('endDate', endDate)
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="flex space-x-4">
      <TextSearchBar
        options={options}
        defaultQuery={defaultQuery}
        onSubmit={handleTextSearch}
      />
      <PeriodSearchBar onSubmit={handlePeriodSearch} />
    </div>
  )
}
