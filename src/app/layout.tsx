import type { Metadata } from 'next'
import '../styles/globals.css'
import '../styles/main.css'

import { WithFullWidthFlyoutMenu as Header } from '@/components/tailwind-ui/'
import Footer from '@/components/common/footer'
import { fetchProfile } from '@/services/user-service'

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
  const user = await fetchProfile()

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
