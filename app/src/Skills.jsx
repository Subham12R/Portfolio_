import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  return (
    <>
      <div className="bg-zinc-900">
        {/* Header */}
        <div className="w-full shadow-md h-auto p-4 bg-zinc-900">
          <span className="text-4xl font-bold text-center flex justify-center items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            My Services
          </span>
        </div>

        {/* Cards */}
        <div className="flex justify-center flex-wrap p-4 gap-4 items-center sm:flex-col md:flex-row opacity-10 hover:opacity-90 transition-all duration-500 ease-in-out">
          {/* Card-1 */}
          <div className="card relative w-80 sm:w-full md:w-96 shadow-xl bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-800 hover:from-zinc-600 hover:via-zinc-500 hover:to-zinc-700 transition-transform duration-300 ease-in-out hover:scale-105 group">
            <figure className="p-4 flex justify-center items-center relative overflow-hidden">
              <FontAwesomeIcon icon={faDesktop} size="6x" className="text-white p-7 relative z-10" />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </figure>
            <div className="card-body relative">
              <h2 className="card-title text-white">Frontend Development</h2>
              <p className="text-white">
                Worried about webpages? No more can get customised webpages at a go.
              </p>
            </div>
          </div>

          {/* Card-2 */}
          <div className="card relative w-80 sm:w-full md:w-96 shadow-xl bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-800 hover:from-zinc-600 hover:via-zinc-500 hover:to-zinc-700 transition-transform duration-300 ease-in-out hover:scale-105 group">
            <figure className="p-4 flex justify-center items-center relative overflow-hidden">
              <FontAwesomeIcon icon={faDesktop} size="6x" className="text-white p-7 relative z-10" />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </figure>
            <div className="card-body relative">
              <h2 className="card-title text-white">Backend Development</h2>
              <p className="text-white">
                Worried about the backend? I got you covered! 
              </p>
            </div>
          </div>

          {/* Card-3 */}
          <div className="card relative w-80 sm:w-full md:w-96 shadow-xl bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-800 hover:from-zinc-600 hover:via-zinc-500 hover:to-zinc-700 transition-transform duration-300 ease-in-out hover:scale-105 group">
            <figure className="p-4 flex justify-center items-center relative overflow-hidden">
              <FontAwesomeIcon icon={faDesktop} size="6x" className="text-white p-7 relative z-10" />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </figure>
            <div className="card-body relative">
              <h2 className="card-title text-white">Full Stack Development</h2>
              <p className="text-white">
                Full Stack webpage services are given. MERN Based webpages also made.
              </p>
            </div>
          </div>
        </div>


        </div>
      
    </>
  );
};

export default Skills;
