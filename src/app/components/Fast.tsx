import React from "react";
import Image from "next/image";
import { PiCookie, PiHamburger } from "react-icons/pi";
import { TbGlassFull } from "react-icons/tb";

const Fast = () => {
  return (
    <div className="container mx-auto p-6 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Images Section */}
        <div className="grid grid-cols-2 gap-4">
          <Image
            alt="Tacos with various toppings"
            className="w-full h-auto rounded-lg"
            height={362}
            src="/nu2.png"
            width={356}
          />
          <Image
            alt="Burger with lettuce and tomato"
            className="w-full h-auto rounded-lg"
            height={281}
            src="/bug.png"
            width={231}
          />
          <Image
            alt="Hand dipping fried food into sauce"
            className="w-full h-auto rounded-lg"
            height={244}
            src="/nug.png"
            width={306}
          />
          <Image
            alt="Burger with cheese and fries"
            className="w-full h-auto rounded-lg"
            height={221}
            src="/mainCourse.png"
            width={226}
          />
          <Image
            alt="Plate of pasta with sauce"
            className="w-full h-auto rounded-lg"
            height={161}
            src="/b5.png"
            width={168}
          />
          <Image
            alt="Plate of pasta with sauce"
            className="w-full h-auto rounded-lg"
            height={161}
            src="/foodpic2.jpeg"
            width={166}
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-yellow-500 text-lg mb-2">Why Choose Us</h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-yellow-500">Extra</span>
            ordinary taste
            <br />
            And Experienced
          </h1>
          <p className="text-gray-400 mb-6 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>

          {/* Icons and Categories */}
          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex flex-col items-center">
              <div className="bg-yellow-500 p-4 rounded-lg mb-2">
                <PiHamburger className="text-3xl" />
              </div>
              <span>Fast Food</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-yellow-500 p-4 rounded-lg mb-2">
                <PiCookie className="text-3xl" />
              </div>
              <span>Lunch</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-yellow-500 p-4 rounded-lg mb-2">
                <TbGlassFull className="text-3xl" />
              </div>
              <span>Dinner</span>
            </div>
          </div>

          {/* Experience Section */}
          <div className="bg-white p-4 border-l-8 border-yellow-500 rounded-lg flex items-center justify-center space-x-4">
            <span className="text-4xl text-yellow-500 justify-start font-bold">30+</span>
            <p className="text-black text-sm md:text-base">
              Years of
              <br />
              <span className="font-bold text-black">Experience</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fast;
