"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaSignOutAlt, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import SignUpPage from '@/app/signup/page.jsx';

const Navbar = () => {
  const [user, setUser] = useState(null); // MongoDB থেকে আসা ইউজার ডাটা এখানে থাকবে
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // এখানে আপনার Auth logic অনুযায়ী ইউজার ডাটা সেট করবেন
    // উদাহরণস্বরূপ: লোকাল স্টোরেজ বা কুকি থেকে ইউজার ইনফো আনা
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#FFECC0] border-b border-[#FFC09F] px-4 md:px-8 py-3 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex-1">
          <Link href="/" className="text-2xl font-black text-[#B36281] tracking-tight">
            Book<span className="text-[#EE9B9B]">Shelf</span>
          </Link>
        </div>

        {/* Center: Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-bold text-[#B36281]">
          <Link href="/" className="hover:text-[#EE9B9B] transition">Home</Link>
          <Link href="/all-books" className="hover:text-[#EE9B9B] transition">All Books</Link>
          {user && <Link href="/profile" className="hover:text-[#EE9B9B] transition">My Profile</Link>}
        </div>

        {/* Right: Auth Logic */}
        <div className="flex-1 flex justify-end items-center gap-3">
          {user ? (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 text-[#B36281] bg-white/60 px-3 py-1.5 rounded-full border border-[#FFC09F]">
                <FaUserCircle className="text-xl" />
                <span className="font-bold text-sm hidden sm:inline">
                  {user.name} 
                </span>
              </div>
              <button 
                onClick={handleLogout}
                className="bg-[#EE9B9B] text-white px-4 py-2 rounded-xl hover:bg-[#B36281] transition shadow-sm flex items-center gap-2 text-sm font-bold"
              >
                <FaSignOutAlt /> <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          ) : (
            <div className="hidden sm:flex items-center gap-2">
              <Link href="/login" className="text-[#B36281] font-bold px-4 py-2 hover:text-[#EE9B9B] transition text-sm">
                Sign In
              </Link>
              <Link href="/signup" className="bg-[#B36281] text-white px-5 py-2 rounded-xl font-bold hover:bg-[#EE9B9B] transition shadow-md text-sm border-2 border-[#B36281] hover:border-[#EE9B9B]">
                Sign Up
              </Link>
            </div>
          )}

          {/* Mobile Toggle */}
          <button className="md:hidden text-[#B36281] text-2xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute left-0 w-full bg-[#FFECC0] border-b border-[#FFC09F] transition-all duration-300 ${isOpen ? "top-[64px] opacity-100" : "top-[-400px] opacity-0"}`}>
        <div className="flex flex-col p-6 gap-4 font-bold text-[#B36281]">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/all-books" onClick={() => setIsOpen(false)}>All Books</Link>
          {user ? (
            <>
              <Link href="/profile" onClick={() => setIsOpen(false)}>My Profile</Link>
              <button onClick={handleLogout} className="text-left text-red-500">Logout</button>
            </>
          ) : (
            <div className="flex flex-col gap-3 pt-4 border-t border-[#FFC09F]">
              <Link href="/login" onClick={() => setIsOpen(false)}>Sign In</Link>
              <Link href="/signup" onClick={() => setIsOpen(false)} className="bg-[#B36281] text-white py-3 rounded-xl text-center">Sign Up</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;