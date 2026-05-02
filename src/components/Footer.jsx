import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#B36281] text-[#FFECC0] pt-12 pb-6 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Contact Us Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold border-b border-[#EE9B9B] pb-2 inline-block">
            Contact Us
          </h3>
          <ul className="space-y-3 opacity-90">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#FFC09F]" /> 
              <span>support@bookshelf.com</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-[#FFC09F]" /> 
              <span>+880 1234 567890</span>
            </li>
          </ul>
        </div>

        {/* Branding */}
        <div className="text-center flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-white mb-2">BookShelf</h2>
          <p className="text-[#FFC09F] text-sm italic">
            "Organizing your world of knowledge, one page at a time."
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-xl font-bold border-b border-[#EE9B9B] pb-2 inline-block mb-4">
            Follow Us
          </h3>
          <div className="flex gap-6 text-2xl">
            <a href="#" className="hover:text-white transition"><FaFacebook /></a>
            <a href="#" className="hover:text-white transition"><FaTwitter /></a>
            <a href="#" className="hover:text-white transition"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-[#EE9B9B]/30 text-center text-sm opacity-70">
        © {new Date().getFullYear()} BookShelf. Created with Passion.
      </div>
    </footer>
  );
};

export default Footer;