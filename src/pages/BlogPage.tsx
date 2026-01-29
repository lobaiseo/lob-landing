import { useEffect } from 'react'
import Header from '../components/sections/Header'
import BlogSection from '../components/sections/BlogSection'
import Footer from '../components/sections/Footer'

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="overflow-hidden">
      <Header />
      <div className="pt-20">
        <BlogSection />
      </div>
      <Footer />
    </div>
  )
}

export default BlogPage
