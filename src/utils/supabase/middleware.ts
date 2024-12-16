import { createClient } from './server' // server.ts에서 createClient를 import
import { NextResponse, type NextRequest } from 'next/server'

/** 사용자 세션을 업데이트하는 함수. Next.js 서버에서 호출되며 NextRequest를 입력으로 받음 */
export async function updateSession(request: NextRequest) {
  // Supabase 클라이언트 생성
  const supabase = await createClient()

  // 초기 응답 객체 생성
  let supabaseResponse = NextResponse.next({
    request,
  })

  // ⚠️ 중요: createServerClient와 supabase.auth.getUser() 사이에는 코드를 작성하지 않아야 함.
  // 잘못된 코드는 세션 동기화 문제를 일으킬 수 있음.

  // 현재 요청에 해당하는 사용자의 인증 정보 가져오기
  const {
    data: { user }, // 사용자 정보 추출
  } = await supabase.auth.getUser()

  // 인증된 사용자가 없는 경우
  if (
    !user && // 사용자 정보가 없고
    !request.nextUrl.pathname.startsWith('/login') && // 요청이 로그인 페이지가 아니며
    !request.nextUrl.pathname.startsWith('/auth') // 요청이 인증 관련 경로가 아닐 때
  ) {
    // 사용자를 로그인 페이지로 리다이렉트
    const url = request.nextUrl.clone() // 현재 URL을 복제
    url.pathname = '/login' // 경로를 '/login'으로 변경
    return NextResponse.redirect(url) // 로그인 페이지로 리다이렉트 응답 반환
  }
  // 최종 응답 객체 반환
  return supabaseResponse
}
