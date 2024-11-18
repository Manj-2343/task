import React from "react";
import intro from "../../assets/intro.png";
const Intro = () => {
  return (
    <div className="overflow-hidden">
      <div className="bg-[#F7F2F5] px-10 py-16 md:px-8 lg:px-16 lg:py-24 flex flex-col lg:flex-row items-center justify-between h-auto lg:h-[600px] w-full">
        <div className="flex flex-col items-start lg:items-start gap-4 lg:gap-6 text-center lg:text-left lg:w-1/2">
          <p className="text-3xl font-bold text-gray-800">INTRODUCTION</p>
          <p className="font-medium text-lg text-gray-700">
            Ethical and Beautiful Collection
          </p>
          <button className="bg-black text-white px-6 py-3 shadow-lg hover:bg-gray-800 transition duration-300">
            SHOP NOW
          </button>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8 lg:w-1/2 flex justify-center">
          <img
            src={intro}
            alt="Introduction"
            className="w-[300px] lg:w-[500px] rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
