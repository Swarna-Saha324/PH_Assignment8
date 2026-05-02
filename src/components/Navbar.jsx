"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FFECC0] border-b border-[#FFC09F] px-4 md:px-8 py-3 shadow-sm sticky top-0 z-50">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex-1">
          <Link href="/" className="text-2xl font-black text-[#B36281]">
            Book<span className="text-[#EE9B9B]">Shelf</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-bold text-[#B36281]">
          <Link href="/">Home</Link>
          <Link href="/all-books">All Books</Link>
          <Link href="/profile">My Profile</Link>
        </div>

        {/* Right Side (Static Auth Buttons) */}
        <div className="flex-1 flex justify-end items-center gap-2">
          <Link href="/signIn" className="text-[#B36281] font-bold px-4 py-2">
            Sign In
          </Link>
          <Link href="/signup" className="bg-[#B36281] text-white px-4 py-2 rounded-xl">
            Sign Up
          </Link>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-[#B36281]"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute left-0 w-full bg-[#FFECC0] transition-all duration-300 ${isOpen ? "top-[64px] opacity-100" : "top-[-400px] opacity-0"}`}>
        <div className="flex flex-col p-6 gap-4 font-bold text-[#B36281]">
          <Link href="/">Home</Link>
          <Link href="/all-books">All Books</Link>
          <Link href="/profile">My Profile</Link>

          <div className="flex flex-col gap-3 pt-4 border-t border-[#FFC09F]">
            <Link href="/signIn">Sign In</Link>
            <Link href="/signup" className="bg-[#B36281] text-white py-2 rounded-xl text-center">
              Sign Up
            </Link>
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;