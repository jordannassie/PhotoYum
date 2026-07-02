'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ApertureSpinner } from '@/components/MediaLoader'

const HERO_IMG      = 'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/Site%20images/Hero/5daf41b8-a178-4b31-bb2c-c6fd889d0328.png'
const LIFESTYLE_IMG = 'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/Site%20images/Hero/8243839b-a4f2-4425-be6d-c31ee53e82ca.png'
const INFO_IMG      = 'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/Site%20images/Hero/503de020-704b-46a2-9a39-6897310a4cb6.png'

const trustBullets = [
  { text: '72-hour delivery' },
  { text: 'Amazon-compliant' },
  { text: 'Conversion-focused' },
  { text: 'No studio shoot needed' },
]

function Label({ color, text }: { color: string; text: string }) {
  return (
    <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 bg-black/55 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${color}`} />
      {text}
    </div>
  )
}

export default function Hero() {
  const [heroLoaded, setHeroLoaded] = useState(false)
  const [lifestyleLoaded, setLifestyleLoaded] = useState(false)
  const [infoLoaded, setInfoLoaded] = useState(false)

  const scrollToForm = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToIncluded = () => {
    document.querySelector('#included')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── Left: copy ── */}
          <div className="space-y-8 z-10">
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

          {/* ── Right: premium overlapping image cluster ── */}
          <div className="relative select-none flex justify-center lg:justify-end">

            {/* Outer container — controls visible area, prevents overflow */}
            <div className="relative w-full max-w-[640px] h-[480px] sm:h-[520px] lg:h-[560px]">

              {/* Background glow */}
              <div className="absolute inset-8 rounded-full bg-orange-100/50 blur-3xl opacity-70 pointer-events-none" />

              {/* ── Main product card ── */}
              <div
                className="absolute z-10 rounded-[28px] overflow-hidden shadow-2xl border border-gray-100/80 bg-white"
                style={{ right: 20, top: 60, width: 'min(82%, 480px)' }}
              >
                {!heroLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-20">
                    <ApertureSpinner size="lg" />
                  </div>
                )}
                <Image
                  src={HERO_IMG}
                  alt="Hero product shot"
                  width={960}
                  height={960}
                  className={`w-full h-auto object-cover transition-opacity duration-700 ${heroLoaded ? 'opacity-100' : 'opacity-0'}`}
                  priority
                  unoptimized
                  onLoad={() => setHeroLoaded(true)}
                />
                <Label color="bg-[#FF9900]" text="Hero Image" />
              </div>

              {/* ── Infographic card — bottom left overlapping main ── */}
              <div
                className="absolute z-20 rounded-[22px] overflow-hidden shadow-2xl border-[3px] border-white bg-white"
                style={{ left: 0, bottom: 20, width: 'min(40%, 220px)' }}
              >
                {!infoLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-20">
                    <ApertureSpinner size="sm" />
                  </div>
                )}
                <Image
                  src={INFO_IMG}
                  alt="Infographic image"
                  width={440}
                  height={440}
                  className={`w-full h-auto object-cover transition-opacity duration-700 ${infoLoaded ? 'opacity-100' : 'opacity-0'}`}
                  unoptimized
                  onLoad={() => setInfoLoaded(true)}
                />
                <div className="px-2.5 py-1.5 bg-white">
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">Infographic</span>
                </div>
              </div>

              {/* ── Lifestyle card — top right overlapping main ── */}
              <div
                className="absolute z-30 rounded-[22px] overflow-hidden shadow-2xl border-[3px] border-white bg-white"
                style={{ right: 0, top: 10, width: 'min(35%, 200px)' }}
              >
                {!lifestyleLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-20">
                    <ApertureSpinner size="sm" />
                  </div>
                )}
                <Image
                  src={LIFESTYLE_IMG}
                  alt="Lifestyle image"
                  width={400}
                  height={400}
                  className={`w-full h-auto object-cover transition-opacity duration-700 ${lifestyleLoaded ? 'opacity-100' : 'opacity-0'}`}
                  unoptimized
                  onLoad={() => setLifestyleLoaded(true)}
                />
                <div className="px-2.5 py-1.5 bg-white">
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">Lifestyle</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
