import React from "react";
import { FaChevronLeft, FaChevronRight, FaInstagram } from "react-icons/fa";
import { BsCopy } from "react-icons/bs";
const Connect = () => {
  return (
    <div className="flex items-center flex-col mt-5">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wider mb-6 md:mb-8">
        Connect on Instagram
      </h1>
      <div className="flex justify-center relative">
        <div className="flex">
          <div className="relative group">
            <img
              className="w-[215px] h-[240px] object-cover"
              src="https://curator-assets.b-cdn.net/a3f4546d-a1b2-4ceb-ad12-5b26c08bf01f/357165253.jpg?width=480&quality=75"
              alt=""
            />
            <BsCopy className="text-2xl absolute text-white bottom-2 left-3" />
            <FaInstagram className="text-2xl  absolute bottom-2 right-3" />
          </div>

          <div className='relative hidden md:block lg:"block'>
            <img
              className="w-[215px] h-[240px]"
              src="https://curator-assets.b-cdn.net/a3f4546d-a1b2-4ceb-ad12-5b26c08bf01f/357165254.jpg?width=480&quality=75"
              alt=""
            />
            <BsCopy className="text-2xl absolute text-white bottom-2 left-3" />
            <FaInstagram className="text-2xl  absolute bottom-2 right-3" />
          </div>

          <div className='relative hidden md:block lg:"block'>
            <img
              className="w-[215px] h-[240px]"
              src="https://curator-assets.b-cdn.net/a3f4546d-a1b2-4ceb-ad12-5b26c08bf01f/357165255.jpg?width=480&quality=75"
              alt=""
            />
            <BsCopy className="text-2xl absolute text-white bottom-2 left-3" />
            <FaInstagram className="text-2xl  absolute bottom-2 right-3" />
          </div>
          <div className="relative lg:block">
            <img
              className="w-[215px] h-[240px]"
              src="https://curator-assets.b-cdn.net/a3f4546d-a1b2-4ceb-ad12-5b26c08bf01f/357165256.jpg?width=480&quality=75"
              alt=""
            />
            <BsCopy className="text-2xl absolute text-white bottom-2 left-3" />
            <FaInstagram className="text-2xl  absolute bottom-2 right-3" />
          </div>
          <div className="relative lg:block">
            <img
              className="w-[215px] h-[240px]"
              src="https://curator-assets.b-cdn.net/a3f4546d-a1b2-4ceb-ad12-5b26c08bf01f/357165257.jpg?width=480&quality=75"
              alt=""
            />
            <BsCopy className="text-2xl absolute text-white bottom-2 left-3" />
            <FaInstagram className="text-2xl  absolute bottom-2 right-3" />
          </div>
        </div>
        <button className="absolute left-[14px] bg-gray-50 p-2 rounded-full top-[100px]">
          <FaChevronLeft />
        </button>
        <button className="absolute right-[14px] bg-gray-50 p-2 rounded-full top-[100px] ">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Connect;
