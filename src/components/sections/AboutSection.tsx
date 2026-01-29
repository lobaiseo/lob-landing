import { motion } from 'framer-motion'
import { Code, Crown, Heart, Lightbulb, Target, TrendingUp, Users } from 'lucide-react'

const AboutSection = () => {
  const founders = [
    {
      name: 'Raja Gupta',
      role: 'Founder & CEO',
      description: 'Visionary entrepreneur with a passion for helping local businesses thrive in the digital age. Founded LOBAISEO with the mission to democratize local SEO for every business in India.',
      isFounder: true,
      image: '/assets/raja-gupta.png',
    },
    {
      name: 'Pavan Reddy K',
      role: 'Tech Lead & Co-Architect',
      description: 'The technical mastermind behind LOBAISEO. Designed and built the entire AI-powered automation system from ground up. Expert in scalable architectures and AI/ML integrations.',
      isFounder: true,
      image: '/assets/pavan-reddy.jpeg',
    },
    {
      name: 'Harpreet Singh',
      role: 'Sales Executive',
      description: 'Driving business growth and client relationships. Passionate about connecting local businesses with the right solutions to boost their online presence.',
      isFounder: false,
      image: '/assets/harpreet.png',
    },
  ]

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To empower every local business in India with AI-powered tools that automate their Google Business Profile management, helping them grow their visibility and revenue effortlessly.',
    },
    {
      icon: Lightbulb,
      title: 'Vision',
      description: 'To become the #1 GMB automation platform in India, serving 100,000+ businesses and transforming how local businesses approach digital marketing.',
    },
    {
      icon: Heart,
      title: 'Values',
      description: 'Innovation, simplicity, customer success, and relentless focus on delivering real results for local businesses across every industry.',
    },
  ]

  return (
    <section id="about" className="relative py-24 md:py-32 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
            <Users className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">About LOBAISEO</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Building the Future of
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Local Business Growth</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're on a mission to help every local business in India succeed with AI-powered automation.
          </p>
        </motion.div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:bg-white/15 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center mb-6">
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-gray-300 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Leadership Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-display font-bold text-white mb-4">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Leadership</span>
          </h3>
          <p className="text-lg text-gray-300">The visionaries driving LOBAISEO forward</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {founders.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:bg-white/15 transition-all"
            >
              {/* Photo */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 flex items-center justify-center overflow-hidden ring-4 ring-white/20">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <span className="text-4xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                )}
              </div>

              <div className="text-center">
                <h4 className="text-2xl font-bold text-white mb-1">{member.name}</h4>
                <p className="text-blue-400 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-300 leading-relaxed">{member.description}</p>

                {i === 0 && (
                  <div className="mt-4 flex items-center justify-center gap-2 text-sm text-violet-400 font-medium">
                    <Crown className="w-4 h-4" />
                    <span>Visionary behind LOBAISEO</span>
                  </div>
                )}
                {i === 1 && (
                  <div className="mt-4 flex items-center justify-center gap-2 text-sm text-violet-400 font-medium">
                    <Code className="w-4 h-4" />
                    <span>Built the entire LOBAISEO platform</span>
                  </div>
                )}
                {i === 2 && (
                  <div className="mt-4 flex items-center justify-center gap-2 text-sm text-violet-400 font-medium">
                    <TrendingUp className="w-4 h-4" />
                    <span>Driving client success & growth</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
