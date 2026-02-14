import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'
import DoctorCard from './DoctorCard'

const TopDoctors = () => {

    const navigate = useNavigate()
    const { doctors } = useContext(AppContext)

    return (
        <div className='flex flex-col gap-8 items-center bg-lavender px-4 md:px-[4%] py-16'>
            <h2 className='font-medium text-3xl text-gray-800 text-center'>MEET OUR PET DOCTORS</h2>

            <div className='grid grid-cols-5 gap-4'>
                {doctors.slice(0, 5).map((item, index) => (
                    <DoctorCard
                        onClick={() => navigate(`/appointment/${item.id}`)}
                        key={index}
                        name={item.name}
                        image={item.image}
                        specialty={item.specialty}
                    />
                ))}
            </div>

            <button onClick={() => {navigate('/doctors'); scrollTo(0,0)}} className='bg-paleviolet border border-gray-500 text-gray-700 mt-10 px-8 py-2 rounded-full'>more</button>
        </div>
    )
}

export default TopDoctors