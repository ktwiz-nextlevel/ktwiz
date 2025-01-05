import { type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'
import { NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // If the user visits `/game/regular/boxscore`, redirect to the specific path
  console.log(pathname)
  if (pathname === '/game/regular/boxscore') {
    const newUrl = new URL(
      '/game/regular/boxscore/20241008/33331008LGKT0',
      request.url,
    )
    return NextResponse.redirect(newUrl)
  }

  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
