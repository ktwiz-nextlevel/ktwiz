'use client'
import useYearStore from '@/store/useYearStore'
import Title from './title'

function TitleWithYear({ text }: { text: string }) {
  const { currentYear } = useYearStore()

  return <Title text={`${currentYear}년 ${text}`} />
}

export default TitleWithYear
