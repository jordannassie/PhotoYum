'use client'

import Image from 'next/image'

export default function TopTrustBanner() {
  return (
    <section className="relative overflow-hidden bg-[#0a0f1a] border-b border-white/10 mt-16">
      {/* Ambient glow layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-[#FF9900]/15 blur-[90px]" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#1476ff]/10 blur-[80px]" />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
        <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 lg:gap-10">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/logo/Logo-PhotoYum-white.png"
              alt="PhotoYum"
              width={140}
              height={38}
              className="h-8 w-auto object-contain"
              priority
              unoptimized
            />
          </div>

          {/* Divider (desktop) */}
          <div className="hidden sm:block w-px h-10 bg-white/20 flex-shrink-0" />

          {/* Copy */}
          <div className="flex-1 text-center sm:text-left space-y-0.5">
            <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
              <span className="text-lg sm:text-xl lg:text-2xl font-extrabold text-white leading-tight">
                Simple process. Powerful results.
              </span>
            </div>
            <p className="text-sm text-gray-400 font-medium">
              Amazon-ready hero, lifestyle, and infographic images.
            </p>
          </div>

          {/* CTA */}
          <div className="flex-shrink-0 w-full sm:w-auto">
            <button
              onClick={() => document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 border"
              style={{
                background: 'transparent',
                borderColor: '#4F6BFF',
                color: '#4F6BFF',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = 'rgba(79, 107, 255, 0.10)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = 'transparent'
              }}
            >
              <span>See the Process</span>
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="#4F6BFF" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
