import Image from 'next/image'
import React from 'react'
import { FaRegCommentDots, FaRegHeart, FaShare } from 'react-icons/fa'

const Blog = () => {
  return (
    <div className="container mx-auto py-12 px-4">
    {/* Header Section */}
    <div className="text-center mb-12">
      <h2 className="text-yellow-500 text-2xl italic">Blog Post</h2>
      <h1 className="text-4xl text-white font-bold">
        <span className="text-yellow-500">La</span>
        test News &amp; Blog
      </h1>
    </div>
  
    {/* Blog Posts Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {/* Blog Post 1 */}
      <div className=" rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
        <Image
          alt="A delicious burger with lettuce, tomato, and cheese"
          className="w-full h-48 object-cover"
          src="/bug.png"
          width={200}
          height={300}
        />
        <div className="p-6">
          <p className="text-yellow-500 text-sm mb-2">10 February 2022</p>
          <h3 className="text-xl font-semibold mb-4">
            Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
          </h3>
          <p className="text-gray-300 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra purus urna.
          </p>
          <a className="text-yellow-500 hover:underline" href="#">
            Learn More
          </a>
          <div className="flex justify-end mt-4">
            <a className="text-yellow-500 mx-2" href="#">
              <FaShare/>
            </a>
            <a className="text-yellow-500 mx-2" href="#">
            <FaRegHeart/>
            </a>
            <a className="text-yellow-500 mx-2" href="#">
           <FaRegCommentDots/>
            </a>
          </div>
        </div>
      </div>
  
      {/* Blog Post 2 */}
      <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
        <Image
          alt="A delicious pizza with various toppings"
          className="w-full h-48 object-cover"
          width={200}
          height={300}
          src="/pixx.png"
        />
        <div className="p-6">
          <p className="text-yellow-500 text-sm mb-2">10 February 2022</p>
          <h3 className="text-xl font-semibold mb-4">
            Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A
          </h3>
          <p className="text-gray-300 mb-4">
            Curabitur rutrum velit ac congue malesuada. Sed interdum purus id nulla volutpat ultricies.
          </p>
          <a className="text-yellow-500 hover:underline" href="#">
            Learn More
          </a>
          <div className="flex justify-end mt-4">
            <a className="text-yellow-500 mx-2" href="#">
              <FaShare/>
            </a>
            <a className="text-yellow-500 mx-2" href="#">
            <FaRegHeart/>
            </a>
            <a className="text-yellow-500 mx-2" href="#">
           <FaRegCommentDots/>
            </a>
          </div>
        </div>
      </div>
  
      {/* Blog Post 3 */}
      <div className=" rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
       <Image
          alt="A plate of tacos with various fillings"
          className="w-full h-48 object-cover"
          width={200}
          height={300}
          src="/aboutus.png"
        />
        <div className="p-6">
          <p className="text-yellow-500 text-sm mb-2">10 February 2022</p>
          <h3 className="text-xl font-semibold mb-4">
            Curabitur rutrum velit ac congue malesuada
          </h3>
          <p className="text-gray-300 mb-4">
            Sed viverra nulla et urna vestibulum, eu ultricies arcu gravida. Nullam quis sapien vel felis.
          </p>
          <a className="text-yellow-500 hover:underline" href="#">
            Learn More
          </a>
          <div className="flex justify-end mt-4">
            <a className="text-yellow-500 mx-2" href="#">
              <FaShare/>
            </a>
            <a className="text-yellow-500 mx-2" href="#">
            <FaRegHeart/>
            </a>
            <a className="text-yellow-500 mx-2" href="#">
           <FaRegCommentDots/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
     
  )
}

export default Blog

