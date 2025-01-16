import React from "react";

const App = () => {
  const similarProducts = [
    {
      id: 1,
      name: "Comfy Blue Coord Set",
      price: 1500,
      discount: "25% OFF",
      image: "/images/product1.jpg",
    },
    {
      id: 2,
      name: "Comfy Pink Coord Set",
      price: 1500,
      discount: "25% OFF",
      image: "/images/product2.jpg",
    },
    {
      id: 3,
      name: "Comfy Green Coord Set",
      price: 1500,
      discount: "25% OFF",
      image: "/images/product3.jpg",
    },
    {
      id: 4,
      name: "Comfy Yellow Coord Set",
      price: 1500,
      discount: "25% OFF",
      image: "/images/product4.jpg",
    },
  ];

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-gray-100 p-4 flex items-center justify-between">
        <img src="/logo.png" alt="Logo" className="h-8" />
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded-md flex-grow mx-4"
        />
        <div className="flex items-center space-x-4">
          <button className="p-2 bg-blue-500 text-white rounded-md">
            Cart
          </button>
          <button className="p-2 bg-green-500 text-white rounded-md">
            Profile
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Product Details Section */}
        <div className="grid grid-cols-2 gap-6">
          {/* Product Images */}
          <div className="space-y-4">
            <img
              src="/images/product-main.jpg"
              alt="Main product"
              className="rounded-md"
            />
            <div className="flex space-x-2">
              <img
                src="/images/product-thumb1.jpg"
                alt="Thumb 1"
                className="w-20 h-20 rounded-md"
              />
              <img
                src="/images/product-thumb2.jpg"
                alt="Thumb 2"
                className="w-20 h-20 rounded-md"
              />
              <img
                src="/images/product-thumb3.jpg"
                alt="Thumb 3"
                className="w-20 h-20 rounded-md"
              />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-2xl font-bold">COORD SET</h1>
            <p className="text-gray-600">Stylish and comfortable 2-piece set</p>
            <p className="text-lg font-semibold mt-4">Rs. 1500/-</p>
            <p className="text-sm text-green-500">25% OFF</p>
            <div className="mt-4">
              <span className="block text-gray-700">Available Colors:</span>
              <div className="flex space-x-2 mt-2">
                <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                <div className="w-6 h-6 rounded-full bg-pink-500"></div>
                <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
              </div>
            </div>
            <div className="mt-4">
              <button className="p-2 bg-blue-500 text-white rounded-md mr-2">
                Add to Bag
              </button>
              <button className="p-2 bg-green-500 text-white rounded-md">
                Buy Now
              </button>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-semibold">Product Description</h2>
              <p className="text-gray-700 mt-2">
                Elevate your style with this Coord Set. Designed for comfort and
                versatility. This matching pant and shirt combination is perfect
                for casual outings, date nights, or even a stylish addition to
                your wardrobe.
              </p>
            </div>
          </div>
        </div>

        {/* Similar Products Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold">Similar Products</h2>
          <div className="grid grid-cols-4 gap-4 mt-4">
            {similarProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-md p-4 hover:shadow-md transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded-md"
                />
                <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                <p className="text-gray-600">Rs. {product.price}/-</p>
                <p className="text-sm text-green-500">{product.discount}</p>
              </div>
            ))}
          </div>
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
};

export default App;
