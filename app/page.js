"use client"
import { useState } from "react";
import Banner from "./src/Banner";

import Skills from "./src/Skills";
import Biography from "./src/Biography";



const Home = () => {
  const [showBanner, setShowBanner] = useState(false);
  return (
     <>
        <Banner/>
        <Biography />
        {/* <Skills /> */}
     </>
  );
}

export default Home;


