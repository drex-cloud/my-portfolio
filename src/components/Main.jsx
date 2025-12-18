import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='main'>
      {/* Background - Elegant White/Stone Texture */}
      <div className='w-full h-screen bg-lux-bg relative'>

        {/* Container */}
        <div className='max-w-[1040px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center p-4'>

          {/* THE PHOTO SECTION */}
          {/* Once you have your photo, put it in src/assets and change the src below */}
          <div className="mb-8">
            <img
              className="w-32 h-32 rounded-full border-4 border-lux-gold shadow-lg object-cover"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt="Profile"
            />
          </div>

          <h2 className='flex sm:text-3xl text-2xl pt-4 text-lux-gray uppercase tracking-widest'>
            I'm a
            <span className='pl-2 text-lux-gold font-bold'>
              <Typewriter
                words={['Developer', 'Innovator', 'Engineer', 'Tech Enthusiast']}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>

          <h1 className='sm:text-6xl text-4xl font-extrabold text-lux-black py-4'>
            Daniel <span className="text-lux-gold">Mwongela</span>
          </h1>

          <p className='py-4 text-lux-gray max-w-[70%] text-center lg:text-left text-lg leading-relaxed'>
            Building digital elegance. I specialize in high-performance web applications using Django and React. Focused on scalability, clean code, and user-centric design.
          </p>

          {/* Social Icons - Gold Hover */}
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <div className='cursor-pointer hover:scale-110 ease-in duration-300 text-lux-black hover:text-lux-gold'>
              <FaLinkedinIn size={25} />
            </div>
            <div className='cursor-pointer hover:scale-110 ease-in duration-300 text-lux-black hover:text-lux-gold'>
              <FaGithub size={25} />
            </div>
            <div className='cursor-pointer hover:scale-110 ease-in duration-300 text-lux-black hover:text-lux-gold'>
              <FaTwitter size={25} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Main;