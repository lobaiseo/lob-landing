import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Trash2, Mail, CheckCircle, AlertCircle } from 'lucide-react'
import Header from '../components/sections/Header'
import Footer from '../components/sections/Footer'

const DataDeletionPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    reason: '',
    confirmDelete: false
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send the request to your backend
    setSubmitted(true)
  }

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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 border border-red-200 mb-6">
                  <Trash2 className="w-4 h-4 text-red-600" />
                  <span className="text-sm font-medium text-red-600">Data Privacy</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                  Data Deletion Request
                </h1>
                <p className="text-gray-600">Request deletion of your personal data from LOBAISEO</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
                {!submitted ? (
                  <>
                    <div className="prose prose-lg max-w-none mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Right to Data Deletion</h2>
                      <p className="text-gray-600 mb-6">
                        Under GDPR and other privacy regulations, you have the right to request the deletion of your personal data.
                        When you submit a deletion request, we will:
                      </p>
                      <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                        <li>Delete your account and all associated data</li>
                        <li>Remove your Google Business Profile connection</li>
                        <li>Delete all posts, reviews, and analytics data</li>
                        <li>Remove your payment information</li>
                        <li>Delete any Magic QR codes associated with your account</li>
                      </ul>

                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-yellow-800">Important Notice</h4>
                            <p className="text-yellow-700 text-sm mt-1">
                              Data deletion is permanent and cannot be undone. You will lose access to all your data,
                              scheduled posts, review campaigns, and analytics history.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address (associated with your account)
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                          Reason for Deletion (optional)
                        </label>
                        <textarea
                          id="reason"
                          rows={4}
                          value={formData.reason}
                          onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900"
                          placeholder="Please let us know why you want to delete your data (optional)"
                        />
                      </div>

                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="confirmDelete"
                          required
                          checked={formData.confirmDelete}
                          onChange={(e) => setFormData({ ...formData, confirmDelete: e.target.checked })}
                          className="mt-1 w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                        />
                        <label htmlFor="confirmDelete" className="text-sm text-gray-600">
                          I understand that this action is permanent and all my data will be deleted.
                          This includes my account, Google Business Profile connections, posts, reviews,
                          analytics, and any other information associated with my account.
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                      >
                        <Trash2 className="w-5 h-5" />
                        Submit Deletion Request
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Request Submitted</h2>
                    <p className="text-gray-600 mb-6">
                      Your data deletion request has been received. We will process your request within 30 days
                      as required by GDPR regulations. You will receive a confirmation email once your data has been deleted.
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 inline-block">
                      <div className="flex items-center gap-2 text-blue-700">
                        <Mail className="w-5 h-5" />
                        <span>Confirmation will be sent to: <strong>{formData.email}</strong></span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Alternative Contact Methods</h3>
                  <p className="text-gray-600 mb-4">
                    You can also request data deletion by contacting us directly:
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>
                      <strong>Email:</strong>{' '}
                      <a href="mailto:support@Lobaiseo.com" className="text-blue-600 hover:underline">
                        support@Lobaiseo.com
                      </a>
                    </li>
                    <li>
                      <strong>Phone:</strong>{' '}
                      <a href="tel:+917710616166" className="text-blue-600 hover:underline">
                        +91-7710616166
                      </a>
                    </li>
                  </ul>
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

export default DataDeletionPage
