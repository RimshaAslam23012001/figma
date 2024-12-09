import Image from 'next/image'
import React from 'react'
import { FaRegCommentDots, FaRegHeart, FaShare } from 'react-icons/fa'

const Blog = () => {
  return (
    <div>
      <div className="container mx-auto py-12">
  <div className="text-center mb-8">
    <h1 className="header-title text-4xl text-yellow-500">Blog Post</h1>
    <h2 className="text-5xl font-bold text-white">
      Latest
      <span className="text-yellow-500">News &amp; Blog</span>
    </h2>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <Image
        alt="A delicious burger with fries on the side"
        className="w-full h-48 object-cover"
        height={400}
        src="/bug.png"
        width={600}
      />
      <div className="p-4">
        <p className="text-yellow-500">10 February 2022</p>
        <h3 className="text-xl font-bold mb-2">
          Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
        </h3>
        <a className="text-yellow-500 hover:underline" href="#">
          Learn More
        </a>
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-2">
            <a className="text-yellow-500" href="#">
            <FaShare />
            </a>
            <a className="text-yellow-500" href="#">
            <FaRegHeart />
            </a>
          </div>
          <a className="text-yellow-500" href="#">
          <FaRegCommentDots />
          </a>
        </div>
      </div>
    </div>
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <Image
        alt="A delicious pizza with various toppings"
        className="w-full h-48 object-cover"
        height={400}
        src="/pixx.png"
        width={600}
      />
      <div className="p-4">
        <p className="text-yellow-500">10 February 2022</p>
        <h3 className="text-xl font-bold mb-2">
          Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A
        </h3>
        <a className="text-yellow-500 hover:underline" href="#">
          Learn More
        </a>
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-2">
            <a className="text-yellow-500" href="#">
            <FaShare />
            </a>
            <a className="text-yellow-500" href="#">
            <FaRegHeart />
            </a>
          </div>
          <a className="text-yellow-500" href="#">
          <FaRegCommentDots />
          </a>
        </div>
      </div>
    </div>
    <div className="bg-gray-800 rounded-lg overflow-hidden">
    <Image
        alt="Tacos with various fillings"
        className="w-full h-48 object-cover"
        height={400}
        src="/aboutus.png"
        width={600}
      />
      <div className="p-4">
        <p className="text-yellow-500">10 February 2022</p>
        <h3 className="text-xl font-bold mb-2">
          Curabitur rutrum velit ac congue malesuada
        </h3>
        <a className="text-yellow-500 hover:underline" href="#">
          Learn More
        </a>
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-2">
            <a className="text-yellow-500" href="#">
            <FaShare />
            </a>
            <a className="text-yellow-500" href="#">
            <FaRegHeart />
            </a>
          </div>
          <a className="text-yellow-500" href="#">
          <FaRegCommentDots />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

    
  )
}

export default Blog

