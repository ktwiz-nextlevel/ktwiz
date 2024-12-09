import type { Metadata } from 'next'
import '../styles/globals.css'
import '../styles/main.css'

import { WithFullWidthFlyoutMenu as Header } from '@/components/tailwind-ui/'
import { Banner } from '@/components/common/banner'

export const metadata: Metadata = {
  title: "kimpuro's next.js template",
  description: "from kimpuro's github template",
  icons: {
    icon: '/icons/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className="">
      <body className="flex h-full w-dvw flex-col">
        <Header />
        {children}
        {/* <div className="h-4 w-full bg-black"></div> */}
      </body>
    </html>
  )
}
