import Header from '@/components/Header'
import TopTrustBanner from '@/components/TopTrustBanner'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Included from '@/components/Included'
import ProductShowcase from '@/components/ProductShowcase'
import VideoShowcase from '@/components/VideoShowcase'
import Pricing from '@/components/Pricing'
import HowItWorks from '@/components/HowItWorks'
import ContactForm from '@/components/ContactForm'
import FAQs from '@/components/FAQs'
import FooterTrustBanner from '@/components/FooterTrustBanner'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <TopTrustBanner />
        <Hero />
        <Stats />
        <Included />
        <ProductShowcase />
        <VideoShowcase />
        <Pricing />
        <HowItWorks />
        <ContactForm />
        <FAQs />
        <FooterTrustBanner />
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}
