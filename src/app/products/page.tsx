import CategoryPage from '@/components/CategoryPage'

export const metadata = {
  title: 'Product Photos — PhotoYum',
  description: 'Amazon-ready hero shots, lifestyle images, and infographics that help products stand out and sell more.',
}

export default function ProductsPage() {
  return (
    <CategoryPage
      category="products"
      pill="Amazon Ready"
      headline="Better product images."
      subheadline="Amazon-ready hero shots, lifestyle images, and infographics that help products stand out."
      ctaText="Submit Product"
    />
  )
}
