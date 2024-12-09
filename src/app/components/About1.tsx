import React from 'react';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa6';

const about = () => {
  return (
    <div>
        <section className='bg-black px-3 md:px-[135px] flex flex-col justify-evenly md:flex-row md:items-center py-[50px]'>
            {/*Heading */}
            <div className='text-white w-full md:w-[50%] '>
                <h1 className='md:text-[32px] text-[24px] font-normal text-[#ff9f0d] font whitespace-nowrap font-greatVibes'>
                    About Us
                </h1>
                <h1 className='text-[20px] md:text-[50px] font-bold whitespace-nowrap md:whitespace-nowrap'>
                    <span className='text-[#ff9f0d] '>We </span>
                    Create the best
                    <br/> 
                    food Product
                </h1>
                <p className='text-[10px] md:text-[16px] font-normal'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                </p>
                <ul>
                    <li className='text-[10px] md:text-[16px] font-normal mt-10 flex'>
                        <span className='mr-[10px]'>
                            <FaCheck />
                        </span> {""}
                        Lacus nisi, et ac dapibus sit eu velit in consequat.
                        </li>
                        <li className='text-[10px] md:text-[16px] font-normal mt-10 flex'>
                        <span className='mr-[10px]'>
                            <FaCheck />
                        </span> {""}
                        Quisque diam pellentesque bibendum non dui volutpat fringilla 
                        </li>
                        <li className='text-[10px] md:text-[16px] font-normal mt-10 flex'>
                        <span className='mr-[10px]'>
                            <FaCheck />
                        </span> {""}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </li>
                </ul>
                <div className='flex flex-col md:flex-row items-center md:items-start'>
                    <button className="bg-[#ff9f0d] text-white w-[100px] h-[30px] md:w-[190px] md:h-[60px]
                    rounded-[40px] mt-[32px] hover:bg-yellow-700">
                        See More
    
                    </button>

                </div>

            </div>
            {/*Image */}
            <div className='mt-[50px] md:mt-0'>
                <Image
                    src="/egg.png"
                    alt='image'
                    width={740}
                    height={480}
                />
                <div className='flex flex-col md:flex-row mt-[16px] md:mt-[0]'>
                    <Image 
                    src="/meat.png"
                    alt='image'
                    width={300}
                    height={240}
                    className='mr-[16px] pt-[40px]'
                    />
                    <Image
                    src="/san.png"
                    alt='image'
                    width={300}
                    height={240}
                    className='pt-[40px]'
                    />

                </div>

            </div>

        </section>
      
    </div>
  )
}

export default about;
