import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/Slices/CartSlice";

const Celebrities = () => {
  // State to manage the active index
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();
  // Collection data
  const collection = [
    {
      id: 1,
      img: "https://cdn.shopaccino.com/onayafashions/images/img-with-text-img-3-212662_m.png?v=521",
      name: "Raveena Tandon",
    },
    {
      id: 2,
      img: "https://cdn.shopaccino.com/onayafashions/images/5-778451_m.jpg?v=521",
      name: "Dolly Jain",
    },
    {
      id: 3,
      img: "https://cdn.shopaccino.com/onayafashions/images/1-663242_m.jpg?v=521",
      name: "Manasi Ugale",
    },
    {
      id: 4,
      img: "https://cdn.shopaccino.com/onayafashions/images/7-267565_m.jpg?v=521",
      name: "Rupali Hasija",
    },
    {
      id: 5,
      img: "https://cdn.shopaccino.com/onayafashions/images/img-with-text-img-3-212662_m.png?v=521",
      name: "Raveena Tandon",
    },
    {
      id: 6,
      img: "https://cdn.shopaccino.com/onayafashions/images/5-778451_m.jpg?v=521",
      name: "Dolly Jain",
    },
    {
      id: 7,
      img: "https://cdn.shopaccino.com/onayafashions/images/1-663242_m.jpg?v=521",
      name: "Manasi Ugale",
    },
    {
      id: 8,
      img: "https://cdn.shopaccino.com/onayafashions/images/7-267565_m.jpg?v=521",
      name: "Rupali Hasija",
    },
  ];

  // Total cards to show at a time
  const cardsToShow = 4;

  // Handler for Next button
  const handleNext = () => {
    console.log("Next button clicked");
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsToShow >= collection.length ? 0 : prevIndex + cardsToShow
    );
  };

  // Handler for Previous button
  const handlePrev = () => {
    console.log("Previous button clicked");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(collection.length - cardsToShow, 0)
        : prevIndex - cardsToShow
    );
  };

  return (
    <div className="flex flex-col items-center my-4">
      <div className="flex items-center justify-center flex-col mb-12 md:mb-16">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wider mb-6 md:mb-8">
          Celebrities & Influencers
        </h1>
        <p className="px-4 md:px-24 lg:px-72 text-center text-sm md:text-base text-gray-600 font-light leading-relaxed max-w-[1200px]">
          Sharing inspiring and gorgeous displays from some of the finest Indian
          Fashion Influencers adorning our scintillating range of ensembles
          Onaya, come and explore these stunning shoots.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="relative w-full flex items-center justify-center overflow-hidden">
          <div className="w-[95vw] lg:w-full">
            <div className="flex items-center overflow-hidden w-full">
              <div className="flex gap-4 transition-transform duration-500">
                {collection
                  .slice(currentIndex, currentIndex + cardsToShow)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="relative w-[170px] md:w-[250px] md:h-[300px] flex-shrink-0"
                    >
                      <img
                        className="h-full w-full object-cover hover:scale-[1.1] transition-transform duration-700"
                        src={item.img}
                        alt={item.name}
                      />
                      <div className="absolute left-4 bottom-4 text-white">
                        <p className="text-lg font-semibold mb-2">
                          {item.name}
                        </p>
                        <button
                          className="bg-white text-black px-2 py-2"
                          onClick={() => dispatch(addToCart())}
                        >
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-[2px] transform -translate-y-1/2 bg-gray-50 text-black px-3 py-3 rounded-full"
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-[2px] transform -translate-y-1/2 bg-gray-50 text-black px-3 py-3 rounded-full"
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Celebrities;
