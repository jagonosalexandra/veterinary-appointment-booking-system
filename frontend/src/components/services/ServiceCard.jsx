import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ id, name, icon, description }) => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col gap-4 bg-paleviolet p-8 rounded-lg transition-all duration-300 cursor-pointer hover:bg-primary">
      <div>
        <img className="w-24" src={icon} alt="" />
      </div>
      <div>
        <h3 className="text-lg capitalize font-medium">{name}</h3>
        <p className="text-sm">{description}</p>
      </div>
      <FaArrowRightLong onClick={() => { navigate(`/services/${id}`); scrollTo(0, 0) }} className="ml-auto mt-4 text-2xl text-gray-600 active:scale-75" />
    </div>
  );
};

export default ServiceCard;
