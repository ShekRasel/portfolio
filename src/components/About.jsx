import React from 'react';
import Skills from './Skills';

function About() {
  return (
    <div id='about' className="bg-neutral-900 text-slate-300 md:py-7 h-auto lg:h-auto px-8 md:px-16 lg:px-12 xl:px-32">
      <div className="lg:px- mx-auto">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 font-serif lg:mt-10">
          About Me
        </h1>
        
        {/* Description */}
        <p className="text-sm font-semibold sm:text-sm md:text-xl md:italic leading-relaxed text-justify lg:px-6 lg:font-sans">
          Hi, I'm Shek Rasel, a dedicated web developer with a passion for crafting dynamic and user-centric websites. I specialize in both frontend and backend technologies, leveraging modern frameworks to build seamless digital experiences. With a keen eye for detail and a commitment to quality, I strive to create innovative solutions that exceed expectations. My experience includes working on diverse projects, from small-scale applications to comprehensive systems. I'm constantly learning and adapting to industry trends, ensuring that my skills remain cutting-edge. Outside of development, I enjoy problem-solving and collaborating with others to bring creative ideas to life.
        </p>

        {/* My Skills */}
        <div className=" mt-12 lg:mt-16">
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-2 mt-4 font-serif">
            My Skills
          </h2>
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default About;
