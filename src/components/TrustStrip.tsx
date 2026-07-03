import Image from 'next/image'

const stores = [
  {
    name: 'Amazon',
    img: 'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/logo/amazon-logo-amazon-icon-transparent-free-png.webp',
    imgH: 56,
    imgW: 200,
  },
  {
    name: 'eBay',
    img: 'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/logo/ebay.png',
    imgH: 56,
    imgW: 144,
  },
  {
    name: 'Shopify',
    img: 'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/logo/Shopify_logo.svg',
    imgH: 56,
    imgW: 200,
  },
]

function BrowserIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="w-14 h-14"
      aria-hidden="true"
    >
      {/* Browser chrome */}
      <rect x="3" y="6" width="42" height="36" rx="5" ry="5" fill="#e5e7eb" />
      {/* Top bar */}
      <rect x="3" y="6" width="42" height="12" rx="5" ry="5" fill="#d1d5db" />
      {/* Bottom of top bar (square corners on bottom) */}
      <rect x="3" y="13" width="42" height="5" fill="#d1d5db" />
      {/* Address bar */}
      <rect x="13" y="9.5" width="22" height="5" rx="2.5" fill="#f3f4f6" />
      {/* Traffic lights */}
      <circle cx="8.5" cy="12" r="2" fill="#9ca3af" />
      {/* Page content lines */}
      <rect x="9" y="24" width="30" height="2.5" rx="1.25" fill="#d1d5db" />
      <rect x="9" y="30" width="22" height="2.5" rx="1.25" fill="#d1d5db" />
      <rect x="9" y="36" width="16" height="2.5" rx="1.25" fill="#e5e7eb" />
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
            <div key={s.name} className="flex flex-col items-center gap-2">
              <div className="h-14 flex items-center justify-center">
                <Image
                  src={s.img}
                  alt={s.name}
                  width={s.imgW}
                  height={s.imgH}
                  className="h-14 w-auto object-contain"
                  unoptimized
                />
              </div>
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                {s.name}
              </span>
            </div>
          ))}

          {/* Websites */}
          <div className="flex flex-col items-center gap-2">
            <div className="h-14 flex items-center justify-center">
              <BrowserIcon />
            </div>
            <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
              Websites
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}
