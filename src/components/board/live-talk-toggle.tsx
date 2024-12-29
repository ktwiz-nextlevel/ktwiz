// 'use client'
// import { useState } from 'react'
// import LiveTalk from './live-talk'
// import { ProfileDetail } from '@/types'
// import clsx from 'clsx'
// import { PlusIcon } from '@heroicons/react/24/outline'
// import { XMarkIcon } from '@heroicons/react/20/solid'

// export default function LiveTalkToggle({
//   userData,
// }: {
//   userData: ProfileDetail | null
// }) {
//   const [isOpen, setIsOpen] = useState(true)
//   const toggle = () => setIsOpen((prev) => !prev)

//   return (
//     <>
//       <button
//         onClick={toggle}
//         className={clsx(
//           'fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full text-xs font-semibold text-white',
//           isOpen ? 'bg-[--gray-color-100]' : 'bg-[--red-color-100]',
//         )}
//       >
//         {isOpen ? (
//           <XMarkIcon className="h-6 w-6" />
//         ) : (
//           <PlusIcon className="h-6 w-6" />
//         )}
//       </button>
//       {isOpen && (
//         <div className="fixed bottom-36 right-8 z-40">
//           <LiveTalk userData={userData} />
//         </div>
//       )}
//     </>
//   )
// }
