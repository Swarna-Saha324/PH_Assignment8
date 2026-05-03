"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { authClient,signOut } from "@/lib/auth-client"; 
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  
 
  const { data: session, isPending } = authClient.useSession(); 

  const handleLogout = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/signIn"); 
        },
      },
    });
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-[#FFECC0] border-b border-[#FFC09F] px-4 md:px-8 py-3 shadow-sm sticky top-0 z-50">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Website Logo (links to Home) */}
        <div className="flex-1">
          <Link href="/" className="text-2xl font-black text-[#B36281]">
            Book<span className="text-[#EE9B9B]">Shelf</span>
          </Link>
        </div>

        {/* Center: Navigation links */}
        <div className="hidden md:flex items-center gap-8 font-bold text-[#B36281]">
          <Link href="/" className="hover:text-[#EE9B9B] transition-colors">Home</Link>
          <Link href="/all-books" className="hover:text-[#EE9B9B] transition-colors">All Books</Link>
          {/* লগইন থাকলে 'My Profile' দেখাবে */}
          {session && (
            <Link href="/profile" className="hover:text-[#EE9B9B] transition-colors">My Profile</Link>
          )}
        </div>

        {/* Right: Conditional rendering */}
        <div className="flex-1 flex justify-end items-center gap-4">
          
          {isPending ? (
            <div className="w-20 h-8 bg-[#FFC09F]/30 animate-pulse rounded-xl"></div>
          ) : session ? (
            /* যদি ইউজার লগইন থাকে: নাম এবং লগআউট বাটন */
            <div className="flex items-center gap-4">
              <span className="text-[#B36281] font-bold hidden sm:block">
                Hi, {session.user.name}
              </span>
              <button 
                onClick={handleLogout}
                className="bg-[#B36281] text-white px-4 py-2 rounded-xl font-bold hover:bg-[#EE9B9B] transition-all"
              >
                Logout
              </button>
            </div>
          ) : (
          
            <Link 
              href="/signIn" 
              className="bg-[#B36281] text-white px-6 py-2 rounded-xl font-bold hover:bg-[#EE9B9B] transition-all"
            >
              Login
            </Link>
          )}

          {/* Mobile Toggle Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-[#B36281] focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute left-0 w-full bg-[#FFECC0] border-b border-[#FFC09F] transition-all duration-300 ease-in-out ${isOpen ? "top-[64px] opacity-100" : "top-[-500px] opacity-0 pointer-events-none"}`}>
        <div className="flex flex-col p-6 gap-4 font-bold text-[#B36281]">
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/all-books" onClick={closeMenu}>All Books</Link>
          {session && <Link href="/profile" onClick={closeMenu}>My Profile</Link>}

          <div className="pt-4 border-t border-[#FFC09F]">
            {session ? (
              <div className="flex flex-col gap-4">
                <span className="text-sm opacity-70">Logged in as: {session.user.name}</span>
                <button 
                  onClick={() => { handleLogout(); closeMenu(); }}
                  className="bg-[#B36281] text-white py-3 rounded-xl text-center"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link 
                href="/signIn" 
                onClick={closeMenu}
                className="bg-[#B36281] text-white py-3 rounded-xl text-center block"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;