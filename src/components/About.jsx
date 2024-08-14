import React, { useRef, useEffect } from "react";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { motion, useAnimation, useInView } from "framer-motion";

function About() {
  const resumeRef = useRef(null);
  const resumeControls = useAnimation();
  const isInView = useInView(resumeRef, { once: false });

  useEffect(() => {
    if (isInView) {
      resumeControls.start("visible");
    } else {
      resumeControls.start("hidden");
    }
  }, [isInView, resumeControls]);

  const resumeVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div
      id="about"
      className="bg-neutral-900 text-slate-300 md:py-7 h-auto  px-8 md:px-16 lg:px-12 xl:px-32"
    >
      <div className="lg:px- mx-auto">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 font-serif lg:mt-10">
          About Me
        </h1>

        {/* Description */}
        <p className="text-sm font-semibold sm:text-sm md:text-xl md:italic leading-relaxed text-justify lg:px-6 lg:font-sans">
          Hi, I'm Shek Rasel, a dedicated web developer with a passion for
          crafting dynamic and user-centric websites. I specialize in 
          frontend  technologies, leveraging modern frameworks to
          build seamless digital experiences. With a keen eye for detail and a
          commitment to quality, I strive to create innovative solutions that
          exceed expectations. My experience includes working on diverse
          projects, from small-scale applications to comprehensive systems. I'm
          constantly learning and adapting to industry trends, ensuring that my
          skills remain cutting-edge. Outside of development, I enjoy
          problem-solving and collaborating with others to bring creative ideas
          to life.
        </p>
        <motion.div
          ref={resumeRef}
          className="flex gap-8 items-center"
          initial="hidden"
          animate={resumeControls}
          variants={resumeVariants}
          transition={{
            duration: 3,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
        >
          <span className="flex py-4 md:py-12 md:text-4xl items-center gap-2 md:gap-6">
            <h1 className="font-semibold text-white font-serif">My Resume</h1>
            <FaArrowRightFromBracket />
          </span>
          <a 
            href="/public/My CV.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-yellow-400 text-black rounded-sm md:text-2xl font-semibold hover:bg-yellow-500 h-8 md:h-12 w-24 md:w-32 font-serif md:font-normal flex items-center justify-center"
          >
            Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
