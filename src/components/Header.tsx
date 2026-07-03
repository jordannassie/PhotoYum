'use client'

import { useState } from 'react'
import Image from 'next/image'

const NAV = [
  { label: 'Home',     href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Videos',   href: '/videos' },
  { label: 'Homes',    href: '/homes' },
  { label: 'Food',     href: '/food' },
  { label: 'Pricing',  href: '/#pricing' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <Image
              src="https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/logo/Logo-PhotoYum-black.png"
              alt="PhotoYum" width={160} height={44}
              className="h-9 w-auto object-contain" priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-[#FF9900] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-2">
            <a
              href="/#contact"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#FF9900] hover:bg-[#e68900] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Submit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen
                ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {NAV.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-[#FF9900] hover:bg-orange-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-gray-100">
              <a
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center bg-[#FF9900] hover:bg-[#e68900] text-white text-sm font-semibold px-4 py-3 rounded-lg transition-colors"
              >
                Submit →
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
