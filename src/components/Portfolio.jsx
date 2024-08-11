import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const projects = [
  {
    title: 'Event Management System',
    description: 'These Project I created help of chat gpt',
    link: 'https://frontend-eight-steel-19.vercel.app/', 
  },
  {
    title: 'YouTube Clone',
    description: 'Html and Css use only',
    link: 'https://youtube-clone-eight-sable.vercel.app/', 
  },
  {
    title: 'React Cart Drag and Drop',
    description: "It's just cart drag and drop",
    link: 'https://react-cart-drag-up-down.vercel.app/', 
  },
  {
    title: 'Gmail Clone',
    description: 'Html and Css use only',
    link: 'https://example.com/gmail-clone', 
  },
  {
    title: 'Weather Check App',
    description: 'You can check weather condition',
    link: 'https://react-weather-app-silk-five.vercel.app/', 
  },
  {
    title: 'Landing Page',
    description: 'It only for design practice purpuse',
    link: 'https://cuberto-ws-landing-page.vercel.app/', 
  },
  {
    title: 'Landing Page2',
    description: 'It only for design practice purpuse',
    link: 'https://modern-web-app-landing-page-design.vercel.app/', 
  },
];

function Portfolio() {
  return (
    <div id="portfolio" className="min-h-screen bg-neutral-900 p-4 md:p-8 overflow-hidden ">
      <h1 className="text-3xl md:text-4xl lg:text-4xl font-serif font-bold text-center mb-8 mt-12 text-white">
        ...Portfolio...
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center px-8 md:px-8 lg:px-20 mt-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-stone-700 text-white p-4 md:p-0 lg:p-2 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center relative w-full max-w-sm h-64 md:h-64 lg:h-72 group"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <h2 className="text-center text-yellow-400 text-lg md:text-xl font-semibold mb-2">
                {project.title}
              </h2>
            </a>
            <p className="text-center">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="absolute bottom-11 lg:bottom-8 left-1/2 transform -translate-x-1/2 bg-amber-400 hover:bg-yellow-600 text-black font-serif px-3 md:px-1 md:py-1 py-2 rounded-sm lg:rounded-sm lg:py-1 lg:px-3 md:rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-2 md:space-x-2 lg:space-x-2">
                <span>See More</span>
                <FaArrowRight />
              </button>
            </a>
          </div>
        ))}
      </div>
      <div className='h-auto w-full flex justify-center'>
        <a href="https://github.com/ShekRasel?tab=repositories">
            <button className='text-black font-semibold font- bg-yellow-500 text-xl p-2 px-5 rounded-md mt-10 hover:bg-yellow-600'>Browse More</button>
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
