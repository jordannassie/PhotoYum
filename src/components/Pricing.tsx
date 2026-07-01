'use client'

const plans = [
  {
    badge: 'LIMITED TIME OFFER',
    badgeColor: 'bg-[#FF9900] text-white',
    name: 'Launch Special',
    price: '$300',
    sub: 'For the first 5 brands',
    highlight: true,
    features: [
      'Complete image package',
      '48–72 hour delivery',
      '2 revision rounds',
      'Hero + lifestyle + infographic',
      'No payment required to submit',
    ],
    cta: 'Submit My Product',
    note: 'Limited spots available',
  },
  {
    badge: 'STANDARD',
    badgeColor: 'bg-gray-100 text-gray-600',
    name: 'Standard Package',
    price: '$500',
    sub: 'Per product',
    highlight: false,
    features: [
      'Complete image package',
      '6–8 lifestyle images',
      '1 infographic image',
      '2 revision rounds',
      '72-hour turnaround',
    ],
    cta: 'Submit My Product',
    note: null,
  },
]

export default function Pricing() {
  const scrollToForm = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="bg-[#F8FAFC] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-block bg-[#146EB4]/10 text-[#146EB4] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            Pricing
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#111827]">
            Simple pricing. Fast delivery.
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            No subscriptions. No hidden fees. Just great product images delivered fast.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-7 flex flex-col ${
                plan.highlight
                  ? 'bg-white border-2 border-[#FF9900] shadow-xl shadow-orange-100 relative overflow-hidden'
                  : 'bg-white border border-gray-200 shadow-sm'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF9900] to-[#146EB4]" />
              )}

              <div className="mb-5">
                <span className={`inline-block text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-3 ${plan.badgeColor}`}>
                  {plan.badge}
                </span>
                <div className="text-lg font-bold text-[#111827]">{plan.name}</div>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className="text-4xl font-extrabold text-[#111827]">{plan.price}</span>
                </div>
                <div className="text-sm text-gray-500 mt-1">{plan.sub}</div>
              </div>

              <ul className="space-y-3 mb-6 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-[#146EB4] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToForm}
                className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${
                  plan.highlight
                    ? 'bg-[#FF9900] hover:bg-[#e68900] text-white shadow-md'
                    : 'bg-white border-2 border-[#146EB4] text-[#146EB4] hover:bg-[#146EB4]/5'
                }`}
              >
                {plan.cta}
              </button>

              {plan.note && (
                <p className="text-center text-xs text-gray-400 mt-3">{plan.note}</p>
              )}
            </div>
          ))}
        </div>

        {/* Bulk note */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-5 py-3 shadow-sm">
            <svg className="w-4 h-4 text-[#146EB4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span className="text-sm text-gray-600">
              Need multiple products?{' '}
              <button
                onClick={scrollToForm}
                className="text-[#146EB4] font-semibold hover:underline"
              >
                Contact us for bulk pricing →
              </button>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
