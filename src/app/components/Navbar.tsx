"use client"
import Link from "next/link";
import React, { useState } from "react";
import { BsHandbag } from "react-icons/bs";
import {  FaSearch } from "react-icons/fa";
import { HiMenu } from "react-icons/hi"; // Hamburger icon for mobile

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-black text-white shadow-md">
      <div className="container mx-auto px-6 lg:px-12 py-4">
     
          {/* Logo */}
          <div className="  items-center justify-evenly lg:ml-0 ml-auto">
            <Link href={"/"} className="font-bold text-2xl">
              <span className="text-yellow-500">
                Food<span className="text-white">tuck</span>
              </span>
            </Link>
          </div>
        <div className="flex justify-between items-center">
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex space-x-8 mt-4">
          <Link href={"/Home"} className="hover:text-yellow-500 transition">
              Home
              </Link>
              <Link href={"/Menu"} className="hover:text-yellow-500 transition">
              Menu
              </Link>
              <Link href={"/Blog"} className="hover:text-yellow-500 transition">
              Blog
              </Link>
              <Link href={"/Error"} className="hover:text-yellow-500 transition">
              Pages
              </Link>
              <Link href={"/About"} className="hover:text-yellow-500 transition">
              About
              </Link>
              <Link href={"/Shop"} className="hover:text-yellow-500 transition">
              Shop
              </Link>
              <Link href={"/Contact" }className="hover:text-yellow-500 transition">
              Contact
              </Link>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden flex items-center">
            <HiMenu
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-2xl cursor-pointer hover:text-yellow-500"
            />
          </div>

          {/* Search and Cart on Desktop */}
          <div className="hidden lg:flex items-center space-x-5">
            <div className="flex items-center px-4 py-2 border border-yellow-600 rounded-full">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-white focus:outline-none w-32 lg:w-48"
              />
              <FaSearch className="hover:text-orange-500 transition" />
            </div>
            <div>
            <a href="/ShoppingCart" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
            <BsHandbag />
            </a> 
          </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black text-white mt-4 flex flex-col space-y-4">
            <Link href={"/Home"} className="px-4 py-2 hover:text-yellow-500">
              Home
              </Link>
              <Link href={"/Menu"} className="px-4 py-2 hover:text-yellow-500">
              Menu
              </Link>
              <Link href={"/Blog"} className="px-4 py-2 hover:text-yellow-500">
              Blog
              </Link>
              <Link href={"/Error"} className="px-4 py-2 hover:text-yellow-500">
              Pages
              </Link>
              <Link href={"/About"} className="px-4 py-2 hover:text-yellow-500">
              About
              </Link>
              <Link href={"/Shop"} className="px-4 py-2 hover:text-yellow-500">
              Shop
              </Link>
            <Link href={"/Contact" } className="px-4 py-2 hover:text-yellow-500">
              Contact
              </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;