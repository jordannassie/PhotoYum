import Image from 'next/image'

const stores = [
  {
    name: 'Amazon',
    img: 'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/logo/amazon-logo-amazon-icon-transparent-free-png.webp',
    imgH: 28,
    imgW: 120,
  },
  {
    name: 'eBay',
    img: 'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/logo/ebay.png',
    imgH: 32,
    imgW: 80,
  },
  {
    name: 'Shopify',
    img: 'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/logo/shopify.png',
    imgH: 30,
    imgW: 110,
  },
]

function GlobeIcon() {
  return (
    <svg
      className="text-[#1476ff]"
      style={{ width: 36, height: 36 }}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

export default function StoreTrust() {
  return (
    <section className="bg-white border-b border-gray-100 py-7 lg:py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Headline */}
        <p className="text-center text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
          We do Photos &amp; Videos for all stores, including
        </p>

        {/* Logo row */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">

          {stores.map((store) => (
            <div
              key={store.name}
              className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-200 cursor-default"
            >
              <div className="flex items-center justify-center h-9">
                <Image
                  src={store.img}
                  alt={store.name}
                  width={store.imgW}
                  height={store.imgH}
                  className="h-7 sm:h-8 w-auto object-contain"
                  unoptimized
                />
              </div>
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">{store.name}</span>
            </div>
          ))}

          {/* Websites */}
          <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-200 cursor-default">
            <div className="flex items-center justify-center h-9">
              <GlobeIcon />
            </div>
            <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Websites</span>
          </div>

        </div>
      </div>
    </section>
  )
}
