import { Banner } from '@/components/common/banner'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Banner />
      <div className="page border border-gray-500">{children}</div>
    </>
  )
}
