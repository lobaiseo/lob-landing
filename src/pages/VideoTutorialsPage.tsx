import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Play, PlayCircle, Youtube } from 'lucide-react'
import Header from '../components/sections/Header'
import Footer from '../components/sections/Footer'

const VideoTutorialsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const tutorials = [
    {
      title: 'Getting Started with LOBAISEO',
      description: 'Learn how to set up your account and connect your Google Business Profile in minutes.',
      duration: '5:30',
      category: 'Beginner',
    },
    {
      title: 'AI-Powered Post Creation',
      description: 'Discover how our AI generates engaging, SEO-optimized posts for your business.',
      duration: '8:15',
      category: 'Features',
    },
    {
      title: 'Managing Reviews Like a Pro',
      description: 'Master the art of review management with AI-powered response suggestions.',
      duration: '6:45',
      category: 'Features',
    },
    {
      title: 'Magic QR Code Setup',
      description: 'Create and customize your Magic QR codes to collect more reviews.',
      duration: '4:20',
      category: 'Features',
    },
    {
      title: 'Understanding Your Analytics',
      description: 'Deep dive into your performance metrics and learn how to improve.',
      duration: '10:00',
      category: 'Advanced',
    },
    {
      title: 'SEO Audit Walkthrough',
      description: 'Learn how to use our SEO audit tool to optimize your GMB profile.',
      duration: '7:30',
      category: 'Advanced',
    },
  ]

  const categoryColors: Record<string, string> = {
    Beginner: 'bg-green-100 text-green-700',
    Features: 'bg-blue-100 text-blue-700',
    Advanced: 'bg-purple-100 text-purple-700',
  }

  return (
    <div className="overflow-hidden">
      <Header />
      <div className="pt-20">
        <section className="relative py-24 md:py-32 bg-gradient-to-b from-red-50 via-white to-white overflow-hidden">
          <div className="section-container">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 border border-red-200 mb-6">
                <PlayCircle className="w-4 h-4 text-red-600" />
                <span className="text-sm font-medium text-red-600">Video Tutorials</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                Learn LOBAISEO with <span className="gradient-text">Video Guides</span>
              </h1>

              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Watch step-by-step tutorials to master every feature of LOBAISEO and grow your local business.
              </p>

              {/* YouTube Channel CTA */}
              <motion.a
                href="https://youtube.com/@lobaiseo?si=JztvlcR1xEjrgBdv"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
              >
                <Youtube className="w-6 h-6" />
                Subscribe to Our YouTube Channel
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            </motion.div>

            {/* YouTube Embed */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-4xl mx-auto mb-16"
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-center">
                <div className="aspect-video bg-black/50 rounded-xl flex items-center justify-center mb-6 overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed?listType=user_uploads&list=lobaiseo"
                    title="LOBAISEO YouTube Channel"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-xl"
                  ></iframe>
                </div>
                <a
                  href="https://youtube.com/@lobaiseo?si=JztvlcR1xEjrgBdv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-red-400 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                  Watch all videos on YouTube
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Tutorial Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {tutorials.map((tutorial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer"
                >
                  {/* Thumbnail Placeholder */}
                  <div className="relative h-44 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Play className="w-8 h-8 text-red-600 ml-1" />
                    </div>
                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 text-white text-xs font-medium rounded">
                      {tutorial.duration}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${categoryColors[tutorial.category]}`}>
                        {tutorial.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {tutorial.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{tutorial.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-8 text-white max-w-2xl mx-auto">
                <Youtube className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Want More Tutorials?</h3>
                <p className="text-red-100 mb-6">
                  Subscribe to our YouTube channel for weekly tips, tutorials, and local SEO strategies.
                </p>
                <a
                  href="https://youtube.com/@lobaiseo?si=JztvlcR1xEjrgBdv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-red-600 font-bold rounded-xl hover:bg-red-50 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                  Subscribe Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default VideoTutorialsPage
