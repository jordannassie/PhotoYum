const bigStats = [
  { value: '72 hrs', label: 'Average Delivery Time' },
  { value: '$500', label: 'Per Product Package' },
  { value: '8+', label: 'Images Per Package' },
]

const features = [
  {
    label: 'Amazon Compliant',
    sub: '100% policy-safe images',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    label: 'Fast Delivery',
    sub: 'Professional images in 72 hours',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: '1 Revision Round',
    sub: 'We perfect your images',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    label: 'Conversion Focused',
    sub: 'Designed to drive clicks and boost sales',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    label: 'No Studio Needed',
    sub: 'Send your product. We handle the rest.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

export default function Stats() {
  return (
    <section className="bg-white border-b border-gray-100">
      {/* Top: 3 big numbers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        <div className="grid grid-cols-3 divide-x divide-gray-200">
          {bigStats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center px-4 sm:px-8">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827]">{s.value}</span>
              <span className="text-xs sm:text-sm text-gray-500 mt-1.5 font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom: 5 feature badges */}
      <div className="border-t border-gray-100 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-0 lg:divide-x lg:divide-gray-200">
            {features.map((f) => (
              <div key={f.label} className="flex items-start gap-3 lg:px-6 first:lg:pl-0 last:lg:pr-0">
                <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#FF9900]/10 text-[#FF9900] flex items-center justify-center mt-0.5">
                  {f.icon}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#111827] leading-snug">{f.label}</div>
                  <div className="text-xs text-gray-500 mt-0.5 leading-snug">{f.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
