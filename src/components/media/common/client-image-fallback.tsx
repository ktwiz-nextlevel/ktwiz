'use client'
import { useEffect, useState } from 'react'

interface ClientImageFallbackProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
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
    <img
      src={error ? fallbackSrc : src}
      alt={alt}
      onError={() => setError(true)}
      {...props}
    />
  )
}
