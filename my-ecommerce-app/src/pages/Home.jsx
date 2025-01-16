import React, { useState } from "react";
import '../App.css';  // Use relative path to go up one directory

function App() {
  // State for dropdown visibility
  const [menuDropdownVisible, setMenuDropdownVisible] = useState(false);

  // Function to toggle menu dropdown visibility
  const toggleMenuDropdown = () => {
    setMenuDropdownVisible((prev) => !prev);
  };

  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      {/* Header Section */}
      <header
        className="relative h-screen flex items-center justify-between px-10"
        style={{
          backgroundImage: "url(/pics/bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left Side: Hero Text */}
        <div className="flex-1">
          <h1 className="hero-title text-6xl font-bold leading-tight text-gray-800">
            Fall in Love <br /> With Fashion.
          </h1>
        </div>

        {/* Right Side: Model Image */}
        <div className="flex-1 relative">
          <img
            src="/pics/model.png"
            alt="Model"
            className="absolute bottom-0 right-0 h-[80vh] object-cover"
          />
        </div>

        {/* Top Header Navigation */}
        <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-6">
          {/* Logo */}
          <img
            src="/pics/sassique logo.png"
            alt="Logo"
            className="w-12 h-12 hover:scale-105 transition-transform duration-200"
          />

          {/* Centered Search Bar */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-3/4">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full px-4 py-2 pl-10 border-2 border-white rounded-xl bg-transparent focus:outline-none focus:ring-0 placeholder-gray-500"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">
              {/* Search Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 2a8 8 0 106.32 12.906l5.387 5.387a1 1 0 001.415-1.414l-5.387-5.387A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
              </svg>
            </span>
          </div>

          {/* Menu Icon */}
          <div className="relative">
            <button
              onClick={toggleMenuDropdown}
              className="cursor-pointer flex items-center justify-center w-10 h-10"
            >
              <svg
                className="w-8 h-8 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {menuDropdownVisible && (
              <ol className="absolute right-0 mt-2 w-40 bg-teal rounded-lg shadow-lg z-10">
                <li className="flex items-center px-4 py-2 hover:bg-teal-200 hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
                  Profile
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-teal-200 hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
                  Bag
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-teal-200 hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
                  Wishlist
                </li>
              </ol>
            )}
          </div>
        </div>
      </header>

      {/* New Arrivals */}
      <section className="mt-20 px-10">
        <h2 className="text-4xl font-bold text-teal-700 text-center mb-10">
          NEW ARRIVALS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "COZY LOUNGEWEAR SET",
              image: "/pics/comfy9.png",
              price: 1500,
            },
            {
              name: "TRENDY PINK BLAZER",
              image: "/pics/comfy10.png",
              price: 2400,
            },
            {
              name: "LIGHT BLUE CO-ORDS",
              image: "/pics/comfy11.png",
              price: 2000,
            },
          ].map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-68 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600 font-bold">Rs {product.price}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition duration-300">
            View Collection
          </button>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="mt-20 px-10 bg-[#BDE7E7] py-10">
        <h2 className="text-4xl font-bold text-teal-700 text-center mb-10 font-shrikhand">
          BESTSELLERS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Large Image with Quote */}
          <div className="col-span-1 md:col-span-2 relative">
            <img
              src="/pics/large.jpg"
              alt="Fashion Vibe"
              className="w-full h-[400px] md:h-[800px] object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-4xl md:text-6xl font-bold bg-black bg-opacity-40 font-bayon">
              “FASHION THAT FITS YOUR VIBE.”
            </div>
          </div>
          {/* Two Stacked Smaller Images */}
          <div className="grid grid-rows-2 gap-4">
            <img
              src="/pics/large2.png"
              alt="Yellow Dress"
              className="w-full h-[195px] md:h-[395px] object-cover rounded-xl transition-transform duration-300 hover:scale-105"
            />
            <img
              src="/pics/large3.jpg"
              alt="White Top"
              className="w-full h-[195px] md:h-[395px] object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
        {/* View Collection Button */}
        <div className="mt-8 text-center">
          <button className="bg-teal-700 text-white px-6 py-3 rounded-lg text-lg font-bayon hover:bg-teal-600 transition duration-300">
            View Collection
          </button>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="bg-[#66D1CC] text-white py-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 px-10 text-sm">
          {/* Logo Section */}
          <div className="flex flex-col items-start">
            <img
              src="/pics/sassique logo.png"
              alt="Logo"
              className="h-16 mb-4"
            />
            <p>&copy; 2024 Sassique. All Rights Reserved.</p>
          </div>

          {/* Links: Shop */}
          <div>
            <h3 className="font-semibold mb-2">Coord set</h3>
            <ul>
              <li className="mb-1">Tops</li>
              <li>Dresses</li>
            </ul>
          </div>

          {/* Links: Navigation */}
          <div>
            <h3 className="font-semibold mb-2">Home</h3>
            <ul>
              <li className="mb-1">New arrivals</li>
              <li className="mb-1">Bestsellers</li>
              <li>About us</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Service Info */}
          <div>
            <h3 className="font-semibold mb-2">24/7 service</h3>
            <ul>
              <li className="mb-1">Easy returns</li>
              <li className="mb-1">Secure payments</li>
              <li>Free delivery</li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-start">
            <h3 className="font-semibold mb-2">Connect with us</h3>
            <div className="flex items-center w-full mb-4">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-2 text-gray-800 bg-white rounded-l-full focus:outline-none"
              />
              <button className="px-4 py-2 bg-white text-teal-700 rounded-r-full hover:bg-gray-200">
                →
              </button>
            </div>
            <ul className="text-gray-800">
              <li className="flex items-center mb-2">
                <img src="/pics/@.png" alt="Email" className="w-4 h-4 mr-2" />
                sassiqueofficial@gmail.com
              </li>
              <li className="flex items-center mb-2">
                <img
                  src="/pics/instagram.png"
                  alt="Instagram"
                  className="w-4 h-4 mr-2"
                />
                sassique.official
              </li>
              <li className="flex items-center">
                <img
                  src="/pics/whatsapp.png"
                  alt="Website"
                  className="w-4 h-4 mr-2"
                />
                www.sassiqueofficial
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
