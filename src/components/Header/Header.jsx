import React, { useState } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import logo from "../../assets/onaya-logo.png";
import { useSelector } from "react-redux";
import { MdMenu, MdClose, MdChevronRight } from "react-icons/md";
const Header = () => {
  const [showShiiping, setShowShipping] = useState(true);
  const [searchClick, setSearchClick] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartValue = useSelector((state) => state.cart);

  return (
    <>
      {/* For all large devices */}
      <div
        className={`text-center bg-gray-200 py-2 justify-between md:justify-center items-center hidden lg:flex ${
          showShiiping ? "block" : "hidden"
        } `}
      >
        Free Shipping Worldwide | For customizations & other queries, please
        reach out to +91 8334000666
        <p className="block md:hidden" onClick={() => setShowShipping(false)}>
          <IoMdClose />
        </p>
      </div>
      <header className="mb-2 lg:flex items-center justify-between hidden ">
        <div className="flex md:items-center md:gap-12 gap-4 lg:px-40 lg:py-3">
          <div className="flex items-center">
            <img src={logo} alt="" className="h-12" />
          </div>
          <nav className="lg:flex items-center gap-8 ml-8 text-xs hidden">
            <p>HOME</p>
            {/* Add this where you want the dropdown to appear */}
            <div className="relative group">
              <p className="flex items-center gap-1 cursor-pointer">
                SHOP <FaChevronDown />
              </p>

              {/* Dropdown Content */}
              <div className="absolute hidden group-hover:block bg-white shadow-sm -left-20 top-full z-50 w-full min-w-[1000px] py-8 mt-3">
                <div className="grid grid-cols-3 gap-16 px-20">
                  {/* Shop By Category Column */}
                  <div>
                    <h3 className="text-base font-normal border-b pb-2 mb-6">
                      Shop By Category
                    </h3>
                    <div className="flex flex-col gap-4">
                      <a
                        href="#"
                        className="text-gray-600 hover:text-black text-sm"
                      >
                        Sarees
                      </a>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-black text-sm"
                      >
                        Drape Sarees
                      </a>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-black text-sm"
                      >
                        Suit Sets
                      </a>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-black text-sm"
                      >
                        Gowns
                      </a>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-black text-sm"
                      >
                        Indo Western
                      </a>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-black text-sm"
                      >
                        Lehenga
                      </a>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-black text-sm"
                      >
                        Under-15K
                      </a>
                    </div>
                  </div>

                  {/* Shop By Occasion Column */}
                  <div>
                    <h3 className="text-base font-normal border-b pb-2 mb-6">
                      Shop By Occasion
                    </h3>
                    <div className="flex flex-col gap-4">
                      <a
                        href="#"
                        className="text-gray-600 hover:text-black text-sm"
                      >
                        Haldi
                      </a>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-black text-sm"
                      >
                        Mehendi
                      </a>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-black text-sm"
                      >
                        Sangeet
                      </a>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-black text-sm"
                      >
                        Cocktail
                      </a>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-black text-sm"
                      >
                        Trousseau
                      </a>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-black text-sm"
                      >
                        Engagement
                      </a>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div>
                    <img
                      src="https://cdn.shopaccino.com/onayafashions/categories/menu/95a7909640x640-403368_l.jpg?v=521"
                      alt="Shop Collection"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <p>VIDEO CALL APPOINTMENT</p>
            <p>CONTACT US</p>
            <p>SEADY TO SHIP</p>
            <p>BESTSELLER</p>
            <div className="relative">
              <p
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                INR <FaChevronDown />
              </p>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded shadow-lg w-32 z-50">
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      USD
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      EUR
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      GBP
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </nav>
          <div className="flex items-center md:gap-4 md:ml-4 lg:gap-8 text-xl lg:ml-8">
            <p>
              {searchClick ? (
                <IoMdClose onClick={() => setSearchClick(!searchClick)} />
              ) : (
                <CiSearch onClick={() => setSearchClick(!searchClick)} />
              )}
            </p>
            <div>
              <div className="flex items-center gap-4">
                <p>
                  <CiHeart />
                </p>
                <p
                  onClick={() => setShowModal(true)}
                  className="cursor-pointer"
                >
                  <CgProfile />
                </p>
              </div>

              {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-sm md:max-w-md mx-4">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-lg md:text-xl font-light">Login</h2>
                      <button
                        onClick={() => setShowModal(false)}
                        className="text-lg md:text-xl"
                      >
                        &times;
                      </button>
                    </div>
                    <form>
                      <div className="mb-4">
                        <input
                          type="email"
                          placeholder="Email"
                          className="w-full px-3 py-2 md:px-4 md:py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                        />
                      </div>
                      <div className="mb-4 relative">
                        <input
                          type="password"
                          placeholder="Password"
                          className="w-full px-3 py-2 md:px-4 md:py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                        />
                        <span className="absolute right-3 top-3 cursor-pointer">
                          👁️
                        </span>
                      </div>
                      <div className="mb-4 text-right">
                        <a
                          href="#"
                          className="text-gray-600 hover:underline text-sm md:text-base"
                        >
                          Forgot Password?
                        </a>
                      </div>
                      <button className="w-full bg-black text-white py-2 rounded-lg mb-4">
                        SUBMIT
                      </button>
                    </form>
                    <div className="border-t pt-4 text-center">
                      <p className="text-gray-600 text-sm md:text-base">
                        Don't have an account?{" "}
                        <button className="text-black hover:underline">
                          SIGN UP
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <p className="relative">
              <CiShoppingCart />
              <p className=" bg-black rounded-full w-4 h-4 flex items-center justify-center text-white absolute top-[-10px] text-xs right-[-2px]">
                {cartValue}
              </p>
            </p>
          </div>
        </div>
      </header>
      <div className="hidden md:block">
        <div className={`flex justify-center ${searchClick ? "" : "hidden"}`}>
          <div className="border-[3px] border-black flex items-center px-2 text-lg">
            <input
              type="text"
              placeholder="Search here"
              className="py-1 px-2 w-[20rem]"
            />
            <FaSearch />
          </div>
        </div>
      </div>

      {/* For small and medium devices */}
      <>
        <div
          className={`lg:hidden text-center bg-gray-200 py-2  flex justify-between md:justify-center items-center ${
            showShiiping ? "block" : "hidden"
          } `}
        >
          Free Shipping Worldwide | For customizations & other queries, please
          reach out to +91 8334000666
          <p className="block md:hidden" onClick={() => setShowShipping(false)}>
            <IoMdClose />
          </p>
        </div>
        <div className="lg:hidden flex justify-between items-center px-1 md:px-12 my-2">
          <div className="flex items-center">
            <div className="block lg:hidden text-lg">
              <div className="relative">
                {/* Hamburger Menu Icon */}
                <div className="block lg:hidden text-5xl">
                  <MdMenu
                    onClick={() => setIsMenuOpen(true)}
                    className="text-4xl"
                  />
                </div>

                {/* Menu Panel */}
                {isMenuOpen && (
                  <div className="fixed top-0 left-0 w-full h-screen bg-white z-50">
                    {/* Top Section */}
                    <div className="p-4 flex justify-between items-center">
                      {/* <select className="text-2xl font-normal border-0 outline-none appearance-none pr-8 relative">
                        <option value="INR">INR</option>
                        <option value="INR">INR</option>
                        <option value="INR">INR</option>
                      </select> */}
                      <button
                        className="text-2xl p-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        ✕
                      </button>
                    </div>

                    {/* Authentication Links */}
                    <div className="flex justify-center items-center text-xl font-light py-1">
                      <a href="/login" className="underline underline-offset-4">
                        LOGIN
                      </a>
                      <span className="mx-4">|</span>
                      <a
                        href="/signup"
                        className="underline underline-offset-4"
                      >
                        SIGNUP
                      </a>
                    </div>

                    {/* Navigation Links */}
                    <nav className="mt-1">
                      <ul className="flex flex-col space-y-0 px-4">
                        <li className="border-b border-gray-200 py-4">
                          <a href="/" className="text-md font-light">
                            Home
                          </a>
                        </li>
                        <li className="flex justify-between items-center border-b border-gray-200 py-4">
                          <a href="/shop" className="text-md font-light">
                            Shop
                          </a>
                          <span className="text-2xl cursor-pointer">›</span>
                        </li>
                        <li className="border-b border-gray-200 py-4">
                          <a href="/video-call" className="text-md font-light">
                            Video Call
                            <br />
                            Appointment
                          </a>
                        </li>
                        <li className="border-b border-gray-200 py-4">
                          <a href="/contact" className="text-md font-light">
                            Contact Us
                          </a>
                        </li>
                        <li className="border-b border-gray-200 py-4">
                          <a
                            href="/ready-to-ship"
                            className="text-md font-light"
                          >
                            Ready to ship
                          </a>
                        </li>
                        <li className="py-4">
                          <a href="/bestseller" className="text-md font-light">
                            Bestseller
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                )}
              </div>
            </div>
            <img src={logo} alt="" className="h-12" />
          </div>
          <div className="flex items-center gap-2 md:gap-4 md:ml-4 lg:gap-8 text-2xl lg:ml-8">
            <p>
              {searchClick ? (
                <IoMdClose onClick={() => setSearchClick(!searchClick)} />
              ) : (
                <CiSearch onClick={() => setSearchClick(!searchClick)} />
              )}
            </p>
            <p>
              <CiHeart />
            </p>
            <div>
              <div className="flex items-center gap-4">
                <p
                  onClick={() => setShowModal(true)}
                  className="cursor-pointer"
                >
                  <CgProfile />
                </p>
              </div>

              {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-sm md:max-w-md mx-4">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-lg md:text-xl font-light">Login</h2>
                      <button
                        onClick={() => setShowModal(false)}
                        className="text-lg md:text-xl"
                      >
                        &times;
                      </button>
                    </div>
                    <form>
                      <div className="mb-4">
                        <input
                          type="email"
                          placeholder="Email"
                          className="w-full px-3 py-2 md:px-4 md:py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                        />
                      </div>
                      <div className="mb-4 relative">
                        <input
                          type="password"
                          placeholder="Password"
                          className="w-full px-3 py-2 md:px-4 md:py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                        />
                        <span className="absolute right-3 top-3 cursor-pointer">
                          👁️
                        </span>
                      </div>
                      <div className="mb-4 text-right">
                        <a
                          href="#"
                          className="text-gray-600 hover:underline text-sm md:text-base"
                        >
                          Forgot Password?
                        </a>
                      </div>
                      <button className="w-full bg-black text-white py-2 rounded-lg mb-4">
                        SUBMIT
                      </button>
                    </form>
                    <div className="border-t pt-4 text-center">
                      <p className="text-gray-600 text-sm md:text-base">
                        Don't have an account?{" "}
                        <button className="text-black hover:underline">
                          SIGN UP
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <p className="relative">
              <CiShoppingCart />
              <p className=" bg-black rounded-full w-4 h-4 flex items-center justify-center text-white absolute top-[-10px] text-sm right-[-2px]">
                {cartValue}
              </p>
            </p>
          </div>
        </div>
        <div
          className={`flex md:hidden justify-center ${
            searchClick ? "" : "hidden"
          }`}
        >
          <div className="border-[3px] border-black flex items-center px-3">
            <input
              type="text"
              placeholder="Search here"
              className="py-1 px-2 w-[20rem]"
            />
            <FaSearch />
          </div>
        </div>
      </>
    </>
  );
};

export default Header;
