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
    accent: 'text-[#1476ff]',
    accentBg: 'bg-[#1476ff]/10',
    title: 'Submit Your Product',
    desc: 'Send your product photos and brief.',
    img: 'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/Site%20images/howitworks/11.png',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 10V7" />
      </svg>
    ),
  },
  {
    accent: 'text-[#FF9900]',
    accentBg: 'bg-[#FF9900]/10',
    title: 'We Create Your Images',
    desc: 'Our expert team designs high-converting images.',
    img: 'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/Site%20images/howitworks/22.png',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    accent: 'text-[#1476ff]',
    accentBg: 'bg-[#1476ff]/10',
    title: 'Review & Request Edits',
    desc: 'You review and request any tweaks.',
    img: 'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/Site%20images/howitworks/33.png',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    accent: 'text-[#FF9900]',
    accentBg: 'bg-[#FF9900]/10',
    title: 'You Upload & Sell',
    desc: 'Get your images in 72 hours and start selling more.',
    img: 'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/Site%20images/howitworks/44.png',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    ),
  },
]

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

        {/* Step cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-5">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col">

              {/* Number badge — sits above the card */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                <div className="bg-[#1476ff] text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-extrabold shadow-lg border-[3px] border-white">
                  {i + 1}
                </div>
              </div>

              {/* Card */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col flex-1 pt-5">

                {/* Image area */}
                <div className="relative w-full aspect-square bg-gray-50 overflow-hidden">
                  <Image
                    src={step.img}
                    alt={step.title}
                    fill
                    className="object-contain object-center p-3"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Text content */}
                <div className="px-5 py-5 flex flex-col gap-2 flex-1">
                  <div className="flex items-center gap-2.5">
                    <div className={`${step.accentBg} ${step.accent} w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      {step.icon}
                    </div>
                    <h3 className="text-sm font-bold text-[#0f172a] leading-snug">{step.title}</h3>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed pl-[42px]">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
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
