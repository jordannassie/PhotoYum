'use client'

import { useState } from 'react'
import Image from 'next/image'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Examples', href: '#examples' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQs', href: '#faqs' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToForm = () => {
    setMenuOpen(false)
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleShare = async () => {
    const shareData = {
      title: 'PhotoYum — Better Amazon Product Images in 72 Hours',
      text: 'Premium Amazon product images that drive clicks and sales.',
      url: window.location.href,
    }
    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(window.location.href)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    } catch {
      // User cancelled or unsupported — silent fail
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for browsers without clipboard API
      const el = document.createElement('input')
      el.value = window.location.href
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
            className="flex-shrink-0"
          >
            <Image
              src="https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/logo/Logo-PhotoYum-black.png"
              alt="PhotoYum"
              width={160}
              height={44}
              className="h-9 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className="text-sm font-medium text-gray-600 hover:text-[#1476ff] transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side: CTA + mobile icons + hamburger */}
          <div className="flex items-center gap-1.5">
            {/* Desktop CTA */}
            <button
              onClick={scrollToForm}
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#FF9900] hover:bg-[#e68900] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Submit Your Product
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Mobile: Share button */}
            <button
              onClick={handleShare}
              className="md:hidden p-2 rounded-lg text-gray-500 hover:text-[#1476ff] hover:bg-blue-50 transition-colors"
              aria-label="Share this page"
              title="Share"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>

            {/* Mobile: Copy link button */}
            <button
              onClick={handleCopy}
              className="md:hidden p-2 rounded-lg text-gray-500 hover:text-[#1476ff] hover:bg-blue-50 transition-colors relative"
              aria-label="Copy link"
              title="Copy link"
            >
              {copied ? (
                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Copied toast */}
      {copied && (
        <div className="md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-[#111827] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap z-50">
          Link copied!
        </div>
      )}

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-[#1476ff] hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-gray-100 mt-2">
              <button
                onClick={scrollToForm}
                className="w-full bg-[#FF9900] hover:bg-[#e68900] text-white text-sm font-semibold px-4 py-3 rounded-lg transition-colors"
              >
                Submit Your Product →
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
