'use client'

import { useState } from 'react'

interface OverlayGuideProps {
  onClose: () => void
}

const OverlayGuide = ({ onClose }: OverlayGuideProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative max-w-xl rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">🏟️ 커스텀 스쿼드 안내</h2>
        <p className="mb-2 text-gray-700">
          ✔️ 선수 카드를 드래그하여 원하는 포지션에 배치 해보세요.
        </p>
        <p className="mb-2 text-gray-700">
          ✔️ 초기화 버튼으로 스쿼드를 리셋할 수 있습니다.
        </p>
        <p className="mb-2 text-gray-700">
          ✔️ 스쿼드 캡처 버튼으로 현재 스쿼드를 이미지로 저장할 수 있습니다.
        </p>
        <button
          onClick={onClose}
          className="mt-4 w-full rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          시작하기
        </button>
      </div>
    </div>
  )
}

export default OverlayGuide
