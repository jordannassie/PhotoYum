'use client'

import Image from 'next/image'

const footerLinks = {
  Pages: [
    { label: 'Home', href: '#hero' },
    { label: 'Examples', href: '#included' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '#contact' },
  ],
}

const serviceLinks = [
  { label: 'Amazon Product Photography', href: '/amazon-product-photography' },
  { label: 'Amazon Listing Images',       href: '/amazon-listing-images' },
  { label: 'Amazon Infographic Images',   href: '/amazon-infographic-images' },
  { label: 'Ecommerce Photography',        href: '/ecommerce-product-photography' },
  { label: 'Shopify Product Images',       href: '/shopify-product-photography' },
  { label: 'eBay Product Images',          href: '/ebay-product-photography' },
  { label: 'Product Videos for Amazon',   href: '/product-videos-for-amazon' },
]

/* ── Payment card badge shells ── */
function CardBadge({ children, bg = 'bg-white', className = '' }: { children: React.ReactNode; bg?: string; className?: string }) {
  return (
    <div className={`inline-flex items-center justify-center h-7 px-2 rounded-md border border-white/10 ${bg} ${className} grayscale hover:grayscale-0 transition-all duration-200 cursor-default flex-shrink-0`}>
      {children}
    </div>
  )
}

/* Individual payment icons */
function VisaIcon() {
  return (
    <CardBadge bg="bg-white">
      <svg viewBox="0 0 80 26" className="h-4 w-auto" aria-label="Visa">
        <text x="2" y="20" fontFamily="Arial,Helvetica,sans-serif" fontWeight="700" fontSize="22" fontStyle="italic" fill="#1A1F71">VISA</text>
      </svg>
    </CardBadge>
  )
}

function MastercardIcon() {
  return (
    <CardBadge bg="bg-white">
      <svg viewBox="0 0 38 24" className="h-5 w-auto" aria-label="Mastercard">
        <circle cx="13" cy="12" r="10" fill="#EB001B" />
        <circle cx="25" cy="12" r="10" fill="#F79E1B" />
        <path d="M19 4.9a10 10 0 0 1 0 14.2A10 10 0 0 1 19 4.9z" fill="#FF5F00" />
      </svg>
    </CardBadge>
  )
}

function AmexIcon() {
  return (
    <CardBadge bg="bg-[#2E77BC]">
      <span className="text-white text-[9px] font-extrabold tracking-widest leading-none">AMEX</span>
    </CardBadge>
  )
}

function DiscoverIcon() {
  return (
    <CardBadge bg="bg-white">
      <svg viewBox="0 0 72 24" className="h-4 w-auto" aria-label="Discover">
        <text x="2" y="18" fontFamily="Arial,Helvetica,sans-serif" fontWeight="700" fontSize="13" fill="#231F20">DISCOVER</text>
        <circle cx="61" cy="12" r="9" fill="#F76F20" />
      </svg>
    </CardBadge>
  )
}

function ApplePayIcon() {
  return (
    <CardBadge bg="bg-black">
      <svg viewBox="0 0 52 24" className="h-5 w-auto" aria-label="Apple Pay">
        {/* Apple mark */}
        <path
          d="M10.5 5.4c.7-.8.6-2 .6-2s-1.2.1-2 .9c-.7.7-.7 1.9-.7 1.9s1.3-.1 2.1-.8zm.9 1.4c-1.2 0-2.2.7-2.8.7-.6 0-1.5-.7-2.5-.7C4.7 6.8 3 8 3 10.5c0 3.1 2.7 8.5 3.8 8.5.5 0 1.1-.5 1.8-.5.7 0 1.1.5 1.8.5 1.2 0 4-5.5 4-8.5 0-2.5-1.8-3.1-3-3.1z"
          fill="white"
        />
        {/* Pay text */}
        <text x="18" y="17" fontFamily="Arial,Helvetica,sans-serif" fontWeight="600" fontSize="11" fill="white">Pay</text>
      </svg>
    </CardBadge>
  )
}

function GooglePayIcon() {
  return (
    <CardBadge bg="bg-white">
      <svg viewBox="0 0 56 24" className="h-5 w-auto" aria-label="Google Pay">
        <text x="2" y="17" fontFamily="Arial,Helvetica,sans-serif" fontWeight="500" fontSize="11" fill="#3C4043">
          <tspan fill="#4285F4">G</tspan>
          <tspan fill="#EA4335">o</tspan>
          <tspan fill="#FBBC05">o</tspan>
          <tspan fill="#4285F4">g</tspan>
          <tspan fill="#34A853">l</tspan>
          <tspan fill="#EA4335">e</tspan>
        </text>
        <text x="34" y="17" fontFamily="Arial,Helvetica,sans-serif" fontWeight="600" fontSize="11" fill="#3C4043"> Pay</text>
      </svg>
    </CardBadge>
  )
}

/* Stripe lockup */
function StripeBadge() {
  return (
    <div className="inline-flex items-center gap-1.5 flex-shrink-0">
      {/* Stripe wordmark SVG */}
      <svg viewBox="0 0 60 26" className="h-5 w-auto" aria-label="Stripe">
        <text x="0" y="20" fontFamily="Arial,Helvetica,sans-serif" fontWeight="700" fontSize="20" fill="#635BFF">stripe</text>
      </svg>
    </div>
  )
}

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-2">
            <Image
              src="https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/logo/Logo-PhotoYum-white.png"
              alt="PhotoYum"
              width={160}
              height={44}
              className="h-8 w-auto object-contain"
            />
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              Premium Amazon product images that drive clicks and sales.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.Pages.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-gray-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Service links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Payment trust row ── */}
        <div className="border-t border-white/10 mt-10 pt-6 space-y-3">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            {/* Left: Stripe lockup */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-xs text-gray-400 whitespace-nowrap">Secure payments by</span>
              <StripeBadge />
            </div>

            {/* Divider (desktop) */}
            <div className="hidden sm:block w-px h-5 bg-white/10 flex-shrink-0" />

            {/* Right: payment method icons */}
            <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
              <VisaIcon />
              <MastercardIcon />
              <AmexIcon />
              <DiscoverIcon />
              <ApplePayIcon />
              <GooglePayIcon />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-6 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © 2026 PhotoYum. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollTo('#contact')}
              className="text-xs text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="text-xs text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

