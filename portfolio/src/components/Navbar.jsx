import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <nav className="w-full z-50  bg-transparent border-b border-white/10 px-9 pt-11 font-inter">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0  font-bold text-black ">
            NARESH KUMAR K
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-black font-medium ">
            <a href="#work" className="hover:text-blue-400 transition">WORK</a>
            <a href="#about" className="hover:text-blue-400 transition">ABOUT</a>
            <a href="#archive" className="hover:text-blue-400 transition">ARCHIVE</a>
            <a href="#contact" className="hover:text-blue-400 transition ">CONTACT</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center ">
            <button onClick={toggleMenu} className="text-black focus:outline-none cursor-pointer hover:text-gray-500">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 text-white bg-black/80 backdrop-blur-sm ">
          <a href="#work" className="block py-2 hover:text-blue-400">WORK</a>
          <a href="#about" className="block py-2 hover:text-blue-400">ABOUT</a>
          <a href="#archive" className="block py-2 hover:text-blue-400">ARCHIVE</a>
          <a href="#contact" className="block py-2 hover:text-blue-400">CONTACT</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
