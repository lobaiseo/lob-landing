import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import Header from '../components/sections/Header'
import Footer from '../components/sections/Footer'

const TermsOfServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="overflow-hidden">
      <Header />
      <div className="pt-20">
        <section className="relative py-24 md:py-32 bg-gradient-to-b from-gray-50 via-white to-white overflow-hidden">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-600">Legal</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                  Terms of Service
                </h1>
                <p className="text-gray-600">Last updated: January 28, 2026</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-600 mb-6">
                    By accessing or using LOBAISEO's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
                  <p className="text-gray-600 mb-6">
                    LOBAISEO provides AI-powered Google Business Profile automation services including automated posting, review management, SEO optimization, and analytics. Our services require you to authorize access to your Google Business Profile through Google's OAuth 2.0.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Account Registration</h2>
                  <p className="text-gray-600 mb-4">To use our services, you must:</p>
                  <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                    <li>Be at least 18 years old</li>
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Have authorization to manage the Google Business Profiles you connect</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Subscription and Payments</h2>
                  <p className="text-gray-600 mb-4">Our pricing plans:</p>
                  <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                    <li>Semi-Annual Plan: ₹6,000 per profile for 6 months</li>
                    <li>Annual Plan: ₹9,000 per profile for 12 months</li>
                    <li>15-day free trial available for new users</li>
                    <li>Payments processed securely through Razorpay</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Acceptable Use</h2>
                  <p className="text-gray-600 mb-4">You agree not to:</p>
                  <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                    <li>Violate any laws or regulations</li>
                    <li>Post false, misleading, or fraudulent content</li>
                    <li>Infringe on intellectual property rights</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Use our services to spam or harass others</li>
                    <li>Violate Google's Terms of Service</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
                  <p className="text-gray-600 mb-6">
                    LOBAISEO and its original content, features, and functionality are owned by LOBAISEO and are protected by international copyright, trademark, and other intellectual property laws.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
                  <p className="text-gray-600 mb-6">
                    LOBAISEO shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid by you in the 12 months preceding the claim.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
                  <p className="text-gray-600 mb-6">
                    We may terminate or suspend your account at any time for violations of these terms. Upon termination, your right to use our services will cease immediately.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to Terms</h2>
                  <p className="text-gray-600 mb-6">
                    We reserve the right to modify these terms at any time. We will notify users of significant changes via email or platform notification.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact</h2>
                  <p className="text-gray-600 mb-6">
                    For questions about these Terms of Service:
                    <br /><br />
                    Email: <a href="mailto:support@Lobaiseo.com" className="text-blue-600 hover:underline">support@Lobaiseo.com</a>
                    <br />
                    Phone: <a href="tel:+917710616166" className="text-blue-600 hover:underline">+91-7710616166</a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default TermsOfServicePage
