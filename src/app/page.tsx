import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'
import { FUTURES_LEAGUE_RANKING_BATTER } from '@/constants/page'
import Image from 'next/image'

export default function Page() {
  const pages = [{ name: 'Home' }, { name: 'About' }, { name: 'Contact' }]

  console.log(FUTURES_LEAGUE_RANKING_BATTER)

  return (
    <>
      <div className="flex h-dvh w-dvw flex-col items-center justify-center">
        <div className="h-40 w-40 animate-spin">
          <a href="https://github.com/kimpuro" target="_blank">
            <Image
              src="/images/mr-egg-sushi-trans.png"
              className="mr-egg-sushi"
              alt="mr-egg-sushi"
              width={300}
              height={300}
            />
          </a>
        </div>
        <h1 className="mb-2">Next.js 14.2.18</h1>
        <h1 className="mb-2">React 18</h1>
        <h1 className="mb-2">Tailwind CSS</h1>
        <Breadcrumbs pages={pages} />
      </div>
    </>
  )
}
