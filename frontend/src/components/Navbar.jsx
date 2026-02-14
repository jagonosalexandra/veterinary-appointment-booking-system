import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaChevronDown } from "react-icons/fa"
import { HiMiniBars3BottomRight } from "react-icons/hi2"
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {

    const navigate = useNavigate();

    const [token, setToken] = useState(true);
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className='flex items-center justify-between text-sm py-2 px-6 sm:px-[4%] sticky top-0 z-50 bg-white border-b border-gray-400'>
            <img onClick={() => navigate('/')} src={assets.logo} alt='' className='w-40 sm:w-48 cursor-pointer transition-all' />

            <ul className='hidden md:flex items-center gap-8 font-medium text-gray-700'>
                <NavLink to='/'>
                    <li className='py-1'>HOME</li>
                    <hr className='border-none outline-none h-0.5 bg-tertiary w-2/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/services'>
                    <li className='py-1'>SERVICES</li>
                    <hr className='border-none outline-none h-0.5 bg-tertiary w-2/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/vets'>
                    <li className='py-1'>FIND A VET</li>
                    <hr className='border-none outline-none h-0.5 bg-tertiary w-2/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/about'>
                    <li className='py-1'>ABOUT</li>
                    <hr className='border-none outline-none h-0.5 bg-tertiary w-2/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/contact'>
                    <li className='py-1'>CONTACT</li>
                    <hr className='border-none outline-none h-0.5 bg-tertiary w-2/5 m-auto hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-4'>
                {
                    token
                        ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                            <img src={assets.profile_img} alt='' className='w-8 rounded-full' />
                            <FaChevronDown className='text-gray-500 text-sm' />
                            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                                <div className='min-w-48 bg-white shadow-xl border border-gray-500 rounded flex flex-col gap-3 p-4'>
                                    <p onClick={() => navigate('/my-account')} className='hover:text-black cursor-pointer'>Account</p>
                                    <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>Appointments</p>
                                    <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                                </div>
                            </div>
                        </div>
                        : <button onClick={() => navigate('/login')} className='bg-secondary px-8 py-3 rounded-full text-white font-medium hidden md:block hover:bg-tertiary transition-all shadow-md active:scale-75'>Create Account</button>
                }

                <HiMiniBars3BottomRight onClick={() => setShowMenu(true)} className='text-3xl text-secondary md:hidden cursor-pointer' />

                <div className={` ${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden inset-0 right-0 top-0 bottom-0 z-50 overflow-hidden bg-white transition-all transform`}>
                    <div className='flex items-center justify-between px-5 py-6'>
                        <img className='w-40' src={assets.logo} alt='' />
                        <RxCross1 className='text-2xl text-secondary' onClick={() => setShowMenu(false)} />
                    </div>
                    <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                        <NavLink onClick={() => setShowMenu(false)} className='px-4 py-2 text-center w-full inline-block' to='/'>
                            <p className='py-1'>HOME</p>
                        </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} className='px-4 py-2 text-center w-full inline-block' to='/services'>
                            <p className='py-1'>SERVICES</p>
                        </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} className='px-4 py-2 text-center w-full inline-block' to='/vets'>
                            <p className='py-1'>FIND A VET</p>
                        </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} className='px-4 py-2 text-center w-full inline-block' to='/about'>
                            <p className='py-1'>ABOUT</p>
                        </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} className='px-4 py-2 text-center w-full inline-block' to='/contact'>
                            <p className='py-1'>CONTACT</p>
                        </NavLink>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Navbar