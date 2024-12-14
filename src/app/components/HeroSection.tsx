import React from "react";
import Image from "next/image";
import { FaFacebook, FaPinterestP, FaTwitter } from "react-icons/fa";
import Navbar from "./Navbar";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="w-full min-h-screen bg-black">
      <Navbar />
      <section className="bg-black relative px-6 md:px-16 flex flex-col md:flex-row justify-evenly md:items-center py-12 md:py-24">

        {/* Social Icons */}
        <div className="justify-center lg:justify-start mt-4 space-x-6 mb-8 md:mb-0">
          <Link href={"#"} className="text-gray-200 hover:text-orange-500 text-2xl md:text-3xl">
            <FaFacebook />
          </Link>
          <Link href={"#"} className="text-gray-200 hover:text-orange-500 text-2xl md:text-3xl">
            <FaTwitter />
          </Link>
          <Link href={"#" }className="text-gray-200 hover:text-orange-500 text-2xl md:text-3xl">
            <FaPinterestP />
          </Link>
        </div>

        {/* Heading and Text */}
        <div className="text-white w-full md:w-1/2">
          <h1 className="text-xl md:text-3xl font-normal text-[#FF9F0D] whitespace-nowrap">
            Its Quick & Amusing!
          </h1>

          <h1 className="text-2xl md:text-5xl font-bold md:whitespace-normal">
            <span className="text-[#FF9F0D]">Th</span>e Art of Speed Food Quality
          </h1>

          <p className="text-sm md:text-lg font-normal mt-4 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue.
          </p>

          <div className="flex flex-col md:flex-row items-center md:items-start">
            <button className="bg-[#FF9F0D] text-white w-32 h-12 md:w-48 md:h-16 rounded-full mt-8 hover:bg-yellow-800">
              See More
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-10 md:mt-0 w-full md:w-1/2 flex justify-center">
          <Image
            src="/food.png"
            alt="Hero Image"
            width={700}
            height={500}
            className="object-contain"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
