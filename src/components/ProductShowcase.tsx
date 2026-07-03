'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { getSupabase } from '@/lib/supabaseClient'
import { ApertureSpinner } from '@/components/MediaLoader'

// ─── constants ───────────────────────────────────────────────────────────────

const BUCKET = 'Storage'
const FOLDER = 'Products'
const IMAGE_EXTENSIONS = new Set(['png', 'jpg', 'jpeg', 'webp'])

const VIDEOS = [
  'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/video/hf_20260701_185249_57e3ce14-e57c-40d9-bf9a-603e8ee7ae4e.mp4',
  'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/video/hf_20260701_180757_85a8065a-31ee-48a6-908c-924db1132041.mp4',
  'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/video/hf_20260701_181737_dabd4f34-dbbe-47c9-8773-15c4a5d9b1cb.mp4',
  'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/video/hf_20260701_185105_68d29033-1527-4a1f-a3f4-b24858052292.mp4',
]

type Category = 'amazon' | 'videos' | 'real-estate' | 'food'
type GridMode  = 'small' | 'large'

const TABS: { id: Category; label: string }[] = [
  { id: 'amazon',      label: 'Amazon Product Photos' },
  { id: 'videos',      label: 'Product Videos' },
  { id: 'real-estate', label: 'Real Estate' },
  { id: 'food',        label: 'Food & Restaurants' },
]

// ─── helpers ─────────────────────────────────────────────────────────────────

function isImage(name: string) {
  return !!IMAGE_EXTENSIONS.has(name.split('.').pop()?.toLowerCase() ?? '')
}

function scrollToContact() {
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
}

// ─── grid view toggle icons ───────────────────────────────────────────────────

function SmallGridIcon({ active }: { active: boolean }) {
  const c = active ? '#1476ff' : '#9CA3AF'
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      {[0,1,2,3,4,5,6,7].map((i) => (
        <rect key={i} x={1 + (i % 4) * 4.25} y={1 + Math.floor(i / 4) * 8.5} width="3" height="6.5" rx="0.6" fill={c} />
      ))}
    </svg>
  )
}

function LargeGridIcon({ active }: { active: boolean }) {
  const c = active ? '#1476ff' : '#9CA3AF'
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      {[0,1,2,3].map((i) => (
        <rect key={i} x={1 + (i % 2) * 9} y={1 + Math.floor(i / 2) * 9} width="7" height="7" rx="1" fill={c} />
      ))}
    </svg>
  )
}

// ─── image grid card ─────────────────────────────────────────────────────────

