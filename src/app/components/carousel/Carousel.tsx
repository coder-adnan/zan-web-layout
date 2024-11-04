"use client"; // Required for Next.js 13 with server components
import React, { useState, useEffect, useCallback } from "react"; // Import useCallback
import Image from "next/image";
import carImage1 from "../../../../public/assets/carImg1.png";
import { useTranslations } from "next-intl"; // Import the translation hook

const Carousel = () => {
  const t = useTranslations("Carousel"); // Get the translation for the "Carousel" namespace

  const slides = [
    {
      image: carImage1,
      caption: t("slide1"), // Use translation for caption
    },
    {
      image: carImage1,
      caption: t("slide2"), // Use translation for caption
    },
    {
      image: carImage1,
      caption: t("slide3"), // Use translation for caption
    },
    {
      image: carImage1,
      caption: t("slide4"), // Use translation for caption
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const autoplayDelay = 3000;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    const autoplay = setInterval(nextSlide, autoplayDelay);
    return () => {
      clearInterval(autoplay);
      window.removeEventListener("resize", handleResize);
    };
  }, [nextSlide, autoplayDelay]);

  const numberOfDots = isMobile ? slides.length : Math.ceil(slides.length / 2);

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="overflow-hidden w-11/12">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${
              (currentSlide / (isMobile ? 1 : 2)) * 100
            }%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex min-w-full md:min-w-[50%]">
              <div className="flex-1 flex flex-col items-center">
                <Image
                  src={slide.image}
                  alt={slide.caption}
                  className="w-full h-auto"
                  loading="lazy"
                  width={250}
                  height={300}
                  style={{ objectFit: "contain" }}
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
        {Array.from({ length: numberOfDots }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(isMobile ? index : index * 2)}
            className={`w-4 h-4 mx-1 rounded-full border ${
              currentSlide === (isMobile ? index : index * 2)
                ? "bg-green-900 border-green-900"
                : "border-green-900 bg-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
