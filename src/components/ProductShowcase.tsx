'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { getSupabase } from '@/lib/supabaseClient'
import { ApertureSpinner } from '@/components/MediaLoader'

const BUCKET = 'Storage'
const FOLDER = 'Products'
const IMAGE_EXTENSIONS = new Set(['png', 'jpg', 'jpeg', 'webp'])

type GridMode = 'small' | 'large'

function isImage(name: string): boolean {
  const ext = name.split('.').pop()?.toLowerCase()
  return !!ext && IMAGE_EXTENSIONS.has(ext)
}

// Grid toggle icon components
function SmallGridIcon({ active }: { active: boolean }) {
  const color = active ? '#1476ff' : '#9CA3AF'
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      {[0,1,2,3,4,5,6,7].map((i) => (
        <rect key={i} x={1 + (i % 4) * 4.25} y={1 + Math.floor(i / 4) * 8.5} width="3" height="6.5" rx="0.6" fill={color} />
      ))}
    </svg>
  )
}

function LargeGridIcon({ active }: { active: boolean }) {
  const color = active ? '#1476ff' : '#9CA3AF'
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      {[0,1,2,3].map((i) => (
        <rect key={i} x={1 + (i % 2) * 9} y={1 + Math.floor(i / 2) * 9} width="7" height="7" rx="1" fill={color} />
      ))}
    </svg>
  )
}

