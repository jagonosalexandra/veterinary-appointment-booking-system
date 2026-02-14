import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-[4%] py-8 text-sm'>
        <div className='flex flex-col sm:grid grid-cols-[2fr_3fr] gap-12'>
            {/* --- Left Side --- */}
            <div>
                <img className='w-64' src={assets.logo} alt='' />
                <p className='text-gray-600 leading-6'>Where advanced veterinary medicine meets personalize<br /> care for every paw that walks through our doors.</p>
            </div>

            {/* --- Right Side --- */}
            <div className='w-full grid grid-cols-2 md:flex justify-evenly '>
                <div>
                    <div className='mb-8'>
                        <h2 className='font-semibold mb-4'>COMPANY</h2>
                        <ul className='text-sm/8 text-gray-700 '>
                            <li className='hover:text-black cursor-pointer transition-colors'>Home</li>
                            <li className='hover:text-black cursor-pointer transition-colors'>About us</li>
                            <li className='hover:text-black cursor-pointer transition-colors'>Contact us</li>
                            <li className='hover:text-black cursor-pointer transition-colors'>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className='mb-8'>
                        <h2 className='font-semibold mb-4'>GET IN TOUCH</h2>
                        <ul className='text-sm/8 text-gray-700 '>
                            <li className='hover:text-black cursor-pointer transition-colors'>+(63) 912-3456-789</li>
                            <li className='hover:text-black cursor-pointer transition-colors'>vepawrinario@email.com</li>
                        </ul>
                    </div>
                </div>

                <div className='mb-8'>
                    <h2 className='font-semibold mb-4'>SERVICES</h2>
                    <ul className='text-sm/8 text-gray-700 '>
                        <li className='hover:text-black cursor-pointer transition-colors'>Preventive Care</li>
                        <li className='hover:text-black cursor-pointer transition-colors'>Diagnostic Medicine</li>
                        <li className='hover:text-black cursor-pointer transition-colors'>Dental Care</li>
                        <li className='hover:text-black cursor-pointer transition-colors'>Emergency Care</li>
                        <li className='hover:text-black cursor-pointer transition-colors'>Pet Export Assistance</li>
                        <li className='hover:text-black cursor-pointer transition-colors'>End of Life Care</li>
                    </ul>
                </div>
            </div>
        </div>

        <div>
            <hr className='border-gray-300' />
            <p className='pt-4 text-center text-gray-700'>Copyright &copy; Vepawrinario - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer