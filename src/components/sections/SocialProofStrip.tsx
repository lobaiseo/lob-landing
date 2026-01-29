import { motion } from 'framer-motion'
import { Building2, Heart, Home, Scale, ShoppingBag, Utensils, Car, Sparkles } from 'lucide-react'

const SocialProofStrip = () => {
  const brands = [
    { name: 'RestaurantChain', icon: Utensils, color: 'text-orange-500' },
    { name: 'HealthCare Plus', icon: Heart, color: 'text-pink-500' },
    { name: 'RealEstate Pro', icon: Home, color: 'text-blue-500' },
    { name: 'FitZone Gyms', icon: Building2, color: 'text-green-500' },
    { name: 'Dental Smile', icon: Sparkles, color: 'text-violet-500' },
    { name: 'Auto Service', icon: Car, color: 'text-gray-500' },
    { name: 'Beauty Salon', icon: ShoppingBag, color: 'text-pink-400' },
    { name: 'Legal Partners', icon: Scale, color: 'text-indigo-500' },
  ]

  const allBrands = [...brands, ...brands]

  return (
    <section className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 py-10 overflow-hidden border-y border-purple-500/20">
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-gray-400 uppercase tracking-wider mb-6"
        >
          Trusted by <span className="text-purple-400 font-semibold">500+</span> businesses across India
        </motion.p>
      </div>

      {/* Animated Marquee */}
      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" },
          }}
          className="flex gap-6 items-center"
        >
          {allBrands.map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition-all"
            >
              <brand.icon className={`w-4 h-4 ${brand.color}`} />
              <span className="text-sm font-medium text-gray-300 whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" },
          }}
          className="flex gap-6 items-center ml-6"
        >
          {allBrands.map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition-all"
            >
              <brand.icon className={`w-4 h-4 ${brand.color}`} />
              <span className="text-sm font-medium text-gray-300 whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradient Fade */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none z-10"></div>
    </section>
  )
}

export default SocialProofStrip
