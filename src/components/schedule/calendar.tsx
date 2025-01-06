'use client'
import React, { useEffect, useState } from 'react'
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  format,
  isSameMonth,
  parse,
} from 'date-fns'
import { ko } from 'date-fns/locale'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { GameScheduleData } from '@/types'
import Link from 'next/link'
import KtwizCalendarCell from './ktwiz-calendar-cell'

interface CalendarProps {
  ktGameData: GameScheduleData[]
  allGameData: GameScheduleData[]
  currentDate: string
}

const Calendar = ({ ktGameData, currentDate, allGameData }: CalendarProps) => {
  const formattedCurrentDate = parse(currentDate, 'yyyyMM', new Date())
  const [activeSchedule, setActiveSchedule] = useState('KT') // KT 또는 ALL
  const [activatedData, setActivatedData] = useState(ktGameData)
  console.log(ktGameData)

  // 헤더 렌더링
  const renderHeader = () => {
    const dateFormat = 'MMMM yyyy'
    return (
      <div className="mb-5 flex items-center justify-between">
        <Link
          className="rounded-full border border-gray-200 px-4 leading-8"
          href={`/game/regular/schedule/${format(new Date(), 'yyyyMM')}`}
        >
          Today
        </Link>
        <Link
          className="ml-1.5 flex h-8 w-8 items-center rounded-full border text-xl font-bold text-gray-600 hover:text-gray-800"
          href={`/game/regular/schedule/${format(new Date(formattedCurrentDate).setMonth(formattedCurrentDate.getMonth() - 1), 'yyyyMM')}`}
        >
          <ChevronLeftIcon className="mx-auto size-5" />
        </Link>
        <Link
          className="ml-1.5 flex h-8 w-8 items-center rounded-full border text-xl font-bold text-gray-600 hover:text-gray-800"
          href={`/game/regular/schedule/${format(new Date(formattedCurrentDate).setMonth(formattedCurrentDate.getMonth() + 1), 'yyyyMM')}`}
        >
          <ChevronRightIcon className="mx-auto size-5" />
        </Link>
        <div className="ml-3 mr-auto text-lg font-semibold text-gray-800">
          {format(formattedCurrentDate, dateFormat, { locale: ko })}
        </div>

        {/* 경기 전환 */}
        {/* <div
          className={`relative rounded-full border border-gray-200 px-4 leading-8 ${activeSchedule === 'KT' ? 'pl-28' : 'pr-28'}`}
        >
          <button
            className={`${activeSchedule === 'KT' && 'absolute left-0 w-24 rounded-full bg-red-500 text-white'}`}
            onClick={() => setActiveSchedule('KT')}
          >
            KT 경기
          </button>
          <button
            className={`${activeSchedule === 'ALL' && 'absolute right-0 w-24 rounded-full bg-red-500 text-white'}`}
            onClick={() => setActiveSchedule('ALL')}
          >
            전체 경기
          </button>
        </div> */}
      </div>
    )
  }

  // 요일 렌더링
  const renderDays = () => {
    const days = []
    const startDate = startOfWeek(formattedCurrentDate, { weekStartsOn: 0 })

    for (let i = 0; i < 7; i++) {
      days.push(
        <div
          key={i}
          className="flex items-center justify-center text-sm font-medium text-gray-600"
        >
          {format(addDays(startDate, i), 'EEEE', { locale: ko }).charAt(0)}
        </div>,
      )
    }
    return <div className="grid grid-cols-7">{days}</div>
  }

  // 일자 렌더링
  const renderCells = () => {
    const monthStart = startOfMonth(formattedCurrentDate)
    const monthEnd = endOfMonth(monthStart)
    const startDate = startOfWeek(monthStart)
    const endDate = endOfWeek(monthEnd)

    const rows = []
    let days = []
    let day = startDate

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const formattedDate = format(day, 'yyyyMMdd')

        // 해당 날짜의 게임 데이터 필터링
        const dailyGames = activatedData.filter(
          (game) => game.displayDate === formattedDate,
        )

        // 같은 날짜의 경기 결과를 합쳐서 처리
        const gameOutcomes = dailyGames.map((game) => game.outcome).join('/')

        days.push(
          <div
            key={day.toString()}
            className={`relative flex h-32 flex-col rounded-md border border-gray-200 pl-2 pt-1 ${
              !isSameMonth(day, monthStart)
                ? 'bg-gray-100 text-gray-400'
                : 'text-gray-700'
            } cursor-pointer`}
          >
            {/* 날짜 */}
            <span className="absolute text-base">{format(day, 'd')}</span>

            {/* KT 게임 데이터 렌더링 */}
            {activeSchedule === 'KT' && dailyGames.length > 0 && (
              <KtwizCalendarCell
                cellData={dailyGames[0]}
                gameOutcomes={gameOutcomes}
              />
            )}

            {/* 전체 게임 데이터 렌더링 */}
            {activeSchedule === 'ALL' && <div>ㅣ</div>}
          </div>,
        )
        day = addDays(day, 1)
      }
      rows.push(
        <div key={day.toString()} className="mb-1 grid grid-cols-7 gap-1">
          {days}
        </div>,
      )
      days = []
    }

    return <div>{rows}</div>
  }

  return (
    <div className="mx-auto mt-10 rounded-lg bg-white p-4 shadow-lg">
      {renderHeader()}
      {activatedData.length > 0 || (allGameData.length > 0 && renderDays())}
      {activatedData.length > 0 ? (
        renderCells()
      ) : (
        <div className="text-center">게임 정보가 없습니다.</div>
      )}
    </div>
  )
}

export default Calendar
