'use client'
import { ProfileDetail } from '@/types'
import { useRouter } from 'next/navigation'

export function CreatePost({ userData }: { userData: ProfileDetail | null }) {
  const router = useRouter()

  const handleClick = () => {
    if (!userData) {
      alert('로그인이 필요합니다')
      return
    }
    router.push('/fan/board/write')
  }

  return (
    <button
      onClick={handleClick}
      className="flex h-10 items-center rounded-lg bg-[--black-color-500] px-4 text-sm text-white"
    >
      <span className="hidden md:block">작성하기</span>{' '}
    </button>
  )
}
