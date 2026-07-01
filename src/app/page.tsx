import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Included from '@/components/Included'
import ProductShowcase from '@/components/ProductShowcase'
import Pricing from '@/components/Pricing'
import HowItWorks from '@/components/HowItWorks'
import ContactForm from '@/components/ContactForm'
import FAQs from '@/components/FAQs'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Included />
        <ProductShowcase />
        <Pricing />
        <HowItWorks />
        <ContactForm />
        <FAQs />
      </main>
      <Footer />
    </>
  )
}
