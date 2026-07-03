const CATEGORIES = [
  {
    href: '/products',
    pill: 'Products',
    headline: 'Better product images.',
    desc: 'Hero shots, lifestyle images, and infographics for Amazon, Shopify, and ecommerce.',
    color: 'bg-blue-50 border-blue-100',
    pillColor: 'bg-[#1476ff]/10 text-[#1476ff]',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 10V7" />
      </svg>
    ),
  },
  {
    href: '/videos',
    pill: 'Videos',
    headline: 'Product videos that sell.',
    desc: 'Short showcase videos for Amazon A+, TikTok, Reels, and ads.',
    color: 'bg-orange-50 border-orange-100',
    pillColor: 'bg-[#FF9900]/15 text-[#FF9900]',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 10l4.553-2.069A1 1 0 0121 8.869v6.263a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    href: '/homes',
    pill: 'Real Estate',
    headline: 'Better property photos.',
    desc: 'Premium images for listings, Airbnb, rentals, and real estate agents.',
    color: 'bg-emerald-50 border-emerald-100',
    pillColor: 'bg-emerald-100 text-emerald-700',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    href: '/food',
    pill: 'Food & Restaurants',
    headline: 'Food photos that sell.',
    desc: 'Better images for menus, Yelp, Google, DoorDash, and Uber Eats.',
    color: 'bg-red-50 border-red-100',
    pillColor: 'bg-red-100 text-red-600',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
]

export default function CategoryCards() {
  return (
    <section className="bg-[#f8fafc] py-16 lg:py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10 space-y-2">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-[#111827]">
            What do you need?
          </h2>
          <p className="text-gray-500 text-sm">Choose a category to see examples and get started.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.href}
              href={cat.href}
              className={`group rounded-2xl border p-6 flex flex-col gap-4 hover:shadow-md transition-all duration-200 hover:scale-[1.02] ${cat.color}`}
            >
              <div className="flex items-start justify-between">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${cat.pillColor}`}>
                  {cat.icon}
                </div>
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${cat.pillColor}`}>
                  {cat.pill}
                </span>
              </div>
              <div>
                <div className="font-bold text-[#111827] text-base leading-snug mb-1">{cat.headline}</div>
                <p className="text-sm text-gray-500 leading-relaxed">{cat.desc}</p>
              </div>
              <div className="mt-auto flex items-center gap-1 text-sm font-semibold text-gray-600 group-hover:text-[#FF9900] transition-colors">
                See examples
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
