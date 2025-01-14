'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Video } from '@/types/media'
import { GameInfo } from '@/types'

interface MainScheduleProps {
  video: Video
  scheduleData:
    | { [key in 'prev' | 'current' | 'next']: GameInfo }
    | null
    | undefined
}

export default function MainSchedule({
  video,
  scheduleData,
}: MainScheduleProps) {
  const [status, setStatus] = useState<'prev' | 'current' | 'next'>('current')

  // 날짜 포맷 변경
  const parseDate = (date: string) => {
    return `${date.slice(0, 4)}.${date.slice(4, 6)}.${date.slice(6, 8)}`
  }

  // 이전 경기 버튼 핸들링
  const handlePrev = () => {
    if (status === 'next') setStatus('current')
    else if (status === 'current') setStatus('prev')
  }

  // 다음 경기 버튼 핸들링
  const handleNext = () => {
    if (status === 'prev') setStatus('current')
    else if (status === 'current' && scheduleData?.next) setStatus('next')
  }

  // 비디오 링크 추출
  const clipNoMatch = video.videoLink.match(/clipNo=(\d+)/)
  const clipNo = clipNoMatch ? clipNoMatch[1] : null
  const highlightUrl = `https://tv.naver.com/embed/${clipNo}`

  // 데이터 유효성 검사
  if (!scheduleData) return <div className="text-center">No data available</div>

  const currentData = scheduleData[status]

  return (
    <div className="page py-[2.5rem] pt-[5rem] text-center">
      <Image
        src="/images/main/main-schedule.png"
        width="820"
        height="100"
        alt="schedule"
        className="mx-auto"
      />
      <div className="-mt-8 flex justify-between gap-4 rounded-md bg-white p-4 px-10 py-12 shadow-lg shadow-[#f532324d]">
        {/* 경기결과 */}
        <div className="w-full md:w-3/5">
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
              {parseDate(currentData.displayDate)}
            </div>
            <div className="text-sm text-gray-400">
              {currentData.stadium} {currentData.gtime}
            </div>
          </div>
          <div className="mt-3 flex text-center">
            {/* 원정팀 */}
            <div className="flex-1 text-sm">
              <Image
                width={72}
                src={currentData.visitLogo}
                height={64}
                alt={currentData.visitFullname}
                className="m-auto"
              />
              <div>{currentData.visit}</div>
            </div>

            <div className="flex-1">
              <div className="mt-5 text-4xl">
                {currentData.visitScore} <span className="opacity-20">:</span>{' '}
                {currentData.homeScore}
              </div>
              <Link
                href={`/game/regular/boxscore/${currentData.gameDate}/${currentData.gmkey}`}
                className="mt-4 inline-block rounded-full bg-[#909090] px-3 text-sm leading-6 text-white"
              >
                경기 정보
              </Link>
            </div>

            {/* 홈팀 */}
            <div className="flex-1 text-center text-sm">
              <Image
                width={72}
                src={currentData.homeLogo}
                height={64}
                alt={currentData.homeFullname}
                className="m-auto"
              />
              <div>{currentData.home}</div>
            </div>
          </div>
        </div>
        {/* 경기영상 */}
        <div className="hidden flex-1 md:block">
          <iframe
            src={highlightUrl}
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
