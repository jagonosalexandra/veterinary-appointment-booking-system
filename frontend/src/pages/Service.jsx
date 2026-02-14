import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import OtherServices from '../components/services/OtherServices'
import { FaArrowRight } from "react-icons/fa6"

const Service = () => {
    const { serviceId } = useParams()
    const { services } = useContext(AppContext)
    const navigate = useNavigate()

    const [serviceInfo, setServiceInfo] = useState(null)

    const fetchServiceInfo = () => {
        const info = services.find(service => service._id === serviceId)
        setServiceInfo(info)
    }

    useEffect(() => {
        fetchServiceInfo()
    }, [services, serviceId])

    return serviceInfo && (
        <div key={serviceId}>
            <div className='flex items-center justify-center gap-24 bg-primary px-6 md:px-[4%] py-12'>
                <div>
                    <img className='rounded-full w-xl m-auto' src={serviceInfo.image} alt='' />
                </div>
                <div className='flex flex-1 flex-col items-start gap-6'>
                    <h1 className='capitalize text-5xl font-bold text-gray-800'>{serviceInfo.name}</h1>
                    <p className='text-gray-700'>{serviceInfo.description}</p>
                    <div>
                        <p className='font-medium'>What's Included</p>
                        <ul className='list-disc list-inside text-gray-700 leading-6'>
                            {serviceInfo.inclusions.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </div>
                    <a href='#appointment' className='flex items-center gap-3 bg-white px-8 py-4 mt-16 rounded-full text-gray-700 font-medium hover:scale-110 transition-all duration-300'>
                        Book this service <FaArrowRight />
                    </a>
                </div>
            </div>


            <OtherServices serviceId={serviceId} />
        </div >
    )
}

export default Service