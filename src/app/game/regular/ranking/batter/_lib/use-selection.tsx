'use client'
import { useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
interface NamedItem {
  id: string
}

export function useSelection<T extends NamedItem>(
  items: T[],
  paramsKey: string,
  activdItem: T,
) {
  const [activeItem, setActiveItem] = useState<T>(activdItem)
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()
  const handleSelect = (item: T) => {
    setActiveItem(item)
    const params = new URLSearchParams(searchParams)
    if (activeItem.id === item.id) {
      return
    } else {
      params.set(paramsKey, item.id)
    }
    replace(`${pathname}?${params.toString()}`)
  }

  return { items, activeItem, handleSelect }
}
