import React from 'react';

const skills = [
  { name: 'HTML', logo: 'html.png' },
  { name: 'CSS', logo: 'css.webp' },
  { name: 'JavaScript', logo: 'javascript.jpg' },
  { name: 'MongoDB', logo: 'mongo.png' },
  { name: 'React', logo: 'react.png' },
  { name: 'SQL', logo: 'mysql.png' },
];

function Skills() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 lg:px-44 lg:py-10">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-black text-white p-6 lg:p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center"
        >
          <img
            src={skill.logo}
            alt={`${skill.name} logo`}
            className=" w-24 lg:w-28  h-14 lg:h-20 mb-4 lg:p-4"
          />
          <h3 className="text-center text-yellow-400 text-xl font-semibold">
            {skill.name}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default Skills;
