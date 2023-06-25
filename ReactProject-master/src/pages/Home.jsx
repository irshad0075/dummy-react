import React from 'react'
import Carouselstart from '../components/Carouselstart'
import AboutSection from '../components/AboutSection'
import WhyChooseUs from '../components/WhyChooseUs'
import CategorySection from '../components/CategorySection'
import WhyUs from '../components/WhyUs'


// import Services from '../components/Services'

function Home() {
  return (
    <>
 
      <Carouselstart />
      <AboutSection />
      <WhyChooseUs />
      <CategorySection />
     <WhyUs />
    
      {/* <Services /> */}
    </>
  )
}

export default Home