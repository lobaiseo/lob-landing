import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Link as LinkIcon, Rocket, UserPlus } from 'lucide-react'

const HowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      icon: UserPlus,
      title: 'Sign Up in 60 Seconds',
      description: 'Create your account. No credit card required for the 15-day trial.',
      highlight: '15-day free trial included'
    },
    {
      number: '02',
      icon: LinkIcon,
      title: 'Connect Your Profiles',
      description: 'One-click Google authentication. Link unlimited Google Business Profiles instantly.',
      highlight: 'Takes less than 2 minutes'
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Enable Automation',
      description: 'Set up automated posts, review campaigns, and Magic QR codes. Customize everything.',
      highlight: 'Pre-built templates included'
    },
    {
      number: '04',
      icon: CheckCircle,
      title: 'Watch Your Business Grow',
      description: 'Sit back while LOBAISEO handles posting, reviews, and optimization automatically.',
      highlight: 'Results in 7-14 days'
    }
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
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Get Started in
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">Under 5 Minutes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            No complicated setup. No technical skills required. Just connect and automate.
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-violet-500 to-purple-500 transform -translate-x-1/2"></div>

          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  i % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
                }`}
              >
                {/* Content */}
                <div className={`${i % 2 === 0 ? 'lg:text-right' : 'lg:col-start-2'} relative`}>
                  <div className="inline-block lg:max-w-md">
                    <div className="text-6xl font-display font-bold text-white mb-4">
                      {step.number}
                    </div>

                    <div className={`flex items-center gap-4 mb-4 ${i % 2 === 0 ? 'lg:justify-end' : ''}`}>
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shadow-lg">
                        <step.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-white">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm font-medium text-green-300">{step.highlight}</span>
                    </div>
                  </div>
                </div>

                {/* Visual/Icon - Center Circle */}
                <div className={`hidden lg:flex justify-center ${i % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1'}`}>
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm border-4 border-purple-500 flex items-center justify-center shadow-xl z-10 relative">
                      <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">{i + 1}</span>
                    </div>
                    {i < steps.length - 1 && (
                      <ArrowRight className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-6 h-6 text-violet-400" />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="inline-block bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Automate Your GMB?
            </h3>
            <p className="text-blue-100 mb-6 max-w-md">
              Join 1,200+ businesses already growing with LOBAISEO
            </p>
            <div className="flex justify-center">
              <a href="https://app.lobaiseo.com/signup" className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:shadow-xl transition-shadow inline-flex items-center gap-2 group">
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorksSection
