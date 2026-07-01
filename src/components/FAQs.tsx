'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Do I need to ship my product?',
    a: 'No. In most cases, you do not need to ship your product. You can upload existing product photos, packaging images, product renders, or your Amazon listing. If we need the physical product for a specific shoot, we\'ll let you know before starting.',
  },
  {
    q: 'Is this Amazon compliant?',
    a: 'We design with Amazon image guidelines in mind, including clean white-background hero images. Final approval is always based on Amazon\'s current rules.',
  },
  {
    q: 'How fast is delivery?',
    a: 'Most image packages are delivered in 48–72 hours after we have everything needed.',
  },
  {
    q: 'Do you use AI?',
    a: 'We may use AI-assisted design workflows, editing, and product scene generation. We keep the product accurate and avoid misleading claims or fake results.',
  },
  {
    q: 'Do I pay now?',
    a: 'No payment is required to submit your product. We review it first and reply with next steps.',
  },
  {
    q: 'What files do I receive?',
    a: 'You\'ll receive high-resolution images in the sizes and formats needed for Amazon, Shopify, and ads — typically JPG and PNG.',
  },
]

export default function FAQs() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faqs" className="bg-white py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-block bg-[#1476ff]/10 text-[#1476ff] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            FAQs
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#111827]">
            Common questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-[#111827] text-sm leading-snug">{faq.q}</span>
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                    open === i ? 'bg-[#1476ff] text-white' : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  <svg
                    className={`w-3.5 h-3.5 transition-transform ${open === i ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
