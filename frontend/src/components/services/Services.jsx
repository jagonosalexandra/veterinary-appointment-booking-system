import React from 'react'
import ServiceCard from './ServiceCard'
import { assets } from '../../assets/assets'

const Services = () => {
  return (
    <div className='px-8 md:px-[12%] my-16'>
        <h2 className='font-medium text-3xl text-gray-800 text-center'>OUR SERVICES</h2>

        <div className='grid grid-cols-3 gap-6 mt-8'>
            <ServiceCard 
              name="Preventive Care"
              icon={assets.hero_img}
              description="Regular checkups, vaccinations, and wellness plans to keep pets healthy."
            />
            <ServiceCard 
              name="Diagnostic Medicine"
              icon={assets.hero_img}
              description="Advanced testing to identify illnesses and create effective treatment plans."
            />
            <ServiceCard 
              name="Preventive Care"
              icon={assets.hero_img}
              description="Regular checkups, vaccinations, and wellness plans to keep pets healthy."
            />
            <ServiceCard 
              name="Preventive Care"
              icon={assets.hero_img}
              description="Regular checkups, vaccinations, and wellness plans to keep pets healthy."
            />
            <ServiceCard 
              name="Preventive Care"
              icon={assets.hero_img}
              description="Regular checkups, vaccinations, and wellness plans to keep pets healthy."
            />
            <ServiceCard 
              name="Preventive Care"
              icon={assets.hero_img}
              description="Regular checkups, vaccinations, and wellness plans to keep pets healthy."
            />
        </div>
    </div>
  )
}

export default Services