import React from 'react'
import Herosection from '../herosection/Herosection'
import Logo from '../logo/Logo'
import Featuresection from '../featuresection/Featuresection'
import Gradientfeaturesection from '../ourservices/Ourservices'
import Whyus from '../whyus/Whyus'
import Viewwork from '../viewwork/Viewwork'

const Main = () => {
  return (
    <>
    <main>
        {/* Hero section */}
        <Herosection/>

        {/* Logo Cloud */}
        <Logo/>

        {/* Alternating Feature Sections */}
        <Featuresection/> 

        {/* Gradient Feature Section */}
        <Gradientfeaturesection/>

        {/* CTA Section */}
        <Viewwork/>

        {/* Stats section */}
        <Whyus/>

      </main>
    </>
  )
}

export default Main