import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Facebook, Instagram, Linkedin, MessageCircle, Twitter, Users, Youtube } from 'lucide-react'
import Header from '../components/sections/Header'
import Footer from '../components/sections/Footer'

const CommunityPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const socialChannels = [
    {
      name: 'YouTube',
      icon: Youtube,
      description: 'Watch tutorials, tips, and success stories.',
      url: 'https://youtube.com/@lobaiseo?si=JztvlcR1xEjrgBdv',
      color: 'bg-red-500',
      followers: '1K+ Subscribers',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      description: 'Daily tips, reels, and behind-the-scenes content.',
      url: 'https://instagram.com/lobaiseo',
      color: 'bg-gradient-to-br from-purple-500 to-pink-500',
      followers: '2K+ Followers',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      description: 'Join our community group for discussions.',
      url: 'https://www.facebook.com/lobaiseo',
      color: 'bg-blue-600',
      followers: '1.5K+ Followers',
    },
    {
      name: 'X (Twitter)',
      icon: Twitter,
      description: 'Quick updates and industry news.',
      url: 'https://x.com/lobaiseo',
      color: 'bg-gray-900',
      followers: '500+ Followers',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      description: 'Professional insights and company updates.',
      url: 'https://linkedin.com/company/lobaiseo',
      color: 'bg-blue-700',
      followers: '1K+ Followers',
    },
  ]

  const benefits = [
    'Connect with fellow business owners',
    'Get exclusive tips and strategies',
    'Early access to new features',
    'Direct support from our team',
    'Share your success stories',
    'Network and grow together',
  ]

  return (
    <div className="overflow-hidden">
      <Header />
      <div className="pt-20">
        <section className="relative py-24 md:py-32 bg-gradient-to-b from-violet-50 via-white to-white overflow-hidden">
          <div className="section-container">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 border border-violet-200 mb-6">
                <Users className="w-4 h-4 text-violet-600" />
                <span className="text-sm font-medium text-violet-600">Community</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                Join the <span className="gradient-text">LOBAISEO Community</span>
              </h1>

              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Connect with thousands of local business owners who are growing together with LOBAISEO.
              </p>
            </motion.div>

            {/* Social Channels */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {socialChannels.map((channel, i) => (
                <motion.a
                  key={i}
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all group"
                >
                  <div className={`w-14 h-14 rounded-xl ${channel.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <channel.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{channel.name}</h3>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                  </div>
                  <p className="text-gray-600 mb-3">{channel.description}</p>
                  <div className="text-sm font-medium text-violet-600">{channel.followers}</div>
                </motion.a>
              ))}
            </div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <MessageCircle className="w-8 h-8" />
                  <h2 className="text-2xl font-bold">Why Join Our Community?</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 max-w-xl mx-auto text-center"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter for weekly tips, updates, and exclusive offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-100 outline-none transition-all"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold rounded-xl hover:opacity-90 transition-opacity">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default CommunityPage
