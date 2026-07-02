'use client'

import { useEffect, useRef, useState } from 'react'
import { ApertureSpinner } from '@/components/MediaLoader'

const VIDEOS = [
  'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/video/hf_20260701_185249_57e3ce14-e57c-40d9-bf9a-603e8ee7ae4e.mp4',
  'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/video/hf_20260701_180757_85a8065a-31ee-48a6-908c-924db1132041.mp4',
  'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/video/hf_20260701_181737_dabd4f34-dbbe-47c9-8773-15c4a5d9b1cb.mp4',
  'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/video/hf_20260701_185105_68d29033-1527-4a1f-a3f4-b24858052292.mp4',
]

function VideoCard({ src, index }: { src: string; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [active, setActive] = useState(false)
  const [lightbox, setLightbox] = useState(false)
  const [videoReady, setVideoReady] = useState(false)

  // Fallback: force-clear the spinner after 3 s so mobile users are never stuck
  // behind the loader if video events are delayed or blocked by the browser.
  useEffect(() => {
    const t = setTimeout(() => setVideoReady(true), 3000)
    return () => clearTimeout(t)
  }, [])

  const handleEnter = () => {
    setActive(true)
    if (videoRef.current) {
      videoRef.current.muted = false
      videoRef.current.volume = 0.6
      videoRef.current.play().catch(() => {
        // autoplay blocked — keep muted fallback
        if (videoRef.current) {
          videoRef.current.muted = true
          videoRef.current.play()
        }
      })
    }
  }

  const handleLeave = () => {
    setActive(false)
    if (videoRef.current) {
      videoRef.current.muted = true
    }
  }

  return (
    <>
      <button
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onFocus={handleEnter}
        onBlur={handleLeave}
        onClick={() => setLightbox(true)}
        className={`group relative rounded-2xl overflow-hidden bg-black aspect-[9/16] shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1476ff] focus:ring-offset-2 ${
          active ? 'shadow-xl scale-[1.03] z-10' : 'hover:shadow-lg hover:scale-[1.02]'
        }`}
      >
        <video
          ref={videoRef}
          src={src}
          loop
          muted
          playsInline
          preload="metadata"
          className={`w-full h-full object-cover transition-opacity duration-500 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
          onLoadedMetadata={() => setVideoReady(true)}
          onLoadedData={() => setVideoReady(true)}
          onCanPlay={() => setVideoReady(true)}
          onError={() => setVideoReady(true)}
        />

        {/* Loading spinner — shown until video is ready */}
        {!videoReady && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-20">
            <ApertureSpinner dark size="md" />
          </div>
        )}

        {/* Play indicator overlay */}
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${active ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center group-hover:bg-black/60 transition-colors">
            <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Sound-on badge on hover */}
        <div className={`absolute top-2.5 right-2.5 flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-1 rounded-full transition-opacity duration-200 ${active ? 'opacity-100' : 'opacity-0'}`}>
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
          </svg>
          Sound on
        </div>

        {/* Number badge */}
        <div className="absolute bottom-2.5 left-2.5 w-6 h-6 rounded-full bg-[#FF9900] text-white text-[10px] font-bold flex items-center justify-center shadow">
          {index + 1}
        </div>
      </button>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(false)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            onClick={() => setLightbox(false)}
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative max-h-[90vh] max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={src}
              controls
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto max-h-[88vh] rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default function VideoShowcase() {
  const scrollToForm = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="videos" className="bg-[#F8FAFC] py-20 lg:py-28 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-block bg-[#FF9900]/15 text-[#FF9900] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            Product Videos
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#111827]">
            Motion that sells
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Short product showcase videos for Amazon A+, TikTok, Reels, and ads.
            Hover any video to preview with sound.
          </p>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {VIDEOS.map((src, i) => (
            <VideoCard key={src} src={src} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 bg-[#FF9900] hover:bg-[#e68900] text-white font-bold px-7 py-3.5 rounded-xl text-base transition-all shadow-lg shadow-orange-100"
          >
            Add a video to your package
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
