'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'What does PhotoYum create?',
    a: 'PhotoYum creates product photos and videos for Amazon sellers, Shopify stores, eBay sellers, websites, and ecommerce brands. Every package includes a white-background hero image, lifestyle images, and infographic images. We also create short product showcase videos.',
  },
  {
    q: 'How much does PhotoYum cost?',
    a: 'Product image packages start at $500 per product. The Image + Video Package (includes photos and a product video) starts at $700. Bulk discounts apply for 3+ products. Use code YUM10 for 10% off your first order.',
  },
  {
    q: 'How fast is delivery?',
    a: 'Most image packages are delivered within 48–72 hours after we receive your product details.',
  },
  {
    q: 'Do you create Amazon product images?',
    a: 'Yes. Amazon product photography is our core service. Every package includes an Amazon-compliant white-background hero image, lifestyle images, and an infographic — up to 10 images total.',
  },
  {
    q: 'Do you create Shopify and eBay images?',
    a: 'Yes. All images are delivered in formats ready for Amazon, Shopify, eBay, websites, and ad platforms. One package covers your full ecommerce presence.',
  },
  {
    q: 'Do you create product videos?',
    a: 'Yes. We create 8–15 second product showcase videos for Amazon A+, TikTok, Instagram Reels, and ads. Videos are included in the Image + Video Package ($700) or available as an add-on from $200.',
  },
  {
    q: 'Do I need to ship my product?',
    a: 'No. In most cases, you can submit existing product photos, packaging images, product renders, or your Amazon listing URL. If we need the physical product for a specific shoot, we\'ll let you know before starting.',
  },
  {
    q: 'What do I need to send you?',
    a: 'You can send any of the following: existing product photos, a product render, packaging images, or a link to your Amazon or ecommerce listing. We handle the rest.',
  },
  {
    q: 'Can I get bulk pricing for multiple products?',
    a: 'Yes. Save 10% when ordering 3+ products and 15% for 5+ products. For 10 or more products, contact us for custom bulk pricing.',
  },
  {
    q: 'Can I use coupon code YUM10?',
    a: 'Yes. Enter YUM10 in the coupon field on the submission form to save 10% on your first order.',
  },
  {
    q: 'Is this Amazon compliant?',
    a: 'Yes. We design with Amazon image guidelines in mind, including clean white-background hero images that meet Amazon\'s main image requirements.',
  },
  {
    q: 'Do I pay now?',
    a: 'No. Submit your product details for free. We review and reply within 24 hours with next steps. No payment is required to get started.',
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
