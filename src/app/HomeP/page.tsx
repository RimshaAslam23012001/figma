import React from 'react'
import Image from 'next/image';
import About1 from '../components/About1'
import Food_carigery from '../components/Food_carigery'
import Chaf from '../components/Chaf'
import Testimonial from '../components/Testimonial'
import Blog from '../components/Blog'

import Percent from '../components/Percent';
import Fast from '../components/Fast';
import OurFood from '../components/OurFood';



function HomePage() {
  return (
    <>
    <section className='bg-black relative px-3 md:px-[135px] flex flex-col justify-evenly md:flex-row  md:items-center py-[50px]'>
        {/* Heading */}
        <div className='text-white w-full md:w-[50%]'>
  <h1 className='md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font whitespace-nowrap'>
    Its Quick & Amusing!
  </h1>

  <h1 className='text-[25px] md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal'>

    <span className='text-[#FF9F0D]'>Th</span>e Art of speed food Quality
  </h1>

  <p className='text-[10px] md:text-[16px] font-normal'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
  </p>

  <div className='flex flex-col md:flex-row items-center md:items-start'>

  <button className='bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[40px] mt-[32px] hover:bg-yellow-800'>
    See More
  </button>
  </div>
</div>

        {/* Image */}

        <div className='mt-[50px] md:mt-0 '>   
            <Image 
                src="/food.png"
                alt='Hero Image'
                width={700}
                height={500}
                className=''
            />

        </div>
    </section>
    <About1 />
    <Food_carigery/>
    <Fast />
    <Percent />
    <OurFood/>
    <Chaf />
    <Testimonial />
  
    <Blog/>
    </>
  )
}

export default HomePage