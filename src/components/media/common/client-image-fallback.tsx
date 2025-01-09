'use client'
import Image, { ImageProps } from 'next/image'
import { useEffect, useState } from 'react'

interface ClientImageFallbackProps extends Omit<ImageProps, 'src'> {
  src: string
  fallbackSrc: string
}
export default function ClientImageFallback({
  src,
  alt = '',
  fallbackSrc,
  ...props
}: ClientImageFallbackProps) {
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    setError(false)
  }, [src])

  return (
    <Image
      src={error ? fallbackSrc : src}
      alt={alt}
      onError={() => setError(true)}
      {...props}
    />
  )
}
