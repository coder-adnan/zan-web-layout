import React from "react";
import Image from "next/image";
import heroImage from "../../../public/assets/HeroSectionImg.jpg";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row mt-12 md:mt-24 justify-center items-center">
        {" "}
        {/* Adjusted margin */}
        <div className="w-full md:w-5/12 mb-8 md:mb-0 px-4">
          <h1
            style={{
              fontFamily: "Glacier, sans-serif",
            }}
            className="text-green-900 text-4xl md:text-6xl font-semibold"
          >
            WHERE QUALITY MEETS HOSPITALITY
          </h1>
        </div>
        <div className="w-full md:w-5/12 px-4 flex items-end justify-center md:justify-end">
          <p className="text-gray-600 text-lg md:text-base">
            Zan Hospitality is where culinary excellence meets bespoke
            experiences. We specialize in providing high-quality, delicious
            cuisine tailored to elevate any occasion.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-8 md:mt-16">
        {" "}
        {/* Adjusted margin for image section */}
        <div className="w-full md:w-11/12 p-2 md:p-0">
          <Image
            src={heroImage}
            alt="hero-image"
            className="md:rounded-lg" // Border radius only on medium screens and larger
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
