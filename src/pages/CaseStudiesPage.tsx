import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Award, BarChart3, MapPin, Star, TrendingUp } from 'lucide-react'
import Header from '../components/sections/Header'
import Footer from '../components/sections/Footer'

const CaseStudiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const caseStudies = [
    {
      business: 'Royal Sweets & Restaurant',
      location: 'Jalandhar, Punjab',
      industry: 'Restaurant',
      results: {
        views: '+340%',
        calls: '+180%',
        reviews: '47 new reviews',
      },
      quote: 'LOBAISEO transformed our online presence. We went from invisible to the #1 result in our area!',
      image: '/assets/case-1.jpg',
    },
    {
      business: 'Sharma Dental Clinic',
      location: 'Amritsar, Punjab',
      industry: 'Healthcare',
      results: {
        views: '+275%',
        calls: '+150%',
        reviews: '62 new reviews',
      },
      quote: 'The AI review responses saved us hours every week. Our patient bookings have doubled.',
      image: '/assets/case-2.jpg',
    },
    {
      business: 'Punjab Auto Works',
      location: 'Ludhiana, Punjab',
      industry: 'Automotive',
      results: {
        views: '+420%',
        calls: '+200%',
        reviews: '38 new reviews',
      },
      quote: 'From 3 calls a day to 15+. LOBAISEO is the best investment we made for our business.',
      image: '/assets/case-3.jpg',
    },
    {
      business: 'Gupta Electronics',
      location: 'Chandigarh',
      industry: 'Retail',
      results: {
        views: '+290%',
        calls: '+165%',
        reviews: '55 new reviews',
      },
      quote: 'The Magic QR codes are genius! Customers love leaving reviews now.',
      image: '/assets/case-4.jpg',
    },
  ]

  const stats = [
    { value: '500+', label: 'Businesses Helped' },
    { value: '2.5M+', label: 'Views Generated' },
    { value: '25,000+', label: 'Reviews Collected' },
    { value: '4.8/5', label: 'Client Satisfaction' },
  ]

  return (
    <div className="overflow-hidden">
      <Header />
      <div className="pt-20">
        <section className="relative py-24 md:py-32 bg-gradient-to-b from-green-50 via-white to-white overflow-hidden">
          <div className="section-container">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 mb-6">
                <Award className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-600">Case Studies</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                Real Results from <span className="gradient-text">Real Businesses</span>
              </h1>

              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See how local businesses across India are growing with LOBAISEO.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            >
              {stats.map((stat, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Case Studies */}
            <div className="space-y-8">
              {caseStudies.map((study, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="h-64 md:h-auto bg-gradient-to-br from-blue-400 to-violet-500 flex items-center justify-center">
                      <div className="text-white text-center p-8">
                        <div className="text-4xl font-bold mb-2">{study.business}</div>
                        <div className="flex items-center justify-center gap-2 text-white/80">
                          <MapPin className="w-4 h-4" />
                          {study.location}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
                        {study.industry}
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center p-3 bg-green-50 rounded-xl">
                          <TrendingUp className="w-5 h-5 text-green-600 mx-auto mb-1" />
                          <div className="text-xl font-bold text-green-600">{study.results.views}</div>
                          <div className="text-xs text-gray-600">Profile Views</div>
                        </div>
                        <div className="text-center p-3 bg-blue-50 rounded-xl">
                          <BarChart3 className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                          <div className="text-xl font-bold text-blue-600">{study.results.calls}</div>
                          <div className="text-xs text-gray-600">Phone Calls</div>
                        </div>
                        <div className="text-center p-3 bg-yellow-50 rounded-xl">
                          <Star className="w-5 h-5 text-yellow-600 mx-auto mb-1" />
                          <div className="text-xl font-bold text-yellow-600">{study.results.reviews}</div>
                          <div className="text-xs text-gray-600">In 3 Months</div>
                        </div>
                      </div>

                      <blockquote className="text-gray-600 italic border-l-4 border-blue-500 pl-4">
                        "{study.quote}"
                      </blockquote>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16 text-center"
            >
              <div className="bg-gradient-to-br from-blue-500 to-violet-600 rounded-2xl p-8 text-white max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Ready to Be Our Next Success Story?</h3>
                <p className="text-blue-100 mb-6">
                  Join 500+ businesses that are growing with LOBAISEO.
                </p>
                <a
                  href="/#pricing"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors"
                >
                  Start Your Free Trial
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default CaseStudiesPage
