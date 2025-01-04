'use client'
import { GameInfo } from '@/types'
import { cn } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'

interface ScoreCardProps {
  className: string
  isCenter?: boolean
  gameInfo: GameInfo
}

export default function ScoreCard({
  className,
  isCenter,
  gameInfo,
}: ScoreCardProps) {
  const parseDate = (date: string) => {
    return `${date.slice(0, 4)}.${date.slice(4, 6)}.${date.slice(6, 8)}`
  }

  return (
    <div
      className={cn(
        `${className} border-2 border-[#D2D2D2] p-5 text-center shadow-md`,
      )}
    >
      {/* 날짜 */}
      <span
        className={cn(
          `${isCenter ? 'bg-[#da3835]' : 'bg-[#343434]'} inline-block rounded-full px-8 leading-7 text-white`,
        )}
      >
        {gameInfo && parseDate(gameInfo.displayDate)}
      </span>
      {gameInfo ? (
        <div className="mt-3 flex">
          {/* 원정팀 */}
          <div className="flex-1 text-sm">
            <Image
              width={72}
              src={gameInfo.visitLogo}
              height={64}
              alt={gameInfo.visitFullname}
              className="m-auto"
            />
            <div>{gameInfo.visitFullname}</div>
            <div>
              {`${gameInfo.visitDecision}: `}
              {gameInfo.visitStarter}
            </div>
          </div>

          <div className="flex-1">
            <div className="mt-5 text-xl">{`${gameInfo.visitScore} : ${gameInfo.homeScore}`}</div>
            <div className="mt-5 text-xs text-[#da3835]">
              {gameInfo.outcome}
            </div>
            <Link
              href={`/game/regular/boxscore/${gameInfo.gameDate}/${gameInfo.gmkey}`}
              className="mt-2 inline-block rounded-full bg-[#909090] px-3 text-sm leading-6 text-white"
            >
              경기 정보
            </Link>
          </div>

          {/* 홈팀 */}
          <div className="flex-1 text-sm">
            <Image
              width={72}
              src={gameInfo.homeLogo}
              height={64}
              alt={gameInfo.homeFullname}
              className="m-auto"
            />
            <div>{gameInfo.homeFullname}</div>
            <div>
              {`${gameInfo.homeDecision}: `}
              {gameInfo.homeStarter}
            </div>
          </div>
        </div>
      ) : (
        <div>예정된 경기가 없습니다.</div>
      )}
    </div>
  )
}
