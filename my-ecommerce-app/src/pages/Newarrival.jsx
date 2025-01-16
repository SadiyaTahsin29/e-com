import React from "react";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <header className="relative">
        <img
          src="/path/to/your/image.png" // Replace with the correct path to your image
          alt="New Arrivals Banner"
          className="w-full object-cover h-80 sm:h-[500px]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white">
            New Arrivals
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100">
        <div className="container mx-auto py-10 px-6">
          <h2 className="text-2xl font-bold mb-6">Shop the Latest Trends</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Example Product Cards */}
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={`/path/to/product-image-${index + 1}.jpg`}
                  alt={`Product ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Product Name</h3>
                  <p className="text-gray-600">$49.99</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer Section */}
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

export default App;
