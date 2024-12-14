import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { PiClockClockwise } from "react-icons/pi";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-black">
      {/* Main Footer Section */}
      <div className="container mx-auto px-4 py-8 bg-black text-white">
        {/* Subscribe Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-orange-500">
              St
              <span className="text-white">ill You Need Our Support ?</span>
            </h2>
            <p className="text-gray-400">
            Don&apos;t wait, make a smart &amp; logical quote here. It&apos;s pretty easy.
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <input
              className="px-4 py-2 rounded-l-md text-black"
              placeholder="Enter Your Email"
              type="email"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md">
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-orange-500 mb-8" />

        {/* Footer Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Us.</h3>
            <p className="text-gray-400 mb-4">
              Corporate clients and leisure travelers rely on GroundLink for dependable, safe, and professional chauffeured car service in major cities across the world.
            </p>
            <div className="flex items-center">
              <div className="bg-orange-500 p-2 border rounded-md">
                <PiClockClockwise />
              </div>
              <div className="ml-4">
                <p className="text-white">Opening Hours</p>
                <p className="text-gray-400">Mon - Sat: 8.00 - 6.00</p>
                <p className="text-gray-400">Sunday - Closed</p>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Useful Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2"><Link href="/">About</Link></li>
              <li className="mb-2"><Link href="/">News</Link></li>
              <li className="mb-2"><Link href="/">Partners</Link></li>
              <li className="mb-2"><Link href="/">Team</Link></li>
              <li className="mb-2"><Link href="/">Menu</Link></li>
              <li className="mb-2"><Link href="/">Contacts</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-lg font-bold mb-4">Help?</h3>
            <ul className="text-gray-400">
              <li className="mb-2"><Link href={"/FAQ"}>FAQ</Link></li>
              <li className="mb-2"><Link href="/">Terms &amp; Conditions</Link></li>
              <li className="mb-2"><Link href="/">Reporting</Link></li>
              <li className="mb-2"><Link href="/">Documentation</Link></li>
              <li className="mb-2"><Link href="/">Support Policy</Link></li>
              <li className="mb-2"><Link href="/">Privacy</Link></li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-lg font-bold mb-4">Recent Post</h3>
            <div className="space-y-4">
              {["about3.png", "about4.png", "aboutus.png"].map((img, index) => (
                <div key={index} className="flex items-center">
                  <Image
                    alt="Thumbnail"
                    className="w-12 h-12 rounded-md"
                    width={100}
                    height={100}
                    src={`/${img}`}
                  />
                  <div className="ml-4">
                    <p className="text-gray-400 text-sm">20 Feb 2022</p>
                    <p className="text-white">Keep Your Business</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <footer className="bg-gray-800 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left">
            Copyright © 2022 by Ayeman. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 justify-center">
            <Link
              className="text-gray-400 border border-white hover:text-orange-500 p-2"
              href={"#"}
            >
              <FaFacebookF />
              </Link>
            <Link
              className="text-gray-400 border border-white hover:text-orange-500 p-2"
              href={"#"}
            >
              <FaTwitter />
              </Link>
            <Link
              className="text-gray-400 border border-white hover:text-orange-500 p-2"
              href={"#"}
            >
              <FaPinterestP />
              </Link>
            <Link
              className="text-gray-400 border border-white hover:text-orange-500 p-2"
              href={"#"}
            >
              <FaYoutube />
              </Link>
            <Link
              className="text-gray-400 border border-white hover:text-orange-500 p-2"
              href={"#"}
            >
              <FaInstagram />
             </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
