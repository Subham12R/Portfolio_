"use client";
import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

const Projects = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const toggleDetails = (cardId) => {
    setSelectedCard(selectedCard === cardId ? null : cardId);
  };

  const cards = [
    {
      id: 1,
      image: "expense.jpg", // Place image in public/images folder
      title: "Expense-Tracker",
      description: "A simplified expense tracker for day-to-day workflow",
      github: "https://github.com/Subham12R/Expense-Tracker",
      test: "https://expense-tracker-phi-nine-15.vercel.app/"
    },
    {
      id: 2,
      image: "coffee.jpg", // Place image in public/images folder
      title: "Ecommerce Website",
      description: "A coffee website project based on Next.js",
      github: "https://github.com/Subham12R/Caffee-Webpage",
      test: "https://caffee-webpage.vercel.app/"
    },
    {
      id: 3,
      image: "bot.jpg", // Place image in public/images folder
      title: "Chat Bot",
      description: "An AI Integrated web app chat bot",
      github: "https://github.com/Subham12R/Chat-Bot",
      test: "https://chat-41mbed6yr-subham12rs-projects.vercel.app/"
    },
    {
      id: 4,
      image: "game1.jpg", // Place image in public/images folder
      title: "X/O",
      description: "A Simple Tic-Tac-Toe Game",
      github: "https://github.com/Subham12R/X-O",
      test: "https://x-o-livid.vercel.app/"
    },
    
  ];

  return (
    <div className="p-5 h-auto lg:h-max bg-zinc-900" id="projects">
      <div className="w-auto items-center text-center flex justify-center shadow-md rounded-md p-4 bg-zinc-800">
        <h1 className="text-3xl font-bold text-black text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Projects
        </h1>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-5 p-5">
        {cards.map((card) => (
          <div key={card.id} className="w-50">
            <CardContainer className="inter-var">
              <CardBody className="bg-zinc-800 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-gray-200 dark:text-white">
                  {card.title}
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-gray-200 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  {card.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={`/images/${card.image}`} // Ensure image is in public/images folder
                    alt={card.title}
                    height="1000"
                    width="1000"
                    className="rounded-md shadow-md bg-zinc-700" 
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={card.test}
                    target="_blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-black text-white hover:text-blue-600"
                  >
                    LIVE SITE
                  </CardItem>
                  <Link
                    href={card.github}
                    target="_blank"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover:bg-blue-600 hover:scale-105 transform transition-all duration-800 ease-in-out"
                  >
                    SOURCE CODE
                  </Link>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>

      {/* GitHub Profile */}
      <div className="w-auto lg:w-3xl h-auto lg:h-max p-9">
        <div className="bg-zinc-950/50 rounded-md flex justify-center px-4 py-16">
          <div className="avatar">
            <div className="ring-blue-600 ring-offset-blue-100 w-24 rounded-full ring ring-offset-2 hover:scale-105 hove:shadow-md">
              <img src="/images/banner.jpg" alt="Profile Avatar" /> {/* Ensure this is in the public/images folder */}
            </div>
            <span className="p-5 flex flex-col justify-center items-left text-left text-zinc-200">
              Explore More on My GitHub Page
              <span>
                Profile:{" "}
                <a
                  href="https://github.com/Subham12R"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-lg"
                >
                  Subham12R <FontAwesomeIcon icon={faGithub} size="1x" />
                </a>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
