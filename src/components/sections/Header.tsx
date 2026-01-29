import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Features', href: '/#features' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Use Cases', href: '/#use-cases' },
    { label: 'Agency', href: '/#agency' },
  ]

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(15, 23, 42, 0.3)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between" style={{ height: '80px' }}>
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/assets/logo.png"
              alt="LOBAISEO"
              style={{ height: '110px', width: 'auto', marginTop: '-15px', marginBottom: '-15px' }}
              className="brightness-0 invert"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-medium text-white/90 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="https://www.app.lobaiseo.com/login" className="font-semibold text-white/90 hover:text-white">
              Login
            </a>
            <a href="https://www.app.lobaiseo.com/signup">
              <Button size="md" className="shadow-xl">
                Start Free Trial
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/20" style={{ backgroundColor: 'rgba(15, 23, 42, 0.98)' }}>
            <nav className="py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 font-medium text-white hover:text-purple-300 hover:bg-white/10 rounded-lg"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 px-4 space-y-3 border-t border-white/20">
                <a href="https://www.app.lobaiseo.com/login" className="block w-full py-3 font-semibold text-white hover:text-purple-300 text-center">
                  Login
                </a>
                <a href="https://www.app.lobaiseo.com/signup" className="block">
                  <Button size="md" className="w-full">
                    Start Free Trial
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
