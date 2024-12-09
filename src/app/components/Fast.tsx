import React from 'react';
import Image from 'next/image';
import { PiCookie, PiHamburger } from 'react-icons/pi';
import { TbGlassFull } from 'react-icons/tb';

const Fast = () => {
  return (
    <div>
      <div className="container mx-auto p-6 text-white">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="grid grid-cols-2 gap-4">
      <Image
        alt="Tacos with various toppings"
        className="w-full h-auto rounded-lg"
        height={800}
        src="/nu2.png"
        width={400}
      />
      <Image
        alt="Burger with lettuce and tomato"
        className="w-full h-auto rounded-lg"
        height={200}
        src="/bg1.png"
        width={300}
      />
     <Image
        alt="Hand dipping fried food into sauce"
        className="w-full h-auto rounded-lg"
        height={200}
        src="/nug.png"
        width={300}
      />
      <Image
        alt="Burger with cheese and fries"
        className="w-full h-auto rounded-lg"
        height={200}
        src="/bg.png"
        width={300}
      />
      <Image
        alt="Plate of pasta with sauce"
        className="w-full h-auto rounded-lg"
        height={200}
        src="/bg1.png"
        width={300}
      />
        <Image
        alt="Plate of pasta with sauce"
        className="w-full h-auto rounded-lg"
        height={200}
        src="/meat.png"
        width={300}
      />
    </div>
    <div className="flex flex-col justify-center">
      <h2 className="text-yellow-500 text-lg mb-2">Why Choose us</h2>
      <h1 className="text-4xl font-bold mb-4">
        <span className="text-yellow-500">Exta</span>
        ordinary taste
        <br />
        And Experienced
      </h1>
      <p className="text-gray-400 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
        pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
        augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
        sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
        consequat.
      </p>
      <div className="flex space-x-4 mb-6">
        <div className="flex flex-col items-center">
          <div className="bg-yellow-500 p-4 rounded-lg mb-2">
          <PiHamburger className='text-3xl' />
          </div>
          <span>Fast Food</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-yellow-500 p-4 rounded-lg mb-2">
          <PiCookie className='text-3xl' />
          </div>
          <span>Lunch</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-yellow-500 p-4 rounded-lg mb-2">
          <TbGlassFull  className='text-3xl' />
          </div>
          <span>Dinner</span>
        </div>
      </div>
      <div className="bg-white  p-4 rounded-lg justify-around flex">
        <span className="text-4xl text-yellow-500 font-bold">30+</span>
        <p className='text-black'>
          Years of    
          <br/>
          <span className="font-bold text-black">Experienced</span>
        </p>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Fast;
