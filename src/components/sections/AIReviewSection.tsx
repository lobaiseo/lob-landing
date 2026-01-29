import { motion } from 'framer-motion'
import { Bot, MessageSquare, Sparkles, Star, ThumbsUp, TrendingUp } from 'lucide-react'
import { useState } from 'react'

const AIReviewSection = () => {
  const [selectedVariation, setSelectedVariation] = useState(0)

  const reviewExample = {
    customer: "Priya Sharma",
    rating: 5,
    text: "Amazing service! The team was professional and solved my problem quickly. Highly recommend!",
    variations: [
      "Thank you so much for your kind words, Priya! We're thrilled to hear you had such a positive experience with our team. Your recommendation means the world to us. We look forward to serving you again!",
      "Priya, we're so grateful for your wonderful review! Our team works hard to provide professional service, and it's rewarding to know we met your expectations. Thank you for recommending us!",
      "Hi Priya! Thank you for taking the time to share your experience. We're delighted that our team could help you quickly and professionally. Your trust and recommendation inspire us every day!"
    ]
  }

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(139 92 246 / 0.3) 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}></div>
      </div>
      {/* Background Orbs */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"></div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Visual (Sample UI) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative"
          >
            {/* Review Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
              {/* Original Review */}
              <div className="p-6 border-b border-white/20 bg-gradient-to-br from-yellow-500/10 to-white/5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    PS
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-white">{reviewExample.customer}</h4>
                      <div className="flex items-center gap-1">
                        {[...Array(reviewExample.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{reviewExample.text}</p>
                  </div>
                </div>
              </div>

              {/* AI Generated Variations */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Bot className="w-5 h-5 text-violet-400" />
                  <span className="text-sm font-semibold text-white">AI Generated Replies (3 Variations)</span>
                </div>

                {/* Variation Tabs */}
                <div className="flex gap-2 mb-4">
                  {[0, 1, 2].map((i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedVariation(i)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedVariation === i
                          ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      Variation {i + 1}
                    </button>
                  ))}
                </div>

                {/* Selected Variation Display */}
                <motion.div
                  key={selectedVariation}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-xl p-4 border border-violet-500/30"
                >
                  <p className="text-gray-200 leading-relaxed mb-4">
                    {reviewExample.variations[selectedVariation]}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-medium">
                        Positive tone
                      </span>
                      <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium">
                        Professional
                      </span>
                    </div>

                    <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-medium hover:shadow-lg transition-shadow">
                      Use This Reply
                    </button>
                  </div>
                </motion.div>

                {/* Sentiment Analysis */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-4 p-4 rounded-xl bg-green-500/10 border border-green-500/30"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <ThumbsUp className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-semibold text-green-300">Sentiment Analysis</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="h-2 bg-green-500/20 rounded-full overflow-hidden">
                        <div className="h-full w-[92%] bg-gradient-to-r from-green-500 to-emerald-600"></div>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-green-400">92% Positive</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/20"
            >
              <div className="flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-violet-400" />
                <div>
                  <div className="text-2xl font-bold text-white">3.2s</div>
                  <div className="text-xs text-gray-400">Avg. Response Time</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <MessageSquare className="w-4 h-4 text-purple-300" />
              <span className="text-sm font-medium text-purple-200">AI Review Management</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Reply to Every Review
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">In Seconds, Not Hours</span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our AI analyzes each review's sentiment and generates 3 perfectly-crafted response variations. Choose the one that fits your brand voice, or let it auto-respond.
            </p>

            {/* Feature List */}
            <div className="space-y-6 mb-8">
              {[
                {
                  icon: Bot,
                  title: 'Smart AI Responses',
                  desc: 'Context-aware replies that actually make sense'
                },
                {
                  icon: Sparkles,
                  title: '3 Variations Every Time',
                  desc: 'Pick the perfect tone and style for each review'
                },
                {
                  icon: TrendingUp,
                  title: 'Sentiment Analysis',
                  desc: 'Automatically detect positive, neutral, or negative reviews'
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl p-6 text-white"
            >
              <div className="text-4xl font-bold mb-2">10x Faster</div>
              <p className="text-violet-100">
                Businesses using AI replies respond 10x faster and see 45% more customer engagement
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AIReviewSection
