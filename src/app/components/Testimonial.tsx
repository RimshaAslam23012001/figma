import React from "react";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-12">
      {/* Title Section */}
      <div className="text-center mb-22">
        <h2 className="text-yellow-500 text-3xl sm:text-4xl font-semibold mb-2">
          Testimonials
        </h2>
        <h3 className="text-white text-xl sm:text-3xl font-bold">
          What our clients are saying
        </h3>
      </div>

      {/* Testimonial Card */}
      <div className="relative bg-white text-black rounded-lg shadow-lg p-8  max-w-2xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-16">
          <Image
            alt="Client's face"
            className="rounded-full border-4 border-white shadow-lg"
            height={100}
            src="/Ellipse.png"
            width={100}
          />
        </div>
        <div className="mt-16">
          {/* Quote Icon */}
          <div className="text-center text-yellow-500 text-5xl mb-4">“</div>

          {/* Testimonial Content */}
          <p className="text-center text-gray-700 mb-6 text-lg sm:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>

          {/* Star Rating */}
          <div className="flex justify-center items-center mb-4">
            <span className="text-yellow-500 text-2xl">
              <FaRegStar />
            </span>
            <span className="text-yellow-500 text-2xl">
              <FaRegStar />
            </span>
            <span className="text-yellow-500 text-2xl">
              <FaRegStar />
            </span>
            <span className="text-yellow-500 text-2xl">
              <FaRegStar />
            </span>
            <span className="text-gray-300 text-2xl">
              <FaRegStar />
            </span>
          </div>

          {/* Client Info */}
          <div className="text-center">
            <h4 className="text-xl font-bold">Alamin Hasan</h4>
            <p className="text-gray-500 text-lg">Food Specialist</p>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6">
        <span className="w-3 h-3 bg-yellow-500 rounded-full mx-1"></span>
        <span className="w-3 h-3 bg-gray-500 rounded-full mx-1"></span>
        <span className="w-3 h-3 bg-gray-500 rounded-full mx-1"></span>
      </div>
    </div>
  );
};

export default Testimonial;
