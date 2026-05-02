"use client";
import Link from 'next/link'; // Next.js specific link
import { useState } from 'react';
import { FaSignOutAlt, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("Swarna Saha"); // User's name

  return (
    <nav className="bg-[#FFECC0] border-b border-[#FFC09F] px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex-1">
          <Link href="/" className="text-2xl font-bold text-[#B36281] hover:opacity-80 transition">
            BookShelf
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-8 font-semibold text-[#B36281]">
          <Link href="/" className="hover:text-[#EE9B9B] transition">Home</Link>
          <Link href="/all-books" className="hover:text-[#EE9B9B] transition">All Books</Link>
          <Link href="/profile" className="hover:text-[#EE9B9B] transition">My Profile</Link>
        </div>

        {/* Right: Auth Logic */}
        <div className="flex-1 flex justify-end items-center gap-4">
          {isLoggedIn ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-[#B36281]">
                <FaUserCircle className="text-xl" />
                <span className="font-bold hidden sm:inline">{userName}</span>
              </div>
              <button 
                onClick={() => setIsLoggedIn(false)}
                className="bg-[#EE9B9B] text-white px-4 py-2 rounded-md hover:bg-[#B36281] transition flex items-center gap-2"
              >
                <FaSignOutAlt /> Logout
              </button>
            </div>
          ) : (
            <button 
              onClick={() => setIsLoggedIn(true)}
              className="bg-[#B36281] text-white px-6 py-2 rounded-md hover:bg-[#EE9B9B] transition shadow-md"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;