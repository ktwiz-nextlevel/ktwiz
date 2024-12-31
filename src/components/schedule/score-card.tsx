import { cn } from '@/utils'
import Image from 'next/image'

interface ScoreCardProps {
  className: string
  isCenter?: boolean
}

export default function ScoreCard({ className, isCenter }: ScoreCardProps) {
  return (
    <div
      className={cn(
        `${className} border-2 border-[#D2D2D2] p-5 text-center shadow-md`,
      )}
    >
      <span
        className={cn(
          `${isCenter ? 'bg-[#da3835]' : 'bg-[#343434]'} inline-block rounded-full px-8 leading-7 text-white`,
        )}
      >
        2024.10.11
      </span>
      <div className="mt-3 flex">
        <div className="flex-1 text-sm">
          <Image
            width={72}
            src={'/images/team-logo.png'}
            height={64}
            alt=""
            className="m-auto"
          />
          <div>LG 트윈스</div>
          <div>KT 위즈</div>
        </div>

        <div className="flex-1">
          <div className="mt-5 text-xl">1 : 4</div>
          <div className="mt-5 text-xs text-[#da3835]">패</div>
          <button className="mt-2 rounded-full bg-[#909090] px-3 text-sm leading-6 text-white">
            경기 정보
          </button>
        </div>

        <div className="flex-1 text-sm">
          <Image
            width={72}
            src={'/images/team-logo.png'}
            height={64}
            alt=""
            className="m-auto"
          />
          <div>KT 위즈</div>
          <div>KT 위즈</div>
        </div>
      </div>
    </div>
  )
}
