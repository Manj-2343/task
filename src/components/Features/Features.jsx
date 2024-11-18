import React from "react";
import { FaTruckMoving } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";
import { LuLock } from "react-icons/lu";
const Features = () => {
  return (
    <div className="flex flex-row md:flex-row justify-center items-center my-3 py-4 bg-[#E0D5D3]">
      <div className="flex flex-col md:flex-row items-center justify-center px-6  md:border-b-0 md:border-r border-black">
        <FaTruckMoving className="text-2xl mb-2 md:mb-0 md:mr-2" />
        <span className="text-center md:text-left">Free Delivery*</span>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center px-6  md:border-b-0 md:border-r border-black">
        <IoChatbubblesOutline className="text-2xl mb-2 md:mb-0 md:mr-2" />
        <span className="text-center md:text-left">Customer Support</span>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center px-6">
        <LuLock className="text-2xl mb-2 md:mb-0 md:mr-2" />
        <span className="text-center md:text-left">Secure Payment</span>
      </div>
    </div>
  );
};

export default Features;
