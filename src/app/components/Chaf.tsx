import React from "react";
import Image from "next/image";
import Link from "next/link";

const Chef = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-12">
      {/* Title Section */}
      <div className="text-center text-white mb-12">
        <h2 className="text-yellow-500 text-2xl mb-2">Chefs</h2>
        <h1 className="text-3xl sm:text-4xl font-bold">
          <span className="text-yellow-500">Meet </span>Our Chef
        </h1>
      </div>

      {/* Chef Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <Image
            alt="Chef D. Estwood"
            className="w-full h-50 object-cover"
            src="/chef1.png"
            width={312}
            height={391}
          />
        </div>
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <Image
            alt="Chef D. Scoreish"
            className="w-full h-50 object-cover"
            src="/chef2.png"
            width={312}
            height={391}
          />
        </div>
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <Image
            alt="Chef M. William"
            className="w-full h-50 object-cover"
            src="/chef3.png"
            width={312}
            height={391}
          />
        </div>
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <Image
            alt="Chef W. Readfroad"
            className="w-full h-50 object-cover"
            src="/chef4.png"
            width={312}
            height={391}
          />
        </div>
      </div>

      {/* See More Button */}
      <div className="text-center  mt-12">
        <Link href="/OurChef">
          <button className="text-white px-6 py-2 border border-yellow-500 rounded-full font-semibold hover:text-yellow-500 transition duration-300">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Chef;
