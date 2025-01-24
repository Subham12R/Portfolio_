import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const toggleDetails = (cardId) => {
    setSelectedCard(selectedCard === cardId ? null : cardId);
  };

  const cards = [
    {
      id: 1,
      image: "./expense.jpg",
      title: "Expense-Tracker",
      description: "A simplified expense tracker for day-to-day workflow",
      github: "https://github.com/Subham12R/Expense-Tracker",
      test: "https://expense-tracker-phi-nine-15.vercel.app/" // Add your test/demo link here
    },
    {
      id: 2,
      image: "./coffee.jpg",
      title: "Ecommerce Website",
      description: "A coffee website project based on Next.js",
      github: "https://github.com/Subham12R/Caffee-Webpage",
      test: "https://caffee-webpage.vercel.app/" // Add your test/demo link here
    },
    {
      id: 3,
      image: "./bot.jpg",
      title: "Chat Bot",
      description: "An AI Integrated web app chat bot",
      github: "https://github.com/Subham12R/Chat-Bot",
      test: "https://chat-41mbed6yr-subham12rs-projects.vercel.app/" // Add your test/demo link here
    }
  ];

  return (
    <div className="p-5 h-auto lg:h-max" id="projects">
      <div className="w-auto items-center text-center flex justify-center shadow-md rounded-md p-4 bg-white/50">
        <h1 className="text-3xl font-bold text-black text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Projects
        </h1>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-5 p-5">
        {cards.map((card) => (
          <div key={card.id} className="w-96">
            <div
              className="card bg-white image-cover shadow-xl"
              onClick={() => toggleDetails(card.id)}
              style={{ cursor: "pointer" }}
            >
              <figure>
                <img
                  src={card.image}
                  alt={card.title}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{card.title}</h2>
              </div>
            </div>
            {selectedCard === card.id && (
              <div className="flex flex-col mt-4 p-4 bg-gray-100 rounded">
                <div className="space-y-1">
                  <h4 className="text-sm font-medium leading-none">{card.title}</h4>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </div>
                <Separator className="my-4" />
                <div className="flex h-5 items-center space-x-4 text-sm">
                  <a
                    href={card.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    GitHub <FontAwesomeIcon icon={faGithub} size="1x" />
                  </a>
                  <Separator orientation="vertical" />
                  {card.test && (
                    <a
                      href={card.test}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      Test
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* GitHub Profile */}
      <div className="w-auto lg:w-3xl h-auto lg:h-max p-9">
        <div className="bg-blue-200/50 rounded-md flex justify-center px-4 py-16 ">
          <div className="avatar">
            <div className="ring-blue-600 ring-offset-blue-100 w-24 rounded-full ring ring-offset-2 hover:scale-105 hove:shadow-md">
              <img
                src="./banner.jpg"
                alt="Profile Avatar"
              />
            </div>

            <span className="p-5 flex flex-col justify-center items-left text-left">
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
