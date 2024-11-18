import React, { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa";
const Footer = () => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  return (
    <>
      {/* // For medium and large devices */}
      <div className="hidden md:flex py-2 px-[40px] items-center justify-evenly bg-[#F8F8F8]">
        <div className="w-[300px] justify-start">
          <p className="text-lg mb-3">ONAYA FASHIONS PVT. LTD.</p>
          <p>
            At Onaya, our talented weavers create hundreds of unique ensemle
            every day.
          </p>
          <p>
            Our meticulous detailing and eye for flawless perfection, paired
            with our sincerity and dedication to procure the highest-quality
            fabrics,
          </p>
          <div className="flex space-x-4 mb-6">
            <a href="#" className="text-blue-600">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-pink-600">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
        <div>
          <p className="mb-3">INFORMATION</p>
          <p>About Us</p>
          <p>Onaya Foundation</p>
          <p>Testimonials</p>
          <p>Garment Contruction</p>
          <p>Alteration</p>
          <p>Blog</p>
        </div>
        <div>
          <p className="mb-3">SHOP</p>
          <p>Sarees</p>
          <p>Suits</p>
          <p>Lehenga</p>
          <p>Drape</p>
          <p>Indo Western</p>
          <p>Under 12K</p>
        </div>
        <div>
          <p className="mb-3">Customer Searvice</p>
          <p>Contact</p>
          <p>FAQs</p>
          <p>Shipping Policy</p>
          <p>Refund Policy</p>
          <p>Cancellation</p>
          <p>Track order</p>
        </div>
      </div>
      {/* // For Small Devices */}
      <div className="md:hidden">
        <footer className="bg-gray-100 py-8 px-4">
          {/* Company Info - Always visible on mobile */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">
              ONAYA FASHIONS PVT. LTD.
            </h2>
            <p className="text-sm text-gray-700 mb-4">
              At Onaya, our talented weavers create hundreds of unique ensemble
              every day.
            </p>
            <p className="text-sm text-gray-700 mb-4 justify-start">
              Our meticulous detailing and eye for flawless perfection, paired
              with our sincerity and dedication to procure the highest-quality
              fabrics,
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-blue-600">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-pink-600">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Information Section */}
          <div className="border-t border-gray-200">
            <div
              className="py-4 flex justify-between items-center cursor-pointer"
              onClick={() => setIsInfoOpen(!isInfoOpen)}
            >
              <h2 className="text-lg font-semibold">INFORMATION</h2>
              {isInfoOpen ? <FaMinus /> : <FaPlus />}
            </div>
            {isInfoOpen && (
              <ul className="space-y-3 pb-4">
                <li>
                  <a href="#" className="text-sm text-gray-700">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-700">
                    Onaya Foundation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-700">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-700">
                    Garment Construction
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-700">
                    Alteration
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-700">
                    Blog
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* Shop Section */}
          <div className="border-t border-gray-200">
            <div
              className="py-4 flex justify-between items-center cursor-pointer"
              onClick={() => setIsShopOpen(!isShopOpen)}
            >
              <h2 className="text-lg font-semibold">SHOP</h2>
              {isShopOpen ? <FaMinus /> : <FaPlus />}
            </div>
            {isShopOpen && (
              <ul className="space-y-3 pb-4">
                <li>
                  <a href="#" className="text-sm text-gray-700">
                    Sarees
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-700">
                    Suits
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-700">
                    Lehenga
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-700">
                    Drape
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-700">
                    Indo Western
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-700">
                    Under 12k
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* Customer Service Section */}
          <div className="border-t border-gray-200">
            <div
              className="py-4 flex justify-between items-center cursor-pointer"
              onClick={() => setIsServiceOpen(!isServiceOpen)}
            >
              <h2 className="text-lg font-semibold">CUSTOMER SERVICE</h2>
              {isServiceOpen ? <FaMinus /> : <FaPlus />}
            </div>
            {isServiceOpen && (
              <ul className="space-y-3 pb-4">
                <li>
                  <a href="#" className="text-sm text-gray-700">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-700">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-700">
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-700">
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-700">
                    Cancellation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-700">
                    Track Order
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-200 mt-6 pt-6">
            <div className="flex flex-col space-y-4">
              <div className="flex justify-center space-x-4">
                <img
                  src="https://www.onaya.in/img/maestro-card.svg?v=1"
                  alt="COD"
                  className="h-6"
                />
                <img
                  src="https://www.onaya.in/img/cash-on-delivery.png?v=1"
                  alt="Mastercard"
                  className="h-6"
                />
                <img
                  src="	https://www.onaya.in/img/master-cart.svg?v=1"
                  alt="Visa"
                  className="h-6"
                />
                <img
                  src="https://www.onaya.in/img/visa-card.svg?v=1"
                  alt="Net Banking"
                  className="h-6"
                />
              </div>
              <p className="text-xs text-center text-gray-600">
                Copyright © 2024 Onaya. All Rights Reserved.
              </p>
              <div className="flex justify-center space-x-2 text-xs text-gray-600">
                <a href="#" className="underline">
                  Terms & Conditions
                </a>
                <span>|</span>
                <a href="#" className="underline">
                  Privacy Policy
                </a>
              </div>
              <p className="text-xs text-center text-gray-600">
                Powered by Shopaccino
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
