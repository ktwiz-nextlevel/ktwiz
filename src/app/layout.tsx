import type { Metadata } from 'next'
import '../styles/globals.css'
import '../styles/main.css'

import { WithFullWidthFlyoutMenu } from '@/components/tailwind-ui/'
import AuthProvider from '@/config/auth-provider'
import { createServerSupabaseClient } from '@/utils/supabase/server'

export const metadata: Metadata = {
  title: "kimpuro's next.js template",
  description: "from kimpuro's github template",
  icons: {
    icon: '/icons/favicon.ico',
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const supabase = await createServerSupabaseClient()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <html lang="ko" className="">
      <AuthProvider accessToken={session?.access_token}>
        <body className="flex h-full w-dvw flex-col">
          <WithFullWidthFlyoutMenu />
          {children}
          {/* <div className="h-4 w-full bg-black"></div> */}
        </body>
      </AuthProvider>
    </html>
  )
}
