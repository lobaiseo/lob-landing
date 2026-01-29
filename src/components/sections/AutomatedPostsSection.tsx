import { motion } from 'framer-motion'
import { Calendar, CheckCircle, Clock, Repeat } from 'lucide-react'

const AutomatedPostsSection = () => {
  const features = [
    'Schedule posts for all profiles at once',
    'Smart time optimization based on audience',
    'Content recycling & evergreen posts',
    'Image & video support',
    'Bulk scheduling up to 6 months ahead',
    'Automatic timezone adjustment',
  ]

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
              <Calendar className="w-4 h-4 text-purple-300" />
              <span className="text-sm font-medium text-purple-200">Automated Scheduling</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Set It Once.
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">Post Everywhere.</span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Schedule posts to unlimited Google Business Profiles in seconds. Our smart scheduler finds the best times to post and handles everything automatically.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-200 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-purple-400" />
                  <span className="text-3xl font-bold text-white">90%</span>
                </div>
                <p className="text-sm text-gray-300">Time Saved Weekly</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Repeat className="w-5 h-5 text-violet-400" />
                  <span className="text-3xl font-bold text-white">50+</span>
                </div>
                <p className="text-sm text-gray-300">Profiles at Once</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Interactive Scheduling Dashboard Mockup */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white/5 backdrop-blur-sm">
              <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-violet-900 p-6">
                {/* Header Bar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">Post Scheduler</h4>
                      <p className="text-blue-300 text-xs">January 2026</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="px-3 py-1.5 bg-green-500/20 border border-green-500/30 rounded-full"
                  >
                    <span className="text-green-400 text-xs font-medium">● Live</span>
                  </motion.div>
                </div>

                {/* Mini Calendar Grid */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4">
                  <div className="grid grid-cols-7 gap-1 text-center mb-2">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                      <div key={i} className="text-blue-300 text-xs font-medium py-1">{day}</div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {[...Array(31)].map((_, i) => {
                      const hasPost = [3, 5, 8, 12, 15, 18, 22, 25, 28].includes(i + 1);
                      const isToday = i + 1 === 28;
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.2, delay: i * 0.02 }}
                          className={`aspect-square rounded-lg flex items-center justify-center text-xs font-medium relative
                            ${isToday ? 'bg-gradient-to-br from-blue-500 to-violet-600 text-white' :
                              hasPost ? 'bg-blue-500/20 text-blue-300' : 'text-white/50'}`}
                        >
                          {i + 1}
                          {hasPost && !isToday && (
                            <div className="absolute bottom-0.5 w-1 h-1 bg-green-400 rounded-full"></div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Scheduled Posts List */}
                <div className="space-y-2">
                  <p className="text-white/60 text-xs font-medium mb-2">Upcoming Posts</p>
                  {[
                    { time: '09:00 AM', title: 'New Year Sale Post', locations: 12 },
                    { time: '02:00 PM', title: 'Product Highlight', locations: 8 },
                    { time: '06:00 PM', title: 'Customer Review', locations: 15 },
                  ].map((post, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-white/10 hover:bg-white/10 transition-all cursor-pointer"
                    >
                      <div className="flex-shrink-0 w-12 text-center">
                        <Clock className="w-3 h-3 text-blue-400 mx-auto mb-1" />
                        <span className="text-blue-300 text-xs font-medium">{post.time}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-medium truncate">{post.title}</p>
                        <p className="text-white/50 text-xs">{post.locations} locations</p>
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                        className="w-2 h-2 bg-green-400 rounded-full"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Quick Schedule Buttons */}
                <div className="mt-4 flex gap-2">
                  {['1 Week', '2 Weeks', '1 Month'].map((period, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 py-2 rounded-lg text-xs font-medium transition-all
                        ${i === 0 ? 'bg-gradient-to-r from-blue-500 to-violet-600 text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'}`}
                    >
                      {period}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/20 max-w-xs"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white mb-1">
                    156 Posts Scheduled
                  </div>
                  <div className="text-xs text-gray-300">
                    Across 12 locations
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Background Decoration */}
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AutomatedPostsSection
