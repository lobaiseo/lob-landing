import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, HelpCircle, Mail, MessageCircle, Phone, Search, Zap } from 'lucide-react'
import Header from '../components/sections/Header'
import Footer from '../components/sections/Footer'

const HelpCenterPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const categories = [
    {
      icon: Zap,
      title: 'Getting Started',
      description: 'New to LOBAISEO? Start here to learn the basics.',
      articles: ['How to create your account', 'Connecting your Google Business Profile', 'Understanding your dashboard', 'Setting up your first automation'],
    },
    {
      icon: BookOpen,
      title: 'Features & Tools',
      description: 'Learn how to use all LOBAISEO features.',
      articles: ['AI-powered post creation', 'Review management', 'Magic QR codes', 'SEO audit tools'],
    },
    {
      icon: MessageCircle,
      title: 'Account & Billing',
      description: 'Manage your subscription and account settings.',
      articles: ['Upgrading your plan', 'Payment methods', 'Invoice history', 'Cancellation policy'],
    },
  ]

  const faqs = [
    {
      question: 'How do I connect my Google Business Profile?',
      answer: 'Simply click "Connect Profile" in your dashboard and sign in with your Google account. We use secure OAuth 2.0 authentication.',
    },
    {
      question: 'Can I manage multiple business profiles?',
      answer: 'Yes! Our plans support multiple profiles. You can add and manage all your locations from a single dashboard.',
    },
    {
      question: 'How does AI content generation work?',
      answer: 'Our AI analyzes your business type, location, and industry to create relevant, engaging posts optimized for local SEO.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use bank-level encryption (AES-256) and never store your Google password. We are SOC 2 compliant.',
    },
  ]

  return (
    <div className="overflow-hidden">
      <Header />
      <div className="pt-20">
        <section className="relative py-24 md:py-32 bg-gradient-to-b from-blue-50 via-white to-white overflow-hidden">
          <div className="section-container">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
                <HelpCircle className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">Help Center</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                How Can We <span className="gradient-text">Help You?</span>
              </h1>

              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Find answers, guides, and resources to help you get the most out of LOBAISEO.
              </p>

              {/* Search Bar */}
              <div className="max-w-xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help articles..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-lg"
                />
              </div>
            </motion.div>

            {/* Categories */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {categories.map((category, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center mb-6">
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.articles.map((article, j) => (
                      <li key={j}>
                        <a href="#" className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1">
                          <ArrowRight className="w-3 h-3" />
                          {article}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* FAQs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 text-center"
            >
              <div className="bg-gradient-to-br from-blue-500 to-violet-600 rounded-2xl p-8 text-white max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Still Need Help?</h3>
                <p className="text-blue-100 mb-6">Our support team is here to assist you.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:support@Lobaiseo.com"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    Email Support
                  </a>
                  <a
                    href="tel:+917710616166"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    +91-7710616166
                  </a>
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

export default HelpCenterPage
