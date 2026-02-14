import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/services/Services'
import TopDoctors from '../components/doctors/TopDoctors'

const Home = () => {
  return (
    <div>
        <Hero />
        <Services />
        <TopDoctors />
    </div>
  )
}

export default Home