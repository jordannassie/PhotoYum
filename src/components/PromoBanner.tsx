'use client'

import { useEffect, useState } from 'react'

// Fixed anchor — countdown syncs for ALL visitors from this date
const ANCHOR_MS = new Date('2026-07-01T00:00:00.000Z').getTime()
const CYCLE_MS  = 7 * 24 * 60 * 60 * 1_000   // 7 days

function getTimeLeft() {
  const elapsed   = (Date.now() - ANCHOR_MS) % CYCLE_MS
  const remaining = CYCLE_MS - elapsed
  return {
    d: Math.floor(remaining / 86_400_000),
    h: Math.floor((remaining % 86_400_000) / 3_600_000),
    m: Math.floor((remaining % 3_600_000)  / 60_000),
    s: Math.floor((remaining % 60_000)     / 1_000),
  }
}

export default function PromoBanner() {
  const [time, setTime] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1_000)
    return () => clearInterval(id)
  }, [])

  const scrollToContact = () =>
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div className="mt-16 relative overflow-hidden bg-gradient-to-r from-[#0a0f1a] via-[#0d1630] to-[#0a0f1a] border-b border-white/10">
      {/* Subtle star texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '22px 22px' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-x-4 gap-y-2 py-2.5 sm:py-0 sm:h-11">

          {/* Left: headline + code badge */}
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            {/* Spark icon */}
            <svg className="w-4 h-4 text-[#FF9900] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
            </svg>
            <span className="text-white text-xs sm:text-[13px] font-medium">
              Take <span className="text-[#FF9900] font-bold">10% off</span> your first order — use code
            </span>
            <span className="bg-[#FF9900] text-black text-[11px] font-extrabold px-2.5 py-0.5 rounded-md tracking-widest select-all">
              YUM10
            </span>
          </div>

          {/* Center: countdown */}
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-white/40 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-white/50 text-[11px] hidden sm:inline whitespace-nowrap">Offer expires in:</span>
            <span className="text-white font-mono text-[12px] font-bold tabular-nums whitespace-nowrap">
              {time.d}d {pad(time.h)}h {pad(time.m)}m {pad(time.s)}s
            </span>
          </div>

          {/* Right: CTA */}
          <button
            onClick={scrollToContact}
            className="hidden sm:inline-flex items-center gap-1.5 text-[#FF9900] border border-[#FF9900]/50 hover:bg-[#FF9900]/10 text-[11px] font-bold px-3.5 py-1.5 rounded-lg transition-colors whitespace-nowrap flex-shrink-0"
          >
            Claim 10% Off
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>
      </div>
    </div>
  )
}
