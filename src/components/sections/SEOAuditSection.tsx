import { motion } from 'framer-motion'
import { AlertTriangle, BarChart3, CheckCircle, Eye, Lightbulb, Search, TrendingUp } from 'lucide-react'

const SEOAuditSection = () => {
  const auditScores = [
    { category: 'Profile Completion', score: 87, color: 'from-green-500 to-emerald-600' },
    { category: 'SEO Optimization', score: 72, color: 'from-blue-500 to-cyan-600' },
    { category: 'Review Quality', score: 94, color: 'from-violet-500 to-purple-600' },
    { category: 'Post Frequency', score: 65, color: 'from-amber-500 to-orange-600' },
  ]

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, rgb(59 130 246 / 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgb(59 130 246 / 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Audit Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            {/* Main Audit Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/20">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">SEO Audit Report</h4>
                    <p className="text-blue-100 text-sm">Your Business Name • Delhi</p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-white">81</div>
                    <div className="text-blue-100 text-xs">Overall Score</div>
                  </div>
                </div>
              </div>

              {/* Scores */}
              <div className="p-6 space-y-4">
                {auditScores.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-300">{item.category}</span>
                      <span className="text-sm font-bold text-white">{item.score}%</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.score}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 + 0.4 }}
                        className={`h-full bg-gradient-to-r ${item.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Recommendations */}
              <div className="p-6 bg-white/5 border-t border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="w-5 h-5 text-amber-400" />
                  <span className="text-sm font-semibold text-white">AI Recommendations</span>
                </div>

                <div className="space-y-3">
                  {[
                    { icon: CheckCircle, text: 'Add 3 more high-quality photos', priority: 'High' },
                    { icon: AlertTriangle, text: 'Update business hours for holidays', priority: 'Medium' },
                    { icon: TrendingUp, text: 'Post 2x per week for better visibility', priority: 'High' },
                  ].map((rec, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm">
                      <rec.icon className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 flex-1">{rec.text}</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        rec.priority === 'High'
                          ? 'bg-red-500/20 text-red-300'
                          : 'bg-yellow-500/20 text-yellow-300'
                      }`}>
                        {rec.priority}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Metric */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-5 text-white shadow-xl"
            >
              <div className="flex items-center gap-3">
                <Eye className="w-8 h-8" />
                <div>
                  <div className="text-3xl font-bold">+245%</div>
                  <div className="text-green-100 text-sm">Visibility Increase Potential</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 mb-6">
              <Search className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">SEO Audit Engine</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Know Exactly What's
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Hurting Your Rankings
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get a comprehensive SEO audit for every Google Business Profile. AI analyzes 50+ ranking factors and gives you actionable steps to improve.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: BarChart3,
                  title: 'Complete SEO Analysis',
                  desc: 'Profile completeness, keyword optimization, image quality, and more'
                },
                {
                  icon: Lightbulb,
                  title: 'AI-Powered Recommendations',
                  desc: 'Smart suggestions prioritized by impact. Fix what matters most first.'
                },
                {
                  icon: TrendingUp,
                  title: 'Track Improvements Over Time',
                  desc: 'Watch your score improve as you implement changes. Weekly reports.'
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4 glass-effect rounded-xl p-5 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call-out Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 glass-effect rounded-xl p-6 border border-blue-500/30"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    Higher Rankings = More Customers
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Businesses with optimized profiles get 3x more clicks and 2.7x more calls. Our audit shows you exactly how to get there.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SEOAuditSection
