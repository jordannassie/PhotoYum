'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { getSupabase } from '@/lib/supabaseClient'

const BUCKET = 'Storage'
const FOLDER = 'Products'
const IMAGE_EXTENSIONS = new Set(['png', 'jpg', 'jpeg', 'webp'])

function isImage(name: string): boolean {
  const ext = name.split('.').pop()?.toLowerCase()
  return !!ext && IMAGE_EXTENSIONS.has(ext)
}

export default function ProductShowcase() {
  const [images, setImages] = useState<string[]>([])
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading')
  const [errorDetail, setErrorDetail] = useState('')
  const [lightbox, setLightbox] = useState<string | null>(null)

  const fetchImages = async () => {
    setStatus('loading')
    setErrorDetail('')
    try {
      const client = getSupabase()

      const { data, error } = await client.storage
        .from(BUCKET)
        .list(FOLDER, { limit: 200, sortBy: { column: 'name', order: 'asc' } })

      if (error) {
        console.error('[ProductShowcase] Storage list error:', error)
        setErrorDetail(error.message)
        setStatus('error')
        return
      }

      if (!data || data.length === 0) {
        // List returned empty — likely missing storage SELECT policy for anon
        console.warn(
          '[ProductShowcase] Storage list returned empty. ' +
          'If files exist in Supabase, run this SQL in Supabase SQL Editor:\n\n' +
          'CREATE POLICY "Allow anon to list Storage objects"\n' +
          'ON storage.objects FOR SELECT TO anon\n' +
          "USING (bucket_id = 'Storage');\n"
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
      console.error('[ProductShowcase] Unexpected error:', msg)
      setErrorDetail(msg)
      setStatus('error')
    }
  }

  useEffect(() => { fetchImages() }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section id="examples" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-block bg-[#FF9900]/15 text-[#FF9900] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            Our Work
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#111827]">
            Product images we&apos;ve created
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Real Amazon-ready images — hero shots, lifestyle scenes, and infographics
            that make listings stand out.
          </p>
        </div>

        {/* Loading skeleton */}
        {status === 'loading' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-2xl bg-gray-100 animate-pulse" />
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
              className="inline-flex items-center gap-1.5 text-sm text-[#146EB4] font-semibold hover:underline"
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
            <div className="w-14 h-14 rounded-full bg-[#146EB4]/10 text-[#146EB4] flex items-center justify-center mx-auto">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-sm text-gray-500">No product images yet. Check back soon.</p>
            <button
              onClick={fetchImages}
              className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#146EB4] transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refresh
            </button>
          </div>
        )}

        {/* Masonry grid */}
        {status === 'loaded' && images.length > 0 && (
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
            {images.map((url, i) => (
              <button
                key={url}
                onClick={() => setLightbox(url)}
                className="block w-full break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#146EB4] focus:ring-offset-2 group"
              >
                <div className="relative bg-gray-50">
                  <Image
                    src={url}
                    alt={`PhotoYum product example ${i + 1}`}
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover group-hover:opacity-95 transition-opacity"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    unoptimized
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
