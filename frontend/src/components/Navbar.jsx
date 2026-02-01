import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {

    const navigate = useNavigate();

    const [token, setToken] = useState(true);

    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
            <img onClick={() => navigate('/')} src={assets.logo} alt='' className='w-44 cursor-pointer' />

            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to='/'>
                    <li className='py-1'>HOME</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-2/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/services'>
                    <li className='py-1'>SERVICES</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-2/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/vets'>
                    <li className='py-1'>FIND A VET</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-2/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/about'>
                    <li className='py-1'>ABOUT</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-2/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/contact'>
                    <li className='py-1'>CONTACT</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-2/5 m-auto hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-4'>
                {
                    token
                    ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                        <img src={assets.profile_img} alt='' className='w-12 rounded-full' />
                        <FaChevronDown className='text-gray-500 text-lg' />
                        <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                            <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                <p onClick={() => navigate('/my-account')} className='hover:text-black cursor-pointer'>Account</p>
                                <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>Appointments</p>
                                <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                            </div>
                        </div>
                    </div>
                    : <button onClick={() => navigate('/login')}>Create Account</button>
                }
            </div>

        </div>
    )
}

export default Navbar