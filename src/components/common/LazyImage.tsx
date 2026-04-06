import React, { useEffect, useMemo, useRef, useState } from 'react'

export interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  placeholder?: 'blur' | 'color'
  rootMargin?: string
}

const TRANSPARENT_SVG_DATA_URI =
  'data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%221%22 height=%221%22 viewBox=%220 0 1 1%22%3E%3Crect width=%221%22 height=%221%22 fill=%22transparent%22/%3E%3C/svg%3E'

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  placeholder = 'color',
  rootMargin = '50px',
  className = '',
  style,
  loading = 'lazy',
  decoding = 'async',
  onLoad,
  ...rest
}) => {
  const imgRef = useRef<HTMLImageElement | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const [shouldLoad, setShouldLoad] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setShouldLoad(false)
    setLoaded(false)
  }, [src])

  useEffect(() => {
    const element = imgRef.current
    if (!element || shouldLoad) return

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setShouldLoad(true)
      return
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry?.isIntersecting) {
          setShouldLoad(true)
          observerRef.current?.disconnect()
          observerRef.current = null
        }
      },
      { rootMargin }
    )

    observerRef.current.observe(element)

    return () => {
      observerRef.current?.disconnect()
      observerRef.current = null
    }
  }, [rootMargin, shouldLoad])

  const mergedClassName = useMemo(() => {
    return [
      'lazy-image',
      `lazy-image--${placeholder}`,
      loaded ? 'loaded' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ')
  }, [className, loaded, placeholder])

  const mergedStyle = useMemo<React.CSSProperties>(() => {
    const placeholderStyle: React.CSSProperties =
      placeholder === 'blur'
        ? {
            filter: loaded ? 'blur(0)' : 'blur(12px)',
            transform: loaded ? 'scale(1)' : 'scale(1.03)',
            backgroundColor: '#f3f4f6',
          }
        : {
            backgroundColor: '#f3f4f6',
          }

    return {
      opacity: loaded ? 1 : 0,
      transition: 'opacity 0.4s ease, filter 0.4s ease, transform 0.4s ease',
      willChange: 'opacity, filter, transform',
      ...placeholderStyle,
      ...style,
    }
  }, [loaded, placeholder, style])

  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setLoaded(true)
    onLoad?.(event)
  }

  return (
    <img
      ref={imgRef}
      src={shouldLoad ? src : TRANSPARENT_SVG_DATA_URI}
      alt={alt}
      className={mergedClassName}
      style={mergedStyle}
      loading={loading}
      decoding={decoding}
      onLoad={handleLoad}
      {...rest}
    />
  )
}

export default LazyImage
