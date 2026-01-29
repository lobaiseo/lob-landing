import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
// Company pages
import AboutPage from './pages/AboutPage.tsx'
import BlogPage from './pages/BlogPage.tsx'
import CareersPage from './pages/CareersPage.tsx'
import ContactPage from './pages/ContactPage.tsx'
// Resource pages
import HelpCenterPage from './pages/HelpCenterPage.tsx'
import VideoTutorialsPage from './pages/VideoTutorialsPage.tsx'
import CaseStudiesPage from './pages/CaseStudiesPage.tsx'
import CommunityPage from './pages/CommunityPage.tsx'
import StatusPage from './pages/StatusPage.tsx'
// Legal pages
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.tsx'
import TermsOfServicePage from './pages/TermsOfServicePage.tsx'
import CookiePolicyPage from './pages/CookiePolicyPage.tsx'
import RefundPolicyPage from './pages/RefundPolicyPage.tsx'
import GDPRCompliancePage from './pages/GDPRCompliancePage.tsx'
import DataDeletionPage from './pages/DataDeletionPage.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* Company pages */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Resource pages */}
        <Route path="/help" element={<HelpCenterPage />} />
        <Route path="/tutorials" element={<VideoTutorialsPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/status" element={<StatusPage />} />
        {/* Legal pages */}
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
        <Route path="/cookies" element={<CookiePolicyPage />} />
        <Route path="/refunds" element={<RefundPolicyPage />} />
        <Route path="/gdpr" element={<GDPRCompliancePage />} />
        <Route path="/data-deletion" element={<DataDeletionPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
