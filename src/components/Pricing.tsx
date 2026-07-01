'use client'

const plans = [
  {
    badge: 'IMAGES',
    badgeColor: 'bg-[#1476ff]/10 text-[#1476ff]',
    name: 'Product Image Package',
    price: '$500',
    sub: 'per product',
    highlight: false,
    features: [
      '1 hero image (white background)',
      '6–8 lifestyle / in-use images',
      '1 infographic image',
      'Amazon, Shopify & ad-ready files',
      '48–72 hour delivery',
      '1 revision round',
    ],
    cta: 'Submit My Product',
    note: null,
  },
  {
    badge: 'BEST VALUE',
    badgeColor: 'bg-[#FF9900] text-white',
    name: 'Image + Video Package',
    price: '$700',
    sub: 'per product',
    highlight: true,
    features: [
      'Everything in Image Package',
      '1 product showcase video',
      '8–15 second premium motion',
      'Slow pan / premium product movement',
      'Amazon A+, ads, TikTok & Reels ready',
      'Multiple formats available',
    ],
    cta: 'Submit My Product',
    note: null,
  },
]

export default function Pricing() {
  const scrollToForm = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="bg-[#F8FAFC] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-block bg-[#1476ff]/10 text-[#1476ff] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            Pricing
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#111827]">
            Amazon product images made simple.
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Choose a package, submit your product details, and get premium images delivered fast.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-7 flex flex-col relative overflow-hidden ${
                plan.highlight
                  ? 'bg-white border-2 border-[#FF9900] shadow-xl shadow-orange-100'
                  : 'bg-white border border-gray-200 shadow-sm'
              }`}
            >
              {/* Top accent bar */}
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF9900] to-[#e68900]" />
              )}

              <div className="mb-5">
                <span className={`inline-block text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-3 ${plan.badgeColor}`}>
                  {plan.badge}
                </span>
                <div className="text-lg font-bold text-[#111827]">{plan.name}</div>
                <div className="flex items-baseline gap-1.5 mt-2">
                  <span className="text-4xl font-extrabold text-[#111827]">{plan.price}</span>
                  <span className="text-sm text-gray-400 font-medium">{plan.sub}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-7 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-[#FF9900]' : 'text-[#1476ff]'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToForm}
                className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all ${
                  plan.highlight
                    ? 'bg-[#FF9900] hover:bg-[#e68900] text-white shadow-md shadow-orange-100'
                    : 'bg-white border-2 border-[#1476ff] text-[#1476ff] hover:bg-[#1476ff]/5'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Bulk note */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-5 py-3 shadow-sm">
            <svg className="w-4 h-4 text-[#1476ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span className="text-sm text-gray-600">
              Need multiple products?{' '}
              <button onClick={scrollToForm} className="text-[#1476ff] font-semibold hover:underline">
                Contact us for bulk pricing →
              </button>
            </span>
          </div>
        </div>

        {/* Add-ons */}
        <div className="max-w-3xl mx-auto mt-14">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-[#111827]">Need more images or videos?</h3>
            <p className="text-sm text-gray-500 mt-1">Add extra assets to any package.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="divide-y divide-gray-100">
              {[
                { label: 'Extra lifestyle image',           price: '$75',  unit: 'each' },
                { label: 'Extra infographic image',         price: '$150', unit: 'each' },
                { label: 'Extra hero image variation',      price: '$100', unit: 'each' },
                { label: 'Extra product showcase video',    price: '$200', unit: 'each' },
                { label: 'Rush delivery',                   price: '+$150', unit: null },
                { label: 'Additional revision round',       price: '$75',  unit: null },
              ].map(({ label, price, unit }) => (
                <div key={label} className="flex items-center justify-between px-6 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <svg className="w-3.5 h-3.5 text-[#1476ff] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700">{label}</span>
                  </div>
                  <div className="text-sm font-semibold text-[#111827] tabular-nums">
                    {price}{unit && <span className="text-xs font-normal text-gray-400 ml-1">{unit}</span>}
                  </div>
                </div>
              ))}
            </div>

            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-gray-500">Add-ons are applied at checkout after submitting your product.</p>
              <button
                onClick={scrollToForm}
                className="flex-shrink-0 inline-flex items-center gap-1.5 border border-[#1476ff] text-[#1476ff] hover:bg-[#1476ff]/5 font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors"
              >
                Customize My Package
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
