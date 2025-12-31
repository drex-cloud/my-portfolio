import React from 'react';
import { FaPython, FaReact, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiDjango, SiJavascript, SiCplusplus } from 'react-icons/si';

const Resume = () => {
  return (
    <div id='resume' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      {/* 1. UPDATED TITLE: More accurate than "Credentials" */}
      <h1 className='text-4xl font-bold text-center text-lux-black mb-12'>
        Skills & <span className="text-lux-gold">Background</span>
      </h1>

      <div className='grid md:grid-cols-2 gap-8'>

        {/* LEFT COLUMN: Education (The "Credentials" part) */}
        <div className='flex flex-col gap-6'>
          <h3 className='text-2xl font-bold text-lux-black uppercase tracking-wider border-b-4 border-lux-gold w-fit mb-4'>
            Education
          </h3>

          <div className='bg-white p-6 shadow-lg rounded-xl border-l-4 border-lux-black hover:scale-105 transition-transform'>
            <h4 className='font-bold text-lg'>B.Sc. Mechanical Engineering</h4>
            <p className='text-sm text-lux-gold font-bold'>2025 - Present (Year 1)</p>
            <p className='text-lux-gray text-sm mt-2'>
              Developing a strong foundation in physics, advanced calculus, and computational modeling.
            </p>
          </div>

          <div className='bg-white p-6 shadow-lg rounded-xl border-l-4 border-lux-black hover:scale-105 transition-transform'>
            <h4 className='font-bold text-lg'>Full Stack Web Development</h4>
            <p className='text-sm text-lux-gold font-bold'>Self-Taught / Freelance</p>
            <p className='text-lux-gray text-sm mt-2'>
              Mastered the Django + React ecosystem. Capable of building scalable REST APIs.
            </p>
          </div>

          {/* Download Button */}
          <div className='mt-4'>
            <a href="/resume.pdf" download>
              <button className='bg-lux-gold text-white px-8 py-3 rounded-lg font-bold shadow-md hover:bg-lux-black transition-colors w-full md:w-auto'>
                DOWNLOAD FULL RESUME
              </button>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: The "Boxes" (Tech Stack) */}
        <div className='flex flex-col gap-6'>
          <h3 className='text-2xl font-bold text-lux-black uppercase tracking-wider border-b-4 border-lux-gold w-fit mb-4'>
            Technical Stack
          </h3>

          {/* I added C++ since you mentioned Engineering School */}
          <div className='grid grid-cols-2 gap-4'>

            {/* Python */}
            <div className='p-4 bg-white shadow-md rounded-lg flex items-center gap-4 hover:bg-stone-50 transition-colors border border-transparent hover:border-lux-gold'>
              <FaPython size={30} className='text-[#3776AB]' />
              <div>
                <p className='font-bold text-lux-black'>Python</p>
                <p className='text-xs text-lux-gray'>Advanced</p>
              </div>
            </div>

            {/* React */}
            <div className='p-4 bg-white shadow-md rounded-lg flex items-center gap-4 hover:bg-stone-50 transition-colors border border-transparent hover:border-lux-gold'>
              <FaReact size={30} className='text-[#61DAFB]' />
              <div>
                <p className='font-bold text-lux-black'>React</p>
                <p className='text-xs text-lux-gray'>Frontend UI</p>
              </div>
            </div>

            {/* Django */}
            <div className='p-4 bg-white shadow-md rounded-lg flex items-center gap-4 hover:bg-stone-50 transition-colors border border-transparent hover:border-lux-gold'>
              <SiDjango size={30} className='text-[#092E20]' />
              <div>
                <p className='font-bold text-lux-black'>Django</p>
                <p className='text-xs text-lux-gray'>Backend API</p>
              </div>
            </div>

            {/* C++ (Added for Mechanical Engineering) */}
            <div className='p-4 bg-white shadow-md rounded-lg flex items-center gap-4 hover:bg-stone-50 transition-colors border border-transparent hover:border-lux-gold'>
              <SiCplusplus size={30} className='text-[#00599C]' />
              <div>
                <p className='font-bold text-lux-black'>C++</p>
                <p className='text-xs text-lux-gray'>Engineering</p>
              </div>
            </div>

            {/* Tailwind */}
            <div className='p-4 bg-white shadow-md rounded-lg flex items-center gap-4 hover:bg-stone-50 transition-colors border border-transparent hover:border-lux-gold'>
              <SiJavascript size={30} className='text-[#F7DF1E]' />
              <div>
                <p className='font-bold text-lux-black'>JavaScript</p>
                <p className='text-xs text-lux-gray'>Core / ES6+</p>
              </div>
            </div>

            {/* Database */}
            <div className='p-4 bg-white shadow-md rounded-lg flex items-center gap-4 hover:bg-stone-50 transition-colors border border-transparent hover:border-lux-gold'>
              <FaDatabase size={30} className='text-lux-gray' />
              <div>
                <p className='font-bold text-lux-black'>PostgreSQL</p>
                <p className='text-xs text-lux-gray'>Data</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

  );
};

export default Resume;