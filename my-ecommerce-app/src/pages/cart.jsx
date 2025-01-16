// Import necessary libraries
import React from "react";

const CartPage = () => {
  return (
    <div className="bg-teal-100 min-h-screen p-4">
      {/* Header */}
      <header className="flex items-center justify-between bg-teal-500 p-4 text-white">
        <div className="flex items-center gap-2">
          <img
            src="/path-to-logo.png"
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-xl font-bold">ShopName</h1>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="p-2 rounded-md w-1/3"
        />
        <button className="text-lg font-bold">☰</button>
      </header>

      {/* Cart Items */}
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        {/* Cart Items Section */}
        <div className="md:col-span-2">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md p-4 mb-4 flex gap-4 items-start"
            >
              <img
                src={`/path-to-image-${index + 1}.jpg`}
                alt="Product"
                className="w-24 h-24 rounded-md"
              />
              <div className="flex-grow">
                <h2 className="font-bold text-lg">COORD SETS</h2>
                <p className="text-sm text-gray-600">
                  Comfortable and stylish. Available in various colors.
                </p>
                <p className="font-bold text-red-500">Rs. 1500/-</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-6 h-6 rounded-full bg-purple-500"></span>
                  <span className="w-6 h-6 rounded-full bg-blue-500"></span>
                </div>
              </div>
              <div>
                <input type="checkbox" className="w-6 h-6" />
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="font-bold text-lg mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Items Selected:</span>
            <span>3</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Bag Total:</span>
            <span>4500</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Bag Discount:</span>
            <span>-500</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Delivery Fee:</span>
            <span>60</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Order Total:</span>
            <span>2060</span>
          </div>
          <button className="bg-teal-500 text-white w-full py-2 mt-4 rounded-md">
            CONTINUE
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#66D1CC] text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-6 lg:px-10 text-sm">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-start">
            <img
              src="/pics/sassique logo.png"
              alt="Sassique Logo"
              className="h-16 mb-4"
            />
            <p className="text-sm">
              &copy; 2024 Sassique. All Rights Reserved.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-bold text-lg mb-3">Coord Set</h3>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">Tops</li>
              <li className="hover:underline cursor-pointer">Dresses</li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-bold text-lg mb-3">Home</h3>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">New Arrivals</li>
              <li className="hover:underline cursor-pointer">Bestsellers</li>
              <li className="hover:underline cursor-pointer">About Us</li>
              <li className="hover:underline cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-3">24/7 Service</h3>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">Easy Returns</li>
              <li className="hover:underline cursor-pointer">
                Secure Payments
              </li>
              <li className="hover:underline cursor-pointer">Free Delivery</li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="font-bold text-lg mb-3">Connect With Us</h3>
            <div className="flex items-center w-full mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 text-gray-800 bg-white rounded-l-full focus:outline-none"
              />
              <button className="px-4 py-2 bg-white text-teal-700 rounded-r-full hover:bg-gray-200">
                →
              </button>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <img src="/pics/@.png" alt="Email" className="w-5 h-5 mr-2" />
                <a
                  href="mailto:sassiqueofficial@gmail.com"
                  className="hover:underline"
                >
                  sassiqueofficial@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <img
                  src="/pics/instagram.png"
                  alt="Instagram"
                  className="w-5 h-5 mr-2"
                />
                <a
                  href="https://instagram.com/sassique.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  sassique.official
                </a>
              </li>
              <li className="flex items-center">
                <img
                  src="/pics/whatsapp.png"
                  alt="Website"
                  className="w-5 h-5 mr-2"
                />
                <a
                  href="https://www.sassiqueofficial.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  www.sassiqueofficial.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CartPage;
  