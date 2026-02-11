import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ServiceCard = ({ name, icon, description }) => {
  return (
    <div className="flex flex-col gap-2 bg-paleviolet p-8 rounded-lg">
        <div>
            <img className="w-28" src={icon} alt="" />
        </div>
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
        <FaArrowRightLong className="ml-auto text-xl text-gray-600" />
    </div>
  );
};

export default ServiceCard;
