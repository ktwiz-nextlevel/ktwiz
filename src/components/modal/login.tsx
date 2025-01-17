'use client'
import Image from 'next/image'
import Modal from '../common/modal'
import { createClient } from '@/utils/supabase/client'
import { redirect, usePathname } from 'next/navigation'

interface ModalProps {
  onClose: () => void
}

export default function LoginModal({ onClose }: ModalProps) {
  // 현재 페이지 URL을 next 파라미터에 포함
  const currentUrl = usePathname()

  async function signInWithKakao() {
    const supabase = await createClient()

    // 카카오 로그인
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'kakao',
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'}/auth/callback?next=${encodeURIComponent(currentUrl)}`,
      },
    })
    if (error) {
      redirect('/error')
    }
  }

  async function signInWithGoogle() {
    const supabase = await createClient()

    // 구글 로그인
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'}/auth/callback?next=${encodeURIComponent(currentUrl)}`,
      },
    })
    if (error) {
      redirect('/error')
    }
  }
  return (
    <>
      <Modal onClose={onClose}>
        {/* 로고 + 타이틀 */}
        <div className="py-[20px]">
          <Image
            src="/images/kt-logo.png"
            width={100}
            height={100}
            alt="kt 로고"
            className="mx-auto"
          />
          <p className="mt-8 text-center text-xl font-bold">로그인</p>
          <p className="mb-6 mt-4 text-center text-xs text-gray-400">
            SNS 계정으로 5초만에 로그인 해보세요
          </p>
        </div>
        {/* 소셜 로그인 목록 */}
        <div className="flex flex-col gap-2.5 px-10">
          {/* refactor: 로그인 버튼 컴포넌트로 뺴기 */}
          <button
            className="h-[40px] w-full rounded-[8px] bg-[#ffe900]"
            style={{
              backgroundImage: 'url(/images/kakao-logo.webp)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '10px, 50%',
              backgroundSize: '24px',
            }}
            onClick={signInWithKakao}
          >
            카카오 로그인
          </button>

          <button
            className="h-[40px] w-full rounded-[8px] border bg-[#f2f2f2]"
            style={{
              backgroundImage: 'url(/images/google-logo.webp)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '10px, 50%',
              backgroundSize: '24px',
            }}
            onClick={signInWithGoogle}
          >
            google 로그인
          </button>
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
      </Modal>
    </>
  )
}