function GridImage({ url, index, mode, onClick }: { url: string; index: number; mode: GridMode; onClick: () => void }) {
  const [loaded, setLoaded] = useState(false)

  if (mode === 'small') {
    return (
      <button onClick={onClick} className="group aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-150 hover:scale-[1.04] focus:outline-none focus:ring-2 focus:ring-[#1476ff] focus:ring-offset-1">
        <div className="relative w-full h-full bg-gray-100">
          {!loaded && <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10"><ApertureSpinner size="sm" /></div>}
          <Image src={url} alt={`PhotoYum product ${index + 1}`} fill className={`object-cover group-hover:opacity-90 transition-all duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`} sizes="(max-width: 640px) 25vw, (max-width: 1024px) 16vw, 12.5vw" unoptimized onLoad={() => setLoaded(true)} />
        </div>
      </button>
    )
  }

  return (
    <button onClick={onClick} className="block w-full break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#1476ff] focus:ring-offset-2 group">
      <div className="relative bg-gray-50">
        {!loaded && <div className="absolute inset-0 min-h-[200px] flex items-center justify-center bg-gray-100 z-10 rounded-2xl aspect-square"><ApertureSpinner size="md" /></div>}
        <Image src={url} alt={`PhotoYum product ${index + 1}`} width={600} height={600} className={`w-full h-auto object-cover group-hover:opacity-95 transition-all duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" unoptimized onLoad={() => setLoaded(true)} />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-2 shadow">
            <svg className="w-4 h-4 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>
      </div>
    </button>
  )
}

// ─── muted autoplay video card ────────────────────────────────────────────────

function VideoPreview({ src }: { src: string }) {
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

// ─── placeholder tab for real estate / food ───────────────────────────────────

function ComingSoonTab({ pill, headline, description, cta }: { pill: string; headline: string; description: string; cta: string }) {
  return (
    <div className="py-12 text-center space-y-6 max-w-2xl mx-auto">
      <div className="inline-block bg-[#FF9900]/15 text-[#FF9900] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
        {pill}
      </div>
      <h3 className="text-2xl lg:text-3xl font-extrabold text-[#111827]">{headline}</h3>
      <p className="text-gray-500 leading-relaxed">{description}</p>
      <div className="inline-flex items-center gap-2 bg-[#1476ff]/8 border border-[#1476ff]/20 rounded-xl px-5 py-3 text-sm text-[#1476ff] font-semibold">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Gallery coming soon — we're adding examples now
      </div>
      <div>
        <button
          onClick={scrollToContact}
          className="inline-flex items-center gap-2 bg-[#FF9900] hover:bg-[#e68900] text-white font-bold px-7 py-3.5 rounded-xl text-base transition-all shadow-lg shadow-orange-100"
        >
          {cta}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

// ─── amazon tab (images from Supabase) ───────────────────────────────────────

function AmazonTab() {
  const [images, setImages]       = useState<string[]>([])
  const [status, setStatus]       = useState<'loading' | 'loaded' | 'error'>('loading')
  const [errorDetail, setErrorDetail] = useState('')
  const [lightbox, setLightbox]   = useState<string | null>(null)
  const [gridMode, setGridMode]   = useState<GridMode>('large')

  const fetchImages = async () => {
    setStatus('loading'); setErrorDetail('')
    try {
      const client = getSupabase()
      const { data, error } = await client.storage
        .from(BUCKET).list(FOLDER, { limit: 200, sortBy: { column: 'name', order: 'asc' } })
      if (error) { setErrorDetail(error.message); setStatus('error'); return }
      const urls = (data ?? [])
        .filter((f) => f.name && !f.name.startsWith('.') && isImage(f.name))
        .map((f) => client.storage.from(BUCKET).getPublicUrl(`${FOLDER}/${f.name}`).data.publicUrl)
      setImages(urls); setStatus('loaded')
    } catch (err) {
      setErrorDetail(err instanceof Error ? err.message : String(err)); setStatus('error')
    }
  }

  useEffect(() => { fetchImages() }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {/* grid toggle */}
      {status === 'loaded' && images.length > 0 && (
        <div className="flex justify-end mb-6">
          <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1">
            {(['small', 'large'] as GridMode[]).map((m) => (
              <button
                key={m}
                onClick={() => setGridMode(m)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${gridMode === m ? 'bg-white shadow-sm text-[#1476ff]' : 'text-gray-400 hover:text-gray-600'}`}
              >
                {m === 'small' ? <SmallGridIcon active={gridMode === 'small'} /> : <LargeGridIcon active={gridMode === 'large'} />}
                <span className="capitalize">{m}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {status === 'loading' && (
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-xl bg-gray-100 animate-pulse flex items-center justify-center">
              {i === 7 && <ApertureSpinner size="sm" />}
            </div>
          ))}
        </div>
      )}

      {status === 'error' && (
        <div className="text-center py-16 space-y-4">
          <p className="text-sm text-gray-500">Could not load images.</p>
          {errorDetail && <p className="text-xs text-red-400 font-mono max-w-sm mx-auto">{errorDetail}</p>}
          <button onClick={fetchImages} className="text-sm text-[#1476ff] font-semibold hover:underline">Try again</button>
        </div>
      )}

      {status === 'loaded' && images.length === 0 && (
        <div className="text-center py-16"><p className="text-sm text-gray-500">No images yet — check back soon.</p></div>
      )}

      {status === 'loaded' && images.length > 0 && gridMode === 'small' && (
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2">
          {images.map((url, i) => <GridImage key={url} url={url} index={i} mode="small" onClick={() => setLightbox(url)} />)}
        </div>
      )}

      {status === 'loaded' && images.length > 0 && gridMode === 'large' && (
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((url, i) => <GridImage key={url} url={url} index={i} mode="large" onClick={() => setLightbox(url)} />)}
        </div>
      )}

      {status === 'loaded' && images.length > 0 && (
        <div className="text-center mt-12">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-[#FF9900] hover:bg-[#e68900] text-white font-bold px-7 py-3.5 rounded-xl text-base transition-all shadow-lg shadow-orange-100"
          >
            Get images like these for your product
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors" onClick={() => setLightbox(null)}>
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

// ─── videos tab ───────────────────────────────────────────────────────────────

function VideosTab() {
  return (
    <>
      <div className="grid sm:grid-cols-2 gap-5">
        {VIDEOS.map((src, i) => <VideoPreview key={i} src={src} />)}
      </div>
      <div className="text-center mt-10">
        <button
          onClick={scrollToContact}
          className="inline-flex items-center gap-2 bg-[#FF9900] hover:bg-[#e68900] text-white font-bold px-7 py-3.5 rounded-xl text-base transition-all shadow-lg shadow-orange-100"
        >
          Submit Your Product
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </>
  )
}

// ─── category header copy ────────────────────────────────────────────────────

const CATEGORY_HEADER: Record<Category, { pill: string; headline: string; desc: string }> = {
  amazon: {
    pill: 'Amazon Ready',
    headline: 'Product images that help listings sell',
    desc: 'Premium hero shots, lifestyle images, and infographics for Amazon sellers, ecommerce brands, and online stores.',
  },
  videos: {
    pill: 'Product Videos',
    headline: 'Motion that sells',
    desc: 'Short product showcase videos for Amazon A+, TikTok, Reels, and ads.',
  },
  'real-estate': {
    pill: 'Real Estate',
    headline: 'Better property photos. More buyer attention.',
    desc: 'Clean, premium property images for listings, rentals, Airbnb, agents, and real estate teams.',
  },
  food: {
    pill: 'Food & Restaurants',
    headline: 'Food photos that make people hungry',
    desc: 'Better menu, Yelp, Google, DoorDash, Uber Eats, website, and social images for restaurants and food brands.',
  },
}

// ─── main export ─────────────────────────────────────────────────────────────

export default function ProductShowcase() {
  const [category, setCategory] = useState<Category>('amazon')

  // Listen for nav dropdown events
  useEffect(() => {
    const handler = (e: Event) => {
      const cat = (e as CustomEvent<string>).detail as Category
      if (cat) setCategory(cat)
    }
    window.addEventListener('set-examples-tab', handler)
    return () => window.removeEventListener('set-examples-tab', handler)
  }, [])

  const hdr = CATEGORY_HEADER[category]

  return (
    <section id="examples" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-block bg-[#FF9900]/15 text-[#FF9900] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {hdr.pill}
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#111827]">{hdr.headline}</h2>
          <p className="text-gray-600 max-w-lg mx-auto">{hdr.desc}</p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setCategory(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-150 ${
                category === tab.id
                  ? 'bg-[#FF9900] text-white shadow-md shadow-orange-100'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {category === 'amazon'      && <AmazonTab />}
        {category === 'videos'      && <VideosTab />}
        {category === 'real-estate' && (
          <ComingSoonTab
            pill="Real Estate"
            headline="Better property photos. More buyer attention."
            description="Clean, premium property images for listings, rentals, Airbnb, agents, and real estate teams."
            cta="Submit Your Project"
          />
        )}
        {category === 'food' && (
          <ComingSoonTab
            pill="Food & Restaurants"
            headline="Food photos that make people hungry"
            description="Better menu, Yelp, Google, DoorDash, Uber Eats, website, and social images for restaurants and food brands."
            cta="Submit Your Project"
          />
        )}

      </div>
    </section>
  )
}
