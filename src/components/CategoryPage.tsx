'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'
import ContactForm from '@/components/ContactForm'
import { getSupabase } from '@/lib/supabaseClient'
import { ApertureSpinner } from '@/components/MediaLoader'

// ─── types ───────────────────────────────────────────────────────────────────

export type CategoryType = 'products' | 'videos' | 'homes' | 'food'

interface CategoryPageProps {
  category: CategoryType
  headline: string
  subheadline: string
  ctaText: string
  pill: string
}

// ─── video URLs (product videos) ─────────────────────────────────────────────

const VIDEOS = [
  'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/video/hf_20260701_185249_57e3ce14-e57c-40d9-bf9a-603e8ee7ae4e.mp4',
  'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/video/hf_20260701_180757_85a8065a-31ee-48a6-908c-924db1132041.mp4',
  'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/video/hf_20260701_181737_dabd4f34-dbbe-47c9-8773-15c4a5d9b1cb.mp4',
  'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/video/hf_20260701_185105_68d29033-1527-4a1f-a3f4-b24858052292.mp4',
]

// ─── sub-components ───────────────────────────────────────────────────────────

function MutedVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const v = ref.current
    if (!v) return
    v.muted = true
    v.play().catch(() => {})
  }, [])
  return (
    <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-black">
      <video ref={ref} src={src} muted loop playsInline autoPlay preload="metadata" className="w-full aspect-video object-cover" />
    </div>
  )
}

function ProductGallery() {
  const [images, setImages] = useState<string[]>([])
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading')
  const [lightbox, setLightbox] = useState<string | null>(null)

  useEffect(() => {
    const fetch = async () => {
      try {
        const client = getSupabase()
        const { data, error } = await client.storage
          .from('Storage').list('Products', { limit: 100, sortBy: { column: 'name', order: 'asc' } })
        if (error) { setStatus('error'); return }
        const exts = new Set(['png', 'jpg', 'jpeg', 'webp'])
        const urls = (data ?? [])
          .filter((f) => f.name && !f.name.startsWith('.') && exts.has(f.name.split('.').pop()?.toLowerCase() ?? ''))
          .map((f) => client.storage.from('Storage').getPublicUrl(`Products/${f.name}`).data.publicUrl)
        setImages(urls)
        setStatus('loaded')
      } catch { setStatus('error') }
    }
    fetch()
  }, [])

  if (status === 'loading') return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="aspect-square rounded-2xl bg-gray-100 animate-pulse flex items-center justify-center">
          {i === 3 && <ApertureSpinner size="sm" />}
        </div>
      ))}
    </div>
  )

  if (status === 'error' || images.length === 0) return (
    <div className="text-center py-12 text-gray-400 text-sm">No images yet — check back soon.</div>
  )

  return (
    <>
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((url, i) => (
          <GalleryCard key={url} url={url} index={i} onClick={() => setLightbox(url)} />
        ))}
      </div>
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center" onClick={() => setLightbox(null)}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <Image src={lightbox} alt="Preview" width={1200} height={1200} className="w-full h-auto max-h-[90vh] object-contain rounded-2xl shadow-2xl" unoptimized />
          </div>
        </div>
      )}
    </>
  )
}

function GalleryCard({ url, index, onClick }: { url: string; index: number; onClick: () => void }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <button onClick={onClick} className="block w-full break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 hover:scale-[1.02] group">
      <div className="relative bg-gray-50">
        {!loaded && <div className="absolute inset-0 min-h-[160px] flex items-center justify-center bg-gray-100 z-10 rounded-2xl"><ApertureSpinner size="sm" /></div>}
        <Image src={url} alt={`Example ${index + 1}`} width={600} height={600} className={`w-full h-auto object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`} unoptimized onLoad={() => setLoaded(true)} />
      </div>
    </button>
  )
}

function PlaceholderGallery({ pill }: { pill: string }) {
  return (
    <div className="text-center py-16 space-y-4">
      <div className="inline-block bg-[#FF9900]/15 text-[#FF9900] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{pill}</div>
      <p className="text-gray-400 text-sm">Gallery coming soon — we&apos;re adding examples now.</p>
    </div>
  )
}

// ─── main export ─────────────────────────────────────────────────────────────

export default function CategoryPage({ category, headline, subheadline, ctaText, pill }: CategoryPageProps) {
  return (
    <>
      <Header />
      <main className="pt-16">

        {/* Hero */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-block bg-[#FF9900]/15 text-[#FF9900] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {pill}
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-[#111827] leading-tight tracking-tight">
              {headline}
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              {subheadline}
            </p>
            <a
              href={`/#contact?cat=${category}`}
              className="inline-flex items-center gap-2 bg-[#FF9900] hover:bg-[#e68900] text-white font-bold px-7 py-3.5 rounded-xl text-base transition-all shadow-lg shadow-orange-100"
            >
              {ctaText}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </section>

        {/* Gallery */}
        <section className="bg-[#f8fafc] py-16 lg:py-20 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <h2 className="text-2xl font-extrabold text-[#111827] mb-8 text-center">
              {category === 'products' && 'Product image examples'}
              {category === 'videos'   && 'Product video examples'}
              {category === 'homes'    && 'Real estate examples'}
              {category === 'food'     && 'Food & restaurant examples'}
            </h2>

            {category === 'products' && <ProductGallery />}

            {category === 'videos' && (
              <div className="grid sm:grid-cols-2 gap-5">
                {VIDEOS.map((src, i) => <MutedVideo key={i} src={src} />)}
              </div>
            )}

            {(category === 'homes' || category === 'food') && <PlaceholderGallery pill={pill} />}

            {/* Bottom CTA */}
            <div className="text-center mt-14">
              <a
                href={`/#contact?cat=${category}`}
                className="inline-flex items-center gap-2 bg-[#FF9900] hover:bg-[#e68900] text-white font-bold px-7 py-3.5 rounded-xl text-base transition-all shadow-lg shadow-orange-100"
              >
                {ctaText}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}
