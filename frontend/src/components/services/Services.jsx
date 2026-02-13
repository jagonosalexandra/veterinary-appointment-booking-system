import React from 'react'
import ServiceCard from './ServiceCard'
import { assets } from '../../assets/assets'

const Services = () => {
  return (
    <div className='px-4 md:px-[4%] my-16'>
        <h2 className='font-medium text-3xl text-gray-800 text-center'>OUR SERVICES</h2>

        <div className='grid grid-cols-3 gap-4 mt-8'>
            <ServiceCard 
              name="Preventive Care"
              icon={assets.preventive_care}
              description="Regular checkups, vaccinations, and wellness plans to keep pets healthy."
            />
            <ServiceCard 
              name="Diagnostic Medicine"
              icon={assets.diagnostic_med}
              description="Advanced testing to identify illnesses and create effective treatment plans."
            />
            <ServiceCard 
              name="Dental Care"
              icon={assets.dental}
              description="Teeth cleaning, extractions, and oral health treatments to prevent pain and systemic health issues."
            />
            <ServiceCard 
              name="Emergency Care"
              icon={assets.emergency}
              description="24/7 urgent care for accidents, sudden illnesses, or critical conditions when regular clinics are closed."
            />
            <ServiceCard 
              name="Pet Export Assistance"
              icon={assets.pet_export}
              description="Health certificates, vaccinations, and documentation preparation for international pet travel and relocation."
            />
            <ServiceCard 
              name="End of Life Care"
              icon={assets.end_of_life}
              description="Compassionate euthanasia services and grief support for pets with terminal conditions or suffering."
            />
        </div>
    </div>
  )
}

export default Services