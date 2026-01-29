import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Cookie } from 'lucide-react'
import Header from '../components/sections/Header'
import Footer from '../components/sections/Footer'

const CookiePolicyPage = () => {
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 mb-6">
                  <Cookie className="w-4 h-4 text-orange-600" />
                  <span className="text-sm font-medium text-orange-600">Legal</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                  Cookie Policy
                </h1>
                <p className="text-gray-600">Last updated: January 28, 2026</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
                  <p className="text-gray-600 mb-6">
                    Cookies are small text files stored on your device when you visit a website. They help us provide you with a better experience by remembering your preferences and understanding how you use our platform.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Types of Cookies We Use</h2>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Essential Cookies</h3>
                  <p className="text-gray-600 mb-4">
                    These cookies are necessary for the website to function properly. They enable basic features like page navigation, secure areas access, and authentication.
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                    <li>Session management</li>
                    <li>Authentication tokens</li>
                    <li>Security features</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Analytics Cookies</h3>
                  <p className="text-gray-600 mb-4">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                    <li>Page views and navigation paths</li>
                    <li>Time spent on pages</li>
                    <li>Error tracking</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Functional Cookies</h3>
                  <p className="text-gray-600 mb-4">
                    These cookies enable enhanced functionality and personalization, such as remembering your preferences.
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                    <li>Language preferences</li>
                    <li>Theme settings</li>
                    <li>Dashboard customizations</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Third-Party Cookies</h2>
                  <p className="text-gray-600 mb-4">We may use cookies from trusted third parties:</p>
                  <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                    <li>Google Analytics - for website analytics</li>
                    <li>Razorpay - for payment processing</li>
                    <li>Google OAuth - for authentication</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Managing Cookies</h2>
                  <p className="text-gray-600 mb-4">
                    You can control cookies through your browser settings. Most browsers allow you to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                    <li>View what cookies are stored</li>
                    <li>Delete all or specific cookies</li>
                    <li>Block third-party cookies</li>
                    <li>Block all cookies (may affect functionality)</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookie Retention</h2>
                  <p className="text-gray-600 mb-6">
                    Session cookies are deleted when you close your browser. Persistent cookies remain on your device for a set period or until you delete them manually.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Updates to This Policy</h2>
                  <p className="text-gray-600 mb-6">
                    We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
                  <p className="text-gray-600 mb-6">
                    For questions about our use of cookies:
                    <br /><br />
                    Email: <a href="mailto:support@Lobaiseo.com" className="text-blue-600 hover:underline">support@Lobaiseo.com</a>
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

export default CookiePolicyPage
