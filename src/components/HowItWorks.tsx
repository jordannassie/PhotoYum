const steps = [
  {
    number: '01',
    title: 'Submit Your Product',
    desc: 'Send your product photo, listing link, and quick notes about what you want improved.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    ),
    color: 'bg-[#0993d9]',
  },
  {
    number: '02',
    title: 'We Review It',
    desc: 'We confirm fit and reply with next steps within 24 hours. No payment needed yet.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    color: 'bg-[#FF9900]',
  },
  {
    number: '03',
    title: 'We Create Your Images',
    desc: 'Our team designs your hero, lifestyle, and infographic images. You can request tweaks.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: 'bg-[#0993d9]',
  },
  {
    number: '04',
    title: 'You Upload & Sell',
    desc: 'Final files are delivered ready for Amazon, Shopify, or ads. Get live in 72 hours.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    color: 'bg-[#FF9900]',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-block bg-[#0993d9]/10 text-[#0993d9] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            How It Works
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#111827]">
            Simple process. Powerful results.
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            From submission to sale-ready images — we handle everything in between.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#0993d9] via-[#FF9900] to-[#0993d9] opacity-20 z-0" />

          {steps.map((step, i) => (
            <div key={step.number} className="relative z-10 flex flex-col items-center text-center space-y-4">
              {/* Step icon */}
              <div className={`${step.color} text-white rounded-2xl w-16 h-16 flex items-center justify-center shadow-lg relative`}>
                {step.icon}
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-gray-200 text-[10px] font-bold text-gray-500 flex items-center justify-center">
                  {i + 1}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-[#111827] text-base">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[200px] mx-auto">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
