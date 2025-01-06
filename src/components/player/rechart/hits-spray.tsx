import { useState } from 'react'

const rawData = [
  { info: '[03-24] vs 삼성 (투수:김대우)', style: 'left:12.8%;top:44.6%;' },
  { info: '[04-04] vs KIA (투수:이의리)', style: 'left:21.4%;top:30.4%;' },
  { info: '[04-16] vs 키움 (투수:김재웅)', style: 'left:73.8%;top:26.4%;' },
  { info: '[04-21] vs 롯데 (투수:윌커슨)', style: 'left:80.6%;top:27.6%;' },
  { info: '[04-23] vs 한화 (투수:한승혁)', style: 'left:73.2%;top:61.8%;' },
  { info: '[05-02] vs KIA (투수:네일)', style: 'left:13.6%;top:35%;' },
  { info: '[05-02] vs KIA (투수:네일)', style: 'left:9.6%;top:46.4%;' },
  { info: '[05-03] vs 키움 (투수:후라도)', style: 'left:14.6%;top:41%;' },
]

// 메인 컴포넌트
export default function CustomScatter() {
  const processChartData = (data: any[]) => {
    return data.map((item) => {
      const left = parseFloat(item.style.match(/left:([\d.]+)%/)[1])
      const top = parseFloat(item.style.match(/top:([\d.]+)%/)[1])
      return {
        x: left,
        y: top,
        info: item.info,
      }
    })
  }

  const data = processChartData(rawData)
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
      {data.map((point, index) => (
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

      {/* 툴팁 */}
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
