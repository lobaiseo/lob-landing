import { motion } from 'framer-motion'
import { BarChart3, CreditCard, Users, Zap } from 'lucide-react'

const AgencySection = () => {
  const features = [
    {
      icon: Users,
      title: 'Multi-Account Management',
      description: 'Manage unlimited client accounts from one master dashboard. Switch between clients in one click.'
    },
    {
      icon: CreditCard,
      title: 'Per-Profile Billing',
      description: 'Charge clients per profile they use. Simple, transparent, and easy to invoice.'
    },
    {
      icon: BarChart3,
      title: 'White-Label Reports',
      description: 'Branded PDF reports with your logo. Impress clients with professional analytics.'
    },
    {
      icon: Zap,
      title: 'Team Collaboration',
      description: 'Add team members with role-based permissions. Junior staff, managers, admins.'
    },
  ]

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(167 139 250 / 0.3) 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
              <Users className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">For Agencies & Teams</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Built for Agencies
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                That Scale
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Manage 100+ client Google Business Profiles without the chaos. Purpose-built tools for agencies and marketing teams.
            </p>

            <div className="space-y-6">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4 glass-effect rounded-xl p-5 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats/Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Stat Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-2xl"
            >
              <div className="text-5xl font-bold mb-3">10x</div>
              <div className="text-purple-100 text-lg">
                Faster Client Management
              </div>
              <p className="text-purple-200 text-sm mt-2">
                What used to take 10 hours now takes 1 hour per week
              </p>
            </motion.div>

            {/* Stat Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">127</div>
                  <div className="text-sm text-gray-300">Avg. Clients per Agency</div>
                </div>
              </div>
              <p className="text-gray-300">
                Agencies on LOBAISEO manage an average of 127 client profiles
              </p>
            </motion.div>

            {/* Stat Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white shadow-2xl"
            >
              <div className="text-5xl font-bold mb-3">₹45k</div>
              <div className="text-green-100 text-lg">
                Average Monthly Revenue Increase
              </div>
              <p className="text-green-200 text-sm mt-2">
                Agencies adding GMB management as a new service line
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-block glass-effect rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-3">
              Agency Partnership Program
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl">
              Get dedicated support, priority features, and special pricing for agencies managing 50+ profiles.
            </p>
            <a href="https://cal.com/lobaiseo-yal3gy/facing-these-problems" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-2xl transition-shadow">
              Learn About Agency Plans
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AgencySection
