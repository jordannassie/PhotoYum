const stats = [
  {
    value: '72 hrs',
    label: 'Average Delivery Time',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: '$500',
    label: 'Per Product Package',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 10V7" />
      </svg>
    ),
  },
  {
    value: '10+',
    label: 'Images Per Package',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b2e] via-[#112240] to-[#0a1628]" />

      {/* Subtle ambient glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#FF9900]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#1476ff]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#FF9900] text-xs font-bold uppercase tracking-widest mb-3">What You Get</p>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-white leading-tight">
            Fast, Simple Product Image Packages
          </h2>
          <p className="text-white/50 text-sm mt-3 max-w-md mx-auto">
            Get 10 Amazon-ready product images delivered in as little as 72 hours.
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl px-8 py-8 flex flex-col items-center text-center gap-4 hover:border-[#FF9900]/40 hover:bg-white/8 transition-all duration-300"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#FF9900] rounded-full" />

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#FF9900]/15 text-[#FF9900] flex items-center justify-center">
                {stat.icon}
              </div>

              {/* Number */}
              <div className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-sm font-medium text-white/60 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
