'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

const EXAMPLES_ITEMS = [
  { label: 'Amazon Product Photos', cat: 'amazon' },
  { label: 'Product Videos',        cat: 'videos' },
  { label: 'Real Estate',           cat: 'real-estate' },
  { label: 'Food & Restaurants',    cat: 'food' },
]

const navLinks = [
  { label: 'Home',         href: '#hero' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing',      href: '#pricing' },
  { label: 'FAQs',         href: '#faqs' },
]

export default function Header() {
  const [menuOpen, setMenuOpen]         = useState(false)
  const [examplesOpen, setExamplesOpen] = useState(false)
  const [mobileExOpen, setMobileExOpen] = useState(false)
  const [copied, setCopied]             = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setExamplesOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToExamples = (cat?: string) => {
    setMenuOpen(false)
    setExamplesOpen(false)
    setMobileExOpen(false)
    const el = document.querySelector('#examples')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      if (cat) {
        // Fire a custom event so ProductShowcase can set the tab
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent('set-examples-tab', { detail: cat }))
        }, 400)
      }
    }
  }

  const scrollToForm = () => {
    setMenuOpen(false)
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: 'PhotoYum', text: 'Premium Amazon product images.', url: window.location.href })
      } else {
        await navigator.clipboard.writeText(window.location.href)
        setCopied(true); setTimeout(() => setCopied(false), 2000)
      }
    } catch {}
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
    } catch {
      const el = document.createElement('input')
      el.value = window.location.href
      document.body.appendChild(el); el.select(); document.execCommand('copy'); document.body.removeChild(el)
    }
    setCopied(true); setTimeout(() => setCopied(false), 2000)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo — always goes to home page top */}
          <a href="/" className="flex-shrink-0">
            <Image
              src="https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/logo/Logo-PhotoYum-black.png"
              alt="PhotoYum" width={160} height={44}
              className="h-9 w-auto object-contain" priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">

            {/* Examples dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setExamplesOpen((o) => !o)}
                onMouseEnter={() => setExamplesOpen(true)}
                className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-[#FF9900] transition-colors"
              >
                Examples
                <svg className={`w-3.5 h-3.5 transition-transform duration-150 ${examplesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {examplesOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50"
                  onMouseLeave={() => setExamplesOpen(false)}
                >
                  {EXAMPLES_ITEMS.map((item) => (
                    <button
                      key={item.cat}
                      onClick={() => scrollToExamples(item.cat)}
                      className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:text-[#FF9900] hover:bg-orange-50 transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Rest of nav */}
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                className="text-sm font-medium text-gray-600 hover:text-[#1476ff] transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: CTA + mobile icons */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={scrollToForm}
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#FF9900] hover:bg-[#e68900] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Submit Your Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <button onClick={handleShare} className="md:hidden p-2 rounded-lg text-gray-500 hover:text-[#1476ff] hover:bg-blue-50 transition-colors" aria-label="Share">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>

            <button onClick={handleCopy} className="md:hidden p-2 rounded-lg text-gray-500 hover:text-[#1476ff] hover:bg-blue-50 transition-colors" aria-label="Copy link">
              {copied
                ? <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
              }
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
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

      {copied && (
        <div className="md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-[#111827] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap z-50">
          Link copied!
        </div>
      )}

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">

            {/* Examples accordion */}
            <div>
              <button
                onClick={() => setMobileExOpen((o) => !o)}
                className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-[#FF9900] hover:bg-orange-50 rounded-lg transition-colors"
              >
                Examples
                <svg className={`w-4 h-4 transition-transform ${mobileExOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileExOpen && (
                <div className="ml-4 mt-1 space-y-0.5">
                  {EXAMPLES_ITEMS.map((item) => (
                    <button
                      key={item.cat}
                      onClick={() => scrollToExamples(item.cat)}
                      className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-[#FF9900] hover:bg-orange-50 rounded-lg transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
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
                Submit Your Project →
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
