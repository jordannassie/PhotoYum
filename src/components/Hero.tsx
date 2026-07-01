'use client'

import Image from 'next/image'

const HERO_IMG   = 'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/Site%20images/Hero/5daf41b8-a178-4b31-bb2c-c6fd889d0328.png'
const LIFESTYLE_IMG = 'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/Site%20images/Hero/5fee06ca-257e-42dd-b078-9d6ac3fdfbe5.png'
const INFO_IMG   = 'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/Site%20images/Hero/503de020-704b-46a2-9a39-6897310a4cb6.png'

const trustBullets = [
  { text: '72-hour delivery' },
  { text: 'Amazon-compliant' },
  { text: 'Conversion-focused' },
  { text: 'No studio shoot needed' },
]

export default function Hero() {
  const scrollToForm = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToIncluded = () => {
    document.querySelector('#included')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="pt-16 bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: copy ── */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#1476ff]/10 text-[#1476ff] text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF9900] inline-block" />
              Amazon Product Images in 72 Hours
            </div>

            <div className="space-y-1">
              <h1 className="text-5xl lg:text-6xl font-extrabold text-[#111827] leading-[1.1] tracking-tight">
                Better images.
              </h1>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-[#111827] leading-[1.1] tracking-tight">
                More clicks.
              </h1>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-[#FF9900] leading-[1.1] tracking-tight">
                Higher sales.
              </h1>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              We create premium Amazon product images that help shoppers stop scrolling
              and start buying — without an expensive studio shoot.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {trustBullets.map((item) => (
                <div key={item.text} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#1476ff]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-[#1476ff]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center justify-center gap-2 bg-[#FF9900] hover:bg-[#e68900] text-white font-bold px-7 py-3.5 rounded-xl text-base transition-all shadow-lg shadow-orange-200"
              >
                Submit Your Product
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button
                onClick={scrollToIncluded}
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#1476ff] text-[#1476ff] font-bold px-7 py-3.5 rounded-xl text-base transition-all hover:bg-[#1476ff]/5"
              >
                See What&apos;s Included
              </button>
            </div>
          </div>

          {/* ── Right: real product images ── */}
          <div className="relative flex items-center justify-center lg:justify-end select-none">
            <div className="relative w-full max-w-[420px]">

              {/* Main hero image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50">
                <Image
                  src={HERO_IMG}
                  alt="Hero product image"
                  width={840}
                  height={840}
                  className="w-full h-auto object-cover"
                  priority
                  unoptimized
                />
                {/* Label pill */}
                <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF9900]" />
                  Hero Image
                </div>
              </div>

              {/* Floating lifestyle card — top right */}
              <div className="absolute -top-5 -right-5 lg:-right-10 w-36 rounded-2xl overflow-hidden shadow-xl border-2 border-white bg-white">
                <Image
                  src={LIFESTYLE_IMG}
                  alt="Lifestyle image"
                  width={280}
                  height={280}
                  className="w-full h-auto object-cover"
                  unoptimized
                />
                <div className="px-2 py-1.5 bg-white">
                  <span className="text-[9px] font-bold text-gray-600 uppercase tracking-wide">Lifestyle Image</span>
                </div>
              </div>

              {/* Floating infographic card — bottom left */}
              <div className="absolute -bottom-5 -left-5 lg:-left-10 w-40 rounded-2xl overflow-hidden shadow-xl border-2 border-white bg-white">
                <Image
                  src={INFO_IMG}
                  alt="Infographic image"
                  width={320}
                  height={320}
                  className="w-full h-auto object-cover"
                  unoptimized
                />
                <div className="px-2 py-1.5 bg-white">
                  <span className="text-[9px] font-bold text-gray-600 uppercase tracking-wide">Infographic Image</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
