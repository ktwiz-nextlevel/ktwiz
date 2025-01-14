'use client'
import Image from 'next/image'
import Modal from '../common/modal'
import { createClient } from '@/utils/supabase/client'
import { redirect, useRouter } from 'next/navigation'

interface ModalProps {
  onClose: () => void
}

export default function SignupModal({ onClose }: ModalProps) {
  const router = useRouter()

  const signUpWithKakao = async () => {
    try {
      const supabase = createClient()

      // 신규 사용자 카카오 인증 시작
      const { error: error } = await supabase.auth.signInWithOAuth({
        provider: 'kakao',
        options: {
          redirectTo: `${window.location.origin}/auth/callback?signup=true`,
          queryParams: {
            prompt: 'select_account', // 카카오 계정 선택 화면 강제 표시
          },
        },
      })

      if (error) {
        console.error('Kakao signup error:', error)
        router.push('/error')
      }
    } catch (error) {
      console.error('Unexpected error:', error)
      router.push('/error')
    }
  }

  // 구글 로그인
  const signUpWithGoogle = async () => {
    try {
      const supabase = createClient()

      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: process.env.NEXT_PUBLIC_BASE_URL
            ? `https://${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`
            : 'http://localhost:3000/auth/callback',
          queryParams: {
            prompt: 'select_account',
          },
        },
      })

      if (error) {
        console.error('Google signup error:', error)
        router.push('/error')
      }
    } catch (error) {
      console.error('Unexpected error:', error)
      router.push('/error')
    }
  }

  return (
    <>
      <Modal onClose={onClose}>
        {/* 로고 + 타이틀 */}
        <div className="py-[20px]">
          <Image
            src="/images/KtLogo.png"
            width={100}
            height={100}
            alt="kt 로고"
            className="mx-auto"
          />
          <p className="mt-[10px] text-center text-[20px] font-bold">
            회원가입
          </p>
        </div>
        {/* 소셜 로그인 목록 */}
        <div className="flex flex-col gap-2.5">
          {/* refactor: 로그인 버튼 컴포넌트로 뺴기 */}
          <button
            className="h-[40px] w-full rounded-[8px] bg-[#ffe900]"
            style={{
              backgroundImage: 'url(/images/kakao-logo.webp)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '10px, 50%',
              backgroundSize: '24px',
            }}
            onClick={signUpWithKakao}
          >
            카카오로 회원가입
          </button>

          <button
            className="h-[40px] w-full rounded-[8px] border bg-[#f2f2f2]"
            style={{
              backgroundImage: 'url(/images/google-logo.webp)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '10px, 50%',
              backgroundSize: '24px',
            }}
            onClick={signUpWithGoogle}
          >
            google로 회원가입
          </button>
        </div>
      </Modal>
    </>
  )
}
