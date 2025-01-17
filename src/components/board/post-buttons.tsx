'use client'
import { ProfileDetail } from '@/types'
import { PencilIcon } from '@heroicons/react/24/outline'
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
      className="h-10 items-center rounded-lg bg-[--black-color-500] px-4 text-sm text-white"
    >
      <span className="hidden lg:block">작성하기</span>{' '}
      <PencilIcon className="h-4 w-4 lg:hidden" />
    </button>
  )
}
