import React from 'react'
import Image from 'next/image'

const Percent = () => {
  return (
    <div>
      <div
        className="flex justify-center items-center h-screen bg-cover bg-center bg-opacity-50"
        style={{ backgroundImage: 'url(/group1.png)' }}
      >
        <div className="p-8 rounded-lg text-white flex flex-wrap justify-around w-full max-w-6xl">
          <div className="text-center mb-8 sm:mb-0">
            <Image
              src="/cap.png"
              alt="Professional Chefs"
              width={100}
              height={100}
              className="mx-auto"
            />
            <p className="text-lg mt-4">Professional Chefs</p>
            <p className="text-3xl font-bold">420</p>
          </div>
          
          <div className="text-center mb-8 sm:mb-0">
            <Image
              src="/burger.png"
              alt="Items of Food"
              width={100}
              height={100}
              className="mx-auto"
            />
            <p className="text-lg mt-4">Items of Food</p>
            <p className="text-3xl font-bold">320</p>
          </div>
          
          <div className="text-center mb-8 sm:mb-0">
            <Image
              src="/spon.png"
              alt="Years of Experience"
              width={100}
              height={100}
              className="mx-auto"
            />
            <p className="text-lg mt-4">Years of Experience</p>
            <p className="text-3xl font-bold">30+</p>
          </div>
          
          <div className="text-center mb-8 sm:mb-0">
            <Image
              src="/pizza.png"
              alt="Happy Customers"
              width={100}
              height={100}
              className="mx-auto"
            />
            <p className="text-lg mt-4">Happy Customers</p>
            <p className="text-3xl font-bold">220</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Percent;

