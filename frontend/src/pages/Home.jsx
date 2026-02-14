import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/services/Services'
import TopDoctors from '../components/doctors/TopDoctors'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
        <Hero />
        <Services />
        <TopDoctors />
        <Banner />
    </div>
  )
}

export default Home