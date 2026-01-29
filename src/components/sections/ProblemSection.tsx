import { motion } from 'framer-motion'
import { AlertCircle, Calendar, Clock, MapPin, MessageSquare, TrendingDown } from 'lucide-react'

const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      title: 'Hours Wasted Every Week',
      description: 'Manually posting to each Google Business Profile. Copying. Pasting. Scheduling. Repeating the same content across 5, 10, or 50 locations.',
      stat: '12+ hours/week',
    },
    {
      icon: MessageSquare,
      title: 'Missed Reviews = Lost Revenue',
      description: "Customers leave reviews, but you're too busy to respond. Negative reviews sit there, damaging your reputation. Positive ones go unacknowledged.",
      stat: '67% unanswered',
    },
    {
      icon: MapPin,
      title: 'Multi-Location Nightmare',
      description: 'Managing multiple locations means logging in and out of different accounts. No consistency. No oversight. No scalability.',
      stat: '5+ logins daily',
    },
    {
      icon: TrendingDown,
      title: 'Invisible to Local Customers',
      description: 'Your competitors show up first in local search. You have no idea why. No analytics. No insights. Just hoping it gets better.',
      stat: '43% visibility loss',
    },
  ]

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-gray-900 via-red-950 to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
            <AlertCircle className="w-4 h-4 text-red-400" />
            <span className="text-sm font-medium text-red-300">The Reality for Most Businesses</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Managing Google Business
            <br />
            Profiles Is <span className="text-red-400">Broken</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            You started with good intentions. Post regularly. Reply to reviews. Optimize your profiles. But reality hit hard.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-red-500/30 transition-all duration-300">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <problem.icon className="w-7 h-7 text-red-400" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-display font-bold text-white mb-3">
                  {problem.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-4">
                  {problem.description}
                </p>

                {/* Stat */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/20">
                  <TrendingDown className="w-4 h-4 text-red-400" />
                  <span className="text-sm font-semibold text-red-300">{problem.stat}</span>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/0 to-orange-500/0 group-hover:from-red-500/5 group-hover:to-orange-500/5 transition-all duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          {/* Cal.com Booking CTA */}
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-red-900/30 to-gray-900/30 backdrop-blur-sm">
            <div className="py-16 px-8 flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center mb-6">
                <Calendar className="w-10 h-10 text-red-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                Facing These Problems?
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-xl">
                Let's discuss how LOBAISEO can solve your GMB management challenges. Book a free consultation call with our team.
              </p>
              <a
                href="https://cal.com/lobaiseo-yal3gy/facing-these-problems"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold text-lg rounded-xl shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="w-5 h-5" />
                Book a Free Consultation
              </a>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-2xl md:text-3xl font-display font-bold text-white mt-12"
          >
            There Has to Be a <span className="gradient-text-electric">Better Way</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemSection
