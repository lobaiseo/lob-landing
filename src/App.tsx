import { useEffect } from 'react'
import Header from './components/sections/Header'
import HeroSection from './components/sections/HeroSection'
import SocialProofStrip from './components/sections/SocialProofStrip'
import ProblemSection from './components/sections/ProblemSection'
import SolutionSection from './components/sections/SolutionSection'
import AutomatedPostsSection from './components/sections/AutomatedPostsSection'
import AIReviewSection from './components/sections/AIReviewSection'
import MagicQRSection from './components/sections/MagicQRSection'
import ReviewCampaignSection from './components/sections/ReviewCampaignSection'
import SEOAuditSection from './components/sections/SEOAuditSection'
import HowItWorksSection from './components/sections/HowItWorksSection'
import AnalyticsDashboardSection from './components/sections/AnalyticsDashboardSection'
import PricingSection from './components/sections/PricingSection'
import UseCasesSection from './components/sections/UseCasesSection'
import AgencySection from './components/sections/AgencySection'
import AboutSection from './components/sections/AboutSection'
import FinalCTASection from './components/sections/FinalCTASection'
import Footer from './components/sections/Footer'

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <>
      <Header />
      <div className="overflow-hidden">
      <HeroSection />
      <SocialProofStrip />
      <ProblemSection />
      <SolutionSection />

      {/* Core Features Deep Dive */}
      <div id="features">
        <AutomatedPostsSection />
        <AIReviewSection />
        <MagicQRSection />
        <ReviewCampaignSection />
        <SEOAuditSection />
      </div>

      {/* Additional Sections */}
      <div id="how-it-works">
        <HowItWorksSection />
      </div>
      <AnalyticsDashboardSection />
      <div id="pricing">
        <PricingSection />
      </div>
      <div id="use-cases">
        <UseCasesSection />
      </div>
      <div id="agency">
        <AgencySection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <FinalCTASection />
      <Footer />
      </div>
    </>
  )
}

export default App
