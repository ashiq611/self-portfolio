'use client';
// components/EducationSection.js
import React, { useEffect, useState } from 'react';

const EducationSection = () => {
  // State to trigger the animation when the section is in the viewport
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5, // Trigger animation when 50% of the section is in view
      }
    );

    const section = document.getElementById('education-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div
      id="education-section"
      className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16 px-4"
    >
      <h2 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EDUCATION
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <div
          className={`${
            isVisible
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-10 scale-90'
          } transition-all duration-1000 ease-out flex items-center gap-4`}
        >
          {/* Graduation Cap Icon (Inline SVG) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-yellow-500 transform transition-transform duration-1000 ease-out"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2l6 3-6 3-6-3 6-3zM4.5 8.625L10 11l5.5-2.375v3.75L10 16l-5.5-2.375V8.625z"
              clipRule="evenodd"
            />
          </svg>

          {/* Degree Text */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-semibold mb-2">BSc in Software Engineering</h3>
            <p className="text-lg">Daffodil International University</p>
            <p className="text-lg">Result: 3.88/4.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
