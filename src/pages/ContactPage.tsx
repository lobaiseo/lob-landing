import { useEffect } from 'react'
import Header from '../components/sections/Header'
import ContactSection from '../components/sections/ContactSection'
import Footer from '../components/sections/Footer'

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="overflow-hidden">
      <Header />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
    </div>
  )
}

export default ContactPage
