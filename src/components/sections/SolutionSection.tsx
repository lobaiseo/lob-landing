import { motion } from 'framer-motion'
import { Bot, LayoutDashboard, Rocket, Sparkles, Zap } from 'lucide-react'

const SolutionSection = () => {
  const solutions = [
    {
      icon: LayoutDashboard,
      title: 'One Unified Dashboard',
      description: 'Manage unlimited Google Business Profiles from a single, beautiful interface. No more multiple logins. No more chaos.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Zap,
      title: 'Full Automation',
      description: 'Schedule posts once, publish everywhere. Set up review campaigns and forget. Automated responses that feel human.',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: Bot,
      title: 'AI That Actually Works',
      description: 'Generate 3 reply variations for every review. Sentiment analysis. SEO-optimized posts. Smart recommendations.',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Rocket,
      title: 'Built for Scale',
      description: 'Whether you have 1 location or 100, LOBAISEO grows with you. Agency-ready. Multi-user. Permission controls.',
      gradient: 'from-amber-500 to-orange-500',
    },
  ]

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-violet-900/30 to-slate-900/50"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-violet-500 to-purple-500"></div>

      {/* Floating Orbs */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

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
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span className="text-sm font-medium text-purple-200">
              Introducing LOBAISEO
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            The GMB Platform That
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">Actually Scales</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stop fighting with manual processes. Start growing with automation, AI, and the smartest review growth system ever built.
          </p>
        </motion.div>

        {/* YouTube Videos Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-purple-500/30 relative">
            {/* Animated Purple Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900">
              {/* Animated Orbs */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-10 w-40 h-40 bg-purple-500/40 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 right-10 w-56 h-56 bg-violet-500/40 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  x: [0, 20, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500/30 rounded-full blur-3xl"
              />
              {/* Sparkle Grid Pattern */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
                backgroundSize: '32px 32px'
              }}></div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8"
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4"
                >
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium text-white">Watch How LOBAISEO Works</span>
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                  Learn LOBAISEO in Minutes
                </h3>
              </motion.div>

              {/* YouTube Videos Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Video 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="group"
                >
                  <div className="rounded-xl overflow-hidden shadow-xl border-2 border-white/20 hover:border-purple-400/50 transition-all duration-300 group-hover:shadow-purple-500/30 group-hover:shadow-2xl">
                    <div className="aspect-video">
                      <iframe
                        src="https://www.youtube.com/embed/kALBGqhgR08"
                        title="Lobaiseo Login Kaise Karein? | Step-by-Step Guide in Hindi"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                  <p className="text-white/80 text-sm mt-3 text-center font-medium">
                    Lobaiseo Login - Step-by-Step Guide in Hindi
                  </p>
                </motion.div>

                {/* Video 2 */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="group"
                >
                  <div className="rounded-xl overflow-hidden shadow-xl border-2 border-white/20 hover:border-purple-400/50 transition-all duration-300 group-hover:shadow-purple-500/30 group-hover:shadow-2xl">
                    <div className="aspect-video">
                      <iframe
                        src="https://www.youtube.com/embed/NkCryCqymbA"
                        title="Local SEO Keyword Research Made Easy"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                  <p className="text-white/80 text-sm mt-3 text-center font-medium">
                    Local SEO Keyword Research Made Easy
                  </p>
                </motion.div>
              </div>

              {/* Subscribe CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center mt-8"
              >
                <a
                  href="https://youtube.com/@lobaiseo?si=JztvlcR1xEjrgBdv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-red-500/30 transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Subscribe to Our Channel
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Solution Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-purple-400/30 transition-all duration-300 h-full">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>

                {/* Icon */}
                <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <solution.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-display font-bold text-white mb-3">
                  {solution.title}
                </h3>

                <p className="relative text-gray-300 leading-relaxed">
                  {solution.description}
                </p>

                {/* Hover Border Gradient */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="inline-block relative">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white">
              Everything You Need. <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">Nothing You Don't.</span>
            </h3>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-violet-500 to-purple-500 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SolutionSection
