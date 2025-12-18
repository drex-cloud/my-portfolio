import React from 'react';

const ProjectItem = ({ img, title, description, tech, projectUrl, githubUrl, demoUser, demoPass }) => {
  return (
    <div className='relative flex flex-col w-full h-full shadow-xl shadow-stone-300 rounded-xl bg-white overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out'>

      {/* 1. The Image (Top) */}
      <div className="h-48 w-full overflow-hidden">
        <img src={img} alt={title} className='w-full h-full object-cover' />
      </div>

      {/* 2. The Content (Bottom) */}
      <div className='p-6 flex flex-col justify-between flex-grow'>
        <div>
          <h3 className='text-2xl font-bold text-lux-black tracking-wider mb-2'>
            {title}
          </h3>

          {/* New Description Section */}
          <p className="text-lux-gray text-sm leading-relaxed mb-4">
            {description}
          </p>

          <p className='pb-4 text-lux-gold font-bold text-xs uppercase tracking-widest'>
            {tech}
          </p>
        </div>

        {/* 3. Credentials & Buttons */}
        <div>
          {/* Test Access Box */}
          {demoUser && (
            <div className="mb-4 bg-stone-100 p-2 rounded-md border border-stone-200">
              <p className="text-[10px] text-stone-500 uppercase font-bold">Test Credentials</p>
              <p className="text-xs text-lux-black font-mono mt-1">
                User: <span className="font-bold">{demoUser}</span> <br />
                Pass: <span className="font-bold">{demoPass}</span>
              </p>
            </div>
          )}

          <div className="flex gap-4 mt-auto">
            <a href={projectUrl} target="_blank" rel="noreferrer" className="flex-1">
              <button className='w-full py-2 rounded-lg bg-lux-black text-white font-bold text-sm hover:bg-lux-gold transition-colors shadow-md'>
                Live Demo
              </button>
            </a>
            <a href={githubUrl} target="_blank" rel="noreferrer" className="flex-1">
              <button className='w-full py-2 rounded-lg bg-white border-2 border-lux-black text-lux-black font-bold text-sm hover:bg-stone-100 transition-colors'>
                Code
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;