import React, { useContext } from 'react'
import ServiceCard from './ServiceCard'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'

const OurServices = () => {
  const {services} = useContext(AppContext)

  return (
    <div className='px-4 md:px-[4%] my-16'>
        <h2 className='font-medium text-3xl text-gray-800 text-center'>OUR SERVICES</h2>

        <div className='grid grid-cols-3 gap-4 mt-8'>
           {services.map((item, index) => (
            <ServiceCard
              id = {item.id}
              name={item.name}
              icon={item.icon}
              description={item.preview}
            />
           ))}
        </div>
    </div>
  )
}

export default OurServices