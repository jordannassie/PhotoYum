const stats = [
  {
    value: '72 hrs',
    label: 'Average Delivery',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: '$500',
    label: 'Per Product Package',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 10V7" />
      </svg>
    ),
  },
  {
    value: '10+',
    label: 'Images Per Package',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-10 lg:py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b2e] via-[#112240] to-[#0a1628]" />
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#FF9900]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#1476ff]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-[#FF9900] text-[10px] font-bold uppercase tracking-widest mb-2">What You Get</p>
          <h2 className="text-xl lg:text-2xl font-extrabold text-white">
            Fast, Simple Product Image Packages
          </h2>
          <p className="text-white/45 text-xs mt-2 max-w-sm mx-auto">
            Get 10 Amazon-ready product images delivered in as little as 72 hours.
          </p>
        </div>

        {/* Compact stat row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-4 hover:border-[#FF9900]/30 hover:bg-white/8 transition-all duration-200"
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-8 bg-[#FF9900] rounded-full" />

              {/* Icon */}
              <div className="w-9 h-9 rounded-lg bg-[#FF9900]/15 text-[#FF9900] flex items-center justify-center flex-shrink-0">
                {stat.icon}
              </div>

              {/* Text */}
              <div>
                <div className="text-2xl font-extrabold text-white leading-none">{stat.value}</div>
                <div className="text-xs text-white/50 mt-0.5">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
