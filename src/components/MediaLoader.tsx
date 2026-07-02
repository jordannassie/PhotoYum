'use client'

import { useEffect, useState } from 'react'
import NextImage, { ImageProps } from 'next/image'

/* ─── Aperture spinner ─── */
export function ApertureSpinner({
  dark = false,
  size = 'md',
}: {
  dark?: boolean
  size?: 'sm' | 'md' | 'lg'
}) {
  const ring = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  }[size]

  const icon = {
    sm: 'w-3.5 h-3.5',
    md: 'w-5 h-5',
    lg: 'w-7 h-7',
  }[size]

  const borderColor = dark
    ? 'border-white/20 border-t-white/80'
    : 'border-gray-200 border-t-[#1476ff]'

  return (
    <div className={`relative ${ring} flex-shrink-0`}>
      {/* Spinning ring */}
      <div className={`absolute inset-0 rounded-full border-2 ${borderColor} animate-spin`} />
      {/* Aperture icon centered */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icon.png"
          className={`${icon} object-contain ${dark ? 'invert brightness-200 opacity-70' : 'opacity-60'}`}
          alt=""
          aria-hidden="true"
        />
      </div>
    </div>
  )
}

/* ─── Skeleton shimmer ─── */
export function MediaSkeleton({ dark = false, rounded = 'rounded-lg' }: { dark?: boolean; rounded?: string }) {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center ${rounded} ${
        dark ? 'bg-gray-800' : 'bg-gray-100'
      } animate-pulse`}
    >
      <ApertureSpinner dark={dark} />
    </div>
  )
}

/* ─── ImageWithLoader ─── */
type ImageWithLoaderProps = Omit<ImageProps, 'onLoad'> & {
  containerClassName?: string
  dark?: boolean
  rounded?: string
}

export function ImageWithLoader({
  containerClassName = '',
  dark = false,
  rounded = 'rounded-lg',
  className = '',
  ...imgProps
}: ImageWithLoaderProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden ${rounded} ${containerClassName}`}>
      {!loaded && <MediaSkeleton dark={dark} rounded={rounded} />}
      <NextImage
        {...imgProps}
        className={`${className} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}

/* ─── VideoWithLoader ─── */
export function VideoWithLoader({
  src,
  className = '',
  containerClassName = '',
  dark = false,
  rounded = 'rounded-2xl',
  ...videoProps
}: React.VideoHTMLAttributes<HTMLVideoElement> & {
  src: string
  containerClassName?: string
  dark?: boolean
  rounded?: string
}) {
  const [loaded, setLoaded] = useState(false)

  // Fallback timeout so the loader never gets stuck on mobile
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 3000)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={`relative overflow-hidden ${rounded} ${containerClassName}`}>
      {!loaded && <MediaSkeleton dark={dark} rounded={rounded} />}
      <video
        src={src}
        className={`${className} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoadedMetadata={() => setLoaded(true)}
        onLoadedData={() => setLoaded(true)}
        onCanPlay={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        {...videoProps}
      />
    </div>
  )
}
