import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import ServiceCard from './ServiceCard';

const OurServices = ({ hideHeading = false }) => {
  const navigate = useNavigate()
  const { services } = useContext(AppContext)

  return (
    <div className='px-4 md:px-[4%] my-16'>
      {!hideHeading && (
        <h2 className='font-medium text-3xl text-gray-800 text-center'>OUR SERVICES</h2>
      )}

      <div className='grid grid-cols-3 gap-4 mt-8'>
        {services.map((item, index) => (
          <ServiceCard 
            key={index}
            id={item._id}
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