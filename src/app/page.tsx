import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Events from "./components/Events";
import Service from "./components/Service";
import Facilities from "./components/Facilities";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <About />
      <Events />
      <Service />
      <Facilities />
      <Clients />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
