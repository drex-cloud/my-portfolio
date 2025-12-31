import React, { useState } from 'react';
import { FaTimes, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import exp from '../assets/exp.png';
import das from '../assets/das.png';
import invent from '../assets/inv.png';// --- 1. THE DATA STORAGE (Local "Database") ---
import hist from '../assets/hist.png';
import staff from '../assets/staff.png';
import poss from '../assets/pos.png';
import rec from '../assets/rec.png';
import eng1 from '../assets/eng1.jpeg';
import eng2 from '../assets/eng2.jpeg';
import eng3 from '../assets/eng3.jpeg';
import eng4 from '../assets/eng4.png';
import eng5 from '../assets/eng5.png';
import map1 from '../assets/map1.png';
import map2 from '../assets/map2.png';
import map3 from '../assets/map3.jpeg';



// You can add as many screenshots as you want in the 'images' array.
const projectsData = [
  {
    id: 1,
    title: 'DukaOS - Shop Management System',
    description: "A full- stack retail management platform featuring real - time inventory tracking, multi - role authentication(Admin / Manager / Staff), and a dynamic Point of Sale(POS) interface.Integrated with a Django REST Framework backend and Neon PostgreSQL database.",
    tech: 'React JS • Tailwind CSS • Django REST • PostgreSQL • JWT',
    mainImage: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80',
    // These are the images shown in the popup
    gallery: [
      das,
      invent,
      exp,
      hist,
      staff,
      poss,
      rec,

    ],
    liveUrl: 'https://operatingsystem-lemon.vercel.app/',
    codeUrl: 'https://github.com/drex-cloud/dukaos',

  },
  {
    id: 2, // or whatever your next ID is
    title: 'NomadPulse: Orbital Explorer',
    description: "A high-concept satellite telemetry dashboard featuring a 3D interactive globe, real-time atmospheric data synchronization, and automated orbital distance calculations using the Haversine formula.",
    tech: 'React + Mapbox GL + Tailwind CSS',
    mainImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80', // A cool space/tech image
    gallery: [
      map1,
      map2,
      map3,
    ],
    liveUrl: 'nomad-pulse.vercel.app',
    codeUrl: 'https://github.com/drex-cloud/nomad-pulse',
  },
  {
    id: 3,
    title: 'EngiVault | Technical Asset Manager',
    description: "A secure, hierarchical Document Management System (DMS) built for engineering workflows. Developed a decoupled architecture to link technical specifications directly to PDF blueprints and rich-text system logs. Features a custom JWT-secured authentication gateway and a mobile-optimized 'Drafting Board' for field access.",
    tech: 'Django + DRF + PostgreSQL + Vanilla JS',
    mainImage: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1932&q=80',
    gallery: [
      eng1,
      eng2,
      eng3,
      eng4,
      eng5
      // API Docs
    ],
    liveUrl: 'https://engvault-frontend.vercel.app',
    codeUrl: 'https://github.com/drex-cloud/engvaultfullcode',
    //demoUser: 'admin',
    //demoPass: 'shop123'
  },

];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 relative'>
      <h1 className='text-4xl font-bold text-center text-lux-black mb-8'>
        Featured <span className="text-lux-gold">Projects</span>
      </h1>

      {/* --- 2. THE GRID (The Main List) --- */}
      <div className='grid sm:grid-cols-2 gap-8'>
        {projectsData.map((project) => (
          <div key={project.id} className='relative flex flex-col shadow-xl shadow-stone-300 rounded-xl bg-white overflow-hidden hover:scale-105 transition-transform duration-300'>
            <div className="h-48 w-full overflow-hidden cursor-pointer" onClick={() => setSelectedProject(project)}>
              <img src={project.mainImage} alt={project.title} className='w-full h-full object-cover' />
            </div>
            <div className='p-6 flex flex-col flex-grow'>
              <h3 className='text-2xl font-bold text-lux-black mb-2'>{project.title}</h3>
              <p className='pb-4 text-lux-gold font-bold text-xs uppercase'>{project.tech}</p>
              <div className="mt-auto">
                {/* This button opens the Modal */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className='w-full py-2 rounded-lg bg-lux-black text-white font-bold text-sm hover:bg-lux-gold transition-colors shadow-md'
                >
                  View Screenshots & Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- 3. THE MODAL (The Popup) --- */}
      {selectedProject && (
        <div className='fixed inset-0 bg-black/80 z-[100] flex justify-center items-center p-4 overflow-y-scroll'>
          <div className='bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative p-6 shadow-2xl animate-fade-in'>

            {/* Close Button */}
            <div
              onClick={() => setSelectedProject(null)}
              className='absolute top-4 right-4 cursor-pointer p-2 bg-stone-200 rounded-full hover:bg-red-500 hover:text-white transition-colors'
            >
              <FaTimes size={20} />
            </div>

            <h2 className='text-3xl font-bold text-lux-black mb-2'>{selectedProject.title}</h2>
            <p className='text-lux-gold font-bold uppercase text-sm mb-6'>{selectedProject.tech}</p>

            {/* Gallery Grid (Shows all images) */}
            <div className='grid md:grid-cols-2 gap-4 mb-8'>
              {selectedProject.gallery.map((img, index) => (
                <img key={index} src={img} alt="screenshot" className='w-full h-64 object-cover rounded-lg border border-stone-200 shadow-sm' />
              ))}
            </div>

            {/* Description & Links */}
            <div className='border-t border-stone-200 pt-6'>
              <h3 className="font-bold text-xl mb-2">About this Project</h3>
              <p className='text-lux-gray mb-6 leading-relaxed'>{selectedProject.description}</p>

              {/* Credentials Display if they exist */}
              {selectedProject.demoUser && (
                <div className="mb-6 bg-stone-100 p-4 rounded-md border border-stone-200 inline-block">
                  <p className="text-xs text-stone-500 uppercase font-bold">Test Credentials</p>
                  <p className="text-sm text-lux-black font-mono mt-1">
                    User: <span className="font-bold">{selectedProject.demoUser}</span> | Pass: <span className="font-bold">{selectedProject.demoPass}</span>
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className='flex gap-4'>
                <a href={selectedProject.liveUrl} target="_blank" rel="noreferrer" className='flex-1'>
                  <button className='w-full py-3 rounded-lg bg-lux-black text-white font-bold flex justify-center items-center gap-2 hover:bg-lux-gold transition-colors'>
                    <FaExternalLinkAlt /> Open Live Demo
                  </button>
                </a>
                <a href={selectedProject.codeUrl} target="_blank" rel="noreferrer" className='flex-1'>
                  <button className='w-full py-3 rounded-lg border-2 border-lux-black text-lux-black font-bold flex justify-center items-center gap-2 hover:bg-stone-100 transition-colors'>
                    <FaGithub /> View Code
                  </button>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Projects;