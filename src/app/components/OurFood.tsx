import React from 'react'
import Image from 'next/image'

const OurFood = () => {
  return (
    <div>
      <div className="container mx-auto py-10 px-4">
  <div className="text-center mb-10">
    <h1 className="text-yellow-500 text-2xl md:text-3xl lg:text-4xl italic">Bread &amp; Grill</h1>
    <h2 className="text-4xl font-bold text-white mt-2">From Our Menu</h2>
  </div>

  <div className="flex justify-center mb-10">
    <ul className="flex flex-wrap justify-center space-x-6 text-lg md:text-xl lg:text-2xl">
      <li className="text-white hover:text-yellow-500 cursor-pointer mb-2 md:mb-0"><a href='/'>Breakfast</a></li>
      <li className="text-white hover:text-yellow-500 cursor-pointer mb-2 md:mb-0"><a href='/Lunch'>Lunch</a></li>
      <li className="text-white hover:text-yellow-500 cursor-pointer mb-2 md:mb-0"><a href='/Dinner'>Dinner</a></li>
      <li className="text-white hover:text-yellow-500 cursor-pointer mb-2 md:mb-0"><a href='/Desert'>Dessert</a></li>
      <li className="text-white hover:text-yellow-500 cursor-pointer mb-2 md:mb-0"><a href='/Drink'>Drink</a></li>
      <li className="text-white hover:text-yellow-500 cursor-pointer mb-2 md:mb-0"><a href='/Snacks'>Snacks</a></li>
      <li className="text-white hover:text-yellow-500 cursor-pointer mb-2 md:mb-0"><a href='/Spices'>Spices</a></li>
    </ul>
  </div>

  <div className="flex justify-center items-start flex-wrap">
  
    <div className="w-full md:w-1/3 mb-6 md:mb-0">
      <Image
        alt="A plate of fresh salad with greens and herbs"
        className=" w-full h-auto"
        src="/salad.png"
        width={300}
        height={200}
      />
    </div>

    
    <div className="w-full md:w-2/3 pl-0 md:pl-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
       
        <div className="flex items-center">
        <Image
            alt="Lettuce Leaf"
            className="w-20 h-20 rounded-full object-cover"
            src="/b1.png"
            width={50}
            height={50}
          />
          
          <div className="ml-4">
            <h3 className="text-xl font-bold text-white">Lettuce Leaf</h3>
            <p className="text-yellow-500">$12.55</p>
            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>

        <div className="flex items-center">
        <Image
            alt="Glow Cheese"
            className="w-20 h-20 rounded-full object-cover"
            src="/b2.png"
            width={50}
            height={50}
          />
          <div className="ml-4">
            <h3 className="text-xl font-bold text-white">Glow Cheese</h3>
            <p className="text-yellow-500">$12.55</p>
            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>

        
        <div className="flex items-center">
        <Image
            alt="Fresh Breakfast"
            className="w-20 h-20 rounded-full object-cover"
            src="/b7.png"
            width={50}
            height={50}
          />
          <div className="ml-4">
            <h3 className="text-xl font-bold text-white">Fresh Breakfast</h3>
            <p className="text-yellow-500">$12.55</p>
            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>

        <div className="flex items-center">
        <Image
            alt="Italian Pizza"
            className="w-20 h-20 rounded-full object-cover"
            src="/b4.png"
            width={50}
            height={50}
          />
          <div className="ml-4">
            <h3 className="text-xl font-bold text-white">Italian Pizza</h3>
            <p className="text-yellow-500">$12.55</p>
            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>

    
        <div className="flex items-center">
        <Image
            alt="Mild Butter"
            className="w-20 h-20 rounded-full object-cover"
            src="/b5.png"
            width={50}
            height={50}
          />
          <div className="ml-4">
            <h3 className="text-xl font-bold text-white">Mild Butter</h3>
            <p className="text-yellow-500">$12.55</p>
            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>

       
        <div className="flex items-center">
        <Image
            alt="Slice Beef"
            className="w-20 h-20 rounded-full object-cover"
            src="/b3.png"
            width={50}
            height={50}
          />
          <div className="ml-4">
            <h3 className="text-xl font-bold text-white">Slice Beef</h3>
            <p className="text-yellow-500">$12.55</p>
            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>

      
        <div className="flex items-center">
        <Image
            alt="Fresh Bread"
            className="w-20 h-20 rounded-full object-cover"
            src="/bug.png"
            width={50}
            height={50}
          />
          <div className="ml-4">
            <h3 className="text-xl font-bold text-white">Fresh Bread</h3>
            <p className="text-yellow-500">$12.55</p>
            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>

       
        <div className="flex items-center">
        <Image
            alt="Mushroom Pizza"
            className="w-20 h-20 rounded-full object-cover"
            src="/b7.png"
            width={50}
            height={50}
          />
          <div className="ml-4">
            <h3 className="text-xl font-bold text-white">Mushroom Pizza</h3>
            <p className="text-yellow-500">$12.55</p>
            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default OurFood
