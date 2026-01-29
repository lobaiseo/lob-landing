import { motion } from 'framer-motion'
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Send, Twitter } from 'lucide-react'

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'support@Lobaiseo.com',
      href: 'mailto:support@Lobaiseo.com',
      description: 'We usually respond within 24 hours',
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+91-7710616166',
      href: 'tel:+917710616166',
      description: 'Mon-Sat, 10AM - 7PM IST',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'Jalandhar, Punjab, India',
      href: '#',
      description: 'Our headquarters',
    },
  ]

  const socialLinks = [
    { icon: Twitter, href: 'https://x.com/lobaiseo', label: 'X (Twitter)', color: 'hover:bg-gray-800' },
    { icon: Facebook, href: 'https://www.facebook.com/lobaiseo', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Instagram, href: 'https://instagram.com/lobaiseo', label: 'Instagram', color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500' },
    { icon: Linkedin, href: 'https://linkedin.com/company/lobaiseo', label: 'LinkedIn', color: 'hover:bg-blue-700' },
  ]

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
            <MessageCircle className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">Get in Touch</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            We'd Love to
            <br />
            <span className="gradient-text">Hear From You</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about LOBAISEO? Want to learn more about our plans? We're here to help!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-600">
                    <option value="">Select a topic</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-500 to-violet-600 text-white font-bold rounded-xl hover:opacity-90 transition-opacity"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, i) => (
              <motion.a
                key={i}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{info.title}</h4>
                  <p className="text-blue-600 font-semibold mb-1">{info.value}</p>
                  <p className="text-sm text-gray-500">{info.description}</p>
                </div>
              </motion.a>
            ))}

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-gradient-to-br from-blue-500 to-violet-600 rounded-xl p-6 text-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6" />
                <h4 className="text-lg font-bold">Business Hours</h4>
              </div>
              <div className="space-y-2 text-blue-100">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span className="font-semibold text-white">10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold text-white">Closed</span>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center transition-all duration-300 group ${social.color}`}
                  >
                    <social.icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
