import { useState } from "react";

import { NavLink } from "react-router-dom";

const Homeiphonecard = ({ product }) => {
  // console.log(product);
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  //--------------------- popup button ---------------------

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSeeDetailsClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  // -----------------------------upbutton-----------------------------

  const { name, price, image, brand, rating, category } = product;

  return (
    <div className="max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] dark:bg-[#18181B]">
      <img
        className={`h-[275px] w-[350px] rounded-lg object-cover ${
          loading ? "hidden" : ""
        }`}
        src={image}
        alt=""
        onLoad={handleImageLoad}
      />
      <div className="px-6 py-4">
        {/* ----------TITLE AND-----------  */}
        <div className="flex items-center">
          <h2 className="text-lg font-bold text-gray-900">{name}</h2>
        </div>

        {/* ------------ICON----------- */}
        <div className="flex justify-between">
          <div className="flex items-center">
            <img src="https://img.icons8.com/windows/24/null/bedroom.png" />
            <p className="ml-2 text-sm font-medium text-gray-700">{brand}</p>
          </div>
          <div className="flex items-center">
            <img src="https://img.icons8.com/pastel-glyph/24/null/bath--v2.png" />
            <p className="ml-2 text-sm font-medium text-gray-700">{category}</p>
          </div>
        </div>

        <div className="flex justify-around">
          <p className="text-3xl font-extrabold text-blue-800">${price}</p>
          <div className="flex items-center">
            <p className="text-3xl font-extrabold text-blue-800"> {rating}</p>
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
        </div>
      </div>
      {/* --------------- */}

      {/* ---------------BUTTON------------- */}
      <div className="flex justify-center text-center">
        <NavLink to="/product">
          <button
            type="button"
            className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
          >
            Show All Products
          </button>
        </NavLink>
        {/* ------------ see details-----------*/}

        <button
          type="button"
          className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
          onClick={handleSeeDetailsClick}
        >
          See Details
        </button>
      </div>

      {/*------------------- Modal------------------------- */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center">
          {/* --------------cart----------------- */}
          <div className="group bg-gray-900 p-4 transition-all duration-300 hover:rotate-1 lg:p-8">
            <div className="mb-3 text-right">
              <button className="text-gray-50 transition-all duration-300 hover:scale-110 hover:text-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              </button>
            </div>
            <div className="flex items-center gap-x-2">
              <img className="aspect-[2/2] w-48" src={product.image} />
              <div>
                <h3 className="text-xl font-bold text-gray-50">
                  {product.brand}
                </h3>
                <span className="text-xs text-gray-300">New location, USA</span>
              </div>
            </div>
            <div className="my-4">
              <h3 className="text-2xl font-medium text-gray-200">
                {product.name}
              </h3>
              <div className="text-sm font-medium">
                <span className="m-1 ml-0 inline-block text-blue-500">
                  {product.rating}
                </span>

                <span className="m-1 ml-0 inline-block text-pink-500">
                  Technology
                </span>
                <span className="m-1 ml-0 inline-block text-yellow-500">
                  {product.price}$
                </span>
                <span className="m-1 ml-0 inline-block text-blue-500">
                  {product.brand}
                </span>
              </div>
              <div className="mt-2 text-sm text-gray-400">
                {product.description} this day offer
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-50">
                stock: {product.stock}
              </span>
              <a className="font-medium text-blue-500 transition-all duration-300 group-hover:text-blue-500/80">
                {product.category}
              </a>
            </div>
            <div className="text-center items-center justify-center">
              <button
                onClick={closeModal}
                type="button"
                className="focus:outline-none text-red-600 text-sm py-2.5 px-5 rounded-md border border-red-600 hover:bg-red-50 flex items-center"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
                  />
                </svg>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homeiphonecard;
