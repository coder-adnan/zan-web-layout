"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Events from "../components/Events";
import Service from "../components/Service";
import Facilities from "../components/Facilities";
import Clients from "../components/Clients";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import "../orientation.css";
const Home = () => {
  const pathname = usePathname();

  const isArabic = pathname.startsWith("/ar");

  return (
    <div className={isArabic ? "rtl" : "ltr"}>
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
