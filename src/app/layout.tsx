import type { Metadata } from 'next'
import '../styles/globals.css'
import '../styles/main.css'

import { WithFullWidthFlyoutMenu as Header } from '@/components/tailwind-ui/'
import Footer from '@/components/common/footer'
import { fetchProfile } from '@/services/user-service'

export const metadata: Metadata = {
  title: 'KTWiz-NextLevel  %s',
  description:
    'KT Wiz 웹사이트 개선프로젝트 Next Level 1팀의 개선 사이트입니다.',
  icons: {
    icon: '/icons/favicon.ico',
  },
  openGraph: {
    type: 'website',
    title: 'KT Wiz 개선프로젝트',
    description: 'Next Level 1팀의 kt wiz 개선 사이트입니다.',
    url: 'https://ktwiz.kimpuro.com',
    locale: 'ko_KR',
    images: [
      {
        url: '/images/main/2024_post_bg_web.png',
        width: 1200,
        height: 630,
        alt: '2024 가을 시즌 수원 wiz park',
      },
    ],
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
