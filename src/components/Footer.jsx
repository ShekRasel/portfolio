import React from 'react';
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-neutral-900 text-white pt-12 pb-2 border-y">
      <div className="container mx-auto px-8 flex gap-6 md:gap-0 lg:gap-0 justify-center items-center">
        {/* Left Section */}
        <div className='w-96 text-sm md:text-base'>
          <h2 className="text-lg font-semibold mb-2">Email</h2>
          <p className="mb-4">swe.rasel@gmail.com</p>

          <h2 className="text-lg font-semibold mb-2">Address</h2>
          <p className="mb-4">Ipsha, Gazipur, Bangladesh</p>

          <h2 className="text-lg font-semibold mb-2">Connect</h2>
          <div className="flex space-x-4">
            <a href="https://github.com/ShekRasel" target="_blank" rel="noopener noreferrer">
              {/* <img src="github.png" alt="GitHub" className="h-8 w-8" /> */}
              <SiGithub />
            </a>
            <a href="https://www.linkedin.com/in/shek-rasel-80324724a/" target="_blank" rel="noopener noreferrer">
              {/* <img src="linkedin.png" alt="LinkedIn" className="h-6 w-6" /> */}
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className='w-[660px]'>
          <h2 className="text-lg font-semibold mb-2">About My Work</h2>
          <p className="mb-6 text-justify text-sm md:text-base">
            I am a passionate web developer specializing in building responsive and user-friendly websites. My expertise includes modern JavaScript frameworks and libraries, and I strive to create engaging user experiences. Let's build something amazing together!
          </p>
          <a href="#contact">

          <button className="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-8 font-semibold rounded">
            Reach Me
          </button>
          </a>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="border-t border-gray-700 my-8" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row  items-center text-center md:text-left justify-center md:pb-10">
        <p className="mb-4 md:mb-0">Thanks for scrolling!</p>
      </div>
      <p className="text-lg  font-semibold text-gray-400 text-center md:text-right pr-6">&copy; 2024 CopyRight : Shek Rasel</p>
    </div>
  );
}

export default Footer;
