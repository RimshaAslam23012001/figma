import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaPlay } from 'react-icons/fa';

const Bean = () => {
  return (
    <div className="relative items-end justify-center w-full h-[558px]">
      {/* Background Image */}
      <Image
        alt="Close-up of a delicious dish with various ingredients"
        className="w-full h-full object-cover"
        height={1080}
        src="/group1.png"
        width={1920}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center">
        <div className="text-center px-6 sm:px-8 md:px-12 lg:px-16">
          {/* Section Title */}
          <h2 className="text-yellow-500 text-lg sm:text-xl md:text-2xl italic">
            Restaurant Active Process
          </h2>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold mt-2">
            <span className="text-yellow-500">We</span>
            Document Every Food Bean Process until it is saved
          </h1>

          {/* Paragraph */}
          <p className="text-gray-300 mt-4 max-w-3xl mx-auto text-base sm:text-lg md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
            pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
            augue urna.
          </p>

          {/* Buttons Section */}
          <div className="mt-6 flex items-center justify-center space-x-6">
            {/* Read More Button */}
            <Link
              className="bg-transparent border border-yellow-500 text-yellow-500 px-6 py-2 rounded-full hover:bg-yellow-500 hover:text-gray-900 transition duration-300 text-base sm:text-lg"
              href="#"
            >
              Read More
            </Link>

            {/* Play Video Button */}
            <Link
              className="text-white px-6 py-2 flex items-center space-x-2 w-[60px] h-[60px] rounded-full bg-yellow-500 hover:bg-yellow-600 transition duration-300"
              href={"/"}
            >
              <FaPlay className='w-6 h-6' />
            </Link>

            {/* Play Video Text */}
            <span className="text-white text-base sm:text-lg">Play Video</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bean;
