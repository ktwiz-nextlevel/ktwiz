'use client'
import { useState } from 'react'

export function useSelection<T>(items: T[]) {
  const [activeItem, setActiveItem] = useState<T>(items[0])

  const handleSelect = (item: T) => {
    setActiveItem(item)
  }

  return { items, activeItem, handleSelect }
}
