"use client"; // Required for Next.js 13 with server components
import React, { useState, useEffect } from "react";
import Image from "next/image";
import MinistryOfEnergy from "../../../public/assets/ministryOfEnergy.svg";
import Leap from "../../../public/assets/Leap.svg";
import MinistryOfI from "../../../public/assets/MinistryOfI&CT.svg";
import fintechSaudi from "../../../public/assets/fintechSaudi.svg";
import Tahaluf from "../../../public/assets/Tahaluf.svg";
import fourSeasons from "../../../public/assets/fourSeasons.svg";
import twentyFourF from "../../../public/assets/24f.svg";

function Clients() {
  const images = [
    { src: MinistryOfEnergy, alt: "Ministry of Energy" },
    { src: Leap, alt: "LEAP" },
    { src: MinistryOfI, alt: "Ministry of ICT" },
    { src: fintechSaudi, alt: "Fintech Saudi" },
    { src: Tahaluf, alt: "Tahaluf" },
    { src: fourSeasons, alt: "Four Seasons" },
    { src: twentyFourF, alt: "24 F" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = images.length;

  // Responsive configurations
  const mobileSlides = 3;
  const tabletSlides = 4;
  const logoWidth = 120; // width of each logo
  const gap = 30; // Gap between images (in pixels)

  const getSlidesToShow = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return mobileSlides;
      if (window.innerWidth < 1024) return tabletSlides;
    }
    return totalSlides;
  };

  const slidesToShow = getSlidesToShow();
  const slideWidth = (logoWidth + gap) * slidesToShow; // Total width based on the number of slides shown
  const autoplayDelay = 3000;

  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % Math.ceil(totalSlides / slidesToShow)
    );
  };

  useEffect(() => {
    const autoplay = setInterval(nextSlide, autoplayDelay);
    return () => clearInterval(autoplay);
  }, [nextSlide, autoplayDelay]);

  return (
    <div style={{ backgroundColor: "#e4e3d6" }} className="w-full py-16">
      <h1 className="text-xl text-gray-600 text-center mb-12">Clients</h1>
      <div className="overflow-hidden w-11/12 mx-auto relative">
        <div
          className="flex transition-transform duration-500 justify-center"
          style={{
            transform: `translateX(-${currentSlide * slideWidth}px)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex flex-col items-center mx-2"
              style={{ margin: `0 ${gap / 2}px` }} // Add gap to both sides of each image
            >
              {typeof image.src === "string" ? (
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={120}
                  height={70}
                  className="max-w-full h-auto"
                />
              ) : (
                <image.src width={120} height={70} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(totalSlides / slidesToShow) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 mx-1 rounded-full border ${
                currentSlide === index
                  ? "bg-green-900 border-green-900"
                  : "border-green-900 bg-transparent"
              }`}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Clients;
