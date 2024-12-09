
'use client';
// resopnsive
import { useState } from 'react'
import Link from "next/link"
import { Menu, X } from 'lucide-react'
import { FaRegUserCircle, FaSearch } from 'react-icons/fa';
import { BsHandbag } from 'react-icons/bs';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: "Home", href: "/", active: true },
    { name: "Menu", href: "/Menu"},
    { name: "Blog", href: "/Blog" },
    { name: "Pages", href: "/Pages" },
    { name: "About", href: "/About" },
    { name: "Shop", href: "/Shop" },
    { name: "Contact", href: "/Contact" },
  ]

  return (
    <header className="w-full bg-[#0D0D0D] fixed top-0 px-4 sm:px-6 lg:px-[15.62%] py-4 lg:py-7">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-[20px] sm:text-[24px] leading-[32px] font-bold text-white font-helvetica z-10"
        >
          Food<span className="text-[#FF9F0D]">tuck</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <ul className={`
          fixed inset-0 bg-[#0D0D0D] flex flex-col items-center justify-center gap-6
          lg:static lg:flex-row lg:bg-transparent lg:gap-[32px]
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible lg:opacity-100 lg:visible'}
        `}>
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`text-[16px] leading-6 ${
                  item.active ? "text-[#FF9F0D] font-bold" : "text-white"
                } font-inter hover:text-[#FF9F0D] transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/" className="text-white hover:text-[#FF9F0D] transition-colors">
          <FaSearch />
          </Link>
          <Link href="/" className="text-white hover:text-[#FF9F0D] transition-colors">
          <BsHandbag />
          </Link>
         
          <Link href="/<FaRegUserCircle />" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
          <FaRegUserCircle />
            </Link>
            
            <Link href="/SignUp" className='text-[#FF9F0D]'> 
            </Link>
            
        </div>
      </nav>
    </header>
  )
}