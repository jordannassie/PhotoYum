import { getServicePage } from '@/lib/serviceData'
import ServicePageTemplate, { buildServiceMetadata } from '@/components/ServicePageTemplate'
import { notFound } from 'next/navigation'

const SLUG = 'shopify-product-photography'

export function generateMetadata() {
  const data = getServicePage(SLUG)
  if (!data) return {}
  return buildServiceMetadata(data)
}

export default function Page() {
  const data = getServicePage(SLUG)
  if (!data) notFound()
  return <ServicePageTemplate data={data} />
}
