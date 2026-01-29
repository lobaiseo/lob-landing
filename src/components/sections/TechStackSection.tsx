import { motion } from 'framer-motion'
import { Database, Lock, Server, Shield, Zap } from 'lucide-react'

const TechStackSection = () => {
  // SVG icons for each technology
  const techIcons = {
    React: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#61DAFB">
        <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/>
        <ellipse cx="12" cy="12" fill="none" stroke="#61DAFB" strokeWidth="1.5" rx="10" ry="4"/>
        <ellipse cx="12" cy="12" fill="none" stroke="#61DAFB" strokeWidth="1.5" rx="10" ry="4" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" fill="none" stroke="#61DAFB" strokeWidth="1.5" rx="10" ry="4" transform="rotate(120 12 12)"/>
      </svg>
    ),
    Supabase: (
      <svg viewBox="0 0 109 113" className="w-8 h-8">
        <path fill="#3ECF8E" d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347Z"/>
        <path fill="#3ECF8E" d="M45.317 2.071c2.86-3.601 8.657-1.628 8.726 2.97l.442 67.251H9.83c-8.19 0-12.759-9.46-7.665-15.875L45.317 2.072Z"/>
      </svg>
    ),
    Google: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
    ),
    Razorpay: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#3395FF" d="M4.24 0h9.436l-1.865 6.66h-5.22L4.24 0ZM0 16.453l2.136-7.602 6.036 3.801L0 16.453ZM8.17 12.65l7.832 4.907-4.907 6.441-2.925-11.348ZM24 0l-9.437 24H9.128L18.564 0H24Z"/>
      </svg>
    ),
    Firebase: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#FFA000" d="m3.89 15.673 1.55-14.2a.5.5 0 0 1 .947-.157l1.635 3.074L3.89 15.673Z"/>
        <path fill="#F57C00" d="m8.022 4.39 1.716 3.227-5.848 8.056 4.132-11.283Z"/>
        <path fill="#FFCA28" d="m12.876 8.228 2.318-2.163a.5.5 0 0 1 .82.265l3.936 15.17L12 24 3.89 15.673l8.986-7.445Z"/>
        <path fill="#FFA000" d="M8.022 4.39 3.89 15.673 12 24l-3.978-19.61Z"/>
      </svg>
    ),
    OpenAI: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#10A37F">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
      </svg>
    ),
  }

  const technologies = [
    { name: 'React', icon: techIcons.React },
    { name: 'Supabase', icon: techIcons.Supabase },
    { name: 'Google APIs', icon: techIcons.Google },
    { name: 'Razorpay', icon: techIcons.Razorpay },
    { name: 'Firebase', icon: techIcons.Firebase },
    { name: 'OpenAI', icon: techIcons.OpenAI },
  ]

  const securityFeatures = [
    {
      icon: Lock,
      title: 'Bank-Level Encryption',
      description: 'All data encrypted at rest and in transit using AES-256'
    },
    {
      icon: Shield,
      title: 'Google OAuth 2.0',
      description: 'Secure authentication. We never store your Google password'
    },
    {
      icon: Database,
      title: 'SOC 2 Compliant',
      description: 'Enterprise-grade infrastructure and security practices'
    },
    {
      icon: Server,
      title: '99.9% Uptime SLA',
      description: 'Redundant servers across multiple regions'
    },
  ]

  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-4">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">Enterprise-Grade Technology</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Built on the <span className="gradient-text">Best Tech Stack</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fast, secure, and scalable infrastructure trusted by leading businesses worldwide.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left: Tech Badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
              Powered By Industry Leaders
            </h3>

            <div className="grid grid-cols-3 gap-3 mb-6">
              {technologies.map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md hover:border-blue-200 transition-all duration-300 text-center group"
                >
                  <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  <div className="text-sm font-semibold text-gray-700">{tech.name}</div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-5 text-white">
              <div className="flex items-center gap-3">
                <Zap className="w-8 h-8" />
                <div>
                  <h4 className="font-bold">Lightning Fast Performance</h4>
                  <p className="text-blue-100 text-sm">Dashboard loads in under 1 second from anywhere in India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Security Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
              Security You Can Trust
            </h3>

            <div className="space-y-3">
              {securityFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md hover:border-blue-200 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-4 text-white"
            >
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8" />
                <div>
                  <h4 className="font-bold">GDPR & Data Privacy Compliant</h4>
                  <p className="text-green-100 text-sm">Your data is yours. We never sell or share your information.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TechStackSection
