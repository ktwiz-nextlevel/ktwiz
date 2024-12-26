import React from 'react'

interface ModalProps {
  children: React.ReactNode
  onClose: () => void // 모달 닫는 핸들러
}

export default function Modal({ children, onClose }: ModalProps) {
  const handleBgClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className="z-9 absolute left-0 top-0 h-full w-full bg-[#00000080]"
      onClick={handleBgClick}
    >
      <div className="absolute left-1/2 top-1/2 min-h-[600px] min-w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-[16px] bg-white p-[16px]">
        <button
          className="absolute right-[16px] top-[16px] border-none p-1 hover:bg-gray-200"
          aria-label="Close"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            style={{
              width: '20px',
              height: '20px',
              color: 'rgb(112, 121, 143)',
            }}
          >
            <path d="M19.784 5.28a.75.75 0 1 0-1.06-1.06l-6.722 6.721L5.28 4.22a.75.75 0 1 0-1.06 1.06l6.721 6.722-6.721 6.721a.75.75 0 0 0 1.06 1.061l6.722-6.721 6.721 6.721a.75.75 0 0 0 1.061-1.06l-6.721-6.722 6.721-6.722Z"></path>
          </svg>
        </button>
        {children}
      </div>
    </div>
  )
}
