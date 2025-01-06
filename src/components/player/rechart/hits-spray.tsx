import { useState } from 'react'

interface HitSprayItem {
  x: number
  y: number
  info: string
}

interface CustomScatterProps {
  scatterData: HitSprayItem[]
}

export default function CustomScatter({ scatterData }: CustomScatterProps) {
  const [tooltip, setTooltip] = useState<{
    x: number
    y: number
    info: string
  } | null>(null)

  const handleMouseEnter = (x: number, y: number, info: string) => {
    setTooltip({ x, y, info })
  }

  const handleMouseLeave = () => {
    setTooltip(null)
  }

  return (
    <div className="relative mx-auto h-[500px] w-[500px] overflow-hidden bg-[url('/images/players/background.png')] bg-cover bg-center">
      {/* 데이터 포인트 */}
      {scatterData.map((point, index) => (
        <div
          key={index}
          onMouseEnter={() => handleMouseEnter(point.x, point.y, point.info)}
          onMouseLeave={handleMouseLeave}
          className="absolute h-[10px] w-[10px] cursor-pointer rounded-full bg-red-500"
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        ></div>
      ))}

      {tooltip && (
        <div
          className="absolute z-10 whitespace-nowrap rounded-md border border-gray-300 bg-white/90 p-2 shadow-md"
          style={{
            left: `${tooltip.x}%`,
            top: `${tooltip.y}%`,
            transform: 'translate(-50%, -120%)',
          }}
        >
          <p className="font-bold">{tooltip.info}</p>
          <p className="text-sm">Left: {tooltip.x}%</p>
          <p className="text-sm">Top: {tooltip.y}%</p>
        </div>
      )}
    </div>
  )
}
