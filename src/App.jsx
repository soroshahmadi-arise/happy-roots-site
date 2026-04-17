import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WhyPlants from './components/WhyPlants'
import Audiences from './components/Audiences'
import Services from './components/Services'
import Process from './components/Process'
import OfficeMaintenance from './components/OfficeMaintenance'
import Testimonials from './components/Testimonials'
import Philosophy from './components/Philosophy'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a href="#services" className="skip-link">Skip to content</a>
      <Header />
      <main>
        <Hero />
        <WhyPlants />
        <Audiences />
        <Services />
        <Process />
        <OfficeMaintenance />
        <Testimonials />
        <Philosophy />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
