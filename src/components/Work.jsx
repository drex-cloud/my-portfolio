import React from 'react';
import WorkItem from './WorkItem';

const data = [
  {
    year: 2025,
    title: 'Mechanical Engineering Student',
    duration: '1st Year',
    details:
      'Pursuing a Bachelor of Science in Mechanical Engineering. Applying computational logic to physical systems. Learning C++ for engineering simulations.',
  },
  {
    year: 2025,
    title: 'Freelance Full Stack Developer',
    duration: 'Current',
    details:
      'Building custom web applications using vanilla Js ,React, Tailwind CSS, and Django. Specializing in high-performance frontends and scalable backends for clients.',
  },

  {
    year: 2023,
    title: 'Self-Taught Programmer',
    duration: '2 Years',
    details:
      'Mastered the fundamentals of Python and JavaScript. Built several portfolio projects including a Django e-commerce backend and vanilla JS interactive dashboards.',
  },
];

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-lux-black mb-12'>
        Experience & <span className="text-lux-gold">Education</span>
      </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;