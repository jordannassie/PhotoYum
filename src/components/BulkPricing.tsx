'use client'

const tiers = [
  {
    qty: '1 product',
    price: 'Starting at $500',
    badge: null,
    badgeColor: '',
    note: 'Standard rate',
    highlight: false,
  },
  {
    qty: '3+ products',
    price: 'Save 10%',
    badge: '10% OFF',
    badgeColor: 'bg-[#FF9900] text-black',
    note: 'Per product',
    highlight: false,
  },
  {
    qty: '5+ products',
    price: 'Save 15%',
    badge: '15% OFF',
    badgeColor: 'bg-[#FF9900] text-black',
    note: 'Per product',
    highlight: true,
  },
  {
    qty: '10+ products',
    price: 'Custom pricing',
    badge: 'BEST DEAL',
    badgeColor: 'bg-[#1476ff] text-white',
    note: 'Contact us',
    highlight: false,
  },
]

export default function BulkPricing() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
    // Focus the product count select after a short delay
    setTimeout(() => {
      const el = document.querySelector<HTMLSelectElement>('select[name="product_count"], #product-count-select')
      if (el) { el.focus(); el.scrollIntoView({ behavior: 'smooth', block: 'center' }) }
    }, 600)
  }

  return (
    <section className="bg-[#F8FAFC] border-t border-gray-100 py-12 lg:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8">
          <div className="space-y-1.5">
            <div className="inline-block bg-[#FF9900]/15 text-[#FF9900] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Bulk Pricing
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#111827]">
              Need images for multiple products?
            </h2>
            <p className="text-gray-500 text-sm max-w-lg">
              Save when you order product image packages in bulk. The more products, the more you save.
            </p>
          </div>

          <button
            onClick={scrollToContact}
            className="flex-shrink-0 self-start lg:self-auto inline-flex items-center gap-2 bg-[#FF9900] hover:bg-[#e68900] text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-md shadow-orange-100"
          >
            Request Bulk Pricing
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Tier cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {tiers.map((tier) => (
            <div
              key={tier.qty}
              className={`relative rounded-2xl border p-5 transition-all duration-200 ${
                tier.highlight
                  ? 'bg-white border-[#FF9900]/50 shadow-md shadow-orange-50 ring-1 ring-[#FF9900]/30'
                  : 'bg-white border-gray-150 shadow-sm hover:border-gray-300 hover:shadow-md'
              }`}
            >
              {/* Savings badge */}
              {tier.badge && (
                <div className={`absolute -top-2.5 left-1/2 -translate-x-1/2 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full whitespace-nowrap ${tier.badgeColor}`}>
                  {tier.badge}
                </div>
              )}

              <div className="space-y-2 mt-1">
                {/* Quantity */}
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{tier.qty}</div>

                {/* Price / saving */}
                <div className={`text-base font-extrabold leading-tight ${tier.highlight ? 'text-[#FF9900]' : 'text-[#111827]'}`}>
                  {tier.price}
                </div>

                {/* Note */}
                <div className="text-xs text-gray-400">{tier.note}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Fine print */}
        <p className="text-[11px] text-gray-400 mt-5 text-center">
          Bulk discounts apply to Product Image Packages. Mix and match packages — contact us for a custom quote.
        </p>

      </div>
    </section>
  )
}
