import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Clock, TrendingUp } from 'lucide-react'

const BlogSection = () => {
  const blogs = [
    {
      title: '10 GMB Hacks That Will 10x Your Local Visibility',
      excerpt: 'Stop sleeping on these game-changing strategies that top businesses use to dominate local search. No cap, these actually work.',
      category: 'Growth Tips',
      readTime: '5 min read',
      image: '/assets/blog-1.jpg',
      trending: true,
    },
    {
      title: 'Why AI is the Future of Local SEO (And How to Stay Ahead)',
      excerpt: 'The AI revolution is here and it\'s changing everything. Here\'s how smart businesses are leveraging AI to stay ahead of the curve.',
      category: 'AI & Tech',
      readTime: '7 min read',
      image: '/assets/blog-2.jpg',
      trending: true,
    },
    {
      title: 'The Ultimate Guide to Getting More Google Reviews',
      excerpt: 'Reviews hit different when you know how to ask for them. Learn the psychology behind 5-star reviews and how to get them consistently.',
      category: 'Reviews',
      readTime: '6 min read',
      image: '/assets/blog-3.jpg',
      trending: false,
    },
    {
      title: 'From Zero to Hero: A Small Business Success Story',
      excerpt: 'How a local chai shop in Jalandhar went from invisible to #1 on Google Maps in just 3 months. Real results, real story.',
      category: 'Case Study',
      readTime: '4 min read',
      image: '/assets/blog-4.jpg',
      trending: false,
    },
    {
      title: 'GMB Posts That Actually Convert: A Visual Guide',
      excerpt: 'Your posts are probably mid. Here\'s how to create scroll-stopping content that turns viewers into customers.',
      category: 'Content',
      readTime: '8 min read',
      image: '/assets/blog-5.jpg',
      trending: false,
    },
    {
      title: 'Local SEO Trends You Can\'t Ignore in 2025',
      excerpt: 'The game is changing fast. Stay updated with the latest trends that are reshaping local search and digital marketing.',
      category: 'Trends',
      readTime: '5 min read',
      image: '/assets/blog-6.jpg',
      trending: false,
    },
  ]

  const categoryColors: Record<string, string> = {
    'Growth Tips': 'bg-green-100 text-green-700',
    'AI & Tech': 'bg-purple-100 text-purple-700',
    'Reviews': 'bg-yellow-100 text-yellow-700',
    'Case Study': 'bg-blue-100 text-blue-700',
    'Content': 'bg-pink-100 text-pink-700',
    'Trends': 'bg-orange-100 text-orange-700',
  }

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 border border-violet-200 mb-6">
            <BookOpen className="w-4 h-4 text-violet-600" />
            <span className="text-sm font-medium text-violet-600">LOBAISEO Blog</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Level Up Your
            <br />
            <span className="gradient-text">Local SEO Game</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fresh insights, proven strategies, and real talk about growing your business online. No fluff, just facts.
          </p>
        </motion.div>

        {/* Featured Posts (First 2) */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {blogs.slice(0, 2).map((blog, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="relative h-56 bg-gradient-to-br from-blue-400 via-violet-500 to-purple-600 overflow-hidden">
                {/* Replace with actual image */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                {blog.trending && (
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-red-500 text-white text-xs font-bold rounded-full">
                    <TrendingUp className="w-3 h-3" />
                    Trending
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[blog.category]}`}>
                    {blog.category}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="w-3.5 h-3.5" />
                    {blog.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {blog.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">{blog.excerpt}</p>

                <div className="flex items-center text-blue-600 font-semibold group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {blogs.slice(2).map((blog, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="relative h-36 bg-gradient-to-br from-gray-300 to-gray-400 overflow-hidden">
                {/* Replace with actual image */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
              </div>

              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${categoryColors[blog.category]}`}>
                    {blog.category}
                  </span>
                  <span className="text-xs text-gray-500">{blog.readTime}</span>
                </div>

                <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {blog.title}
                </h3>

                <div className="flex items-center text-blue-600 text-sm font-medium">
                  Read <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-gradient-to-br from-blue-500 via-violet-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">Stay in the Loop</h3>
            <p className="text-blue-100 mb-6">
              Get weekly tips, trends, and insights delivered straight to your inbox. Join 5,000+ business owners who are leveling up.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-6 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogSection
