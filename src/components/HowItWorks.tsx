import Image from 'next/image'

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

const steps = [
  {
    number: 1,
    accent: 'bg-[#1476ff]',
    accentLight: 'bg-[#1476ff]/10',
    accentText: 'text-[#1476ff]',
    title: 'Submit Your Product',
    desc: 'Send your product photos and brief.',
    img: 'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/Site%20images/howitworks/1.png',
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
    img: 'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/Site%20images/howitworks/2.png',
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
    img: 'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/Site%20images/howitworks/3.png',
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
    img: 'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/Site%20images/howitworks/4.png',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    ),
  },
]

function Connector({ color }: { color: string }) {
  return (
    <div className="hidden lg:flex items-center justify-center w-8 flex-shrink-0 self-center">
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
        <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="flex flex-col lg:flex-row items-center lg:items-stretch flex-1 min-w-0">

              {/* Card */}
              <div className="relative bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col w-full max-w-sm mx-auto lg:max-w-none hover:shadow-xl transition-shadow duration-300">

                {/* Number badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className={`${step.accent} text-white w-9 h-9 rounded-full flex items-center justify-center text-base font-extrabold shadow-lg border-2 border-white`}>
                    {step.number}
                  </div>
                </div>

                {/* Full image */}
                <div className="relative w-full aspect-square overflow-hidden bg-gray-50 pt-4">
                  <Image
                    src={step.img}
                    alt={step.title}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Content */}
                <div className="px-5 pb-5 pt-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className={`${step.accentLight} ${step.accentText} w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      {step.icon}
                    </div>
                    <h3 className="text-sm font-bold text-[#0f172a] leading-snug">{step.title}</h3>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed pl-9">{step.desc}</p>
                </div>
              </div>

              {/* Connector */}
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
