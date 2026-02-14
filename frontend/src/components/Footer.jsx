import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-4 md:px-[4%] py-8'>
        <div className='grid grid-cols-2'>
            {/* --- Left Side --- */}
            <div>
                <img className='w-64' src={assets.logo} alt='' />
                <p className='text-sm text-gray-600'>Where advanced veterinary medicine meets personalize<br /> care for every paw that walks through our doors.</p>
            </div>

            {/* --- Right Side --- */}
            <div className='w-full grid grid-cols-2'>
                <div>
                    <div className='mb-8'>
                        <h2 className='font-semibold mb-4'>COMPANY</h2>
                        <ul className='text-sm/8 text-gray-700 '>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Contact us</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className='mb-8'>
                        <h2 className='font-semibold mb-4'>GET IN TOUCH</h2>
                        <ul className='text-sm/8 text-gray-700 '>
                            <li>+(63) 912-3456-789</li>
                            <li>vepawrinario@email.com</li>
                        </ul>
                    </div>
                </div>

                <div className='mb-8'>
                    <h2 className='font-semibold mb-4'>SERVICES</h2>
                    <ul className='text-sm/8 text-gray-700 '>
                        <li>Preventive Care</li>
                        <li>Diagnostic Medicine</li>
                        <li>Dental Care</li>
                        <li>Emergency Care</li>
                        <li>Pet Export Assistance</li>
                        <li>End of Life Care</li>
                    </ul>
                </div>
            </div>
        </div>

        <hr className='h-px bg-gray-500 border-0 my-4' />

        <div className='text-center text-gray-700'>
            Copyright &copy; Vepawrinario - All Rights Reserved. 
        </div>
    </div>
  )
}

export default Footer