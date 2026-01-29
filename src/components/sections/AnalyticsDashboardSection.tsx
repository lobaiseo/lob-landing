import { motion } from 'framer-motion'
import { BarChart3, Eye, MessageSquare, MousePointerClick, Phone, TrendingUp } from 'lucide-react'

const AnalyticsDashboardSection = () => {
  const metrics = [
    { icon: Eye, label: 'Profile Views', value: '12,458', change: '+34%', color: 'blue' },
    { icon: Phone, label: 'Phone Calls', value: '487', change: '+28%', color: 'green' },
    { icon: MousePointerClick, label: 'Website Clicks', value: '2,341', change: '+42%', color: 'violet' },
    { icon: MessageSquare, label: 'Messages', value: '156', change: '+67%', color: 'amber' },
  ]

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, rgb(148 163 184 / 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184 / 0.1) 1px, transparent 1px)',
          backgroundSize: '64px 64px'
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 mb-6">
              <BarChart3 className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Advanced Analytics</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Data That Actually
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Drives Decisions
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Stop guessing what's working. Real-time analytics across all your Google Business Profiles in one unified dashboard.
            </p>

            <div className="space-y-6">
              {[
                'Track views, calls, messages, and website clicks',
                'Compare performance across all locations',
                'Identify your best-performing posts and times',
                'Monitor review trends and sentiment analysis',
                'Export custom reports for clients or stakeholders',
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300 text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 glass-effect rounded-xl p-6 border border-blue-500/30"
            >
              <div className="flex items-start gap-4">
                <BarChart3 className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    Real-Time Updates
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Data syncs every 60 seconds. Always know what's happening with your profiles right now.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Dashboard Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Dashboard Card */}
            {/* Image placeholder: Analytics dashboard with charts and metrics */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/20">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-violet-600 p-6">
                <h4 className="text-white font-bold text-xl mb-1">Performance Overview</h4>
                <p className="text-blue-100 text-sm">Last 30 Days • All Locations</p>
              </div>

              {/* Metrics Grid */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {metrics.map((metric, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
                      className={`bg-white/10 rounded-xl p-4 border border-white/20`}
                    >
                      <metric.icon className={`w-5 h-5 mb-2 ${
                        metric.color === 'blue' ? 'text-blue-400' :
                        metric.color === 'green' ? 'text-green-400' :
                        metric.color === 'violet' ? 'text-violet-400' :
                        'text-amber-400'
                      }`} />
                      <div className="text-2xl font-bold text-white mb-1">
                        {metric.value}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-400">{metric.label}</div>
                        <div className="text-xs font-semibold text-green-400">
                          {metric.change}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Chart Placeholder */}
                <div className="bg-white/5 rounded-xl p-6 h-48 flex items-end justify-between gap-2">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.05 + 0.4 }}
                      className="flex-1 bg-gradient-to-t from-blue-500 to-violet-500 rounded-t-lg"
                    />
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-white/5 border-t border-white/10 flex items-center justify-between">
                <span className="text-sm text-gray-400">Updated 2 minutes ago</span>
                <button className="text-sm font-medium text-purple-400 hover:text-purple-300">
                  View Full Report →
                </button>
              </div>
            </div>

            {/* Floating Comparison Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-sm rounded-xl p-5 shadow-2xl border border-white/20 max-w-xs"
            >
              <div className="flex items-start gap-3 mb-3">
                <TrendingUp className="w-6 h-6 text-violet-400" />
                <div>
                  <div className="text-sm font-semibold text-white mb-1">
                    Top Performing Location
                  </div>
                  <div className="text-xs text-gray-400">Delhi Central - +156% growth</div>
                </div>
              </div>
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full w-[85%] bg-gradient-to-r from-violet-500 to-purple-600"></div>
              </div>
            </motion.div>

            {/* Background Glow */}
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AnalyticsDashboardSection
