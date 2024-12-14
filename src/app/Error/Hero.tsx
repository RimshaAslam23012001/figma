
import React from 'react'
import Link from 'next/link'
import { IoChevronForwardOutline } from 'react-icons/io5'

function Hero() {
  return (
    <section className='w-full bg-[url("/heropic.png")] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
            404 Error
          </h1>
         <p className="text-sm md:text-base lg:text-lg mt-2 flex items-center gap-2">
                             <span className="text-white ">Home</span>
                             <IoChevronForwardOutline className="text-white"/>
                             <span  className="text-[#FF9F0D]">404 Error</span>
                           </p>
        </div>
      </div>
    </section>
  )
}

export default Hero