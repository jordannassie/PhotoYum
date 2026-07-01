'use client'

const trustBullets = [
  { icon: '⚡', text: '72-hour delivery' },
  { icon: '✅', text: 'Amazon-compliant' },
  { icon: '🎯', text: 'Conversion-focused' },
  { icon: '📦', text: 'No studio shoot needed' },
]

export default function Hero() {
  const scrollToForm = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToIncluded = () => {
    const el = document.querySelector('#included')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="pt-16 bg-white min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: copy */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#146EB4]/10 text-[#146EB4] text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF9900] inline-block"></span>
              Amazon Product Images in 72 Hours
            </div>

            {/* Headline */}
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

            {/* Subheadline */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              We create premium Amazon product images that help shoppers stop scrolling
              and start buying — without an expensive studio shoot.
            </p>

            {/* Trust bullets */}
            <div className="grid grid-cols-2 gap-3">
              {trustBullets.map((item) => (
                <div key={item.text} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#146EB4]/10 flex items-center justify-center text-xs flex-shrink-0">
                    <svg className="w-3 h-3 text-[#146EB4]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center justify-center gap-2 bg-[#FF9900] hover:bg-[#e68900] text-white font-bold px-7 py-3.5 rounded-xl text-base transition-all shadow-lg shadow-orange-200 hover:shadow-orange-300"
              >
                Submit Your Product
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button
                onClick={scrollToIncluded}
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#146EB4] text-[#146EB4] font-bold px-7 py-3.5 rounded-xl text-base transition-all hover:bg-[#146EB4]/5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                See What&apos;s Included
              </button>
            </div>
          </div>

          {/* Right: visual */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Central product mockup */}
              <div className="relative bg-gradient-to-br from-[#F8FAFC] to-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="text-center space-y-3">
                  {/* Product bottle SVG mockup */}
                  <div className="mx-auto w-32 h-40 flex items-center justify-center">
                    <svg viewBox="0 0 120 160" className="w-full h-full drop-shadow-xl" fill="none">
                      {/* Bottle body */}
                      <rect x="30" y="40" width="60" height="105" rx="14" fill="#146EB4" />
                      <rect x="30" y="40" width="60" height="105" rx="14" fill="url(#bottleGrad)" />
                      {/* Cap */}
                      <rect x="38" y="18" width="44" height="28" rx="8" fill="#111827" />
                      <rect x="38" y="18" width="44" height="28" rx="8" fill="url(#capGrad)" />
                      {/* Label area */}
                      <rect x="34" y="55" width="52" height="75" rx="6" fill="white" fillOpacity="0.95" />
                      {/* Label text lines */}
                      <rect x="40" y="62" width="40" height="5" rx="2" fill="#FF9900" />
                      <rect x="40" y="73" width="36" height="4" rx="2" fill="#111827" />
                      <rect x="40" y="82" width="32" height="3" rx="1.5" fill="#111827" opacity="0.6" />
                      <rect x="40" y="90" width="28" height="3" rx="1.5" fill="#111827" opacity="0.4" />
                      {/* Amount badge */}
                      <rect x="40" y="100" width="40" height="18" rx="4" fill="#146EB4" />
                      <rect x="40" y="100" width="40" height="18" rx="4" fill="url(#badgeGrad)" />
                      <text x="60" y="113" textAnchor="middle" fontSize="8" fontWeight="bold" fill="white">1500 mg</text>
                      <text x="60" y="125" textAnchor="middle" fontSize="6" fill="#111827" opacity="0.7">120 Capsules</text>
                      <defs>
                        <linearGradient id="bottleGrad" x1="30" y1="40" x2="90" y2="145" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#1a82d4" />
                          <stop offset="1" stopColor="#0e5a94" />
                        </linearGradient>
                        <linearGradient id="capGrad" x1="38" y1="18" x2="82" y2="46" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#2a2a2a" />
                          <stop offset="1" stopColor="#111827" />
                        </linearGradient>
                        <linearGradient id="badgeGrad" x1="40" y1="100" x2="80" y2="118" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#1a82d4" />
                          <stop offset="1" stopColor="#0e5a94" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Image type labels */}
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 bg-[#FF9900]/10 rounded-lg px-3 py-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#FF9900] flex-shrink-0"></span>
                      <span className="text-xs font-semibold text-[#111827]">Hero Image</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating lifestyle card */}
              <div className="absolute -top-4 -right-4 lg:-right-8 bg-white rounded-2xl shadow-xl border border-gray-100 p-3 w-32">
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl h-16 flex items-center justify-center mb-2">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-[10px] font-semibold text-gray-700 text-center">Lifestyle Image</p>
              </div>

              {/* Floating infographic card */}
              <div className="absolute -bottom-4 -left-4 lg:-left-8 bg-white rounded-2xl shadow-xl border border-gray-100 p-3 w-36">
                <div className="bg-gradient-to-br from-blue-50 to-[#146EB4]/20 rounded-xl h-14 flex items-center justify-center mb-2 px-2">
                  <div className="space-y-1 w-full">
                    {['• Key benefit 1', '• Key benefit 2', '• Key benefit 3'].map((t) => (
                      <div key={t} className="text-[8px] font-medium text-[#146EB4]">{t}</div>
                    ))}
                  </div>
                </div>
                <p className="text-[10px] font-semibold text-gray-700 text-center">Infographic Image</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
