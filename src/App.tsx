import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoBar from './components/LogoBar'
import ScrollProgress from './components/ScrollProgress'

const Product = lazy(() => import('./components/Product'))
const HowItWorks = lazy(() => import('./components/HowItWorks'))
const Features = lazy(() => import('./components/Features'))
const Bento = lazy(() => import('./components/Bento'))
const Pricing = lazy(() => import('./components/Pricing'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const FAQ = lazy(() => import('./components/FAQ'))
const WaitlistCTA = lazy(() => import('./components/WaitlistCTA'))
const Footer = lazy(() => import('./components/Footer'))

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background pb-12">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <LogoBar />
      <Suspense fallback={null}>
        <div className="flex flex-col gap-24 md:gap-32 pb-32">
          <Features />
          <Bento />
          <Product />
          <HowItWorks />
          <Pricing />
          <Testimonials />
          <FAQ />
        </div>
        <WaitlistCTA />
        <Footer />
      </Suspense>
    </div>
  )
}
