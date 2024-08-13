import React from 'react';

function Hero() {
  return (
    <div className="bg-neutral-900 text-white flex justify-center lg:h-screen  px-4 py-8 " id='home'>
      <div className="flex flex-row items-center gap-3 md:gap-16 lg:gap-24 ">
        {/* Left Section */}
        <div className="flex flex-col items-start mb-8 md:mb-0">
          <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4">
            I'M <span className='text-yellow-400 text-3xl md:text-5xl lg:text-6xl'>Shek Rasel</span> <br />
            Javascript Developer
          </h3>
          <a href="#contact">
            <button  className="bg-yellow-400 text-black font-semibold px-3 py-1 md:px-6 md:py-2 lg:px-8 lg:py-3 rounded-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2">
            Contact Me
            </button>
          </a>
          
        </div>

        {/* Right Section (Profile Picture) */}
        <div className="flex-shrink-0">
          <img
            src="2023-01-23-10-14-36-699.jpg"
            alt="Profile"
            className="w-28 h-28 md:w-48 md:h-48 lg:w-[450px] lg:h-[450px] object-cover border-4 border-gray-200 shadow-lg shadow-gray-800 transform hover:scale-105 transition duration-300 ease-in-out rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
