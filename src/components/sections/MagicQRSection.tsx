import { motion } from 'framer-motion'
import { QrCode, Smartphone, Star, Zap } from 'lucide-react'

const MagicQRSection = () => {
  const flowSteps = [
    {
      step: '1',
      icon: QrCode,
      title: 'Customer Scans QR',
      description: 'Place Magic QR codes at checkout, on receipts, tables, or anywhere customers interact with your business'
    },
    {
      step: '2',
      icon: Smartphone,
      title: 'AI Review Suggestions',
      description: 'Customers see helpful review suggestions and prompts to guide them in writing a great review - no more blank page anxiety'
    },
    {
      step: '3',
      icon: Star,
      title: 'Redirect to Google',
      description: 'With review ideas ready, customers are redirected to your Google Business page to post their review instantly'
    }
  ]

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-electric-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric-violet/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30 mb-6">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-300">Patent-Pending Innovation</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Magic QR Code System
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
              The Review Growth Hack
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The easiest way to collect Google reviews. Customers scan, get AI-powered review suggestions, and post directly to Google - no friction, no apps, just better reviews.
          </p>
        </motion.div>

        {/* Flow Visualization */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Lines (Desktop) */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-electric-blue to-transparent"></div>

            {flowSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative"
              >
                <div className="glass-effect rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 relative z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-electric-blue to-electric-violet flex items-center justify-center text-white font-bold text-xl shadow-xl">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto mb-6 mt-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center border border-white/20">
                    <step.icon className="w-10 h-10 text-electric-blue" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visual Demo Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Left: QR Code Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Image placeholder: Large Magic QR code with branding */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="aspect-square bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <QrCode className="w-64 h-64 text-white/30" />

                {/* Scan Animation */}
                <motion.div
                  animate={{
                    y: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"
                  style={{ height: '20%' }}
                />
              </div>

              <div className="mt-6 text-center">
                <h4 className="text-xl font-bold text-white mb-2">Your Brand Magic QR</h4>
                <p className="text-gray-300">Scan to leave a review</p>
              </div>
            </div>

            {/* Floating Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 w-48"
            >
              {/* Image placeholder: Phone mockup showing rating screen */}
              <div className="bg-slate-900 rounded-3xl p-2 shadow-2xl border border-white/20">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl aspect-[9/19] flex flex-col items-center justify-center p-4">
                  <Smartphone className="w-12 h-12 text-purple-400 mb-2" />
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-300 text-center">Rate your experience</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">
              Why Magic QR Is Different
            </h3>

            <div className="space-y-6">
              {[
                {
                  title: 'AI-Powered Suggestions',
                  desc: 'Customers never face a blank page. Our AI provides helpful prompts and suggestions to write better, more detailed reviews.',
                  stat: 'Better quality reviews'
                },
                {
                  title: 'Zero Friction Experience',
                  desc: 'One scan, helpful suggestions, then straight to Google. No app downloads. No complicated forms.',
                  stat: '4.2x more reviews'
                },
                {
                  title: 'Boost Local SEO',
                  desc: 'More Google reviews = higher local search rankings. Watch your business climb to the top of local results.',
                  stat: 'Higher visibility'
                },
                {
                  title: 'Fully Customizable',
                  desc: 'Your branding, your colors, your message. Generate unlimited QR codes for different locations.',
                  stat: 'Unlimited QR codes'
                },
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass-effect rounded-xl p-6 hover:bg-white/15 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-bold text-white group-hover:text-electric-blue transition-colors">
                      {benefit.title}
                    </h4>
                    <span className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-semibold whitespace-nowrap ml-2">
                      {benefit.stat}
                    </span>
                  </div>
                  <p className="text-gray-300">
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-gradient-to-r from-yellow-400/10 to-pink-400/10 border border-yellow-400/20 rounded-2xl p-8">
            <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h4 className="text-2xl font-bold text-white mb-2">
              Available Exclusively on LOBAISEO
            </h4>
            <p className="text-gray-300">
              No other GMB platform has this technology
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MagicQRSection
