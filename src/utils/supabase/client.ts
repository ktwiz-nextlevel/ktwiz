import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        persistSession: true, // 세션을 로컬 스토리지에 유지
        autoRefreshToken: true, // 토큰 자동 갱신 활성화
        detectSessionInUrl: true, // OAuth 리디렉션 시 세션 감지
      },
    },
  )
}
