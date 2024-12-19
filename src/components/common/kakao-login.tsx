import { createClient } from '@/utils/supabase/client'

const supabase = createClient()

function KakaoLoginButton() {
  const handleKakaoLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'kakao',
      options: {
        redirectTo: process.env.BASE_URL, // 리디렉션될 url
      },
    })

    if (error) {
      console.error('Error during Kakao login:', error.message)
    } else {
      console.log('Logged in with Kakao:', data)
    }
  }

  return (
    <button
      className="h-[40px] w-full rounded-[8px] bg-[#ffe900]"
      style={{
        backgroundImage: 'url(/images/kakao-logo.webp)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '10px, 50%',
        backgroundSize: '24px',
      }}
      onClick={handleKakaoLogin}
    >
      카카오 로그인
    </button>
  )
}

export default KakaoLoginButton
