import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles, TrendingUp, Users, Zap } from 'lucide-react'
import CountUp from 'react-countup'
import Button from '../ui/Button'

const HeroSection = () => {
  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1 + 0.8,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-violet-900">
      {/* Background Video */}
      {/* Video placeholder: Hero background video (blue-themed motion) */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
          style={{ filter: 'brightness(0.7) saturate(1.2)' }}
        >
          <source src="/assets/hero.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-violet-900/70 to-gray-900/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-electric-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric-violet/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="section-container relative z-10 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-white">AI-Powered GMB Automation Platform</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight tracking-tight"
          >
            Automate Your
            <br />
            <span className="bg-gradient-to-r from-electric-blue via-primary-400 to-electric-violet bg-clip-text text-transparent">
              Google Business
            </span>
            <br />
            Growth on Autopilot
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Manage unlimited Google Business Profiles with AI-powered posts, automated review growth, and Magic QR technology. Scale local visibility without the manual chaos.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a href="https://www.app.lobaiseo.com/signup">
              <Button
                size="xl"
                className="group bg-gradient-to-r from-primary-500 to-violet-600 hover:from-primary-600 hover:to-violet-700 text-white font-semibold px-8 py-4 text-lg shadow-2xl shadow-primary-500/50 animate-glow"
              >
                Start Free 15-Day Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>

            <Button
              size="xl"
              variant="outline"
              className="group border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              See How It Works
            </Button>
          </motion.div>

          {/* Trust Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              { icon: Users, value: 1200, suffix: '+', label: 'Businesses Growing' },
              { icon: TrendingUp, value: 45, suffix: '%', label: 'Avg. Review Increase' },
              { icon: Zap, value: 10000, suffix: '+', label: 'Posts Automated' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={statsVariants}
                initial="hidden"
                animate="visible"
                className="glass-effect rounded-2xl p-6 text-center group hover:bg-white/20 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-electric-blue group-hover:scale-110 transition-transform" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  <CountUp end={stat.value} duration={2.5} delay={0.8} />
                  {stat.suffix}
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
