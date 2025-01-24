"use client"

import Banner from "./src/Banner";
import Biography from "./src/Biography";
import Projects from "./src/Projects";
import Skills from "./src/Skills";
import Contacts from "./src/Contacts";



const Home = () => {

  return (
     <>
        <Banner/>
        <Biography />
        <Skills />
        <Projects />
        <Contacts />
     </>
  );
}

export default Home;


