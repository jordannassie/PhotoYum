'use client'

import Image from 'next/image'

export default function FooterTrustBanner() {
  const scrollToForm = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden bg-[#070c16]">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 -top-20 w-96 h-96 rounded-full bg-[#FF9900]/10 blur-[100px]" />
        <div className="absolute right-1/4 -bottom-20 w-80 h-80 rounded-full bg-[#1476ff]/10 blur-[90px]" />
        {/* Arc glow at bottom of previous section */}
        <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF9900]/40 to-transparent" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Curved orange sweep bottom-left */}
        <svg
          className="absolute -bottom-1 -left-8 opacity-30 w-80 h-40"
          viewBox="0 0 320 160"
          fill="none"
          aria-hidden="true"
        >
          <path d="M0 160 Q160 60 320 120" stroke="#FF9900" strokeWidth="2" fill="none" />
          <path d="M-20 160 Q140 80 340 100" stroke="#FF9900" strokeWidth="1" fill="none" opacity="0.5" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

          {/* Left: Logo + copy */}
          <div className="flex-1 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center sm:items-start lg:items-center gap-6 text-center sm:text-left">
            <Image
              src="https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/logo/Logo-PhotoYum-white.png"
              alt="PhotoYum"
              width={150}
              height={42}
              className="h-9 w-auto object-contain flex-shrink-0"
              unoptimized
            />

            <div className="hidden sm:block lg:hidden xl:block w-px h-14 bg-white/15 flex-shrink-0" />

            <div className="space-y-1">
              <p className="text-xs font-semibold text-[#FF9900] uppercase tracking-widest">
                Ready for better product images?
              </p>
            <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                <span className="text-[#FF9900]">#1</span> Product Photo Agency on
              </h2>
              <Image
                src="https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/logo/Amazon-Logo-White-PNG-Image.png"
                alt="Amazon"
                width={110}
                height={34}
                className="h-7 sm:h-8 w-auto object-contain"
                unoptimized
              />
            </div>
              <p className="text-gray-400 text-sm mt-1">
                Amazon-ready hero, lifestyle, and infographic images that drive clicks and sales.
              </p>
            </div>
          </div>

          {/* Right: trust pill + CTA */}
          <div className="flex flex-col items-center gap-4 flex-shrink-0">
            {/* Trust pill */}
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
              <svg className="w-3.5 h-3.5 text-[#FF9900]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-xs font-semibold text-gray-300">No payment needed to submit</span>
            </div>

            {/* CTA button */}
            <button
              onClick={scrollToForm}
              className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl font-bold text-base text-white transition-all duration-200 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #FF9900 0%, #d97706 100%)',
                boxShadow: '0 0 32px rgba(255,153,0,0.4), 0 4px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.18)',
              }}
            >
              <span className="relative z-10">Get Free Image Audit</span>
              <svg className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-200" />
            </button>

            <p className="text-xs text-gray-500 text-center">
              We&apos;ll review your listing and reply within 24 hours.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
