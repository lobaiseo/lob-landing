import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Code, Crown, Heart, Lightbulb, MapPin, Rocket, Target, TrendingUp, Users } from 'lucide-react'
import Header from '../components/sections/Header'
import Footer from '../components/sections/Footer'

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
    <>
      <Header />
      <div className="overflow-hidden">
      <div className="pt-20">
        <section className="relative py-24 md:py-32 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
          <div className="section-container">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
                <Users className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">About LOBAISEO</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                Building the Future of
                <br />
                <span className="gradient-text">Local Business Growth</span>
              </h1>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're on a mission to help every local business in India succeed with AI-powered automation.
              </p>
            </motion.div>

            {/* Our Story */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto mb-20"
            >
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-gray-900">Our Story</h2>
                </div>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    <strong className="text-gray-900">LOBAISEO</strong> was born in <strong className="text-blue-600">August 2025</strong> in the heart of <strong className="text-blue-600">Jalandhar, Punjab</strong>, with a simple yet powerful vision: to make Google Business Profile management effortless for every local business owner.
                  </p>
                  <p>
                    We saw local businesses struggling with manual posting, review management, and SEO optimization. They were spending hours on tasks that could be automated, taking time away from what they do best—serving their customers.
                  </p>
                  <p>
                    That's why we built LOBAISEO—an AI-powered platform that automates everything from content creation to review responses, from SEO audits to analytics. Our technology handles the complexity so business owners can focus on growth.
                  </p>
                  <p>
                    Today, we're proud to serve businesses across India, helping them increase their local visibility, collect more reviews, and grow their customer base—all on autopilot.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="w-5 h-5 text-blue-500" />
                    <span>Founded August 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <span>Jalandhar, Punjab, India</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mission, Vision, Values */}
            <div className="grid md:grid-cols-3 gap-6 mb-20">
              {values.map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Leadership Team */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                Meet the <span className="gradient-text">Leadership</span>
              </h2>
              <p className="text-lg text-gray-600">The visionaries driving LOBAISEO forward</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {founders.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-xl border-2 border-blue-200 hover:border-blue-400 transition-all"
                >
                  {/* Photo */}
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 flex items-center justify-center overflow-hidden">
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
                    <h4 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h4>
                    <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-600 leading-relaxed">{member.description}</p>

                    {i === 0 && (
                      <div className="mt-4 flex items-center justify-center gap-2 text-sm text-violet-600 font-medium">
                        <Crown className="w-4 h-4" />
                        <span>Visionary behind LOBAISEO</span>
                      </div>
                    )}
                    {i === 1 && (
                      <div className="mt-4 flex items-center justify-center gap-2 text-sm text-violet-600 font-medium">
                        <Code className="w-4 h-4" />
                        <span>Built the entire LOBAISEO platform</span>
                      </div>
                    )}
                    {i === 2 && (
                      <div className="mt-4 flex items-center justify-center gap-2 text-sm text-violet-600 font-medium">
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
      </div>
      <Footer />
      </div>
    </>
  )
}

export default AboutPage
