import type { Metadata } from 'next'
import '../styles/globals.css'
import '../styles/main.css'

import { WithFullWidthFlyoutMenu } from '@/components/tailwind-ui/'

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
  return (
    <html lang="ko" className="">
      <body className="flex h-full w-dvw flex-col">
        <WithFullWidthFlyoutMenu />
        {children}
        {/* <div className="h-4 w-full bg-black"></div> */}
      </body>
    </html>
  )
}
