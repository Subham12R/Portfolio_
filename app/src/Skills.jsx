import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { Separator } from "@/components/ui/separator";

const Skills = () => {
  return (
    <>
      <div className="bg-white-900">
        
        {/* Header */}
        <div className="w-full  h-auto p-4 bg-white">
        <Separator className="my-4" />
          <span className="text-4xl font-bold text-center flex justify-center items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            My Services
          </span>
          <Separator className="my-4" />
        </div>

        {/* Cards */}
        <div className="flex justify-center flex-wrap p-4 gap-4 items-center sm:flex-col md:flex-row opacity-10 hover:opacity-90 transition-all duration-500 ease-in-out">
          {/* Card-1 */}
          <div className="card relative w-80 sm:w-full md:w-96 shadow-xl bg-gradient-to-br from-blue-900 via-blue-700 to-blue-800 hover:from-blue-600 hover:via-blue-500 hover:to-blue-700 transition-transform duration-300 ease-in-out hover:scale-105 group">
            <figure className="p-4 flex justify-center items-center relative overflow-hidden">
              <FontAwesomeIcon icon={faDesktop} size="6x" className="text-white p-7 relative z-10" />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </figure>
            <div className="card-body relative">
              <h2 className="card-title text-white">Frontend Development</h2>
              <p className="text-white">
                Worried about webpages? No more can get customised webpages at a go.
              </p>
            </div>
          </div>

          {/* Card-2 */}
          <div className="card relative w-80 sm:w-full md:w-96 shadow-xl bg-gradient-to-br from-blue-900 via-blue-700 to-blue-800 hover:from-blue-600 hover:via-blue-500 hover:to-blue-700 transition-transform duration-300 ease-in-out hover:scale-105 group">
            <figure className="p-4 flex justify-center items-center relative overflow-hidden">
              <FontAwesomeIcon icon={faDesktop} size="6x" className="text-white p-7 relative z-10" />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </figure>
            <div className="card-body relative">
              <h2 className="card-title text-white">Frontend Development</h2>
              <p className="text-white">
                Worried about webpages? No more can get customised webpages at a go.
              </p>
            </div>
          </div>

          {/* Card-3 */}
          <div className="card relative w-80 sm:w-full md:w-96 shadow-xl bg-gradient-to-br from-blue-900 via-blue-700 to-blue-800 hover:from-blue-600 hover:via-blue-500 hover:to-blue-700 transition-transform duration-300 ease-in-out hover:scale-105 group">
            <figure className="p-4 flex justify-center items-center relative overflow-hidden">
              <FontAwesomeIcon icon={faDesktop} size="6x" className="text-white p-7 relative z-10" />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </figure>
            <div className="card-body relative">
              <h2 className="card-title text-white">Frontend Development</h2>
              <p className="text-white">
                Worried about webpages? No more can get customised webpages at a go.
              </p>
            </div>
          </div>
        </div>


        </div>

        <div className='h-auto p-5 bg-white'>
          <h1 className='text-2xl font-bold font-sans text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Client Testimonials</h1>
          <div className="w-auto lg:max-w-8xl mt-5 p-5 shadow-md bg-white flex flex-1 justify-center items-center rounded-md">
          <div className="carousel rounded-box">
          <div className="carousel-item opacity-80 hover:opacity-100 hover:scale-105 ease-in-out transition-all duration-700 ">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
              alt="Burger" />
          </div>
          <div className="carousel-item opacity-80 hover:opacity-100 hover:scale-105 ease-in-out transition-all duration-700">
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              alt="Burger" />
          </div>
          <div className="carousel-item opacity-80 hover:opacity-100 hover:scale-105 ease-in-out transition-all duration-700">
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              alt="Burger" />
          </div>
          <div className="carousel-item opacity-80 hover:opacity-100 hover:scale-105 ease-in-out transition-all duration-700">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              alt="Burger" />
          </div>
          <div className="carousel-item opacity-80 hover:opacity-100 hover:scale-105 ease-in-out transition-all duration-700">
            <img
              src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
              alt="Burger" />
          </div>
          <div className="carousel-item opacity-80 hover:opacity-100 hover:scale-105 ease-in-out transition-all duration-700">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
              alt="Burger" />
          </div>
          <div className="carousel-item opacity-80 hover:opacity-100 hover:scale-105 ease-in-out transition-all duration-700">
            <img
              src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
              alt="Burger" />
          </div>
        </div>
          </div>
          </div>
      
    </>
  );
};

export default Skills;
