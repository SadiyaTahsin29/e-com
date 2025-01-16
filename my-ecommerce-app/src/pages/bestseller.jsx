import React from "react";

const products = [
  {
    id: 1,
    name: "Co-ord Set",
    price: "₹6589",
    image: "image1.jpg",
    label: "Hot",
  },
  {
    id: 2,
    name: "Midi Summer Dress",
    price: "₹5500",
    image: "image2.jpg",
    label: "New",
  },
  {
    id: 3,
    name: "Classic Blazer",
    price: "₹10000",
    image: "image3.jpg",
    label: "Hot",
  },
  {
    id: 4,
    name: "Floral Top",
    price: "₹4000",
    image: "image4.jpg",
    label: "Sale",
  },
  {
    id: 5,
    name: "Denim Jacket",
    price: "₹7000",
    image: "image5.jpg",
    label: "New",
  },
  {
    id: 6,
    name: "Casual Shirt",
    price: "₹4500",
    image: "image6.jpg",
    label: "Trending",
  },
  {
    id: 7,
    name: "Elegant Dress",
    price: "₹8500",
    image: "image7.jpg",
    label: "Hot",
  },
  {
    id: 8,
    name: "Summer Jumpsuit",
    price: "₹6000",
    image: "image8.jpg",
    label: "New",
  },
  {
    id: 9,
    name: "Formal Pants",
    price: "₹5000",
    image: "image9.jpg",
    label: "Sale",
  },
  {
    id: 10,
    name: "Cozy Sweater",
    price: "₹6000",
    image: "image10.jpg",
    label: "Trending",
  },
  {
    id: 11,
    name: "Chic Skirt",
    price: "₹4500",
    image: "image11.jpg",
    label: "Hot",
  },
  {
    id: 12,
    name: "Casual Tee",
    price: "₹3500",
    image: "image12.jpg",
    label: "New",
  },
  {
    id: 13,
    name: "Party Dress",
    price: "₹12000",
    image: "image13.jpg",
    label: "Hot",
  },
  {
    id: 14,
    name: "Classic Coat",
    price: "₹15000",
    image: "image14.jpg",
    label: "Trending",
  },
  {
    id: 15,
    name: "Workout Set",
    price: "₹6500",
    image: "image15.jpg",
    label: "New",
  },
];

const Bestsellers = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <header className="bg-gray-100 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Bestsellers</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-full px-4 py-2 w-64"
            />
          </div>
        </div>
      </header>

      {/* Product Grid */}
      <main className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden relative"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600">{product.price}</p>
              </div>
              <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-sm rounded">
                {product.label}
              </div>
              <button className="absolute top-2 right-2 bg-gray-100 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.164 6.675a1 1 0 00.95.69h7.011c.97 0 1.371 1.24.588 1.81l-5.689 4.123a1 1 0 00-.364 1.118l2.165 6.675c.3.921-.755 1.688-1.54 1.118l-5.689-4.122a1 1 0 00-1.176 0l-5.689 4.122c-.785.57-1.84-.197-1.54-1.118l2.165-6.675a1 1 0 00-.364-1.118L2.93 11.102c-.783-.57-.382-1.81.588-1.81h7.011a1 1 0 00.95-.69l2.164-6.675z"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </main>

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
            <p >&copy; 2024 Sassique. All Rights Reserved.</p>
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
};

export default Bestsellers;
