import type { ServicePageData } from '@/lib/serviceData'
import ServiceFAQ from '@/components/ServiceFAQ'
import Link from 'next/link'
import type { ReactElement } from 'react'

const ICON_URL = 'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/logo/Flaticon.png'
const OG_URL   = 'https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/logo/Flaticon.png'
const BASE_URL = 'https://photoyum.com'

function FeatureIcon({ icon }: { icon: string }) {
  const cls = 'w-5 h-5'
  const icons: Record<string, ReactElement> = {
    camera:      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><circle cx="12" cy="13" r="3"/></svg>,
    lifestyle:   <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
    infographic: <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>,
    package:     <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 10V7"/></svg>,
    revision:    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>,
    delivery:    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
    video:       <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>,
    files:       <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>,
    store:       <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>,
  }
  return icons[icon] ?? icons['camera']
}

export function buildServiceSchema(data: ServicePageData) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',          item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: data.h1,         item: `${BASE_URL}/${data.slug}` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: data.schemaName,
      description: data.schemaDesc,
      provider: { '@type': 'Organization', name: 'PhotoYum', url: BASE_URL },
      offers: {
        '@type': 'Offer',
        price: '500',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        description: 'Starting at $500 per product. Up to 10 images. 48–72 hour delivery.',
      },
      areaServed: { '@type': 'Country', name: 'United States' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Product Image Packages',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Product Image Package', price: '500', priceCurrency: 'USD' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Image + Video Package', price: '700', priceCurrency: 'USD' } },
        ],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: data.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ]
}

export function buildServiceMetadata(data: ServicePageData) {
  return {
    title: data.metaTitle,
    description: data.metaDesc,
    alternates: { canonical: `${BASE_URL}/${data.slug}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDesc,
      url: `${BASE_URL}/${data.slug}`,
      type: 'website' as const,
      images: [{ url: OG_URL, width: 1200, height: 630, alt: data.h1 }],
    },
    twitter: { card: 'summary_large_image' as const, title: data.metaTitle, description: data.metaDesc, images: [OG_URL] },
    icons: {
      icon:  [{ url: ICON_URL, type: 'image/png' }],
      apple: [{ url: ICON_URL, type: 'image/png' }],
    },
  }
}

export default function ServicePageTemplate({ data }: { data: ServicePageData }) {
  const schemas = buildServiceSchema(data)

  return (
    <>
      {/* JSON-LD */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0d1b2e] via-[#112240] to-[#0a1628] pt-24 pb-14">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute -top-24 right-0 w-96 h-96 bg-[#1476ff]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-block bg-[#FF9900]/20 text-[#FF9900] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            {data.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
            {data.h1}
          </h1>
          {/* AI Answer summary box */}
          <div className="max-w-2xl mx-auto bg-white/[0.06] border border-[#1476ff]/30 rounded-2xl p-5 text-left">
            <div className="flex items-center gap-2 mb-2.5">
              <svg className="w-4 h-4 text-[#1476ff] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span className="text-[#1476ff] text-xs font-bold uppercase tracking-wider">Quick Answer</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">{data.aiSummary}</p>
          </div>
          <p className="text-gray-400 text-base max-w-xl mx-auto">{data.subtext}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <a href="/#contact" className="inline-flex items-center justify-center gap-2 bg-[#FF9900] hover:bg-[#e68900] text-white font-bold px-8 py-3.5 rounded-xl text-base transition-all shadow-lg shadow-orange-900/30">
              Submit My Product
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </a>
            <a href="/#examples" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-xl text-base transition-all">
              See Examples
            </a>
          </div>
        </div>
      </section>

      {/* ── Quick stats strip ── */}
      <section className="bg-[#0a0f1a] border-y border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
            {[
              { label: 'Starting at', value: '$500', sub: 'per product' },
              { label: 'Delivered in', value: '48–72h', sub: 'average turnaround' },
              { label: 'Up to', value: '10', sub: 'images per package' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-extrabold text-white">{s.value}</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's included ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-block bg-[#1476ff]/10 text-[#1476ff] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3">What&apos;s Included</div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#111827]">Everything in every package</h2>
            <p className="text-gray-500 mt-2 text-sm max-w-md mx-auto">Starting at $500 per product. No hidden fees.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.highlights.map((h) => (
              <div key={h.title} className="flex gap-4 p-5 rounded-2xl border border-gray-100 hover:border-[#1476ff]/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#1476ff]/10 text-[#1476ff] flex items-center justify-center flex-shrink-0">
                  <FeatureIcon icon={h.icon} />
                </div>
                <div>
                  <div className="font-bold text-[#111827] text-sm">{h.title}</div>
                  <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">{h.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who this is for ── */}
      <section className="bg-[#F8FAFC] py-14 lg:py-16 border-y border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-xl lg:text-2xl font-extrabold text-[#111827]">Who this is for</h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {data.audience.map((a) => (
              <li key={a} className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 px-4 py-3">
                <svg className="w-4 h-4 text-[#FF9900] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm font-medium text-gray-700">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-block bg-[#1476ff]/10 text-[#1476ff] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3">FAQs</div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#111827]">Common questions</h2>
          </div>
          <ServiceFAQ faqs={data.faqs} />
        </div>
      </section>

      {/* ── Related services ── */}
      <section className="bg-[#F8FAFC] border-t border-gray-100 py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-extrabold text-[#111827] mb-5">Related services</h2>
          <div className="flex flex-wrap gap-3">
            {data.related.map((r) => (
              <Link key={r.href} href={r.href} className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-[#1476ff]/50 hover:shadow-sm text-sm font-semibold text-[#111827] hover:text-[#1476ff] px-5 py-2.5 rounded-xl transition-all">
                {r.title}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0d1b2e] to-[#0a1628] py-16">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-white">Ready to upgrade your product images?</h2>
          <p className="text-gray-400 text-sm">Submit your product details — no payment required to get started. We reply within 24 hours.</p>
          <a href="/#contact" className="inline-flex items-center gap-2 bg-[#FF9900] hover:bg-[#e68900] text-white font-bold px-8 py-3.5 rounded-xl text-base transition-all shadow-lg">
            Submit My Product
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
          </a>
          <p className="text-xs text-gray-500">Packages from $500 · 48–72h delivery · Use code <span className="text-[#FF9900] font-bold">YUM10</span> for 10% off</p>
        </div>
      </section>
    </>
  )
}
