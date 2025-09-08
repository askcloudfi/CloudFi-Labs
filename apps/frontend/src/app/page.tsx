'use client'

import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import ProblemSolution from '../components/ProblemSolution'
import FeatureHighlight from '../components/FeatureHighlight'
import Testimonials from '../components/Testimonials'
import InteractiveDemo from '../components/InteractiveDemo'
import Pricing from '../components/Pricing'
import ResourceHub from '../components/ResourceHub'
import FinalConversion from '../components/FinalConversion'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSolution />
        <FeatureHighlight />
        <Testimonials />
        <InteractiveDemo />
        <Pricing />
        <ResourceHub />
        <FinalConversion />
      </main>
      <Footer />
    </div>
  )
}
