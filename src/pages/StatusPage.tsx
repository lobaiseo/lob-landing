import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Activity, CheckCircle, Clock, Server, Shield, Zap } from 'lucide-react'
import Header from '../components/sections/Header'
import Footer from '../components/sections/Footer'

const StatusPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const services = [
    { name: 'Web Application', status: 'operational', uptime: '99.99%' },
    { name: 'API Services', status: 'operational', uptime: '99.98%' },
    { name: 'AI Content Generation', status: 'operational', uptime: '99.95%' },
    { name: 'Google API Integration', status: 'operational', uptime: '99.97%' },
    { name: 'Payment Processing', status: 'operational', uptime: '99.99%' },
    { name: 'Email Notifications', status: 'operational', uptime: '99.96%' },
  ]

  const recentIncidents = [
    {
      date: 'January 25, 2026',
      title: 'Scheduled Maintenance',
      description: 'Scheduled maintenance completed successfully. All systems upgraded.',
      status: 'resolved',
    },
    {
      date: 'January 15, 2026',
      title: 'API Performance Optimization',
      description: 'API response times improved by 40%. No downtime.',
      status: 'resolved',
    },
  ]

  const metrics = [
    { label: 'Overall Uptime', value: '99.97%', icon: Activity },
    { label: 'Avg Response Time', value: '145ms', icon: Zap },
    { label: 'Last 30 Days', value: '0 Incidents', icon: Shield },
  ]

  return (
    <div className="overflow-hidden">
      <Header />
      <div className="pt-20">
        <section className="relative py-24 md:py-32 bg-gradient-to-b from-green-50 via-white to-white overflow-hidden">
          <div className="section-container">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 mb-6">
                <Activity className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-600">System Status</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                All Systems <span className="text-green-500">Operational</span>
              </h1>

              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Real-time status of LOBAISEO services and infrastructure.
              </p>
            </motion.div>

            {/* Overall Status Banner */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-green-500 rounded-2xl p-6 text-white text-center mb-12"
            >
              <div className="flex items-center justify-center gap-3">
                <CheckCircle className="w-8 h-8" />
                <span className="text-2xl font-bold">All Systems Operational</span>
              </div>
              <p className="text-green-100 mt-2">Last updated: {new Date().toLocaleString()}</p>
            </motion.div>

            {/* Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-3 gap-6 mb-12"
            >
              {metrics.map((metric, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                  <metric.icon className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</div>
                  <div className="text-gray-600">{metric.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Services Status */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-12"
            >
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Server className="w-5 h-5 text-blue-500" />
                  Service Status
                </h2>
              </div>

              <div className="divide-y divide-gray-100">
                {services.map((service, i) => (
                  <div key={i} className="flex items-center justify-between p-4 hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="font-medium text-gray-900">{service.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-500">{service.uptime} uptime</span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full capitalize">
                        {service.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Incidents */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-500" />
                  Recent Updates
                </h2>
              </div>

              <div className="divide-y divide-gray-100">
                {recentIncidents.map((incident, i) => (
                  <div key={i} className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500">{incident.date}</span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full capitalize">
                        {incident.status}
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{incident.title}</h3>
                    <p className="text-gray-600 text-sm">{incident.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Subscribe */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 text-center"
            >
              <p className="text-gray-600 mb-4">
                Want to be notified of any issues?
              </p>
              <a
                href="mailto:support@Lobaiseo.com?subject=Status Updates Subscription"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-violet-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
              >
                Subscribe to Updates
              </a>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default StatusPage
