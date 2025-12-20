import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-bold text-center text-lux-black'>
        Contact <span className="text-lux-gold">Me</span>
      </h1>

      {/* NEW: Business Info Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12 mt-8">
        {/* Phone Card */}
        <div className="bg-white p-6 shadow-lg rounded-xl border-t-4 border-lux-gold text-center hover:scale-105 transition-transform">
          <div className="flex justify-center mb-4 text-lux-gold">
            <FaPhoneAlt size={30} />
          </div>
          <h3 className="font-bold text-lg text-lux-black">Call Me</h3>
          <p className="text-lux-gray mt-2">+254 116157645</p>
          <p className="text-xs text-stone-400">Mon-Fri, 9am - 9pm</p>
        </div>

        {/* Email Card */}
        <div className="bg-white p-6 shadow-lg rounded-xl border-t-4 border-lux-gold text-center hover:scale-105 transition-transform">
          <div className="flex justify-center mb-4 text-lux-gold">
            <FaEnvelope size={30} />
          </div>
          <h3 className="font-bold text-lg text-lux-black">Email Me</h3>
          <p className="text-lux-gray mt-2">dmwongela41@gmail.com</p>
          <p className="text-xs text-stone-400">Business Inquiries</p>
        </div>

        {/* Location Card */}
        <div className="bg-white p-6 shadow-lg rounded-xl border-t-4 border-lux-gold text-center hover:scale-105 transition-transform">
          <div className="flex justify-center mb-4 text-lux-gold">
            <FaMapMarkerAlt size={30} />
          </div>
          <h3 className="font-bold text-lg text-lux-black">Location</h3>
          <p className="text-lux-gray mt-2">Nairobi, Kenya</p>
          <p className="text-xs text-stone-400">Remote & Hybrid</p>
        </div>
      </div>

      {/* The Form */}
      <form
        action="https://getform.io/f/your-id-here"
        method='POST'
        encType='multipart/form-data'
        className="bg-white p-8 shadow-xl rounded-xl border border-stone-100"
      >
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2 text-lux-gray font-semibold'>Name</label>
            <input
              className='border-2 rounded-lg p-3 flex border-stone-300 focus:outline-none focus:border-lux-gold transition-colors duration-300 bg-stone-50'
              type="text"
              name='name'
            />
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2 text-lux-gray font-semibold'>Phone Number</label>
            <input
              className='border-2 rounded-lg p-3 flex border-stone-300 focus:outline-none focus:border-lux-gold transition-colors duration-300 bg-stone-50'
              type="text"
              name='phone'
            />
          </div>
        </div>

        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2 text-lux-gray font-semibold'>Email</label>
          <input
            className='border-2 rounded-lg p-3 flex border-stone-300 focus:outline-none focus:border-lux-gold transition-colors duration-300 bg-stone-50'
            type="email"
            name='email'
          />
        </div>

        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2 text-lux-gray font-semibold'>Subject</label>
          <input
            className='border-2 rounded-lg p-3 flex border-stone-300 focus:outline-none focus:border-lux-gold transition-colors duration-300 bg-stone-50'
            type="text"
            name='subject'
          />
        </div>

        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2 text-lux-gray font-semibold'>Message</label>
          <textarea
            className='border-2 rounded-lg p-3 border-stone-300 focus:outline-none focus:border-lux-gold transition-colors duration-300 bg-stone-50'
            rows='10'
            name='message'
          ></textarea>
        </div>

        <button className='bg-lux-black text-white mt-4 w-full p-4 rounded-lg font-bold tracking-widest hover:bg-lux-gold hover:text-white transition-all duration-300 ease-in-out shadow-lg'>
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default Contact;