import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Globe, Lock, Shield, UserCheck } from 'lucide-react'
import Header from '../components/sections/Header'
import Footer from '../components/sections/Footer'

const GDPRCompliancePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const rights = [
    {
      icon: UserCheck,
      title: 'Right to Access',
      description: 'You can request a copy of all personal data we hold about you.',
    },
    {
      icon: Shield,
      title: 'Right to Rectification',
      description: 'You can request correction of inaccurate personal data.',
    },
    {
      icon: Lock,
      title: 'Right to Erasure',
      description: 'You can request deletion of your personal data.',
    },
    {
      icon: Globe,
      title: 'Right to Portability',
      description: 'You can request your data in a machine-readable format.',
    },
  ]

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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 border border-violet-200 mb-6">
                  <Shield className="w-4 h-4 text-violet-600" />
                  <span className="text-sm font-medium text-violet-600">Data Protection</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                  GDPR Compliance
                </h1>
                <p className="text-gray-600">Our commitment to protecting your data rights</p>
              </div>

              {/* Commitment Banner */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl p-8 text-white mb-12"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Shield className="w-10 h-10" />
                  <h2 className="text-2xl font-bold">Your Privacy Matters</h2>
                </div>
                <p className="text-violet-100">
                  LOBAISEO is committed to GDPR compliance and protecting the privacy rights of all users, including those in the European Economic Area (EEA). We have implemented comprehensive measures to ensure your data is handled responsibly.
                </p>
              </motion.div>

              {/* Your Rights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Your Data Rights</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {rights.map((right, i) => (
                    <div key={i} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                      <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center mb-4">
                        <right.icon className="w-6 h-6 text-violet-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{right.title}</h3>
                      <p className="text-gray-600">{right.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Main Content */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Data Controller</h2>
                  <p className="text-gray-600 mb-6">
                    LOBAISEO acts as the data controller for personal information collected through our platform. We determine the purposes and means of processing your data.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Legal Basis for Processing</h2>
                  <p className="text-gray-600 mb-4">We process your data based on:</p>
                  <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                    <li><strong>Consent:</strong> When you opt-in to our services</li>
                    <li><strong>Contract:</strong> To fulfill our service agreement with you</li>
                    <li><strong>Legitimate Interest:</strong> To improve our services and protect against fraud</li>
                    <li><strong>Legal Obligation:</strong> To comply with applicable laws</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data We Collect</h2>
                  <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                    <li>Account information (name, email, phone)</li>
                    <li>Google Business Profile data (with explicit consent)</li>
                    <li>Usage data and analytics</li>
                    <li>Payment information (processed by Razorpay)</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Protection Measures</h2>
                  <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                    <li>AES-256 encryption for data at rest and in transit</li>
                    <li>Regular security audits and penetration testing</li>
                    <li>Access controls and authentication measures</li>
                    <li>Employee training on data protection</li>
                    <li>Incident response procedures</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Retention</h2>
                  <p className="text-gray-600 mb-6">
                    We retain your data only as long as necessary to provide our services or as required by law. Upon account deletion, personal data is removed within 30 days, except where retention is required for legal purposes.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. International Transfers</h2>
                  <p className="text-gray-600 mb-6">
                    Your data may be processed in countries outside the EEA. We ensure appropriate safeguards are in place, including Standard Contractual Clauses approved by the European Commission.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Processors</h2>
                  <p className="text-gray-600 mb-4">We work with trusted third parties who process data on our behalf:</p>
                  <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                    <li>Google (Business Profile API)</li>
                    <li>Razorpay (Payment processing)</li>
                    <li>Supabase (Database hosting)</li>
                    <li>OpenAI (AI content generation)</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Exercise Your Rights</h2>
                  <p className="text-gray-600 mb-6">
                    To exercise any of your data rights, contact our Data Protection team:
                    <br /><br />
                    Email: <a href="mailto:support@Lobaiseo.com" className="text-blue-600 hover:underline">support@Lobaiseo.com</a>
                    <br /><br />
                    We will respond to your request within 30 days. In complex cases, we may extend this by an additional 60 days with notice.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Complaints</h2>
                  <p className="text-gray-600 mb-6">
                    If you believe your data protection rights have been violated, you have the right to lodge a complaint with a supervisory authority in your country of residence.
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

export default GDPRCompliancePage
