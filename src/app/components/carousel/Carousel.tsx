"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import carImage1 from "../../../../public/assets/carImg1.png";

const Carousel = () => {
  const slides = [
    {
      image: carImage1,
      caption: "Ministry of Communications and Information Technology",
    },
    {
      image: carImage1,
      caption: "Four Seasons",
    },
    {
      image: carImage1,
      caption: "Ministry of Communications and Information Technology",
    },
    {
      image: carImage1,
      caption: "Four Seasons",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const autoplayDelay = 3000;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const autoplay = setInterval(() => {
      nextSlide();
    }, autoplayDelay);

    return () => clearInterval(autoplay);
  }, [autoplayDelay]);

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="overflow-hidden w-11/12">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${
              currentSlide * (100 / (currentSlide === 0 ? 1 : 2))
            }%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex min-w-full md:min-w-[50%]">
              {" "}
              {/* Adjust min width for larger devices */}
              <div className="flex-1 flex flex-col items-center">
                <Image
                  src={slide.image}
                  alt={`${slide.caption}`}
                  className="w-full h-auto"
                  loading="lazy"
                  width={250}
                  height={300}
                />
                <p className="text-center my-2 text-gray-600">
                  {slide.caption}
                </p>
                <hr className="w-11/12 border-t border-green-900 my-10" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 mx-1 rounded-full border ${
              currentSlide === index
                ? "bg-green-900 border-green-900" // Active state
                : "border-green-900 bg-transparent" // Inactive state
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
