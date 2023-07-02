import React from 'react'
import Carouselstart from '../components/Carouselstart'
import AboutSection from '../components/AboutSection'

// import CategorySection from '../components/CategorySection'
import WhyUs from '../components/WhyUs'
import OurAchievements from '../components/OurAchievements'

import BestSellerSection from '../components/BestSellerSection'
import News from '../components/News'
// import TopSale from '../components/TopSale'


// import Services from '../components/Services'

function Home() {
  return (
    <>
 
      <Carouselstart />
      <AboutSection />
      <WhyUs />
      <BestSellerSection />
    <OurAchievements />
    <News />
    </>
  )
}

export default Home