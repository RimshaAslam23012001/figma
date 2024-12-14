import Navbar1 from "@/app/components/Navbar1";
import React from "react";
import Image from "next/image";
import { FaPrint, FaShare, FaStar } from "react-icons/fa";
import { IoChevronForwardOutline } from "react-icons/io5";

const ShopDetails = () => {
  return (
    <div>
      <Navbar1/>
      {/* Main Hero Section */}
  <section className='w-full bg-[url("/heropic.png")] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
     <div className='container mx-auto px-4'>
       <div className='flex flex-col items-center'>
         <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
           Shop Details
         </h1>
            <p className="text-sm md:text-base lg:text-lg mt-2 flex items-center gap-2">
                    <span className="text-white ">Home</span>
                    <IoChevronForwardOutline className="text-white"/>
                    <span  className="text-[#FF9F0D]">Shop</span>
                  </p>
       </div>
     </div>
   </section>
      <div className="container mx-auto p-4">
        {/* Product Section */}
        <div className=" flex  lg:flex-row bg-white p-6 rounded-lg shadow-lg">
          {/* Image Gallery */}
          <div className=" space-y-4 lg:w-1/3">
            <Image
              alt="Main dish image"
              className="rounded-lg"
              height={400}
              src="/foody.jpeg"
              width={600}
            />
            <div className="flex space-x-4">
              <Image
                alt="Dish image 1"
                className="w-20 h-20 rounded-lg"
                height={100}
                src="/cart1.png"
                width={100}
              />
              <Image
                alt="Dish image 2"
                className="w-20 h-20 rounded-lg"
                height={100}
                src="/cart2.png"
                width={100}
              />
             <Image
                alt="Dish image 3"
                className="w-20 h-20 rounded-lg"
                height={100}
                src="/cart3.png"
                width={100}
              />
             <Image
                alt="Dish image 4"
                className="w-20 h-20 rounded-lg"
                height={100}
                src="/cart4.png"
                width={100}
              />
            </div>
          </div>
          {/* Product Details */}
          <div className="lg:w-2/3 lg:pl-6">
            <h1 className="text-3xl font-bold mb-2">Yummy Chicken Chup</h1>
            <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
            </p>
            <div className="text-2xl font-bold mb-4">54.00$</div>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500">
                <FaStar />
              </span>
              <span className="text-yellow-500">
                <FaStar />
              </span>
              <span className="text-yellow-500">
                <FaStar />
              </span>
              <span className="text-yellow-500">
                <FaStar />
              </span>
              <span className="text-gray-300">
                <FaStar />
              </span>
              <span className="ml-2 text-gray-600">(4 reviews)</span>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="quantity">
                Quantity
              </label>
              <input
                className="w-20 p-2 border rounded-lg"
                id="quantity"
                name="quantity"
                type="number"
              />
            </div>
            <div className="flex space-x-4 mb-4">
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
                Add to Cart
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">
                Add to Wishlist
              </button>
            </div>
            <div className="flex space-x-4 mb-4">
              <button className="text-gray-700">
                <FaShare />
                Share
              </button>
              <button className="text-gray-700">
                <FaPrint />
                Print
              </button>
            </div>
            <div className="text-gray-600 mb-4">
              <p>
                <strong>Category:</strong>
                Plate
              </p>
              <p>
                <strong>Tags:</strong>
                Food
              </p>
            </div>
            <div className="flex space-x-4">
              <button className="text-gray-700">
                <i className="fas fa-heart"></i>
                Add to Wishlist
              </button>
              <button className="text-gray-700">
                <i className="fas fa-exchange-alt"></i>
                Compare
              </button>
            </div>
          </div>
        </div>
        {/* Tabs Section */}
        <div className="bg-white p-6 mt-6 rounded-lg shadow-lg">
          <div className="flex space-x-4 border-b mb-4">
            <button className="text-yellow-500 border-b-2 border-yellow-500 pb-2">
              Description
            </button>
            <button className="text-gray-600 pb-2">Reviews (4)</button>
          </div>
          <div>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
              orci eget ligula vehicula fringilla. Nam eget ligula eget sapien
              sagittis sagittis. Cras non ligula sit amet sapien vehicula
              fringilla. Nam eget ligula eget sapien sagittis sagittis.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Nullam vehicula fringilla felis, et dapibus dolor.</li>
              <li>Nam eget ligula eget sapien sagittis sagittis.</li>
            </ul>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
              orci eget ligula vehicula fringilla. Nam eget ligula eget sapien
              sagittis sagittis. Cras non ligula sit amet sapien vehicula
              fringilla. Nam eget ligula eget sapien sagittis sagittis.
            </p>
          </div>
        </div>
        {/* Similar Products Section */}
        <div className="bg-white p-6 mt-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Similar Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
            <Image
                alt="Fresh Lime"
                className="w-full h-40 object-cover rounded-lg mb-2"
                height={200}
                src="/aboutus.png"
                width={200}
              />
              <h3 className="text-lg font-bold">Fresh Lime</h3>
              <p className="text-gray-600">12.00$</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
            <Image
                alt="Chocolate Muffin"
                className="w-full h-40 object-cover rounded-lg mb-2"
                height={200}
                src="/dessert.png"
                width={200}
              />
              <h3 className="text-lg font-bold">Chocolate Muffin</h3>
              <p className="text-gray-600">8.00$</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
            <Image
                alt="Burger"
                className="w-full h-40 object-cover rounded-lg mb-2"
                height={200}
                src="/bug.png"
                width={200}
              />
              <h3 className="text-lg font-bold">Burger</h3>
              <p className="text-gray-600">15.00$</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
            <Image
                alt="Fresh Lemon"
                className="w-full h-40 object-cover rounded-lg mb-2"
                height={200}
                src="/cart5.png"
                width={200}
              />
              <h3 className="text-lg font-bold">Fresh Lemon</h3>
              <p className="text-gray-600">10.00$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
