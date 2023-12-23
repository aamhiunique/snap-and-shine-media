import React from 'react'
import Herosection from '../herosection/Herosection'
import Logo from '../logo/Logo'
import Featuresection from '../featuresection/Featuresection'
import Gradientfeaturesection from '../ourservices/Ourservices'
import Whyus from '../whyus/Whyus'
import Viewwork from '../viewwork/Viewwork'
import Services from '../services/Services'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const Main = () => {
  return (
    <>
    <main>
      <Header/>
      {/* Hero section */}
      <Herosection/>

        {/* Logo Cloud */}
        <Logo/>

        {/* Services */}
        <Services/>

        {/* Alternating Feature Sections */}
        <Featuresection/>

        {/* Gradient Feature Section */}
        <Gradientfeaturesection/>

        {/* CTA Section */}
        <Viewwork/>

        {/* Stats section */}
        <Whyus/>

        {/* Footer */}
        <Footer/>

      </main>
    </>
  )
}

export default Main