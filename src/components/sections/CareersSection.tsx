import { motion } from 'framer-motion'
import { Briefcase, Heart, Mail, Rocket, Sparkles, Users } from 'lucide-react'

const CareersSection = () => {
  const perks = [
    {
      icon: Rocket,
      title: 'Fast-Paced Growth',
      description: 'Join a startup where your work directly impacts thousands of businesses across India.',
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible hours, remote-friendly culture, and a team that respects your time.',
    },
    {
      icon: Users,
      title: 'Amazing Team',
      description: 'Collaborate with passionate individuals who are building something meaningful.',
    },
    {
      icon: Sparkles,
      title: 'Learning & Development',
      description: 'Continuous learning opportunities and exposure to cutting-edge AI technologies.',
    },
  ]

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 mb-6">
            <Briefcase className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-600">Careers at LOBAISEO</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Join Our
            <br />
            <span className="gradient-text">Growing Team</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us empower local businesses across India with AI-powered automation.
          </p>
        </motion.div>

        {/* Perks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {perks.map((perk, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center mb-4">
                <perk.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{perk.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{perk.description}</p>
            </motion.div>
          ))}
        </div>

        {/* No Openings Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 md:p-12 shadow-xl border-2 border-blue-200 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-100 to-violet-100 flex items-center justify-center">
              <Briefcase className="w-10 h-10 text-blue-500" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              No Open Positions Right Now
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              We don't have any open positions at the moment, but we're always looking for talented individuals who are passionate about technology and helping local businesses grow.
            </p>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <p className="text-gray-700 mb-4">
                Want to be notified when we have openings? Drop us your resume!
              </p>

              <a
                href="mailto:careers@lobaiseo.com?subject=Career Inquiry at LOBAISEO"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-violet-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
              >
                <Mail className="w-5 h-5" />
                Send Your Resume
              </a>

              <p className="text-sm text-gray-500 mt-4">
                careers@lobaiseo.com
              </p>
            </div>
          </div>
        </motion.div>

        {/* Culture Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto mt-12 text-center"
        >
          <p className="text-gray-500 italic">
            "We believe in building a team that's not just skilled, but also genuinely excited about making a difference for local businesses across India."
          </p>
          <p className="text-gray-400 mt-2">— Team LOBAISEO</p>
        </motion.div>
      </div>
    </section>
  )
}

export default CareersSection
