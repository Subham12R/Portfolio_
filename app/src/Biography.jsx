import React from 'react';
import { FaJsSquare } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

const Biography = () => {
  return (
    <main id="bio" className="bg-gray-100/50 cursor-default">
      <div className="h-screen flex items-center justify-center">
        <div className="flex flex-col lg:items-center lg:flex-row h-screen max-w-6xl w-full px-6 py-8">
          {/* Image on the left */}
          <div className="flex-1 mb-6 lg:mb-0">
            <img 
              src="./banner.jpg" 
              alt="Your Avatar"
              className="w-full h-auto  rounded-lg shadow-lg"
            />
          </div>

          {/* Divider for aesthetic separation */}
          <div className="flex w-full flex-col lg:hidden">
            <div className="divider divider-start"></div>
          </div>

          {/* Text on the right */}
          <div className="flex-1 pl-6 h-max w-auto max-w-5xl rounded-md p-7 shadow-md mx-5 bg-white">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Biography
            </h1>
            <h2 className="text-2xl mb-4">I am <span className='font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Subham Karmakar</span></h2>
            
            <p className="text-lg mb-6">
              Hello! I'm a web developer passionate about creating intuitive and dynamic user interfaces. I focus on writing clean, maintainable code, and I'm always learning new technologies.
            </p>

            {/* Two-column layout under the paragraph */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Left Column: Age, Address, Contact */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Age</h3>
                <p className="text-lg text-gray-600">19 Years</p>
                <div className="divider"></div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                <p className="text-lg text-gray-600">Kolkata, West Bengal, India</p>
                <div className="divider"></div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Contact</h3>
                <p className="text-lg text-gray-600">Email: Rikk4335@gmail.com</p>
                <div className="divider"></div>
              </div>

              {/* Right Column: Skills, Education, Experience */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Skills</h3>
                <div className="flex gap-4 justify-start flex-wrap">
                  <div className="bg-yellow-200 p-2 shadow-md rounded-md inline-block">
                    <FaJsSquare className="inline-block mx-1 text-2xl text-yellow-500" />
                  </div>
                  <div className="bg-blue-200 p-2 shadow-md rounded-md inline-block">
                    <RiReactjsLine className="inline-block mx-1 text-2xl text-blue-600" />
                  </div>
                  <div className="bg-green-200 p-2 shadow-md rounded-md inline-block">
                    <FaNodeJs className="inline-block mx-1 text-2xl text-green-600" />
                  </div>
                  <div className="bg-zinc-200 p-2 shadow-md rounded-md inline-block">
                    <RiNextjsFill className="inline-block mx-1 text-2xl text-zinc-900" />
                  </div>
                </div>
                <div className="divider"></div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">Education</h3>
                <p className="text-lg text-gray-600">Bachelor of Science in Computer Science</p>
                <span className="text-lg text-gray-600">From: Adamas University</span>
                <div className="divider"></div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">Hobbies</h3>
                <p className="text-lg text-gray-600">Photography, Drawing, Designing</p>
                <div className="divider"></div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">Experience</h3>
                <p className="text-lg text-gray-600">Learning On the go with a year into this field!</p>
                <div className="divider"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Biography;
