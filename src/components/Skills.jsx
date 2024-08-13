import React, { useRef, useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { motion, useAnimation, useInView } from "framer-motion";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <TbBrandJavascript /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "React", icon: <FaReact /> },
  { name: "NodeJs", icon: <DiNodejs /> },
];

function Skills() {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const cardVariants = {
    hiddenLeft: { opacity: 0, x: -100 },
    hiddenRight: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    hover: { scale: 1.1 },
  };

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 lg:px-44 lg:py-10"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="bg-black text-white p-6 lg:p-4 rounded-lg shadow-lg flex flex-col items-center justify-center"
          initial={index < skills.length / 2 ? "hiddenLeft" : "hiddenRight"}
          animate={isInView ? "visible" : index < skills.length / 2 ? "hiddenLeft" : "hiddenRight"}
          whileHover="hover"
          variants={cardVariants}
          transition={{
            duration: 1,
            delay: index * 0,
            hover: { duration: 1 }, // Faster hover transition
          }}
        >
          <div className="text-red-500 text-5xl lg:text-6xl mb-4">
            {skill.icon}
          </div>
          <h3 className="text-center text-yellow-300 text-xl font-semibold">
            {skill.name}
          </h3>
        </motion.div>
      ))}
    </div>
  );
}

export default Skills;
