import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { RotateCcw } from 'lucide-react'
import Header from '../components/sections/Header'
import Footer from '../components/sections/Footer'

const RefundPolicyPage = () => {
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 mb-6">
                  <RotateCcw className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-600">Legal</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                  Refund Policy
                </h1>
                <p className="text-gray-600">Last updated: January 28, 2026</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  {/* Satisfaction Guarantee Banner */}
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                    <h3 className="text-xl font-bold text-green-800 mb-2">100% Satisfaction Guarantee</h3>
                    <p className="text-green-700">
                      We're confident you'll love LOBAISEO. If you're not satisfied within the first 15 days, we'll refund your payment in full.
                    </p>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Free Trial Period</h2>
                  <p className="text-gray-600 mb-6">
                    All new users receive a 15-day free trial with full access to all features. No credit card is required to start your trial. You can cancel anytime during the trial period without any charges.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Refund Eligibility</h2>
                  <p className="text-gray-600 mb-4">You are eligible for a full refund if:</p>
                  <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                    <li>You request a refund within 15 days of your first payment</li>
                    <li>You experience technical issues that we cannot resolve</li>
                    <li>Our service does not perform as advertised</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Refund Process</h2>
                  <p className="text-gray-600 mb-4">To request a refund:</p>
                  <ol className="list-decimal pl-6 text-gray-600 mb-6 space-y-2">
                    <li>Email us at <a href="mailto:support@Lobaiseo.com" className="text-blue-600 hover:underline">support@Lobaiseo.com</a> with your account details</li>
                    <li>Include the reason for your refund request</li>
                    <li>Our team will review your request within 2 business days</li>
                    <li>Approved refunds will be processed within 5-7 business days</li>
                  </ol>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Refund Method</h2>
                  <p className="text-gray-600 mb-6">
                    Refunds will be credited to the original payment method used for the purchase. Bank processing times may vary:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                    <li>Credit/Debit Cards: 5-10 business days</li>
                    <li>UPI: 2-3 business days</li>
                    <li>Net Banking: 5-7 business days</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Non-Refundable Situations</h2>
                  <p className="text-gray-600 mb-4">Refunds are not available for:</p>
                  <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                    <li>Requests made after 15 days of payment</li>
                    <li>Accounts terminated due to Terms of Service violations</li>
                    <li>Partial period usage (no pro-rata refunds after 15 days)</li>
                    <li>Changes in business circumstances unrelated to our service</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Subscription Cancellation</h2>
                  <p className="text-gray-600 mb-6">
                    You can cancel your subscription at any time from your dashboard. Upon cancellation:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                    <li>Your service continues until the end of the current billing period</li>
                    <li>No automatic renewal will occur</li>
                    <li>Your data will be available for export for 30 days</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
                  <p className="text-gray-600 mb-6">
                    For refund requests or questions:
                    <br /><br />
                    Email: <a href="mailto:support@Lobaiseo.com" className="text-blue-600 hover:underline">support@Lobaiseo.com</a>
                    <br />
                    Phone: <a href="tel:+917710616166" className="text-blue-600 hover:underline">+91-7710616166</a>
                    <br /><br />
                    Our support team is available Monday to Saturday, 10 AM - 7 PM IST.
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

export default RefundPolicyPage
