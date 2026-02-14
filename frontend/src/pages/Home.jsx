import React from 'react'
import Hero from '../components/Hero'
import TopDoctors from '../components/doctors/TopDoctors'
import Banner from '../components/Banner'
import OurServices from '../components/services/OurServices'

const Home = () => {
  return (
    <div>
        <Hero />
        <OurServices />
        <TopDoctors />
        <Banner />
    </div>
  )
}

export default Home