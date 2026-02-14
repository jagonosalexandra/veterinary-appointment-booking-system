import React from 'react'
import { assets } from '../assets/assets'

const Header = ({heading, description}) => {
  return (
    <div className='bg-primary text-center flex flex-col items-center justify-center min-h-142 relative isolate overflow-hidden p-6'>
        <div className='flex flex-col gap-4 relative z-10'>
            <h1 className='text-4xl md:text-6xl font-bold text-secondary'>{heading}</h1>
            <p className='text-gray-600'>{description}</p>
        </div>
        <img 
          src={assets.header} 
          alt='' 
          className='absolute w-full -z-10' 
        />
    </div>
  )
}

export default Header