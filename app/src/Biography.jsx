import React from 'react';
import { FaJsSquare } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

const Biography = () => {
  return (
    <main id="bio" className="cursor-default bg-zinc-900 h-auto lg:h-max ">
      <div className="flex items-center h-auto justify-center">
        <div className="flex flex-col lg:flex-row  max-w-6xl w-full px-6 py-8">

          {/* Timeline Section */}
          <div className="flex-1 mb-6 lg:mb-0">
            <div className="w-auto max-w-4xl shadow-md rounded-md p-5 bg-zinc-950/50 text-gray-200 h-full overflow-auto">
              <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                {/* Timeline Items */}
                <li>
                  <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="timeline-start mb-10 md:text-end">
                    <time className="font-mono italic">2005</time>
                    <div className="text-lg font-black">Born</div>
                    Born With an Ambition
                  </div>
                  <hr />
                </li>
                {/* Add other timeline items as before */}
                <li>
                  <hr />
                  <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="timeline-end md:mb-10">
                    <time className="font-mono italic">2008</time>
                    <div className="text-lg font-black">Admission</div>
                    Took Admission at Holy Angels' School, Katwa
                  </div>
                  <hr />
                </li>
                <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd" />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">2022-23</time>
                  <div className="text-lg font-black">ICSE EXAMINATION</div>
                    Completed ICSE Board Examinations From Holy Angels' School
                </div>
                <hr />
              </li>
            
              {/* Add other timeline items as before */}
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd" />
                  </svg>
                </div>
                <div className="timeline-end md:mb-10">
                  <time className="font-mono italic">2024</time>
                  <div className="text-lg font-black">ISC EXAMINATION</div>
                    Completed ISC BOARD EXAMINATIONS from Holy Angels' School , Katwa
                    Purba Bardhaman, West Bengal and completed my schooling.
                </div>
                <hr />
              </li>

              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd" />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">2024</time>
                  <div className="text-lg font-black">Currenty Studying</div>
                    B.Tech Computer Science Engineering
                    At Adamas University, Barasat, Kolkata, West Bengal 
                </div>
                <hr />
              </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="divider lg:divider-horizontal"></div>

          {/* Biography Section */}
          <div className="flex-1 h-screen p-10 w-auto max-w-5xl rounded-md shadow-md mx-5 bg-zinc-950/50 text-gray-200">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Biography
            </h1>
            
            <div className="divider"></div>
            <h2 className="text-2xl mb-4">
              I am <span className="font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Subham Karmakar</span>
            </h2>
            <p className="text-lg mb-6">
              Hello! I'm a web developer passionate about creating intuitive and dynamic user interfaces. I focus on writing clean, maintainable code, and I'm always learning new technologies.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-200">Age</h3>
                <p className="text-lg text-gray-400">19 Years</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-200">Address</h3>
                <p className="text-lg text-gray-400">Kolkata, West Bengal, India</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-200">Contact</h3>
                <p className="text-lg text-gray-400">rikk4335@gmail.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-200">Skills</h3>
                <div className="flex gap-4 flex-wrap">
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
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-200">Hobbies</h3>
                <p className="text-lg text-gray-400">Photography, Drawing, Designing</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-200">Experience</h3>
                <p className="text-lg text-gray-400">Learning on the go with a year into this field!</p>
              </div>
            </div>
            <div className="divider"></div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Biography;
