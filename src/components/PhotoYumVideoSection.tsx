'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'

const VIDEO_URL =
  'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/video/hf_20260703_020639_3a33ca60-81fa-4171-991d-b1b9a39ba32d.mp4'

export default function PhotoYumVideoSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = true
    v.play().catch(() => {})
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-700 px-4 py-20 sm:px-6 lg:px-8">

      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute -left-[10%] -top-[20%] h-80 w-80 rounded-full bg-cyan-300 blur-3xl" />
        <div className="absolute -right-[10%] top-[10%] h-96 w-96 rounded-full bg-blue-300 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[30%] h-96 w-96 rounded-full bg-indigo-300 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl text-center">

        {/* Text header */}
        <div className="mb-8 space-y-4">
          <span className="inline-flex rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
            PhotoYum Commercial
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            See PhotoYum in action
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-blue-50">
            AI product photos and UGC-style content built for brands that sell online.
          </p>
        </div>

        {/* Video card */}
        <div className="mx-auto overflow-hidden rounded-[28px] border border-white/25 bg-white/10 p-2 shadow-2xl backdrop-blur-sm">
          <div className="overflow-hidden rounded-[22px] bg-black">
            <video
              ref={videoRef}
              className="aspect-video w-full object-cover"
              src={VIDEO_URL}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/#contact"
            className="rounded-full bg-white px-7 py-3 text-base font-bold text-blue-700 shadow-lg transition hover:bg-blue-50 hover:scale-105"
          >
            Submit My Product
          </Link>
          <Link
            href="/#pricing"
            className="rounded-full border border-white/40 px-7 py-3 text-base font-bold text-white transition hover:bg-white/10 hover:scale-105"
          >
            View Pricing
          </Link>
        </div>

      </div>
    </section>
  )
}
