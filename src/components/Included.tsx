const items = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: '1 white-background hero image',
    desc: 'Clean, Amazon-compliant main listing image on pure white.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: '6–8 lifestyle / in-use images',
    desc: 'Show your product in real-world settings that resonate with buyers.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: '1 infographic-style feature image',
    desc: 'Highlight key benefits and features in a visual, scannable format.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: '2 rounds of revisions',
    desc: 'We refine until you\'re fully satisfied. Your feedback drives every edit.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: '48–72 hour turnaround',
    desc: 'Most packages delivered within 72 hours of receiving everything needed.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
    title: 'Files ready for Amazon, Shopify, or ads',
    desc: 'Delivered in the right sizes and formats — no extra editing required.',
  },
]

export default function Included() {
  return (
    <section id="included" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: text */}
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="inline-block bg-[#146EB4]/10 text-[#146EB4] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                What&apos;s Included
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#111827] leading-tight">
                Complete Amazon<br />Image Package
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Everything you need to make your product listing stand out — delivered fast.
              </p>
            </div>

            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.title} className="flex items-start gap-3.5">
                  <div className="flex-shrink-0 mt-0.5 w-9 h-9 rounded-xl bg-[#146EB4]/10 text-[#146EB4] flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#111827]">{item.title}</div>
                    <div className="text-sm text-gray-500 mt-0.5">{item.desc}</div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Add-on */}
            <div className="bg-[#FF9900]/10 border border-[#FF9900]/30 rounded-xl p-4 flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-lg bg-[#FF9900] text-white flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.869v6.263a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-[#111827]">Optional Add-on: Product Showcase Video</div>
                <div className="text-sm text-gray-600 mt-0.5">
                  15-second product video for Amazon A+ or ads. <span className="font-semibold text-[#FF9900]">+$200</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: visual cards */}
          <div className="grid grid-cols-2 gap-4">
            {/* Hero image card */}
            <div className="col-span-2 bg-gradient-to-br from-[#146EB4]/5 to-[#146EB4]/10 rounded-2xl p-5 border border-[#146EB4]/20">
              <div className="flex items-start justify-between mb-3">
                <span className="bg-[#FF9900] text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wide">Hero Image</span>
              </div>
              <div className="flex items-center justify-center h-28">
                <svg viewBox="0 0 200 100" className="w-full h-full" fill="none">
                  <rect width="200" height="100" rx="8" fill="white" fillOpacity="0.5" />
                  <rect x="70" y="10" width="60" height="80" rx="10" fill="#146EB4" fillOpacity="0.2" stroke="#146EB4" strokeWidth="1.5" />
                  <rect x="80" y="25" width="40" height="50" rx="4" fill="white" fillOpacity="0.8" />
                  <rect x="85" y="30" width="30" height="4" rx="2" fill="#FF9900" />
                  <rect x="85" y="38" width="25" height="3" rx="1.5" fill="#111827" fillOpacity="0.5" />
                  <rect x="85" y="45" width="20" height="3" rx="1.5" fill="#111827" fillOpacity="0.3" />
                </svg>
              </div>
              <p className="text-xs font-medium text-[#146EB4] mt-2 text-center">Clean white background hero</p>
            </div>

            {/* Lifestyle card */}
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-2xl p-4 border border-emerald-200/50">
              <span className="bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wide">Lifestyle</span>
              <div className="flex items-center justify-center h-20 mt-2">
                <svg viewBox="0 0 100 80" className="w-full h-full" fill="none">
                  <circle cx="50" cy="40" r="30" fill="#d1fae5" />
                  <path d="M35 45 C40 35 45 38 50 40 C55 42 60 35 65 45" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="50" cy="30" r="8" fill="#6ee7b7" />
                </svg>
              </div>
              <p className="text-xs font-medium text-emerald-700 mt-1 text-center">In-use lifestyle</p>
            </div>

            {/* Infographic card */}
            <div className="bg-gradient-to-br from-[#F8FAFC] to-blue-50/50 rounded-2xl p-4 border border-blue-100">
              <span className="bg-[#146EB4] text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wide">Infographic</span>
              <div className="flex flex-col justify-center h-20 mt-2 space-y-1.5 px-1">
                {['• Supports Joint Health', '• Reduces Inflammation', '• Immune Support'].map((t) => (
                  <div key={t} className="text-[9px] font-medium text-[#146EB4] bg-[#146EB4]/10 rounded px-1.5 py-0.5">{t}</div>
                ))}
              </div>
              <p className="text-xs font-medium text-[#146EB4] mt-1 text-center">Key benefits</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
