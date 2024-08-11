import React, { useState } from 'react';
import { BiSearch, BiMenu, BiX } from 'react-icons/bi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-neutral-900 text-white shadow-md sticky top-0 z-50 transition-all duration-300 ease-in-out pt-3">
      <div className="container mx-auto px-4 py-2 lg:px-14 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="logo.jpg" alt="Logo" className="h-10 w-10" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 font-semibold">
         <a href="#home" className="hover:text-yellow-400">Home</a>
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#portfolio" className="hover:text-yellow-400">Portfolio</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </div>

        {/* Search Input with Icon */}
        <div className="flex items-center border border-gray-400 rounded-full px-3 py-1">
          <BiSearch className="text-white" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="ml-2 outline-none bg-transparent text-white placeholder-gray-300 mb-1"
          />
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden flex items-center ml-4">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <BiX className="text-white h-6 w-6" /> : <BiMenu className="text-white h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Smooth Transition */}
      <div className={`md:hidden overflow-hidden transition-all duration-700 ease-in ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="flex flex-col items-center py-2 bg-neutral-800 text-white">
          <a href="#home" className="hover:text-yellow-400 py-1">Home</a>
          <a href="#about" className="hover:text-yellow-400 py-1">About</a>
          <a href="#portfolio" className="hover:text-yellow-400 py-1">Portfolio</a>
          <a href="#contact" className="hover:text-yellow-400 py-1">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
