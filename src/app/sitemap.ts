import { MetadataRoute } from 'next'

const BASE = 'https://photoyum.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const servicePages = [
    'amazon-product-photography',
    'amazon-listing-images',
    'amazon-infographic-images',
    'product-photography-for-amazon-sellers',
    'ecommerce-product-photography',
    'product-videos-for-amazon',
    'shopify-product-photography',
    'ebay-product-photography',
  ]

  return [
    { url: BASE,        lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/admin`, lastModified: now, changeFrequency: 'never', priority: 0.1 },
    ...servicePages.map((slug) => ({
      url:             `${BASE}/${slug}`,
      lastModified:    now,
      changeFrequency: 'monthly' as const,
      priority:        0.9,
    })),
  ]
}