/* ── Per-image grid card with branded loading state ── */
function GridImage({
  url,
  index,
  mode,
  onClick,
}: {
  url: string
  index: number
  mode: GridMode
  onClick: () => void
}) {
  const [loaded, setLoaded] = useState(false)

  if (mode === 'small') {
    return (
      <button
        onClick={onClick}
        className="group aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-150 hover:scale-[1.04] focus:outline-none focus:ring-2 focus:ring-[#1476ff] focus:ring-offset-1"
      >
        <div className="relative w-full h-full bg-gray-100">
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
              <ApertureSpinner size="sm" />
            </div>
          )}
          <Image
            src={url}
            alt={`PhotoYum product ${index + 1}`}
            fill
            className={`object-cover group-hover:opacity-90 transition-all duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            sizes="(max-width: 640px) 25vw, (max-width: 1024px) 16vw, 12.5vw"
            unoptimized
            onLoad={() => setLoaded(true)}
          />
        </div>
      </button>
    )
  }

  return (
    <button
      onClick={onClick}
      className="block w-full break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#1476ff] focus:ring-offset-2 group"
    >
      <div className="relative bg-gray-50">
        {!loaded && (
          <div className="absolute inset-0 min-h-[200px] flex items-center justify-center bg-gray-100 z-10 rounded-2xl aspect-square">
            <ApertureSpinner size="md" />
          </div>
        )}
        <Image
          src={url}
          alt={`PhotoYum product ${index + 1}`}
          width={600}
          height={600}
          className={`w-full h-auto object-cover group-hover:opacity-95 transition-all duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          unoptimized
          onLoad={() => setLoaded(true)}
        />
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

export default function ProductShowcase() {
  const [images, setImages] = useState<string[]>([])
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading')
  const [errorDetail, setErrorDetail] = useState('')
  const [lightbox, setLightbox] = useState<string | null>(null)
  const [gridMode, setGridMode] = useState<GridMode>('large')

  const fetchImages = async () => {
    setStatus('loading')
    setErrorDetail('')
    try {
      const client = getSupabase()
      const { data, error } = await client.storage
        .from(BUCKET)
        .list(FOLDER, { limit: 200, sortBy: { column: 'name', order: 'asc' } })

      if (error) {
        setErrorDetail(error.message)
        setStatus('error')
        return
      }

      if (!data || data.length === 0) {
        console.warn(
          '[ProductShowcase] list() returned empty. If files exist, run in Supabase SQL Editor:\n' +
          "CREATE POLICY \"Allow anon to list Storage objects\" ON storage.objects FOR SELECT TO anon USING (bucket_id = 'Storage');"
        )
      }

      const urls = (data ?? [])
        .filter((f) => f.name && !f.name.startsWith('.') && isImage(f.name))
        .map((f) => {
          const { data: urlData } = client.storage
            .from(BUCKET)
            .getPublicUrl(`${FOLDER}/${f.name}`)
          return urlData.publicUrl
        })

      setImages(urls)
      setStatus('loaded')
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err)
      setErrorDetail(msg)
      setStatus('error')
    }
  }

  useEffect(() => { fetchImages() }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Grid class definitions
  const smallGridClass = 'grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2'
  const largeGridClass = 'columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4'

  return (
    <section id="examples" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header + grid toggle */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div className="space-y-3">
            <div className="inline-block bg-[#FF9900]/15 text-[#FF9900] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Our Work
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#111827]">
              Product images we&apos;ve created
            </h2>
            <p className="text-gray-600 max-w-lg">
              Real Amazon-ready images — hero shots, lifestyle scenes, and infographics
              that make listings stand out.
            </p>
          </div>

          {/* Toggle — only show when images loaded */}
          {status === 'loaded' && images.length > 0 && (
            <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1 self-start sm:self-auto flex-shrink-0">
              <button
                onClick={() => setGridMode('small')}
                aria-label="Small grid"
                title="Small grid (8 per row)"
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                  gridMode === 'small'
                    ? 'bg-white text-[#1476ff] shadow-sm'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <SmallGridIcon active={gridMode === 'small'} />
                <span>Small</span>
              </button>
              <button
                onClick={() => setGridMode('large')}
                aria-label="Large grid"
                title="Large grid (4 per row)"
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                  gridMode === 'large'
                    ? 'bg-white text-[#1476ff] shadow-sm'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <LargeGridIcon active={gridMode === 'large'} />
                <span>Large</span>
              </button>
            </div>
          )}
        </div>

        {/* Loading skeleton */}
        {status === 'loading' && (
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-xl bg-gray-100 animate-pulse flex items-center justify-center">
                {i === 7 && <ApertureSpinner size="sm" />}
              </div>
            ))}
          </div>
        )}

        {/* Error */}
        {status === 'error' && (
          <div className="text-center py-16 space-y-4">
            <div className="w-14 h-14 rounded-full bg-red-50 text-red-400 flex items-center justify-center mx-auto">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm text-gray-500">Could not load images. Please try again.</p>
            {errorDetail && (
              <p className="text-xs text-red-400 font-mono max-w-sm mx-auto">{errorDetail}</p>
            )}
            <button
              onClick={fetchImages}
              className="inline-flex items-center gap-1.5 text-sm text-[#1476ff] font-semibold hover:underline"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Try again
            </button>
          </div>
        )}

        {/* Empty */}
        {status === 'loaded' && images.length === 0 && (
          <div className="text-center py-16 space-y-3">
            <div className="w-14 h-14 rounded-full bg-[#1476ff]/10 text-[#1476ff] flex items-center justify-center mx-auto">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-sm text-gray-500">No product images yet. Check back soon.</p>
            <button
              onClick={fetchImages}
              className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#1476ff] transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refresh
            </button>
          </div>
        )}

        {/* Small grid — 8 per row on desktop */}
        {status === 'loaded' && images.length > 0 && gridMode === 'small' && (
          <div className={smallGridClass}>
            {images.map((url, i) => (
              <GridImage key={url} url={url} index={i} mode="small" onClick={() => setLightbox(url)} />
            ))}
          </div>
        )}

        {/* Large grid — masonry, 4 per row on desktop */}
        {status === 'loaded' && images.length > 0 && gridMode === 'large' && (
          <div className={largeGridClass}>
            {images.map((url, i) => (
              <GridImage key={url} url={url} index={i} mode="large" onClick={() => setLightbox(url)} />
            ))}
          </div>
        )}

        {/* CTA */}
        {status === 'loaded' && images.length > 0 && (
          <div className="text-center mt-12">
            <button
              onClick={() => {
                const el = document.querySelector('#contact')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 bg-[#FF9900] hover:bg-[#e68900] text-white font-bold px-7 py-3.5 rounded-xl text-base transition-all shadow-lg shadow-orange-100"
            >
              Get images like these for your product
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox}
              alt="Product image preview"
              width={1200}
              height={1200}
              className="w-full h-auto max-h-[90vh] object-contain rounded-2xl shadow-2xl"
              unoptimized
            />
          </div>
        </div>
      )}
    </section>
  )
}
