'use client'

import { useState } from 'react'

// ─── content ────────────────────────────────────────────────────────────────

const IMAGE_FEATURES = [
  'Hero product images',
  'Lifestyle / in-use images',
  'Infographic images',
  'Amazon, Shopify & ad-ready files',
  '48–72 hour delivery',
  'Custom image mix based on your product',
]

const VIDEO_FEATURES = [
  'Everything in Image Package',
  'Product showcase video',
  '8–15 second premium motion video',
  'Amazon A+, ads, TikTok & Reels ready',
  'Multiple formats available',
  'Custom creative direction based on your product',
]

const ADDONS = [
  { key: 'lifestyle',   label: 'Extra lifestyle image',           price: 75,  display: '$75',   unit: 'each' },
  { key: 'infographic', label: 'Extra infographic image',          price: 150, display: '$150',  unit: 'each' },
  { key: 'hero',        label: 'Extra hero image variation',       price: 100, display: '$100',  unit: 'each' },
  { key: 'video',       label: 'Extra product showcase video',     price: 200, display: '$200',  unit: 'each' },
  { key: 'rush',        label: 'Rush delivery',                    price: 150, display: '+$150', unit: null   },
  { key: 'revision',    label: 'Additional revision round',        price: 75,  display: '$75',   unit: 'each' },
] as const

// ─── tiny shared pieces ──────────────────────────────────────────────────────

