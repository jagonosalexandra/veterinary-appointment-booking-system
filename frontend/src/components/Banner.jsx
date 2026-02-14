import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate()

    return (
        <div className='flex bg-primary'>
            {/* --- Left Side --- */}
            <div className='w-[1/3] px-4 md:px-[4%] pt-16 bg-tertiary'>
                <div className='text-center flex flex-col items-center justify-center gap-4'>
                    <p className='text-3xl font-medium text-white'>Manage pet's wellness <br /> all in one place</p>
                    <p className='w-2/3 bg-white text-sm text-gray-500 px-2 py-2 rounded-full'>
                        Discover simplified pet care. <br />
                        One platform for all your veterinary needs.
                    </p>
                </div>
                <img src={assets.banner} alt='' />
            </div>

            {/* --- Right Side --- */}
            <div className='flex flex-col items-start justify-center gap-12 px-4 md:px-[4%]'>
                <div className='flex flex-col gap-4'>
                    <p className='text-5xl font-medium text-gray-700'>
                        Ready for Your <br />
                        <span className='text-secondary text-8xl font-bold'>Pet’s Visit?</span>
                    </p>
                    <p className='text-gray-500'>Schedule appointments with top-rated specialists. Manage all your<br /> pet's healthcare needs in one convenient place.</p>
                </div>
                <a href='#vets' className='flex items-center gap-3 bg-white px-12 py-4 mt-16 rounded-full text-gray-500 hover:scale-110 transition-all duration-300'>Create Account</a>
            </div>
        </div>
    )
}

export default Banner