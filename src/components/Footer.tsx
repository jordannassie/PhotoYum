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

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-2">
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
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
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
