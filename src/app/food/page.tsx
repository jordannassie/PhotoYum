import CategoryPage from '@/components/CategoryPage'

export const metadata = {
  title: 'Food & Restaurant Photos — PhotoYum',
  description: 'Better images for menus, Yelp, Google, DoorDash, Uber Eats, and social media.',
}

export default function FoodPage() {
  return (
    <CategoryPage
      category="food"
      pill="Food & Restaurants"
      headline="Food photos that make people hungry."
      subheadline="Better images for menus, Yelp, Google, DoorDash, Uber Eats, and social."
      ctaText="Submit Restaurant"
    />
  )
}
