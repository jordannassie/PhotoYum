'use client'

import { useState, FormEvent } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const PRODUCT_COUNT_OPTIONS = [
  '1 product',
  '2–3 products',
  '4–10 products',
  '10+ products',
]

const PACKAGE_OPTIONS = [
  'Product Image Package — $500',
  'Image + Video Package — $700',
  'I need bulk pricing',
  "I'm not sure yet",
]

type Fields = {
  name: string
  phone: string
  email: string
  brand_name: string
  product_listing_url: string
  product_photo_url: string
  product_count: string
  package_interest: string
  improvement_notes: string
}

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [fields, setFields] = useState<Fields>({
    name: '',
    phone: '',
    email: '',
    brand_name: '',
    product_listing_url: '',
    product_photo_url: '',
    product_count: '',
    package_interest: '',
    improvement_notes: '',
  })

  const set = (key: keyof Fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFields((prev) => ({ ...prev, [key]: e.target.value }))

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!fields.name.trim()) { setErrorMsg('Name is required.'); return }
    if (!fields.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      setErrorMsg('Please enter a valid email address.'); return
    }
    setFormState('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/leads/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source: 'form', ...fields }),
      })
      const json = await res.json()
      if (!res.ok) {
        console.error('[ContactForm] API error response:', json)
        throw new Error(json.supabase_error || json.error || `HTTP ${res.status}`)
      }
      setFormState('success')
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      console.error('[ContactForm] Submit failed:', msg)
      setErrorMsg(`Something went wrong: ${msg}. Please try again or email us directly.`)
      setFormState('error')
    }
  }

  const inputClass = 'w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-[#111827] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1476ff]/30 focus:border-[#1476ff] transition bg-white'

  return (
    <section id="contact" className="bg-[#F8FAFC] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: copy */}
          <div className="space-y-6 lg:sticky lg:top-24">
            <div className="space-y-3">
              <div className="inline-block bg-[#1476ff]/10 text-[#1476ff] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                Get Started
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#111827] leading-tight">
                Ready to refresh<br />your Amazon listing?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Submit your product details and we&apos;ll reply within 24 hours. No payment required to submit.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, text: 'Reply within 24 hours' },
                { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>, text: 'No payment needed to submit' },
                { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, text: 'Amazon-compliant images' },
                { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>, text: '1 revision round included' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#1476ff]/10 text-[#1476ff] flex items-center justify-center flex-shrink-0">{item.icon}</div>
                  <span className="text-sm font-medium text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7 lg:p-8">
            {formState === 'success' ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#111827]">Product Received!</h3>
                <p className="text-gray-600 max-w-xs mx-auto leading-relaxed">
                  Thanks — your product details were submitted. We&apos;ll follow up within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name + Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-gray-700">Your Name <span className="text-red-500">*</span></label>
                    <input type="text" value={fields.name} onChange={set('name')} placeholder="Jane Smith" required className={inputClass} />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-gray-700">Phone Number <span className="text-red-500">*</span></label>
                    <input type="tel" value={fields.phone} onChange={set('phone')} placeholder="+1 (555) 000-0000" required className={inputClass} />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-gray-700">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" value={fields.email} onChange={set('email')} placeholder="jane@brand.com" required className={inputClass} />
                </div>

                {/* Brand Name */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-gray-700">Brand Name</label>
                  <input type="text" value={fields.brand_name} onChange={set('brand_name')} placeholder="Your brand name" className={inputClass} />
                </div>

                {/* Product Listing URL */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-gray-700">Product Listing URL</label>
                  <input type="text" value={fields.product_listing_url} onChange={set('product_listing_url')} placeholder="https://amazon.com/dp/..." className={inputClass} />
                </div>

                {/* Product Photo URL */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-gray-700">Product Photo URL</label>
                  <input type="text" value={fields.product_photo_url} onChange={set('product_photo_url')} placeholder="Dropbox, Google Drive, Amazon image, or website link" className={inputClass} />
                </div>

                {/* Product Count + Package Interest */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-gray-700">How many products?</label>
                    <select value={fields.product_count} onChange={set('product_count')} className={inputClass}>
                      <option value="">Select...</option>
                      {PRODUCT_COUNT_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-gray-700">Package Interest</label>
                    <select value={fields.package_interest} onChange={set('package_interest')} className={inputClass}>
                      <option value="">Select...</option>
                      {PACKAGE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                </div>

                {/* Improvement Notes */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-gray-700">What do you want improved?</label>
                  <textarea value={fields.improvement_notes} onChange={set('improvement_notes')} rows={3} placeholder="Describe your current images and what you'd like changed or improved..." className={inputClass + ' resize-none'} />
                </div>

                {errorMsg && (
                  <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700">{errorMsg}</div>
                )}

                <button type="submit" disabled={formState === 'loading'} className="w-full bg-[#FF9900] hover:bg-[#e68900] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl text-base transition-all shadow-lg shadow-orange-100 flex items-center justify-center gap-2">
                  {formState === 'loading' ? (
                    <><svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Submitting...</>
                  ) : (
                    <>Submit My Product<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></>
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  Your information is secure and will never be shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
