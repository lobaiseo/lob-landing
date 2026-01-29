import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    company: [
      { label: 'About Us', href: '/about', isRoute: true },
      { label: 'Blog', href: '/blog', isRoute: true },
      { label: 'Careers', href: '/careers', isRoute: true },
      { label: 'Contact', href: '/contact', isRoute: true },
    ],
    resources: [
      { label: 'Help Center', href: '/help', isRoute: true },
      { label: 'Video Tutorials', href: '/tutorials', isRoute: true },
      { label: 'Case Studies', href: '/case-studies', isRoute: true },
      { label: 'Community', href: '/community', isRoute: true },
      { label: 'Status', href: '/status', isRoute: true },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy', isRoute: true },
      { label: 'Terms of Service', href: '/terms', isRoute: true },
      { label: 'Cookie Policy', href: '/cookies', isRoute: true },
      { label: 'Refund Policy', href: '/refunds', isRoute: true },
      { label: 'GDPR Compliance', href: '/gdpr', isRoute: true },
      { label: 'Data Deletion Request', href: '/data-deletion', isRoute: true },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: 'https://x.com/lobaiseo', label: 'X (Twitter)' },
    { icon: Facebook, href: 'https://www.facebook.com/lobaiseo', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/lobaiseo', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/lobaiseo', label: 'LinkedIn' },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-purple-950 to-slate-900 text-white">
      <div className="section-container py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/">
                <img
                  src="/assets/logo.png"
                  alt="LOBAISEO"
                  className="h-24 md:h-28 w-auto mb-4 brightness-0 invert hover:opacity-80 transition-opacity"
                />
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed">
                AI-powered Google Business Profile automation platform. Manage, automate, and scale your local visibility effortlessly.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <a href="mailto:support@Lobaiseo.com" className="hover:text-white transition-colors">
                    support@Lobaiseo.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <a href="tel:+917710616166" className="hover:text-white transition-colors">
                    +91-7710616166
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Jalandhar, Punjab, India</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h4 className="text-white font-bold mb-4 capitalize">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {'isRoute' in link && link.isRoute ? (
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-gray-400 text-sm"
          >
            © {new Date().getFullYear()} LOBAISEO. All rights reserved.
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-violet-600 flex items-center justify-center transition-all duration-300 group"
              >
                <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            ))}
          </motion.div>

          {/* Made in India Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 text-sm text-gray-400"
          >
            <span>Made with ❤️ in India</span>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500"></div>
    </footer>
  )
}

export default Footer
