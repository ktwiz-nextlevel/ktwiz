'use client'
import Image from 'next/image'
import Modal from '../common/modal'
import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import KakaoLoginButton from '../common/kakao-login'

interface ModalProps {
  onClose: () => void
}
export default function LoginModal({ onClose }: ModalProps) {
  const [user, setUser] = useState<any | null>(null)
  const [loading, setLoading] = useState(true) // 로딩 상태
  const supabase = createClient()

  /** 유저 정보 불러오기 */
  const fetchSession = async () => {
    const { data, error } = await supabase.auth.getSession()
    console.log(data)

    if (error) {
      console.error('Error fetching session:', error)
    } else {
      setUser(data?.session?.user || null)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchSession()
  }, [])

  if (loading) {
    return <p>로딩 중...</p> // 로딩 중 상태 표시
  }

  return (
    <>
      <Modal onClose={onClose}>
        {user ? (
          <p>
            안녕하세요,{' '}
            {user.user_metadata.full_name ||
              user.user_metadata.name ||
              '사용자'}
            님!
          </p>
        ) : (
          <p>로그인하지 않았습니다.</p>
        )}
        {/* 로고 + 타이틀 */}
        <div className="py-[20px]">
          <Image
            src="/images/KtLogo.png"
            width={100}
            height={100}
            alt="kt 로고"
            className="mx-auto"
          />
          <p className="mt-[10px] text-center text-[20px] font-bold">로그인</p>
        </div>
        {/* 소셜 로그인 목록 */}
        <div className="flex flex-col gap-[12px]">
          {/* refactor: 로그인 버튼 컴포넌트로 뺴기 */}
          <KakaoLoginButton />

          {/* <button
            className="h-[40px] w-full rounded-[8px] border bg-[#f2f2f2]"
            style={{
              backgroundImage: 'url(/images/google-logo.webp)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '10px, 50%',
              backgroundSize: '24px',
            }}
          >
            google 로그인
          </button> */}
          {/* <button
            className="h-[40px] w-full rounded-[8px] border border-[#999]"
            style={{
              backgroundImage: 'url(/images/mail-icon.svg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '10px, 50%',
              backgroundSize: '24px',
            }}
          >
            이메일 로그인
          </button> */}
        </div>
        <div className="mt-[14px] text-center">
          <button>회원가입</button>
        </div>
      </Modal>
    </>
  )
}
