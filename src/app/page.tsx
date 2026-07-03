import Header from '@/components/Header'
import PromoBanner from '@/components/PromoBanner'
import TopTrustBanner from '@/components/TopTrustBanner'
import Hero from '@/components/Hero'
import TrustStrip from '@/components/TrustStrip'
import PhotoYumVideoSection from '@/components/PhotoYumVideoSection'
import AIBlock from '@/components/AIBlock'
import Included from '@/components/Included'
import ProductShowcase from '@/components/ProductShowcase'
import VideoShowcase from '@/components/VideoShowcase'
import Pricing from '@/components/Pricing'
import BulkPricing from '@/components/BulkPricing'
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
        <PromoBanner />
        <TopTrustBanner />
        <Hero />
        <PhotoYumVideoSection />
        <TrustStrip />
        <AIBlock />
        <Included />
        <ProductShowcase />
        <VideoShowcase />
        <Pricing />
        <BulkPricing />
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
