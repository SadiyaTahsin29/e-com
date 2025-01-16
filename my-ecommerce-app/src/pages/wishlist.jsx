import React from "react";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-[#66D1CC] text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-6 lg:px-10">
          <img
            src="/pics/sassique-logo.png"
            alt="Sassique Logo"
            className="h-12"
          />
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 rounded-full text-gray-800 w-1/3 focus:outline-none"
          />
          <button className="text-white hover:underline">Menu</button>
        </div>
      </header>

      {/* Product List */}
      <main className="flex-grow bg-gray-50 py-10">
        <div className="container mx-auto px-6 lg:px-10 grid gap-6">
          {/* Product Card */}
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row gap-4"
            >
              <img
                src={`/pics/product-${index + 1}.png`}
                alt={`Product ${index + 1}`}
                className="h-48 w-full md:w-48 object-cover rounded-md"
              />
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">COORD SETS</h2>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="w-5 h-5 bg-red-500 rounded-full"></span>
                    <span className="w-5 h-5 bg-blue-500 rounded-full"></span>
                    <span className="w-5 h-5 bg-yellow-500 rounded-full"></span>
                  </div>
                  <button className="bg-[#66D1CC] text-white px-4 py-2 rounded-md hover:bg-[#55b8b1]">
                    Get Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#66D1CC] text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-6 lg:px-10 text-sm">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-start">
            <img
              src="/pics/sassique-logo.png"
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

export default App;
