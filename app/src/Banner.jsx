import React, { useState } from "react";

import { Button } from "@/components/ui/button";

const Banner = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };



  return (
    <>
      {/* Navbar */}
      <header>
        <nav className="navbar bg-zinc-200/50 shadow-md">
          {/* Navbar Start */}
          <div className="navbar-start">
            {/* Hamburger Menu */}
            <button
              className="lg:hidden p-2 focus:outline-none"
              onClick={toggleSidebar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-8 6h8"
                />
              </svg>
            </button>

            {/* Navbar Title */}
            <a className="btn btn-ghost text-xl">Portfolio</a>
          </div>

          {/* Navbar Center (Desktop) */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a className="text-xl font-bold hover:scale-105 duration-500 transition-all ease-out bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Home
                </a>
              </li>
              <li>
                <a className="text-xl font-bold hover:scale-105 duration-500 transition-all ease-out outline-none">
                  About
                </a>
              </li>
              <li>
                <a className="text-xl font-bold hover:scale-105 duration-500 transition-all ease-out outline-none">
                  Services
                </a>
              </li>
              <li>
                <a className="text-xl font-bold hover:scale-105 duration-500 transition-all ease-out outline-none">
                  Projects
                </a>
              </li>
              <li>
                <a className="text-xl font-bold hover:scale-105 duration-500 transition-all ease-out outline-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Navbar End */}
          <div className="navbar-end">
          <Button id="" variant="" className="ml-3 shadow-lg text-blue-950 bg-blue-400 hover:bg-blue-600 opacity-80 hover:scale-105 hover:opacity-100 group transform transition-all ease-in-out duration-500 ">Hire Me</Button>
          </div>
        </nav>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-bold">Portfolio</h2>
            <button onClick={toggleSidebar} className="p-2 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <a
                href="#"
                className="text-xl font-bold hover:scale-105 duration-500 transition-all ease-out bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              >
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-lg font-bold hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-lg font-bold hover:text-blue-500">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-lg font-bold hover:text-blue-500">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="text-lg font-bold hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Section */}
      <main className="bg-white cursor-default">
        <div className="flex justify-center items-center h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 py-8 max-w-7xl w-full">
            {/* Left Grid - Text */}
            <div className="flex flex-col justify-center items-center space-y-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Hello, I am
              </h2>
              <span className="text-4xl font-bold text-zinc-900">Subham Karmakar</span>

              <div className="mt-3">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Web Developer
                </h3>
              </div>
              <Button
                className="bg-blue-500 text-white shadow-md hover:scale-105 hover:bg-blue-700 transition-all transform ease-in-out duration-500"
                variant="secondary"
              >
                Download CV
              </Button>
            </div>

            {/* Right Grid - Image */}
            <div className="flex justify-center items-center">
              <img
                className="w-full max-w-md rounded-lg shadow-xl transform transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-3d hover:shadow-2xl hover:mx-8 hover:my-8"
                src="./banner.jpg"
                alt="Developer"
              />
            </div>
          </div>
        </div>


      </main>
    </>
  );
};

export default Banner;
