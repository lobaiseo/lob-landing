import { motion } from 'framer-motion'
import { Mail, MessageCircle, Send, TrendingUp, Users, Zap } from 'lucide-react'

const ReviewCampaignSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"></div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <Send className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-green-300">Automated Campaigns</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Turn Customers Into
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">Review Machines</span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Automated review request campaigns via Email, SMS, and WhatsApp. Set it up once and watch your reviews grow automatically.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: 'Email Campaigns',
                  desc: 'Beautifully designed email templates that actually get opened and clicked'
                },
                {
                  icon: MessageCircle,
                  title: 'SMS & WhatsApp',
                  desc: 'Reach customers where they already are with personalized messages'
                },
                {
                  icon: Zap,
                  title: 'Smart Timing',
                  desc: 'AI determines the best time to ask based on customer behavior patterns'
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 grid grid-cols-2 gap-4"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <TrendingUp className="w-6 h-6 text-green-400 mb-2" />
                <div className="text-3xl font-bold text-white">3.7x</div>
                <p className="text-sm text-gray-300">More Reviews Generated</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <Users className="w-6 h-6 text-blue-400 mb-2" />
                <div className="text-3xl font-bold text-white">67%</div>
                <p className="text-sm text-gray-300">Response Rate</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Campaign Flow Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Image placeholder: Campaign dashboard showing email/SMS/WhatsApp templates */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
              <div className="space-y-4">
                {/* Email Preview */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white/10 rounded-xl p-4 shadow-md border border-white/20"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-white">Email Campaign</div>
                      <div className="text-xs text-gray-400">Sent to 156 customers</div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-medium">
                      Active
                    </div>
                  </div>
                  <div className="h-20 bg-gradient-to-br from-blue-500/10 to-white/5 rounded-lg"></div>
                </motion.div>

                {/* SMS Preview */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white/10 rounded-xl p-4 shadow-md border border-white/20"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-white">SMS Campaign</div>
                      <div className="text-xs text-gray-400">Scheduled for tomorrow</div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium">
                      Scheduled
                    </div>
                  </div>
                  <div className="h-16 bg-gradient-to-br from-green-500/10 to-white/5 rounded-lg"></div>
                </motion.div>

                {/* WhatsApp Preview */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white/10 rounded-xl p-4 shadow-md border border-white/20"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-white">WhatsApp Campaign</div>
                      <div className="text-xs text-gray-400">Draft</div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-white/10 text-gray-300 text-xs font-medium">
                      Draft
                    </div>
                  </div>
                  <div className="h-16 bg-gradient-to-br from-emerald-500/10 to-white/5 rounded-lg"></div>
                </motion.div>
              </div>

              {/* Stats Bar */}
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white">324</div>
                    <div className="text-xs text-gray-400">Sent</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">218</div>
                    <div className="text-xs text-gray-400">Opened</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-400">87</div>
                    <div className="text-xs text-gray-400">Reviewed</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Success Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">+42 Reviews</div>
                  <div className="text-xs text-gray-400">This week</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ReviewCampaignSection
