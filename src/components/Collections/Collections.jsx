import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/Slices/CartSlice";
const Collections = () => {
  // State to manage the active index
  const [currentIndex, setCurrentIndex] = useState(0);

  const dispatch = useDispatch();

  // Collection data
  const collection = [
    {
      id: 1,
      img: "https://cdn.shopaccino.com/onayafashions/categories/2-738045_s.jpg?v=521",
      title: "Saree",
    },
    {
      id: 2,
      img: "https://cdn.shopaccino.com/onayafashions/categories/3-786894_s.jpg?v=521",
      title: "Gowns",
    },
    {
      id: 3,
      img: "https://cdn.shopaccino.com/onayafashions/categories/1-448787_s.jpg?v=521",
      title: "Lehenga",
    },
    {
      id: 4,
      img: "https://cdn.shopaccino.com/onayafashions/categories/4-259586_s.jpg?v=521",
      title: "Indo Western",
    },
    {
      id: 5,
      img: "https://cdn.shopaccino.com/onayafashions/categories/5-456088_s.jpg?v=521",
      title: "Kurta",
    },
    {
      id: 6,
      img: "https://cdn.shopaccino.com/onayafashions/categories/3-786894_s.jpg?v=521",
      title: "Blouse",
    },
    {
      id: 7,
      img: "https://cdn.shopaccino.com/onayafashions/categories/4-259586_s.jpg?v=521",
      title: "Ethnic Wear",
    },
    {
      id: 8,
      img: "https://cdn.shopaccino.com/onayafashions/categories/2-738045_s.jpg?v=521",
      title: "Accessories",
    },
  ];

  // Total cards to show at a time
  const cardsToShow = 4;

  // Handler for Next button
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsToShow >= collection.length ? 0 : prevIndex + cardsToShow
    );
  };

  // Handler for Previous button
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(collection.length - cardsToShow, 0)
        : prevIndex - cardsToShow
    );
  };

  return (
    <div className="flex flex-col items-center my-4">
      <h1 className="text-2xl mb-3">Shop by Collection</h1>

      <div className="flex justify-center">
        <div className="relative w-full flex items-center justify-center overflow-hidden">
          {/* Carousel */}
          <div className="w-[95vw] md:w-full">
            <div className="flex items-center overflow-hidden w-full">
              <div className="flex gap-4 transition-transform duration-500">
                {collection
                  .slice(currentIndex, currentIndex + cardsToShow)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="relative w-[170px] md:w-[250px] md:h-[300px]  flex-shrink-0"
                    >
                      <img
                        className="h-full w-full object-cover hover:scale-[1.1] transition-transform duration-700"
                        src={item.img}
                        alt={item.title}
                      />
                      <div className="absolute left-4 bottom-4 text-white">
                        <p className="text-lg font-semibold mb-2">
                          {item.title}
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

export default Collections;
