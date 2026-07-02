import Image from 'next/image'

const stores = [
  {
    name: 'Amazon',
    img: 'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/logo/amazon-logo-amazon-icon-transparent-free-png.webp',
    imgH: 28,
    imgW: 100,
  },
  {
    name: 'eBay',
    img: 'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/logo/ebay.png',
    imgH: 28,
    imgW: 72,
  },
  {
    name: 'Shopify',
    img: 'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/logo/Shopify_logo.svg',
    imgH: 28,
    imgW: 100,
  },
]

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-7 h-7 text-[#1476ff]"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

export default function TrustStrip() {
  return (
    <section className="bg-white border-b border-gray-100 py-8 lg:py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Headline */}
        <p className="text-center text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-widest mb-7">
          We do photos &amp; videos for all stores, including
        </p>

        {/* Logo row */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">

          {stores.map((s) => (
            <div key={s.name} className="flex flex-col items-center gap-2 group">
              <div className="h-8 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-200">
                <Image
                  src={s.img}
                  alt={s.name}
                  width={s.imgW}
                  height={s.imgH}
                  className="h-7 w-auto object-contain"
                  unoptimized
                />
              </div>
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider group-hover:text-gray-600 transition-colors duration-200">
                {s.name}
              </span>
            </div>
          ))}

          {/* Websites */}
          <div className="flex flex-col items-center gap-2 group">
            <div className="h-8 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity duration-200">
              <GlobeIcon />
            </div>
            <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider group-hover:text-gray-600 transition-colors duration-200">
              Websites
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}
