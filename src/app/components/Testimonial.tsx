import React from "react";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div>
      <div>
        <h2 className="testimonial-title text-yellow-500 text-4xl mb-2">
          Testimonials
        </h2>
        <h3 className="text-3xl text-white font-bold mb-8">
          What our client are saying
        </h3>
        <div className="relative z-index-0 items-center justify-between bg-white text-black rounded-lg shadow-lg p-8 max-w-xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-12">
            <Image
              alt="Client's face"
              className="rounded-full border-4 border-white shadow-lg"
              height={100}
              src="/Ellipse.png"
              width={100}
            />
          </div>
          <div className="mt-12">
            <div className="text-center text-yellow-500 text-3xl mb-4">“</div>
            <p className="text-center text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>
            <div className="flex justify-center items-center mb-4">
              <span className="text-yellow-500 text-xl">
                <FaRegStar />
              </span>
              <span className="text-yellow-500 text-xl">
                <FaRegStar />
              </span>
              <span className="text-yellow-500 text-xl">
                <FaRegStar />
              </span>
              <span className="text-yellow-500 text-xl">
                <FaRegStar />
              </span>
              <span className="text-gray-300 text-xl">
                <FaRegStar />
              </span>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold">Alamin Hasan</h4>
              <p className="text-gray-500">Food Specialist</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <span className="w-3 h-3 bg-yellow-500 rounded-full mx-1"></span>
          <span className="w-3 h-3 bg-gray-500 rounded-full mx-1"></span>
          <span className="w-3 h-3 bg-gray-500 rounded-full mx-1"></span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
