import CategoryPage from '@/components/CategoryPage'

export const metadata = {
  title: 'Product Videos — PhotoYum',
  description: 'Short product showcase videos for Amazon, TikTok, Reels, ads, and ecommerce.',
}

export default function VideosPage() {
  return (
    <CategoryPage
      category="videos"
      pill="Product Videos"
      headline="Product videos that stop the scroll."
      subheadline="Short showcase videos for Amazon, TikTok, Reels, ads, and ecommerce."
      ctaText="Submit Product"
    />
  )
}
