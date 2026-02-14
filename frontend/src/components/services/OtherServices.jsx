import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import ServiceCard from './ServiceCard'

const OtherServices = ({ serviceId }) => {
    const {services} = useContext(AppContext)

    const [otherService, setOtherService] = useState([])

    useEffect(() => {
        const servicesData = services.filter((service) => service._id !== serviceId)
        setOtherService(servicesData)
    }, [services, serviceId])

    return (
        <div className='px-4 md:px-[4%] my-16'>
            <h2 className='font-medium text-3xl text-gray-800 text-center'>Other Services</h2>

            <div className='grid grid-cols-3 gap-4 mt-8'>
                {otherService.map((item, index) => (
                    <ServiceCard 
                        key={index}
                        id={item._id}
                        name={item.name}
                        icon={item.icon}
                        description={item.preview}
                    />
                ))}
            </div>
        </div>
    )
}

export default OtherServices