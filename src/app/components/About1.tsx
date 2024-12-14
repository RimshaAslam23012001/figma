import React from 'react';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

const About = () => {
  return (
    <div>
      <section className="bg-black px-6 md:px-16 py-12 flex flex-col justify-center items-center md:flex-row md:items-center w-full">
        {/* Heading */}
        <div className="text-white w-full md:w-1/2">
          <h1 className="text-xl md:text-3xl font-normal text-[#ff9f0d] font-greatVibes mb-4">
            About Us
          </h1>
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">
            <span className="text-[#ff9f0d]">We </span>
            Create the Best
            <br />
            Food Products
          </h2>
          <p className="text-sm md:text-lg font-normal mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p>
          <ul className="space-y-4">
            <li className="text-sm md:text-lg font-normal flex items-center">
              <FaCheck className="mr-2 text-[#ff9f0d]" />
              Lacus nisi, et ac dapibus sit eu velit in consequat.
            </li>
            <li className="text-sm md:text-lg font-normal flex items-center">
              <FaCheck className="mr-2 text-[#ff9f0d]" />
              Quisque diam pellentesque bibendum non dui volutpat fringilla.
            </li>
            <li className="text-sm md:text-lg font-normal flex items-center">
              <FaCheck className="mr-2 text-[#ff9f0d]" />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
          </ul>
          <div className="mt-8">
            <button className="bg-[#ff9f0d] text-white px-8 py-3 rounded-full hover:bg-yellow-700 transition duration-300">
              See More
            </button>
          </div>
        </div>

        {/* Images */}
        <div className="mt-8 md:mt-0 w-full md:w-1/2 flex justify-center flex-col items-center md:items-start">
          <Image src="/egg.png" alt="egg" width={740} height={480} className="object-contain mb-8 md:mb-0" />
          <div className="flex space-x-4">
            <Image src="/meat.png" alt="meat" width={300} height={240} className="object-contain" />
            <Image src="/san.png" alt="sandwich" width={300} height={240} className="object-contain" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
