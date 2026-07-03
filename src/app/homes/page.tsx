import CategoryPage from '@/components/CategoryPage'

export const metadata = {
  title: 'Real Estate Photos — PhotoYum',
  description: 'AI-enhanced property images for real estate listings, Airbnb, rentals, and agents.',
}

export default function HomesPage() {
  return (
    <CategoryPage
      category="homes"
      pill="Real Estate"
      headline="Better property photos."
      subheadline="AI-enhanced images for real estate listings, Airbnb, rentals, and agents."
      ctaText="Submit Property"
    />
  )
}
