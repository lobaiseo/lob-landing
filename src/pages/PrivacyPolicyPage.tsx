import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'
import Header from '../components/sections/Header'
import Footer from '../components/sections/Footer'

const PrivacyPolicyPage = () => {
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
                  <Shield className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-600">Legal</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                  Privacy Policy
                </h1>
                <p className="text-gray-600">Last updated: January 28, 2026</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                  <p className="text-gray-600 mb-6">
                    LOBAISEO ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                  <p className="text-gray-600 mb-4">We collect information that you provide directly to us:</p>
                  <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                    <li>Account information (name, email, phone number)</li>
                    <li>Google Business Profile data (with your authorization)</li>
                    <li>Payment information (processed securely through Razorpay)</li>
                    <li>Communication data (support tickets, feedback)</li>
                    <li>Usage data (how you interact with our platform)</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                  <p className="text-gray-600 mb-4">We use the collected information to:</p>
                  <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                    <li>Provide and maintain our services</li>
                    <li>Process your transactions</li>
                    <li>Send you service-related communications</li>
                    <li>Improve our platform and develop new features</li>
                    <li>Protect against fraud and abuse</li>
                    <li>Comply with legal obligations</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                  <p className="text-gray-600 mb-6">
                    We implement industry-standard security measures including AES-256 encryption, secure OAuth 2.0 authentication for Google integration, and regular security audits. Your data is stored on SOC 2 compliant servers.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Sharing</h2>
                  <p className="text-gray-600 mb-4">We do not sell your personal data. We may share information with:</p>
                  <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                    <li>Service providers (hosting, payment processing)</li>
                    <li>Google (to manage your Business Profile, with your consent)</li>
                    <li>Legal authorities (when required by law)</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
                  <p className="text-gray-600 mb-4">You have the right to:</p>
                  <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                    <li>Access your personal data</li>
                    <li>Correct inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Export your data</li>
                    <li>Withdraw consent at any time</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies</h2>
                  <p className="text-gray-600 mb-6">
                    We use cookies to improve your experience. You can manage cookie preferences through your browser settings. See our Cookie Policy for more details.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
                  <p className="text-gray-600 mb-6">
                    For privacy-related questions or concerns, contact us at:
                    <br /><br />
                    Email: <a href="mailto:support@Lobaiseo.com" className="text-blue-600 hover:underline">support@Lobaiseo.com</a>
                    <br />
                    Phone: <a href="tel:+917710616166" className="text-blue-600 hover:underline">+91-7710616166</a>
                    <br />
                    Address: Jalandhar, Punjab, India
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

export default PrivacyPolicyPage
