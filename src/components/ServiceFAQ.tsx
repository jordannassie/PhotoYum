'use client'

import { useState } from 'react'
import type { ServiceFAQItem } from '@/lib/serviceData'

export default function ServiceFAQ({ faqs }: { faqs: ServiceFAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-[#111827] text-sm leading-snug">{faq.q}</span>
            <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${open === i ? 'bg-[#1476ff] text-white' : 'bg-gray-100 text-gray-500'}`}>
              <svg className={`w-3.5 h-3.5 transition-transform ${open === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
  )
}
