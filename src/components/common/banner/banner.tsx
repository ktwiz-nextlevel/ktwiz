import { cn } from '@/utils'
import React, { ReactNode } from 'react'
// export function Banner({
//   title,
//   description,
//   children,
// }: {
//   title: string
//   description: string
//   children?: React.ReactNode
// }) {
//   return (
//     <div className="h-[244px] w-full bg-[url('/images/banner.webp')] bg-cover bg-center">
//       {
//         <div className="m-auto flex h-full w-fit flex-col items-center justify-between">
//           <div> </div>
//           <div className="flex flex-col items-center">
//             <h3 className="text-5xl text-white">{title}</h3>
//             <p className="mt-2 text-sm">{description}</p>
//           </div>
//           {children}
//         </div>
//       }
//     </div>
//   )
// }
const Banner = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={cn(
        "h-[244px] w-full bg-[url('/images/banner.webp')] bg-cover bg-center",
      )}
    >
      <div
        className={cn(
          'm-auto flex h-full w-fit flex-col items-center justify-between',
        )}
      >
        <div></div>
        {children}
      </div>
    </div>
  )
}
export const BannerHeading = ({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) => {
  return (
    <div className={cn('flex flex-col items-center')}>
      <h3 className={cn('text-5xl text-white')}>{title}</h3>
      <p className={cn('mt-5 text-sm')}>{subtitle}</p>
    </div>
  )
}
Banner.Heading = BannerHeading

export default Banner
