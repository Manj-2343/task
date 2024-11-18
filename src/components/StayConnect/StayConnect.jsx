import React from "react";

const StayConnect = () => {
  return (
    <div className="flex items-center flex-col my-3">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wider mb-6 md:mb-8">
        Stay up to date
      </h1>
      <div className="flex justify-center">
        <div className="border flex border-black ">
          <input
            type="text"
            placeholder="Enter your mail"
            className="py-2 md:py-3 px-4 placeholder-gray-500 text-gray-700 w-[180px] md:w-[30rem] border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-300"
          />
          <button className="py-2 md:py-3 px-3 bg-black text-white">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default StayConnect;
