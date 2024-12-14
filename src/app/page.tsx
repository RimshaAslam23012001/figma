import React from "react";
import HeroSection from "./components/HeroSection";
import About1 from "./components/About1";
import Food_carigery from "./components/Food_carigery";
import Fast from "./components/Fast";
import Bean from "./components/Bean";
import OurFood from "./components/OurFood";
import Chaf from "./components/Chaf";
import Testimonial from "./components/Testimonial";

import Blog from "./components/Blog";
import Experience from "./components/Experience";

const Home = () => {
  return (
    <div className="bg-black">
      <>
        <HeroSection />
        <About1 />
        <Food_carigery />
        <Fast />
        <Experience/>
        <OurFood />
        <Chaf />
        <Testimonial />
        <Bean/>
        <Blog />
      </>
    </div>
  );
};

export default Home;
