import React from 'react'
import { FaArrowRight } from "react-icons/fa6"
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-primary px-8 md:px-[12%] relative overflow-hidden'>

            {/* --- Left Side --- */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-6 py-4 md:py-[8vw]'>

                <div className='flex items-start gap-6'>
                    <div className='bg-secondary w-2 self-stretch hidden md:block rounded-full'></div>
                    <div>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight'>
                            BECAUSE YOUR <br />
                            PET DESERVES <br />
                            TIMELY CARE
                        </h1>
                        <p className='text-white mt-4 font-light'>
                            Book appointments with trusted veterinarians, <br className='hidden sm:block' />
                            track pet health, and get 24/7 support
                        </p>
                    </div>
                </div>

                <div className='flex items-start gap-6'>
                    <div className='w-2'></div>
                    <a href='#vets' className='flex items-center gap-3 bg-white px-8 py-4 mt-16 rounded-full text-gray-700 font-medium hover:scale-105 transition-all duration-300'>
                        Book appointment <FaArrowRight />
                    </a>
                </div>
            </div>

            {/* --- Right Side --- */}
            <div className='md:w-1/2 relative min-h-[300px]'>
                <img
                    className='w-full md:absolute bottom-0 h-auto'
                    src={assets.hero_img}
                    alt='Hero Dog'
                />
            </div>

        </div>
    )
}

export default Hero