function Check({ orange }: { orange?: boolean }) {
  return (
    <svg
      className={`w-[18px] h-[18px] flex-shrink-0 mt-0.5 ${orange ? 'text-[#f59e0b]' : 'text-[#4f46e5]'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0
           011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  )
}

// ─── Card 1 — Image Package ──────────────────────────────────────────────────

function ImageCard() {
  const scrollToForm = () =>
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-7 flex flex-col">
      {/* Badge */}
      <span className="inline-flex items-center self-start text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider bg-[#4f46e5]/10 text-[#4f46e5] mb-4">
        Images
      </span>

      {/* Title + price */}
      <h3 className="text-lg font-bold text-[#111827] leading-snug">
        Custom Product Image Package
      </h3>
      <div className="mt-3 mb-6">
        <span className="text-3xl font-extrabold text-[#111827]">Starting at $500</span>
        <span className="text-sm text-gray-400 font-medium ml-2">per product</span>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100 mb-5" />

      {/* Features */}
      <ul className="space-y-3 flex-1 mb-7">
        {IMAGE_FEATURES.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
            <Check />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={scrollToForm}
        className="w-full py-3 rounded-xl font-bold text-sm border-2 border-[#4f46e5] text-[#4f46e5] hover:bg-[#4f46e5]/5 transition-colors"
      >
        Submit My Product
      </button>
    </div>
  )
}

// ─── Card 2 — Image + Video (Best Value) ─────────────────────────────────────

function VideoCard() {
  const scrollToForm = () =>
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="bg-white rounded-2xl border-2 border-[#f59e0b] shadow-xl shadow-amber-100/60 p-7 flex flex-col relative overflow-hidden">
      {/* Top accent bar */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#f59e0b] to-[#fbbf24]" />

      {/* Badge */}
      <span className="inline-flex items-center gap-1 self-start text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider bg-[#f59e0b]/15 text-[#b45309] mb-4">
        {/* star */}
        <svg className="w-3 h-3 fill-[#f59e0b]" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        Best Value
      </span>

      {/* Title + price */}
      <h3 className="text-lg font-bold text-[#111827] leading-snug">
        Image + Video Package
      </h3>
      <div className="mt-3 mb-6">
        <span className="text-3xl font-extrabold text-[#111827]">Starting at $700</span>
        <span className="text-sm text-gray-400 font-medium ml-2">per product</span>
      </div>

      {/* Divider */}
      <div className="border-t border-amber-100 mb-5" />

      {/* Features */}
      <ul className="space-y-3 flex-1 mb-7">
        {VIDEO_FEATURES.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
            <Check orange />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={scrollToForm}
        className="w-full py-3 rounded-xl font-bold text-sm bg-[#f59e0b] hover:bg-[#d97706] text-white shadow-md shadow-amber-100 transition-colors"
      >
        Submit My Product
      </button>
    </div>
  )
}

// ─── Card 3 — Build Your Own ─────────────────────────────────────────────────

type QtyMap = Record<string, number>

function BuildYourOwnCard({ quantities, adjust }: {
  quantities: QtyMap
  adjust: (key: string, delta: number) => void
}) {
  const scrollToForm = () =>
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })

  const total = ADDONS.reduce((sum, a) => sum + (quantities[a.key] ?? 0) * a.price, 0)

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-6 pt-6 pb-4 border-b border-gray-100">
        {/* Layers icon */}
        <div className="w-10 h-10 rounded-xl bg-[#4f46e5]/10 flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-[#4f46e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <div>
          <div className="font-bold text-[#111827] text-base leading-tight">Build Your Own</div>
          <div className="text-xs text-gray-400 mt-0.5">Single Assets &amp; Add-ons</div>
        </div>
      </div>

      {/* Rows */}
      <div className="divide-y divide-gray-100 flex-1">
        {ADDONS.map(({ key, label, display, unit }) => (
          <div key={key} className="flex items-center gap-2 px-5 py-3">
            {/* Label */}
            <span className="flex-1 text-sm text-gray-700 leading-snug pr-2">{label}</span>

            {/* Stepper */}
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <button
                onClick={() => adjust(key, -1)}
                className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors text-sm font-medium leading-none"
                aria-label={`Decrease ${label}`}
              >
                −
              </button>
              <span className="w-5 text-center text-sm font-semibold text-[#111827] tabular-nums select-none">
                {quantities[key] ?? 0}
              </span>
              <button
                onClick={() => adjust(key, +1)}
                className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors text-sm font-medium leading-none"
                aria-label={`Increase ${label}`}
              >
                +
              </button>
            </div>

            {/* Price */}
            <div className="flex-shrink-0 text-right w-16">
              <span className="text-sm font-bold text-[#111827] tabular-nums">{display}</span>
              {unit && <span className="block text-[10px] text-gray-400 leading-tight">{unit}</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Total + note + CTA */}
      <div className="px-5 py-4 border-t border-gray-100 space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Add-on total</span>
          <span className="font-bold text-[#111827] tabular-nums">
            ${total.toLocaleString()}
          </span>
        </div>

        <p className="text-[11px] text-gray-400 leading-relaxed">
          Add-ons are applied at checkout after submitting your product.
        </p>

        <button
          onClick={scrollToForm}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm border-2 border-[#4f46e5] text-[#4f46e5] hover:bg-[#4f46e5]/5 transition-colors"
        >
          {/* Sliders icon */}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
          Customize My Package
        </button>
      </div>
    </div>
  )
}

// ─── Trust row ───────────────────────────────────────────────────────────────

function TrustRow() {
  return (
    <div className="mt-10 flex flex-wrap justify-center items-center gap-2 text-sm text-gray-500">
      <svg className="w-4 h-4 text-[#4f46e5] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
      <span>48–72 hour delivery</span>
      <span className="text-gray-300">•</span>
      <span>Amazon, Shopify &amp; ad-ready files</span>
      <span className="text-gray-300">•</span>
      <span>Satisfaction guaranteed</span>
    </div>
  )
}

// ─── Main export ─────────────────────────────────────────────────────────────

export default function Pricing() {
  const [tab, setTab] = useState<'packages' | 'single'>('packages')
  const [quantities, setQuantities] = useState<QtyMap>(
    Object.fromEntries(ADDONS.map((a) => [a.key, 0]))
  )

  const adjust = (key: string, delta: number) =>
    setQuantities((prev) => ({ ...prev, [key]: Math.max(0, (prev[key] ?? 0) + delta) }))

  return (
    <section id="pricing" className="bg-[#f8fafc] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center space-y-3 mb-8">
          <span className="inline-block bg-[#4f46e5]/10 text-[#4f46e5] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            Pricing
          </span>
          <h2 className="text-3xl lg:text-[2.6rem] font-extrabold text-[#0f172a] leading-tight">
            Amazon product images made simple.
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Choose a package or build your own content bundle for Amazon-ready images and videos.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 rounded-full p-1 gap-1">
            {(['packages', 'single'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  tab === t
                    ? 'bg-white text-[#0f172a] shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {t === 'packages' ? (
                  <>
                    {/* Package icon */}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    Packages
                  </>
                ) : (
                  <>
                    {/* Layers icon */}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    Single Assets
                  </>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        {tab === 'packages' ? (
          <div className="grid lg:grid-cols-3 gap-6 items-stretch">
            <ImageCard />
            <VideoCard />
            <BuildYourOwnCard quantities={quantities} adjust={adjust} />
          </div>
        ) : (
          <div className="max-w-lg mx-auto">
            <BuildYourOwnCard quantities={quantities} adjust={adjust} />
          </div>
        )}

        <TrustRow />
      </div>
    </section>
  )
}
