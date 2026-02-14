import React from 'react'
import Header from '../components/Header'
import OurServices from '../components/services/OurServices'

export const Services = () => {
  return (
    <div>
      <Header
        heading="Our Services"
        description="Complete care for every stage of your pet's life, from preventive wellness to specialized treatments"
      />
      <OurServices hideHeading />
    </div>
  )
}
