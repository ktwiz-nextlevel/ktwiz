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

  // 셀 렌더링
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
        days.push(
          <div
            key={day.toString()}
            className={`flex h-32 flex-col rounded-md border border-gray-200 pl-2 pt-1 ${
              !isSameMonth(day, monthStart)
                ? 'bg-gray-100 text-gray-400'
                : isSameDay(day, selectedDate)
                  ? 'bg-blue-500 font-bold text-white'
                  : 'text-gray-700 hover:bg-gray-200'
            } cursor-pointer`}
            onClick={() => setSelectedDate(cloneDay)}
          >
            <span className="text-base">{format(day, 'd')}</span>
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
