'use client'
import React, { useState } from 'react'
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  format,
  isSameMonth,
  isSameDay,
} from 'date-fns'
import { ko } from 'date-fns/locale'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

// 샘플 게임 데이터
const gameData = [
  {
    broadcast: 'MS-T',
    displayDate: '20240904',
    gameDate: 20240904,
    gmkey: '20240904KTLT0',
    gtime: '18:30',
    home: '롯데',
    homeKey: 'LT',
    homeLogo: 'http://54.180.228.165/api/static/LT.png',
    homeScore: 7,
    matchTeamCode: 'LT',
    matchTeamName: '롯데',
    outcome: '패',
    stadium: '사직',
    stadiumKey: 'SJ',
    status: '3',
    visit: 'KT',
    visitKey: 'KT',
    visitLogo: 'http://54.180.228.165/api/static/KT.png',
    visitScore: 5,
  },
  {
    broadcast: 'SS-T',
    displayDate: '20240905',
    gameDate: 20240905,
    gmkey: '20240905KTLT0',
    gtime: '18:30',
    home: '롯데',
    homeKey: 'LT',
    homeLogo: 'http://54.180.228.165/api/static/LT.png',
    homeScore: 2,
    matchTeamCode: 'LT',
    matchTeamName: '롯데',
    outcome: '승',
    stadium: '사직',
    stadiumKey: 'SJ',
    status: '3',
    visit: 'KT',
    visitKey: 'KT',
    visitLogo: 'http://54.180.228.165/api/static/KT.png',
    visitScore: 12,
  },
]

const Calendar = () => {
  const now = new Date() // 현재 날짜
  const [currentMonth, setCurrentMonth] = useState(new Date()) // 현재 월
  const [selectedDate, setSelectedDate] = useState(new Date()) // 선택된 날짜

  const handleTodayBtn = () => {
    setSelectedDate(now)
    setCurrentMonth(now)
  }

  // 헤더 렌더링
  const renderHeader = () => {
    const dateFormat = 'MMMM yyyy'
    return (
      <div className="mb-5 flex items-center justify-between">
        <button
          className="rounded-full border border-gray-200 px-4 leading-8"
          onClick={handleTodayBtn}
        >
          Today
        </button>
        <button
          className="ml-1.5 h-8 w-8 rounded-full border text-xl font-bold text-gray-600 hover:text-gray-800"
          onClick={() => setCurrentMonth(addDays(currentMonth, -30))}
        >
          <ChevronLeftIcon className="mx-auto size-5" />
        </button>
        <button
          className="ml-1.5 h-8 w-8 rounded-full border text-xl font-bold text-gray-600 hover:text-gray-800"
          onClick={() => setCurrentMonth(addDays(currentMonth, 30))}
        >
          <ChevronRightIcon className="mx-auto size-5" />
        </button>
        <div className="ml-3 mr-auto text-lg font-semibold text-gray-800">
          {format(currentMonth, dateFormat, { locale: ko })}
        </div>

        {/* 경기 전환 */}
        <div className="rounded-full border border-gray-200 px-4 leading-8">
          <button>KT 경기</button>
          <button>전체 경기</button>
        </div>
      </div>
    )
  }

  // 요일 렌더링
  const renderDays = () => {
    const days = []
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 0 })

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
    const monthStart = startOfMonth(currentMonth)
    const monthEnd = endOfMonth(monthStart)
    const startDate = startOfWeek(monthStart)
    const endDate = endOfWeek(monthEnd)

    const rows = []
    let days = []
    let day = startDate

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day
        const formattedDate = format(day, 'yyyyMMdd')

        // 해당 날짜의 게임 데이터 필터링
        const dailyGames = gameData.filter(
          (game) => game.displayDate === formattedDate,
        )

        days.push(
          <div
            key={day.toString()}
            className={`flex h-32 flex-col rounded-md border border-gray-200 pl-2 pt-1 ${
              !isSameMonth(day, monthStart)
                ? 'bg-gray-100 text-gray-400'
                : isSameDay(day, selectedDate)
                  ? 'border-4 border-yellow-400'
                  : 'text-gray-700 hover:bg-yellow-50'
            } cursor-pointer`}
            onClick={() => setSelectedDate(cloneDay)}
          >
            {/* 날짜 */}
            <span className="text-base">{format(day, 'd')}</span>

            {/* 게임 데이터 렌더링 */}
            {dailyGames.map((game) => (
              <div key={game.gmkey} className="mt-2 text-xs">
                <img
                  src={game.visitLogo}
                  alt={`${game.visit} logo`}
                  className="mr-1 inline h-4 w-4"
                />
                {game.visit} {game.visitScore} : {game.homeScore} {game.home}
                <img
                  src={game.homeLogo}
                  alt={`${game.home} logo`}
                  className="ml-1 inline h-4 w-4"
                />
              </div>
            ))}
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
      {renderDays()}
      {renderCells()}
    </div>
  )
}

export default Calendar
