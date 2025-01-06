'use client'

import { useEffect, useState, useRef } from 'react'
import { PlayerCode } from '@/types'
import Banner from '@/components/common/banner/banner'
import TabMenu from '@/components/common/tab-menu/tab-menu'
import { PLAYER_BANNER_DATA } from '@/contants/player'
import Image from 'next/image'
import { getPitcherPlayerList } from '@/app/api/player/api'
import html2canvas from 'html2canvas'
import OverlayGuide from '@/components/player/overlay-guide'
import PlayerList from '@/components/player/custom-squad/player-list'

interface PlayerCard {
  pcode: PlayerCode
  playerName: string
  playerPrvwImg?: string
  position?: string
}

interface SquareStatus {
  playerName: string
  playerPrvwImg?: string
  isDrop?: boolean
}

interface SquarePosition {
  top: string
  left: string
  status: SquareStatus
}

export default function CustomSquad() {
  const [cards, setCards] = useState<PlayerCard[]>([])
  const [draggedCard, setDraggedCard] = useState<PlayerCard | null>(null)
  const dragImageRef = useRef<HTMLDivElement | null>(null)
  const captureRef = useRef<HTMLDivElement | null>(null)
  const [showGuide, setShowGuide] = useState(true)

  const [squareStates, setSquareStates] = useState<SquarePosition[]>([
    { top: '78%', left: '48%', status: { playerName: '포수' } },
    { top: '68%', left: '58%', status: { playerName: '1루수' } },
    { top: '57%', left: '48%', status: { playerName: '2루수' } },
    { top: '68%', left: '37%', status: { playerName: '3루수' } },
    { top: '67%', left: '47%', status: { playerName: '투수' } },
    { top: '56%', left: '70%', status: { playerName: '외야수' } },
    { top: '50%', left: '20%', status: { playerName: '외야수' } },
    { top: '40%', left: '50%', status: { playerName: '외야수' } },
    { top: '56%', left: '34%', status: { playerName: '내야수' } },
  ])

  // 선수 리스트 호출
  useEffect(() => {
    const fetchPitcherPlayerList = async () => {
      try {
        const data = await getPitcherPlayerList()
        setCards(data)
      } catch (error) {
        console.error('fetchPitcherPlayerList 요청 실패:', error)
      }
    }
    fetchPitcherPlayerList()
  }, [])

  // 드래그 시작
  const handleDrag = (card: PlayerCard, e: React.DragEvent) => {
    setDraggedCard(card)
    if (dragImageRef.current) {
      const dragImage = dragImageRef.current
      dragImage.style.display = 'block'
      e.dataTransfer.setDragImage(dragImage, 104, 70)
    }
  }

  // 드래그 종료
  const handleDragEnd = () => {
    setDraggedCard(null)
    if (dragImageRef.current) {
      dragImageRef.current.style.display = 'none'
    }
  }

  // 카드 드롭
  const handleDrop = (index: number) => {
    if (draggedCard) {
      const updatedSquares = [...squareStates]

      // 이미 채워진 경우 드롭 불가
      if (updatedSquares[index].status.isDrop) {
        return
      }

      updatedSquares[index].status = {
        playerName: draggedCard.playerName,
        playerPrvwImg: draggedCard.playerPrvwImg,
        isDrop: true,
      }

      setSquareStates(updatedSquares)

      // 카드 목록에서 드래그된 카드 제거
      setCards((prevCards) =>
        prevCards.filter((card) => card.pcode !== draggedCard.pcode),
      )

      setDraggedCard(null)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleRefresh = () => {
    window.location.reload()
  }

  const handleCloseGuide = () => {
    setShowGuide(false)
  }

  return (
    <>
      <BannerTest />
      {showGuide && <OverlayGuide onClose={handleCloseGuide} />}

      <div className="page-large">
        <div className="flex justify-end">
          <button
            onClick={handleRefresh}
            className="rounded-lg bg-blue-500 px-4 py-2 text-white shadow-md hover:bg-blue-600"
          >
            초기화
          </button>
        </div>
        <div className="flex h-screen flex-col gap-6 md:flex-row">
          <PlayerList
            cards={cards}
            draggedCard={draggedCard}
            handleDrag={handleDrag}
            handleDragEnd={handleDragEnd}
          />

          <div className="relative h-full w-full flex-grow rounded-lg p-4 shadow-md md:w-4/5">
            <Image
              src="/images/players/rb.png"
              alt="Player Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg p-8"
            />
            <div className="absolute inset-0">
              {squareStates.map((position, index) => (
                <div
                  key={index}
                  onDrop={() => handleDrop(index)}
                  onDragOver={handleDragOver}
                  className="group absolute flex h-[104px] w-[70px] items-center justify-center rounded-lg border border-gray-300 bg-white bg-opacity-50 text-xs text-black"
                  style={{
                    top: position.top,
                    left: position.left,
                  }}
                >
                  {position.status.playerPrvwImg ? (
                    <img
                      src={position.status.playerPrvwImg}
                      alt={position.status.playerName}
                      className="h-full w-full rounded-lg object-cover"
                    />
                  ) : (
                    position.status.playerName
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* 드래그 이미지 */}
        <div
          ref={dragImageRef}
          className="pointer-events-none fixed h-[104px] w-[70px] overflow-hidden rounded-lg shadow-lg"
          style={{ display: 'none', zIndex: 1000 }}
        >
          {draggedCard && (
            <img
              src={draggedCard.playerPrvwImg}
              alt={draggedCard.playerName}
              className="h-full w-full object-cover"
            />
          )}
        </div>
      </div>
    </>
  )
}

const BannerTest = () => {
  return (
    <Banner>
      <Banner.Heading
        title="커스텀 스쿼드"
        subtitle="나만의 커스텀 스쿼드를 만들어 보세요!"
      />
      <TabMenu tabs={PLAYER_BANNER_DATA['/player'].tabs} />
    </Banner>
  )
}
