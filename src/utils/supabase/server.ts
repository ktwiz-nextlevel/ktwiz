import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'

/**
 * Supabase 클라이언트를 생성하는 함수
 * @returns Supabase 클라이언트 인스턴스
 */
export async function createClient() {
  const cookieStore = await cookies() // 현재 요청의 쿠키 저장소 가져오기

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            )
          } catch {
            // Server Component에서 `setAll` 호출 시 무시 (미들웨어에서 처리 가능)
          }
        },
      },
    },
  )
}
