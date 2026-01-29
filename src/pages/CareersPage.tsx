import { useEffect } from 'react'
import Header from '../components/sections/Header'
import CareersSection from '../components/sections/CareersSection'
import Footer from '../components/sections/Footer'

const CareersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="overflow-hidden">
      <Header />
      <div className="pt-20">
        <CareersSection />
      </div>
      <Footer />
    </div>
  )
}

export default CareersPage
