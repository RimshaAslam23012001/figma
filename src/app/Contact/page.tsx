import React from 'react'

import { IoChevronForwardOutline } from "react-icons/io5";


const Contact = () => {
  return (
    <div>
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className=" bg-black">
      {/* Background Image */}
      <div
        className="h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url('/heropic.png')" }}>
    
       
      
        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">Contact Us</h1>
          <p className="text-sm md:text-base lg:text-lg mt-2 flex items-center gap-2">
            <span className="text-white ">Home</span>
            <IoChevronForwardOutline />
            <span  className="text-[#FF9F0D]">Contact</span>
          </p>
        </div>
      </div>
    </header>

      {/* Signin Form */}
      <section className="py-16">
        <div className="container mx-auto max-w-md bg-white shadow-lg rounded-md p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Contact</h3>
          <form>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Message</label>
              <input
                type="message"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your message"
              />
            </div>
           
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded"
            >
              Send
            </button>
        
          </form>
          <div className="text-center mt-8 flex ">
            
          
          <a href='/Login'>
<button className="bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition duration-300">
  Sign In
</button>
</a>
<a href='/SignUp'><button className="bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition duration-300">
  Sign Up
  
  
</button></a>
        
          </div>
        </div>
      </section>

    </div>
   
   </div>
  )
}

export default Contact