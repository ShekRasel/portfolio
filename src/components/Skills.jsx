import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { TbBrandJavascript } from "react-icons/tb";
import { SiMongodb, SiMysql } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <TbBrandJavascript /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'SQL', icon: <SiMysql /> },
];

function Skills() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 lg:px-44 lg:py-10">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-black text-white p-6 lg:p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center"
        >
          <div className="text-red-500 text-5xl lg:text-6xl mb-4">
            {skill.icon}
          </div>
          <h3 className="text-center text-yellow-300 text-xl font-semibold">
            {skill.name}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default Skills;
