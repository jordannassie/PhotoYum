'use client'

import { useState, FormEvent } from 'react'
import { supabase, PhotoYumLead } from '@/lib/supabaseClient'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const PRODUCT_COUNT_OPTIONS = [
  '1 product',
  '2–3 products',
  '4–10 products',
  '10+ products',
]

const BUDGET_OPTIONS = [
  'I want the $300 launch offer',
  "I'm ready for the $500 package",
  'I need bulk pricing',
  'Just checking pricing',
]

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const [fields, setFields] = useState<PhotoYumLead & { product_count: string; budget_option: string; improvement_notes: string }>({
    name: '',
    email: '',
    brand_name: '',
    product_url: '',
    product_photo_url: '',
    product_count: '',
    budget_option: '',
    improvement_notes: '',
  })

  const set = (key: keyof typeof fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFields((prev) => ({ ...prev, [key]: e.target.value }))

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!fields.name.trim() || !fields.email.trim()) {
      setErrorMsg('Name and email are required.')
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(fields.email)) {
      setErrorMsg('Please enter a valid email address.')
      return
    }

    setFormState('loading')
    setErrorMsg('')

    try {
      const { error } = await supabase.from('photoyum_leads').insert([
        {
          name: fields.name.trim(),
          email: fields.email.trim(),
          brand_name: fields.brand_name?.trim() || null,
          product_url: fields.product_url?.trim() || null,
          product_photo_url: fields.product_photo_url?.trim() || null,
          product_count: fields.product_count || null,
          budget_option: fields.budget_option || null,
          improvement_notes: fields.improvement_notes?.trim() || null,
        },
      ])

      if (error) throw error

      setFormState('success')
    } catch (err) {
      console.error('Supabase insert error:', err)
      setErrorMsg('Something went wrong. Please try again or email us directly.')
      setFormState('error')
    }
  }

  return (
    <section id="contact" className="bg-[#F8FAFC] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: copy */}
          <div className="space-y-6 lg:sticky lg:top-24">
            <div className="space-y-3">
              <div className="inline-block bg-[#0993d9]/10 text-[#0993d9] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
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
                { icon: '⚡', text: 'Reply within 24 hours' },
                { icon: '🔒', text: 'No payment needed to submit' },
                { icon: '✅', text: 'Amazon-compliant images' },
                { icon: '🔄', text: '2 revision rounds included' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-lg">{item.icon}</span>
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
                  Thanks — we received your product. We&apos;ll review it and reply within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row: Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-gray-700">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={fields.name}
                      onChange={set('name')}
                      placeholder="Jane Smith"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-[#111827] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0993d9]/30 focus:border-[#0993d9] transition"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-gray-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={fields.email}
                      onChange={set('email')}
                      placeholder="jane@brand.com"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-[#111827] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0993d9]/30 focus:border-[#0993d9] transition"
                    />
                  </div>
                </div>

                {/* Brand name */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-gray-700">Brand Name</label>
                  <input
                    type="text"
                    value={fields.brand_name}
                    onChange={set('brand_name')}
                    placeholder="Your brand name"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-[#111827] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0993d9]/30 focus:border-[#0993d9] transition"
                  />
                </div>

                {/* Product URL */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-gray-700">Product Listing URL</label>
                  <input
                    type="url"
                    value={fields.product_url}
                    onChange={set('product_url')}
                    placeholder="https://amazon.com/dp/..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-[#111827] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0993d9]/30 focus:border-[#0993d9] transition"
                  />
                </div>

                {/* Product photo URL */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-gray-700">Product Photo URL</label>
                  <input
                    type="text"
                    value={fields.product_photo_url}
                    onChange={set('product_photo_url')}
                    placeholder="Paste Dropbox, Google Drive, Amazon image, or website link"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-[#111827] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0993d9]/30 focus:border-[#0993d9] transition"
                  />
                </div>

                {/* Row: Product count + Budget */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-gray-700">How many products?</label>
                    <select
                      value={fields.product_count}
                      onChange={set('product_count')}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#0993d9]/30 focus:border-[#0993d9] transition bg-white"
                    >
                      <option value="">Select...</option>
                      {PRODUCT_COUNT_OPTIONS.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-gray-700">Budget option</label>
                    <select
                      value={fields.budget_option}
                      onChange={set('budget_option')}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#0993d9]/30 focus:border-[#0993d9] transition bg-white"
                    >
                      <option value="">Select...</option>
                      {BUDGET_OPTIONS.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Improvement notes */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-semibold text-gray-700">What do you want improved?</label>
                  <textarea
                    value={fields.improvement_notes}
                    onChange={set('improvement_notes')}
                    rows={3}
                    placeholder="Describe your current images and what you'd like changed or improved..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-[#111827] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0993d9]/30 focus:border-[#0993d9] transition resize-none"
                  />
                </div>

                {/* Error */}
                {errorMsg && (
                  <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700">
                    {errorMsg}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="w-full bg-[#FF9900] hover:bg-[#e68900] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl text-base transition-all shadow-lg shadow-orange-100 flex items-center justify-center gap-2"
                >
                  {formState === 'loading' ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit My Product
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
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
