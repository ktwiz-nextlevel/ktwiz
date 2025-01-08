'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GameInfo } from '@/types'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

export default function MainSchedule() {
  const [data, setData] = useState<
    { [key in 'prev' | 'current' | 'next']: GameInfo } | null
  >(null)
  const [status, setStatus] = useState<'prev' | 'current' | 'next'>('current')
  const [loading, setLoading] = useState(true)
  const [highlight, setHighlight] = useState('')

  // 날짜 포맷 변경
  const parseDate = (date: string) => {
    return `${date.slice(0, 4)}.${date.slice(4, 6)}.${date.slice(6, 8)}`
  }

  // 이전 경기 버튼 핸들링, next일 때는 current로 변경, current일 때는 prev로 변경
  const handlePrev = () => {
    if (status === 'next') setStatus('current')
    if (status === 'current') setStatus('prev')
  }

  // 다음 경기 버튼 핸들링, prev일 때는 current로 변경, current일 때는 next로 변경, data 키값에 next가 없을 경우 return
  const handleNext = () => {
    if (status === 'prev') setStatus('current')
    if (status === 'current' && !data?.next) return
    if (status === 'current') setStatus('next')
  }

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_SERVER_URL}/game/recentGames`,
        )
        const result = await res.json()
        setData(result.data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchGameData()
  }, [])

  useEffect(() => {
    const fetchHighlights = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_SERVER_URL}/media/highlightlist?count=1`,
        )
        const { data } = await res.json()
        const clipNoMatch = data.list[0].videoLink.match(/clipNo=(\d+)/)
        const clipNo = clipNoMatch ? clipNoMatch[1] : null
        const embedUrl = `https://tv.naver.com/embed/${clipNo}`
        setHighlight(embedUrl)
      } catch (err) {
        console.error(err)
      }
    }
    fetchHighlights()
  }, [])

  if (loading) return <div className="text-center">Loading...</div>
  if (!data) return <div className="text-center">No data available</div>

  return (
    <div className="pt-[16vw] text-center md:py-48">
      <Image
        src="/images/main/main-schedule.png"
        width="820"
        height="100"
        alt="schedule"
        className="mx-auto"
      />
      <div className="-mt-8 flex justify-between gap-4 rounded-md bg-white p-4 px-10 py-12 shadow-lg shadow-[#f532324d]">
        {/* 경기결과 */}
        <div className="w-3/5">
          <div className="relative border-b-2 pb-2.5 text-center">
            <ChevronLeftIcon
              onClick={handlePrev}
              className="absolute left-0 top-1/2 mx-auto size-6 -translate-y-1/2 cursor-pointer rounded-full shadow-sm shadow-[#f532324d]"
            />
            <ChevronRightIcon
              onClick={handleNext}
              className="absolute right-0 top-1/2 mx-auto size-6 -translate-y-1/2 cursor-pointer rounded-full shadow-sm shadow-[#f532324d]"
            />
            <div className="text-xl font-bold">
              {parseDate(data[status].displayDate)}
            </div>
            <div className="text-sm text-gray-400">
              {data[status].stadium} {data[status].gtime}
            </div>
          </div>
          <div className="mt-3 flex text-center">
            {/* 원정팀 */}
            <div className="flex-1 text-sm">
              <Image
                width={72}
                src={data[status].visitLogo}
                height={64}
                alt={data[status].visitFullname}
                className="m-auto"
              />
              <div>{data[status].visit}</div>
            </div>

            <div className="flex-1">
              <div className="mt-5 text-4xl">
                {data[status].visitScore} <span className="opacity-20">:</span>{' '}
                {data[status].homeScore}
              </div>
              <Link
                href={`/game/regular/boxscore/${data[status].gameDate}/${data[status].gmkey}`}
                className="mt-4 inline-block rounded-full bg-[#909090] px-3 text-sm leading-6 text-white"
              >
                경기 정보
              </Link>
            </div>

            {/* 홈팀 */}
            <div className="flex-1 text-center text-sm">
              <Image
                width={72}
                src={data[status].homeLogo}
                height={64}
                alt={data[status].homeFullname}
                className="m-auto"
              />
              <div>{data[status].home}</div>
            </div>
          </div>
        </div>
        {/* 경기영상 */}
        <div className="hidden flex-1 md:block">
          <iframe
            src={highlight}
            style={{
              width: '100%',
              height: '100%',
            }}
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}
