import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import WhatWeDo from './components/WhatWeDo'
import WhyPhysicalAI from './components/WhyPhysicalAI'
import CoreCapabilities from './components/CoreCapabilities'
import WhoItsFor from './components/WhoItsFor'
import Vision from './components/Vision'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <WhyPhysicalAI />
        <CoreCapabilities />
        <WhoItsFor />
        <Vision />
      </main>
      <Footer />
    </div>
  )
}

export default App
