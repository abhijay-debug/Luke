import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import WhyLuke from './components/WhyLuke'
import HowItWorks from './components/HowItWorks'
import Trust from './components/Trust'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FeelSection from './components/FeelSection'
import AboutLuke from './components/AboutLuke'
import WellnessContext from './components/WellnessContext'

const App = () => {
  return (
    <div className="font-sans text-gray-800 bg-gradient-to-br from-green-50 to-yellow-50">
      <Header/>
      <Hero/>
      <WhyLuke/>
      <Features/>
      <HowItWorks/>
      <FeelSection/>
      <Trust/>
        <WellnessContext/>
      <FAQ/>
      <AboutLuke  />
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App
