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
import './Calendar.css'

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  // 헤더 렌더링
  const renderHeader = () => {
    const dateFormat = 'MMMM yyyy'
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <button onClick={() => setCurrentMonth(addDays(currentMonth, -30))}>
            ❮
          </button>
        </div>
        <div className="col col-center">
          <span>{format(currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end">
          <button onClick={() => setCurrentMonth(addDays(currentMonth, 30))}>
            ❯
          </button>
        </div>
      </div>
    )
  }

  // 요일을 렌더링
  const renderDays = () => {
    const days = []
    const dateFormat = 'EEEE'
    const startDate = startOfWeek(currentMonth)

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>,
      )
    }
    return <div className="days row">{days}</div>
  }

  // 날짜 셀을 렌더링
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
            className={`col cell ${
              !isSameMonth(day, monthStart)
                ? 'disabled'
                : isSameDay(day, selectedDate)
                  ? 'selected'
                  : ''
            }`}
            key={day.toISOString()}
            onClick={() => setSelectedDate(cloneDay)}
          >
            <span className="number">{format(day, 'd')}</span>
          </div>,
        )
        day = addDays(day, 1)
      }
      rows.push(
        <div className="row" key={day.toISOString()}>
          {days}
        </div>,
      )
      days = []
    }

    return <div className="body">{rows}</div>
  }

  return (
    <div className="mx-auto mt-10 px-2.5">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  )
}

export default Calendar
