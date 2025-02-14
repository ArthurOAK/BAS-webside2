import React, { useEffect } from 'react'
import { preloadImage } from '../../lib/preloader'

type Props = {
  src: string
  alt?: string
  className?: string
}

const Image: React.FC<Props> = ({ src, alt, className }: Props): JSX.Element => {
  useEffect(() => {
    preloadImage(src)
  }, [src])

  return <img src={src} loading="lazy" alt={alt} className={className} />
}

export default Image
