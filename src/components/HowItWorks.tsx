const trustItems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Expert Designers',
    desc: 'Ecommerce image specialists',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Fast Turnaround',
    desc: 'Images delivered in as fast as 72 hours',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Conversion Focused',
    desc: 'Designed to boost clicks and drive sales',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Secure & Private',
    desc: 'Your products. Your data. Always protected.',
  },
]

/* ─── Step illustrations ─── */

function IllustrationSubmit() {
  return (
    <div className="relative w-full h-full flex items-end justify-center pb-1 px-3 pt-3 select-none">
      {/* Upload panel */}
      <div className="w-full bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden">
        {/* Header bar */}
        <div className="bg-gray-50 border-b border-gray-100 px-3 py-2 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-300" />
          <span className="w-2 h-2 rounded-full bg-yellow-300" />
          <span className="w-2 h-2 rounded-full bg-green-300" />
          <span className="ml-2 text-[10px] text-gray-400 font-medium">Upload Your Product</span>
        </div>
        {/* Drop zone */}
        <div className="m-2.5 rounded-lg border-2 border-dashed border-[#1476ff]/40 bg-[#1476ff]/5 flex flex-col items-center justify-center py-3 gap-1">
          <svg className="w-6 h-6 text-[#1476ff]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <span className="text-[9px] font-semibold text-[#1476ff]/80">Drag & drop or browse</span>
        </div>
        {/* Thumbnails */}
        <div className="px-2.5 pb-2.5 flex gap-1.5">
          {['bg-amber-100', 'bg-rose-100', 'bg-sky-100'].map((c, i) => (
            <div key={i} className={`flex-1 aspect-square rounded-md ${c} border border-white shadow-sm flex items-center justify-center`}>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          ))}
          {/* Checkmark badge */}
          <div className="flex-1 aspect-square rounded-md bg-[#1476ff] flex items-center justify-center shadow-sm">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

function IllustrationCreate() {
  return (
    <div className="relative w-full h-full flex items-end justify-center pb-1 px-3 pt-3 select-none">
      <div className="w-full bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden flex">
        {/* Sidebar */}
        <div className="w-7 bg-gray-50 border-r border-gray-100 flex flex-col items-center py-2 gap-2">
          {['bg-[#1476ff]', 'bg-gray-200', 'bg-gray-200', 'bg-[#FF9900]'].map((c, i) => (
            <div key={i} className={`w-3.5 h-3.5 rounded ${c}`} />
          ))}
        </div>
        {/* Main canvas */}
        <div className="flex-1 p-2 flex flex-col gap-1.5">
          {/* Canvas area */}
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg aspect-[4/3] overflow-hidden border border-gray-100">
            {/* Bottle silhouette */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-16 bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-full rounded-b-sm shadow-md" />
            </div>
            {/* Orange badge */}
            <div className="absolute top-1.5 right-1.5 bg-[#FF9900] text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full">
              NEW
            </div>
          </div>
          {/* Strip thumbnails */}
          <div className="flex gap-1">
            {['from-[#1476ff]/20 to-[#1476ff]/5', 'from-amber-100 to-amber-50', 'from-emerald-100 to-emerald-50'].map((g, i) => (
              <div key={i} className={`flex-1 aspect-square rounded bg-gradient-to-br ${g} border border-white shadow-sm`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function IllustrationReview() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-end pb-2 px-3 pt-3 gap-1.5 select-none">
      {/* Chat bubble 1 */}
      <div className="self-start bg-white border border-gray-200 rounded-2xl rounded-tl-sm px-3 py-2 shadow-sm max-w-[80%]">
        <div className="flex items-center gap-1.5 mb-1">
          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#1476ff] to-[#1476ff]/70 flex items-center justify-center">
            <span className="text-[7px] font-bold text-white">J</span>
          </div>
          <span className="text-[9px] font-semibold text-gray-700">Great work!</span>
          <svg className="w-2.5 h-2.5 text-gray-300 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <p className="text-[9px] text-gray-500 leading-snug">Can we try a<br />closer crop?</p>
      </div>

      {/* Product preview strip */}
      <div className="self-center w-full bg-white border border-gray-100 rounded-xl p-1.5 shadow-sm flex gap-1.5 items-center">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center flex-shrink-0">
          <div className="w-5 h-8 bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-full rounded-b-sm" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="h-1.5 bg-gray-200 rounded-full w-3/4 mb-1" />
          <div className="h-1.5 bg-gray-100 rounded-full w-1/2" />
        </div>
        <div className="w-5 h-5 rounded-full bg-[#1476ff] flex items-center justify-center flex-shrink-0">
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Reply bubble */}
      <div className="self-end bg-[#1476ff] text-white rounded-2xl rounded-tr-sm px-3 py-2 shadow-sm max-w-[80%]">
        <p className="text-[9px] leading-snug">Sure! Here&apos;s a<br />closer version.</p>
      </div>
    </div>
  )
}

function IllustrationSell() {
  return (
    <div className="relative w-full h-full flex items-end justify-center pb-1 px-3 pt-3 select-none">
      <div className="w-full bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden">
        {/* Product image area */}
        <div className="relative bg-gradient-to-b from-stone-100 to-stone-200 aspect-[4/3] flex items-center justify-center">
          {/* Bottle */}
          <div className="w-12 h-20 bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-full rounded-b-md shadow-xl relative">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white/10" />
          </div>
          {/* Sales card overlay */}
          <div className="absolute bottom-2 right-2 bg-white rounded-xl shadow-lg px-2.5 py-1.5 border border-gray-100 flex items-center gap-1.5">
            <svg className="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <div>
              <div className="text-[8px] text-gray-400 leading-none">Sales uplift</div>
              <div className="text-[11px] font-extrabold text-emerald-500 leading-tight">+28%</div>
            </div>
          </div>
          {/* Upload badge */}
          <div className="absolute top-2 left-2 bg-[#FF9900] text-white text-[8px] font-bold px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1">
            <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            Live
          </div>
        </div>
        {/* File row */}
        <div className="px-2.5 py-2 flex gap-1.5 items-center">
          {['JPG', 'PNG', 'A+'].map((fmt) => (
            <span key={fmt} className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-gray-100 text-gray-500">{fmt}</span>
          ))}
          <div className="ml-auto text-[9px] font-semibold text-[#1476ff]">72 hrs ✓</div>
        </div>
      </div>
    </div>
  )
}

/* ─── Step definitions ─── */
const steps = [
  {
    number: 1,
    accent: 'bg-[#1476ff]',
    accentLight: 'bg-[#1476ff]/10',
    accentText: 'text-[#1476ff]',
    title: 'Submit Your Product',
    desc: 'Send your product photos and brief.',
    illustration: <IllustrationSubmit />,
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 10V7" />
      </svg>
    ),
  },
  {
    number: 2,
    accent: 'bg-[#FF9900]',
    accentLight: 'bg-[#FF9900]/10',
    accentText: 'text-[#FF9900]',
    title: 'We Create Your Images',
    desc: 'Our expert team designs high-converting images.',
    illustration: <IllustrationCreate />,
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: 3,
    accent: 'bg-[#1476ff]',
    accentLight: 'bg-[#1476ff]/10',
    accentText: 'text-[#1476ff]',
    title: 'Review & Request Edits',
    desc: 'You review and request any tweaks.',
    illustration: <IllustrationReview />,
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: 4,
    accent: 'bg-[#FF9900]',
    accentLight: 'bg-[#FF9900]/10',
    accentText: 'text-[#FF9900]',
    title: 'You Upload & Sell',
    desc: 'Get your images in 72 hours and start selling more.',
    illustration: <IllustrationSell />,
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    ),
  },
]

/* ─── Arrow connector ─── */
function Connector({ color }: { color: string }) {
  return (
    <div className="hidden lg:flex items-center justify-center w-8 flex-shrink-0 mt-[-60px]">
      <div className="flex items-center gap-0.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className={`w-1.5 h-1.5 rounded-full ${color} opacity-50`} />
        ))}
        <svg className={`w-4 h-4 ${color} ml-0.5`} fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#F0F4FA] py-20 lg:py-28 border-y border-gray-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-block bg-[#1476ff]/10 text-[#1476ff] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
            How It Works
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[#0f172a] leading-tight">
            Simple process.{' '}
            <span className="relative inline-block">
              Powerful results.
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#FF9900] rounded-full" aria-hidden="true" />
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col lg:flex-row items-stretch gap-0 lg:gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="flex flex-col lg:flex-row items-center lg:items-stretch flex-1 min-w-0">

              {/* Card */}
              <div className="relative bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col w-full max-w-xs mx-auto lg:max-w-none hover:shadow-xl transition-shadow duration-300">

                {/* Number badge — floats above card top */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className={`${step.accent} text-white w-9 h-9 rounded-full flex items-center justify-center text-base font-extrabold shadow-lg border-2 border-white`}>
                    {step.number}
                  </div>
                </div>

                {/* Illustration area */}
                <div className="h-44 bg-gradient-to-b from-gray-50 to-gray-100/60 pt-4 relative overflow-hidden">
                  {step.illustration}
                </div>

                {/* Content */}
                <div className="px-5 pb-5 pt-4 flex flex-col gap-2 flex-1">
                  {/* Icon + title row */}
                  <div className="flex items-center gap-2">
                    <div className={`${step.accentLight} ${step.accentText} w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      {step.icon}
                    </div>
                    <h3 className="text-sm font-bold text-[#0f172a] leading-snug">{step.title}</h3>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed pl-9">{step.desc}</p>
                </div>
              </div>

              {/* Connector arrow (between cards) */}
              {i < steps.length - 1 && (
                <Connector color={i % 2 === 0 ? 'text-[#FF9900]' : 'text-[#1476ff]'} />
              )}
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {trustItems.map((item) => (
            <div key={item.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4 flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#1476ff]/10 text-[#1476ff] flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <div className="text-sm font-bold text-[#0f172a]">{item.title}</div>
                <div className="text-xs text-gray-500 mt-0.5 leading-snug">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
