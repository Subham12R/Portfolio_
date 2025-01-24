import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Skills = () => {

  const testimonials = [
    {
      quote: "This service is amazing! I highly recommend it to everyone.",
      name: "John Doe",
      position: "CEO, Example Co.",
      image: "./test1.jpg",
    },
    {
      quote: "Fantastic experience, exceeded all my expectations!",
      name: "Jane Smith",
      position: "Marketing Head, XYZ Inc.",
      image: "./test1.jpg",
    },
    {
      quote: "Absolutely the best! The team is incredible.",
      name: "Michael Brown",
      position: "Freelancer",
      image: "./test1.jpg",
    },
    {
      quote: "Professional and reliable service. Would definitely use it again.",
      name: "Emily Johnson",
      position: "Entrepreneur",
      image: "./test1.jpg",
    },
    {
      quote: "Professional and reliable service. Would definitely use it again.",
      name: "Emily Johnson",
      position: "Entrepreneur",
      image: "./test1.jpg",
    },
    {
      quote: "Professional and reliable service. Would definitely use it again.",
      name: "Emily Johnson",
      position: "Entrepreneur",
      image: "./test1.jpg",
    },
    {
      quote: "Professional and reliable service. Would definitely use it again.",
      name: "Emily Johnson",
      position: "Entrepreneur",
      image: "./test1.jpg",
    },
    {
      quote: "Professional and reliable service. Would definitely use it again.",
      name: "Emily Johnson",
      position: "Entrepreneur",
      image: "./test1.jpg",
    },
    {
      quote: "Professional and reliable service. Would definitely use it again.",
      name: "Emily Johnson",
      position: "Entrepreneur",
      image: "./test1.jpg",
    },
  ];


  return (
    <>
      <div className="bg-white h-auto lg:h-max" id='services'>
        
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

        <div className='h-auto p-5 bg-zinc-900 m-9 rounded-md'>
        <h1 className="text-5xl font-extrabold text-center text-gray-200 mb-12">
        What Our Clients Say
      </h1>
      <div className='p-5 bg-zinc-900 rounded-lg'>
      <Carousel className="max-w-5xl mx-auto">
        <CarouselContent className="flex gap-6">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="flex-shrink-0 md:basis-1/2 lg:basis-1/3"
            >
              <div className="w-80 h-80 bg-blue-500 flex flex-col items-center text-center  shadow-lg p-8 rounded-md hover:scale-105 transform transition-transform duration-300 ease-in-out">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mb-6 shadow-md"
                />
                <p className="text-lg text-gray-200 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <h3 className="text-xl font-bold text-white mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-100">{testimonial.position}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-between mt-6">
          <CarouselPrevious className="text-white bg-gray-800 rounded-full p-3 hover:bg-gray-700 shadow-md" />
          <CarouselNext className="text-white bg-gray-800 rounded-full p-3 hover:bg-gray-700 shadow-md" />
        </div>
      </Carousel>
      </div>
          </div>
      
    </>
  );
};

export default Skills;
