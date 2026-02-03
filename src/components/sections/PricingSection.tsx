import { motion } from 'framer-motion'
import { Check, Infinity, Star } from 'lucide-react'

const PricingSection = () => {
  const features = [
    'Auto-Post Scheduling',
    'Post with Photos',
    'Review Management & Auto-Reply',
    'Request for Reviews',
    'Profile Optimization',
    'Social Media Access',
    'Performance Analytics',
    'Advanced Analytics',
    'API Access',
    'Priority Support',
  ]

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"></div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
            <Star className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-green-300">Simple, Transparent Pricing</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Pay Only for What
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">You Actually Use</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            No hidden fees. No setup costs. Just a simple per-profile pricing model with a 15-day free trial.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Semi-Annual Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-full"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-white/20 hover:bg-white/15 transition-all duration-300 h-full flex flex-col">
              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  Semi-Annual Plan
                </h3>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold text-white">
                    ₹6,000
                  </span>
                  <span className="text-gray-400 text-lg">/profile</span>
                </div>

                <p className="text-gray-400">per profile for 6 months</p>
              </div>

              {/* Features List */}
              <div className="space-y-4 flex-grow">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-300">₹6,000 per Google Business Profile/6 months</span>
                </div>
                {features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-300">Scale as you grow</span>
                </div>
              </div>

              {/* CTA Button */}
              <a href="https://app.lobaiseo.com/signup" className="block w-full py-4 rounded-xl font-bold text-lg mt-8 transition-all bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white text-center">
                Start Free Trial
              </a>
            </div>
          </motion.div>

          {/* Annual Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative h-full"
          >
            {/* Most Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
                <Infinity className="w-4 h-4" />
                MOST POPULAR
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-purple-500 hover:bg-white/15 transition-all duration-300 h-full flex flex-col">
              {/* Best Value Tag */}
              <div className="absolute top-6 right-6">
                <span className="px-3 py-1 rounded-full border border-violet-400 text-violet-300 text-sm font-medium">
                  Best Value
                </span>
              </div>

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  Annual Plan
                </h3>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold text-white">
                    ₹9,000
                  </span>
                  <span className="text-gray-400 text-lg">/profile</span>
                </div>

                <p className="text-gray-400 mb-2">per profile per year</p>
                <p className="text-green-400 font-semibold">Save ₹3,000 vs 6-month plan</p>
              </div>

              {/* Features List */}
              <div className="space-y-4 flex-grow">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-300">₹9,000 per Google Business Profile/year</span>
                </div>
                {features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-300">Scale as you grow - Best Value</span>
                </div>
              </div>

              {/* CTA Button */}
              <a href="https://app.lobaiseo.com/signup" className="block w-full py-4 rounded-xl font-bold text-lg mt-8 transition-all bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white text-center">
                Get Started Now
              </a>
            </div>
          </motion.div>
        </div>

        {/* Free Trial Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl p-8 md:p-12 shadow-2xl">
            <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              15-Day Free Trial on All Plans
            </h3>
            <p className="text-xl text-blue-100 mb-6">
              No credit card required. 15-day free trial. Cancel anytime.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                'No credit card needed',
                'Full feature access',
                'Cancel anytime',
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center gap-2 text-white">
                  <Check className="w-5 h-5" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Per-Profile Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 max-w-2xl">
            <h4 className="text-lg font-bold text-white mb-2">
              How Per-Profile Pricing Works
            </h4>
            <p className="text-gray-300">
              Connect as many Google Business Profiles as you want. You only pay for the profiles you activate.
              <br />
              <span className="font-semibold text-white">Example:</span> 5 profiles for 12 months = ₹45,000 total (₹9,000 × 5)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection
