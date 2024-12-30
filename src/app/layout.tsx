import type { Metadata } from 'next'
import '../styles/globals.css'
import '../styles/main.css'

import { WithFullWidthFlyoutMenu as Header } from '@/components/tailwind-ui/'
import { createClient } from '@/utils/supabase/server'
import Footer from '@/components/common/footer'

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
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <html lang="ko">
      <body className="flex w-dvw flex-col">
        <Header initialUser={user} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
