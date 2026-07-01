const steps = [
  {
    number: 1,
    title: 'Submit Your Product',
    desc: 'Send your product photos and brief.',
    color: 'bg-[#1476ff]',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 10V7" />
      </svg>
    ),
  },
  {
    number: 2,
    title: 'We Create Your Images',
    desc: 'Our expert team designs high-converting images.',
    color: 'bg-[#FF9900]',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: 3,
    title: 'Review & Request Edits',
    desc: 'You review and request any tweaks.',
    color: 'bg-[#1476ff]',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: 4,
    title: 'You Upload & Sell',
    desc: 'Get your images in 72 hours and start selling more.',
    color: 'bg-[#FF9900]',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#F8FAFC] py-16 lg:py-20 border-y border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center space-y-2 mb-12">
          <div className="inline-block bg-[#1476ff]/10 text-[#1476ff] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            How It Works
          </div>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-[#111827]">
            Simple process. Powerful results.
          </h2>
        </div>

        {/* Steps — horizontal with dashed connector */}
        <div className="relative">
          {/* Dashed connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] border-t-2 border-dashed border-gray-300 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative z-10">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center space-y-3">
                {/* Icon circle */}
                <div className="relative">
                  <div className={`${step.color} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-md`}>
                    {step.icon}
                  </div>
                  {/* Step number badge */}
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white border-2 border-gray-200 text-[10px] font-bold text-gray-500 flex items-center justify-center shadow-sm">
                    {step.number}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-[#111827]">{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed max-w-[160px] mx-auto">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
