import React from 'react'
import { assets } from '../assets/assets'

const Header = ({heading, description}) => {
  return (
    <div className='bg-primary text-center flex flex-col gap-2 pt-24'>
        <div className='flex flex-col gap-4'>
            <h1 className='text-4xl md:text-6xl font-bold text-secondary'>{heading}</h1>
            <p className='text-gray-600'>{description}</p>
        </div>
        <img 
          src={assets.header} 
          alt='' 
          className='w-full' 
        />
    </div>
  )
}

export default Header