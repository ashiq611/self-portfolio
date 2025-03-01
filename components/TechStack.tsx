// components/TechStack.js
import React from 'react';

const technologies = [
  'React',
  "Selenium",
  "WebdriverIO",
  'Prefect',
  'Tailwind',
  'Grafana',
  'React+Native',
  'Next.js',
  'Node.js',
  'JavaScript',
  'Python',
  'Flask',
  'Java',
  'Spring Boot',
  'Redis',
  'Docker',
  'PostgreSQL',
  'RabbitMQ',
  'Nginx'
];

const TechStack = () => {
  return (
    <div className=" text-white py-10 px-4">
      <h2 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        TECHNOLOGY STACK
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className="flex flex-wrap gap-6 justify-center">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="text-xl font-bold flex items-center space-x-2"
          >
            <span
              className="text-4xl animate-swing bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-orange-400"
            >
              {tech[0]}
            </span>
            <span>{tech.slice(1)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
