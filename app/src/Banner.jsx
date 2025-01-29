"use client";
import React, { useState } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ColourfulText from "@/components/ui/colourful-text";
import { BackgroundGradient } from "@/components/ui/background-gradient";



const Banner = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };



  return (
    <>
    
      {/* Navbar */}
      <header>
        <nav className="navbar bg-black shadow-md">
          {/* Navbar Start */}
          <div className="navbar-start" >
            {/* Hamburger Menu */}
            <button
              className="lg:hidden p-2 focus:outline-none text-zinc-200"
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
            <a className="p-2 font-bold text-xl text-zinc-300">Portfolio</a>
          </div>

          {/* Navbar Center (Desktop) */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a href="#home" className="text-xl font-bold hover:scale-105 duration-500 transition-all ease-out bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Home
                </a>
              </li>
              <li>
                <a href="#bio" className="text-xl text-zinc-300 font-bold hover:scale-105 duration-500 transition-all ease-out outline-none">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-xl text-zinc-300 font-bold hover:scale-105 duration-500 transition-all ease-out outline-none">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-xl text-zinc-300 font-bold hover:scale-105 duration-500 transition-all ease-out outline-none">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contacts" className="text-xl text-zinc-300 font-bold hover:scale-105 duration-500 transition-all ease-out outline-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Navbar End */}
          <div className="navbar-end">
          <Button href="#contacts" variant="" className="ml-3 shadow-lg text-zinc-200 bg-blue-500  hover:bg-blue-800 opacity-80 hover:scale-105 hover:opacity-100 group transform transition-all ease-in-out duration-500 ">Hire Me</Button>
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
          className={`fixed top-0 left-0 w-64 h-full bg-zinc-950 shadow-lg transform transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-bold text-zinc-200">Portfolio</h2>
            <button onClick={toggleSidebar} className="p-2 focus:outline-none text-white">
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
                href="#home"
                className="text-xl font-bold hover:scale-105 duration-500 transition-all ease-out bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              >
                Home
              </a>
            </li>
            <li>
              <a href="#bio" className="text-lg font-bold hover:text-blue-500 text-zinc-200">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="text-lg font-bold hover:text-blue-500 text-zinc-200">
                Services
              </a>
            </li>
            <li>
              <a href="#projects" className="text-lg font-bold hover:text-blue-500 text-zinc-200">
                Projects
              </a>
            </li>
            <li>
              <a href="#contacts" className="text-lg font-bold hover:text-blue-500 text-zinc-200">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
     
      {/* Main Section */}
      <main className="min-h-screen cursor-default" id="home">
        <BackgroundBeamsWithCollision >
        <div className="flex justify-center items-center h-auto lg:h-screen ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 py-8 max-w-7xl w-full">
            {/* Left Grid - Text */}
            <div className="flex flex-col justify-center items-center space-y-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Hello, I am
              </h2>
              <span className="text-4xl font-bold text-zinc-300">Subham Karmakar</span>

              <div className="mt-10">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                <ColourfulText text="Web Developer" />
                </h3>
              </div>
              <Button
                className="bg-blue-500 text-white shadow-md focus:scale-105 hover:bg-blue-700 transition-all transform ease-in-out duration-500"
                variant=""
              >
                Download CV
              </Button>
            </div>

            {/* Right Grid - Image */}
            
            <div className="flex justify-center items-center">
            
            <CardContainer className="inter-var">
              <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 ">
              <BackgroundGradient>
                <CardItem translateZ="100" className="w-full p-5">
                
                  <Image
                    src="/images/banner.jpg"// Ensure image is in public/images folder
                    alt="banner"
                    height="2000"
                    width="2000"
                    className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-xl " 
                  />
                </CardItem>
                </BackgroundGradient>
              </CardBody>
            </CardContainer>
          
           
            </div>
            
            
          </div>
        </div>

        </BackgroundBeamsWithCollision>
      </main>
      
    </>
  );
};

export default Banner;
