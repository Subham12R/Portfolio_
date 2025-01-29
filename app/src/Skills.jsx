import React from 'react';

import { Separator } from "@/components/ui/separator";

import { FocusCards } from "@/components/ui/focus-cards";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Image from 'next/image';

const Skills = () => {
  const cards = [
    {
      title: "Web Designing",
      src: "/images/design.jpg", // Path to image in public/images
    },
    {
      title: "Frontend Development",
      src: "/images/front.jpg",  // Path to image in public/images
    },
    {
      title: "Backend Development",
      src: "/images/back.jpg",   // Path to image in public/images
    },
    {
      title: "Full-Stack Development",
      src: "/images/full.jpg",   // Path to image in public/images
    },
  ];

  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "/images/1.jpg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "/images/2.jpg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "/images/3.jpg",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "/images/4.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "/images/5.jpg",
    },
  ];


  return (
    <>
      <div className="bg-zinc-900 h-auto lg:h-max" id='services'>
        
        {/* Header */}
        <div className="flex justify-center items-center shadow-md p-5 mx-4  w-auto bg-zinc-800 rounded-md">

          <span className="text-5xl text-center font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            My Services
          </span>

        </div>

        {/* Cards */}
        <div className="flex justify-center flex-wrap p-4 gap-4 items-center sm:flex-col md:flex-row transition-all duration-500 ease-in-out">

        <FocusCards cards={cards}/>

        </div>


        </div>

        <div className='h-auto p-5 bg-zinc-900'>
          <div className='flex justify-center items-center shadow-xl p-5  w-auto bg-zinc-800 rounded-md'>
        <h1 className="text-5xl text-center font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Testimonials
      </h1>
      </div>
      <div className='p-5 bg-zinc-900 rounded-lg'>
      <AnimatedTestimonials testimonials={testimonials} />
      </div>
      </div>
      
    </>
  );
};

export default Skills;
