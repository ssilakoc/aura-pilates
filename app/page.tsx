import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Philosophy from '@/components/Philosophy'
import Services from '@/components/Services'
import VideoSection from '@/components/VideoSection'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Philosophy />
      <Services />
      <VideoSection />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
