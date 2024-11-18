import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/Slices/CartSlice";
const NewArrivals = () => {
  const dispatch = useDispatch();
  const sarees = [
    {
      id: 1,
      img: "https://cdn.shopaccino.com/onayafashions/products/2-779102459233635_m.jpg",
      title: "PATCH FLORAL ORGANZA SAREE",
    },
    {
      id: 2,
      img: "https://cdn.shopaccino.com/onayafashions/products/2-698150530763165_m.jpg",
      title: " SQUINED ORGANZE SAREE ",
    },
    {
      id: 3,
      img: "https://cdn.shopaccino.com/onayafashions/products/1-561822266541_m.jpg",
      title: "FLORAL NAKSHI ORGANZA",
    },
    {
      id: 4,
      img: "https://cdn.shopaccino.com/onayafashions/products/1-777974399895207_m.jpg?v=521",
      title: "MOTI BANARASI SAREE",
    },
    {
      id: 5,
      img: "https://cdn.shopaccino.com/onayafashions/products/2-698150530763165_m.jpg",
      title: " SQUINED ORGANZE SAREE ",
    },
    {
      id: 6,
      img: "https://cdn.shopaccino.com/onayafashions/products/1-561822266541_m.jpg",
      title: "FLORAL NAKSHI ORGANZA",
    },
    {
      id: 7,
      img: "https://cdn.shopaccino.com/onayafashions/products/1-561822266541_m.jpg",
      title: "FLORAL NAKSHI ORGANZA",
    },
    {
      id: 8,
      img: "https://cdn.shopaccino.com/onayafashions/products/1-561822266541_m.jpg",
      title: "FLORAL NAKSHI ORGANZA",
    },
  ];
  const suits = [
    {
      id: 11,
      img: "https://cdn.shopaccino.com/onayafashions/products/3-13821666920871_m.jpg",
      title: "Cheed Floral Sharara Suit Set ",
    },
    {
      id: 12,
      img: "https://cdn.shopaccino.com/onayafashions/products/2-184952086299052_m.jpg",
      title: " Embroidered Anarkali Suit Set ",
    },
    {
      id: 13,
      img: "https://cdn.shopaccino.com/onayafashions/products/2-399077_m.jpg",
      title: "Chiffon Peplum Sharara Suit Set",
    },
    {
      id: 14,
      img: "https://cdn.shopaccino.com/onayafashions/products/2-713088592103700_m.jpg",
      title: "Bedecked Paisley Anarkali Suit Set",
    },
    {
      id: 15,
      img: "https://cdn.shopaccino.com/onayafashions/products/3-13821666920871_m.jpg",
      title: "Cheed Floral Sharara Suit Set ",
    },
    {
      id: 16,
      img: "https://cdn.shopaccino.com/onayafashions/products/2-184952086299052_m.jpg",
      title: " Embroidered Anarkali Suit Set ",
    },
    {
      id: 17,
      img: "https://cdn.shopaccino.com/onayafashions/products/2-399077_m.jpg",
      title: "Chiffon Peplum Sharara Suit Set",
    },
    {
      id: 18,
      img: "https://cdn.shopaccino.com/onayafashions/products/2-399077_m.jpg",
      title: "Chiffon Peplum Sharara Suit Set",
    },
  ];
  const lehengas = [
    {
      id: 21,
      img: "https://cdn.shopaccino.com/onayafashions/products/21-927006_m.jpg",
      title: "Floral Silk Zari Lehenga Set",
    },
    {
      id: 22,
      img: "https://cdn.shopaccino.com/onayafashions/products/2-900910_m.jpg",
      title: "Silk Kaftan Lehenga Set",
    },
    {
      id: 23,
      img: "https://cdn.shopaccino.com/onayafashions/products/2-174123444456986_m.jpg",
      title: "Organza Zari Lehenga Set",
    },
    {
      id: 24,
      img: "https://cdn.shopaccino.com/onayafashions/products/2-172809858724008_m.jpg",
      title: " Paisley Lehenga Set",
    },
    {
      id: 25,
      img: "https://cdn.shopaccino.com/onayafashions/products/2-689834240605285_m.jpg",
      title: "Three Piece Ombre Lehenga Set",
    },
    {
      id: 26,
      img: "https://cdn.shopaccino.com/onayafashions/products/2-174782310717373_m.jpg",
      title: "Ophelia Lehenga",
    },
    {
      id: 27,
      img: "https://cdn.shopaccino.com/onayafashions/products/2-174123444456986_m.jpg",
      title: "Organza Zari Lehenga Set",
    },
    {
      id: 28,
      img: "https://cdn.shopaccino.com/onayafashions/products/2-689834240605285_m.jpg",
      title: "Three Piece Ombre Lehenga Set",
    },
  ];
  const indowestern = [
    {
      id: 31,
      img: "https://cdn.shopaccino.com/onayafashions/products/2-7071831529856_m.jpg",
      title: "Embellished Bustier Co-Ord Set With Cape",
    },
    {
      id: 32,
      img: "https://cdn.shopaccino.com/onayafashions/products/white-embellished-indo-western-co-ord-set-353761_m.jpg",
      title: "White Embellished Bustier Co-Ord Set With Cape",
    },
    {
      id: 33,
      img: "https://cdn.shopaccino.com/onayafashions/products/2-184421627137821_m.jpg",
      title: "Belize Co-Ord Set",
    },
    {
      id: 34,
      img: "https://cdn.shopaccino.com/onayafashions/products/2-182856886099322_m.jpg",
      title: "Silk Blazer And Dhoti Skirt Co-Ord",
    },
    {
      id: 35,
      img: "https://cdn.shopaccino.com/onayafashions/products/2-182557908563204_m.jpg",
      title: "Abla Co-Ord Set",
    },
    {
      id: 36,
      img: "https://cdn.shopaccino.com/onayafashions/products/2-181601072150812_m.jpg",
      title: "Monosleeve Co-Ord Set",
    },
    {
      id: 37,
      img: "https://cdn.shopaccino.com/onayafashions/products/2-3702561998137_m.jpg",
      title: "Mirror Skirt And Top Co-Ord Set",
    },
    {
      id: 38,
      img: "https://cdn.shopaccino.com/onayafashions/products/2-7071831529856_m.jpg",
      title: "Embellished Bustier Co-Ord Set With Cape",
    },
  ];

  const [active, setActive] = useState("sarees");
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 4;
  const collections = {
    sarees,
    suits,
    lehengas,
    indowestern,
  };
  const collection = collections[active] || [];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsToShow >= collection.length ? 0 : prevIndex + cardsToShow
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(collection.length - cardsToShow, 0)
        : prevIndex - cardsToShow
    );
  };

  return (
    <div className="flex flex-col items-center my-4">
      <h1 className="text-2xl mb-3">New Arrivals</h1>
      <div className="flex items-center gap-3 md:gap-5 mb-3 cursor-pointer ">
        <p
          className={` text-md ${
            active === "sarees"
              ? "text-orange-400 border-b-2 border-b-orange-400"
              : ""
          }`}
          onClick={() => {
            setActive("sarees");
            setCurrentIndex(0);
          }}
        >
          SAREES
        </p>
        <p
          className={` text-md ${
            active === "suits"
              ? "text-orange-400 border-b-2 border-b-orange-400"
              : ""
          }`}
          onClick={() => {
            setActive("suits");
            setCurrentIndex(0);
          }}
        >
          SUITS
        </p>
        <p
          className={` text-md ${
            active === "lehengas"
              ? "text-orange-400 border-b-2 border-b-orange-400"
              : ""
          }`}
          onClick={() => {
            setActive("lehengas");
            setCurrentIndex(0);
          }}
        >
          LEHENGAS
        </p>
        <p
          className={` text-md ${
            active === "indowestern"
              ? "text-orange-400 border-b-2 border-b-orange-400"
              : ""
          }`}
          onClick={() => {
            setActive("indowestern");
            setCurrentIndex(0);
          }}
        >
          INDOWESTERN
        </p>
      </div>

      <div className="flex justify-center">
        <div className="relative w-full flex items-center justify-center overflow-hidden">
          {/* Carousel */}
          <div className="w-[95vw] lg:w-full">
            <div className="flex items-center overflow-hidden w-full">
              <div className="flex gap-4 transition-transform duration-500">
                {collection
                  .slice(currentIndex, currentIndex + cardsToShow)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="relative w-[170px] md:w-[250px] md:h-[350px]  flex-shrink-0"
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

export default NewArrivals;
