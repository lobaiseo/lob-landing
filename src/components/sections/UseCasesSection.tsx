import { motion } from 'framer-motion'
import { Building2, Heart, Home, Scale, Utensils } from 'lucide-react'

const UseCasesSection = () => {
  const useCases = [
    {
      icon: Utensils,
      title: 'Restaurants & Cafes',
      description: 'Post daily specials, respond to reviews instantly, and grow your foodie following across multiple locations.',
      stats: '+127% more footfall',
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50'
    },
    {
      icon: Heart,
      title: 'Healthcare & Clinics',
      description: 'Build trust with automated review responses, share health tips, and keep patients informed about services.',
      stats: '+89% review growth',
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      icon: Home,
      title: 'Real Estate',
      description: 'Showcase properties, collect testimonials from happy clients, and dominate local search for your area.',
      stats: '+156% lead generation',
      gradient: 'from-violet-500 to-purple-500',
      bgColor: 'from-violet-50 to-purple-50'
    },
    {
      icon: Building2,
      title: 'Marketing Agencies',
      description: 'Manage 100+ client profiles from one dashboard. White-label reports. Per-profile billing for easy client invoicing.',
      stats: '10x faster management',
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      icon: Scale,
      title: 'Multi-Location Brands',
      description: 'Maintain brand consistency across 10, 50, or 500 locations. Centralized control with local customization.',
      stats: '+98% consistency',
      gradient: 'from-indigo-500 to-blue-500',
      bgColor: 'from-indigo-50 to-blue-50'
    },
  ]

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
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
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Built for Every
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">Business Type</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you're a single location or a nationwide chain, LOBAISEO scales with your needs.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {useCases.map((useCase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-purple-400/30 transition-all duration-300 h-full">
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>

                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="relative text-2xl font-display font-bold text-white mb-3">
                  {useCase.title}
                </h3>

                <p className="relative text-gray-300 leading-relaxed mb-4">
                  {useCase.description}
                </p>

                {/* Stats */}
                <div className={`relative inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${useCase.gradient} text-white text-sm font-bold shadow-lg`}>
                  {useCase.stats}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-300 mb-6">
            Don't see your industry? LOBAISEO works for <span className="font-bold text-white">any local business</span> with a Google Business Profile.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default UseCasesSection
