"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"; // Assuming you're using Heroicons for icons

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false); // State for mobile menu toggle

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#01feff]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 ">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[15px]">
        {/* Logo Section */}
        <Link href="/" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/logo3.png"
            alt="logo"
            width={100}
            height={100}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Tehmina Naz
          </span>
        </Link>

        {/* Desktop Menu Section (Hidden on mobile screens) */}
        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#01feff] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <Link href="/" className="cursor-pointer">Home</Link>
            <Link href="/blog" className="cursor-pointer">Blogs</Link>
            <Link href="/contact" className="cursor-pointer">Contact</Link>
          </div>
        </div>

        {/* Sign In Button */}
        <div className="hidden md:flex">
          <button className="px-4 py-2 rounded-full bg-white text-black hover:bg-[#01feff] transition duration-300">
            Sign In
          </button>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`menu ${navbarOpen ? "block" : "hidden"} md:hidden w-full bg-[#0300145e] absolute top-[65px] left-0 px-10 py-5 z-40`}
      >
        <ul className="flex flex-col items-center space-y-4">
          <li>
            <Link href="/" className="text-gray-200 hover:text-white">Home</Link>
          </li>
          <li>
            <Link href="/Blog" className="text-gray-200 hover:text-white">Blogs</Link>
          </li>
          <li>
            <Link href="#contact" className="text-gray-200 hover:text-white">Contact</Link>
          </li>
          <li>
            <button className="px-4 py-2 rounded-full bg-white text-black hover:bg-[#01feff] transition duration-300">
              Sign In
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
