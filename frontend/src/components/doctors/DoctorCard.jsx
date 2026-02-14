import React from 'react'

const DoctorCard = ({ name, image, specialty }) => {
  return (
    <div className='rounded-lg border border-gray-400 contain-content overflow-hidden cursor-pointer hover:-translate-y-2.5 transition-all duration-300'>
      <img className='bg-secondary' src={image} />
      <div className='text-center text-gray-800 px-4 py-2'>
        <p className='font-medium text-lg'>{name}</p>
        <p className='capitalize text-sm font-light'>{specialty}</p>
      </div>
    </div>
  )
}

export default DoctorCard