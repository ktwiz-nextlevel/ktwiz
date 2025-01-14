'use client'
import React, { useState } from 'react'
import { Lineup as LinUpType } from './_lib/watch-point.type'
import Image from 'next/image'

function LineUp({
  home,
  visit,
  homeLogo,
  visitLogo,
}: {
  home: LinUpType[]
  visit: LinUpType[]
  homeLogo: string
  visitLogo: string
}) {
  const [isHomeCondition, setIsHomeCondition] = useState(true)
  let data = isHomeCondition ? home : visit

  const positionStyle = [
    'left-[150px] top-[200px]',
    'bottom-[50px] left-[150px]',
    'bottom-[120px] left-[230px]',
    'top-[200px] left-[250px]',
    'bottom-[120px] left-[80px]',
    'bottom-[180px] left-[60px]',
    'top-[110px] left-[30px]',
    'top-[100px] left-[150px]',
    'top-[110px] right-[30px]',
  ]
  return (
    <div>
      <div className="relative">
        <Image
          src={'/images/watch-point/ground.png'}
          alt="lineup"
          width={400}
          height={400}
        />
        {data.map((info, idx) => (
          <NameTag
            key={info.playerName + idx}
            text={`${idx + 1}.  ${info.playerName}`}
            stylePosition={positionStyle[idx]}
          />
        ))}
      </div>

      <div
        className="mt-[50px] flex justify-center"
        onClick={() => setIsHomeCondition((pre) => !pre)}
      >
        <Image
          src={homeLogo}
          alt="homeLogo"
          width={80}
          height={80}
          className={`h-20 w-20 ${isHomeCondition ? '' : 'opacity-50'}`}
        />
        <Image
          src={'/images/vs.svg'}
          alt="lineup"
          width={50}
          height={50}
          className="h-25 w-25"
        />
        <Image
          src={visitLogo}
          alt="visitLogo"
          width={80}
          height={80}
          className={`h-20 w-20 ${isHomeCondition ? 'opacity-50' : ''}`}
        />
      </div>
    </div>
  )
}

export default LineUp

function NameTag({
  text,
  stylePosition,
}: {
  text: string
  stylePosition?: string
}) {
  return (
    <h3
      className={`rounded-md border-l-4 border-red-400 bg-white px-3 py-1 ${stylePosition} absolute`}
    >
      {text}
    </h3>
  )
}
