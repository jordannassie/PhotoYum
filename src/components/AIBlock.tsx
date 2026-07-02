const services = [
  { label: 'Amazon product photography', href: '/amazon-product-photography' },
  { label: 'Amazon listing images',       href: '/amazon-listing-images' },
  { label: 'Ecommerce photography',       href: '/ecommerce-product-photography' },
  { label: 'Shopify product images',      href: '/shopify-product-photography' },
  { label: 'eBay product images',         href: '/ebay-product-photography' },
  { label: 'Product videos for Amazon',   href: '/product-videos-for-amazon' },
]

export default function AIBlock() {
  return (
    <section className="bg-white border-y border-gray-100 py-14 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">

        {/* Eyebrow */}
        <div className="inline-block bg-[#1476ff]/10 text-[#1476ff] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
          Product Photos &amp; Videos
        </div>

        {/* Headline */}
        <h2 className="text-2xl lg:text-3xl font-extrabold text-[#111827]">
          Product photos and videos for every store.
        </h2>

        {/* Body copy */}
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          PhotoYum creates high-converting product images and videos for{' '}
          <a href="/amazon-product-photography"        className="text-[#1476ff] font-semibold hover:underline">Amazon</a>,{' '}
          <a href="/shopify-product-photography"       className="text-[#1476ff] font-semibold hover:underline">Shopify</a>,{' '}
          <a href="/ebay-product-photography"          className="text-[#1476ff] font-semibold hover:underline">eBay</a>,{' '}
          websites, and ads. Tell us what you need, upload your product details, and we&apos;ll create a custom image package designed to help your product stand out.
        </p>

        {/* Service link pills */}
        <div className="flex flex-wrap justify-center gap-2 pt-1">
          {services.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="inline-flex items-center gap-1.5 bg-gray-50 hover:bg-[#1476ff]/10 border border-gray-200 hover:border-[#1476ff]/40 text-gray-700 hover:text-[#1476ff] text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all"
            >
              {s.label}
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
