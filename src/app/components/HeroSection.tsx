import React from "react";
import Image from "next/image";
import heroImage from "../../../public/assets/HeroSectionImg.jpg";
import { useTranslations } from "next-intl"; // Import the translation hook

const HeroSection = () => {
  const t = useTranslations("Hero"); // Get the translation for the "Hero" namespace

  return (
    <>
      <div className="flex flex-col md:flex-row mt-12 md:mt-24 justify-center items-center">
        <div className="w-full md:w-5/12 mb-8 md:mb-0 px-4">
          <h1
            style={{
              fontFamily: "Glacier, sans-serif",
            }}
            className="text-green-900 text-4xl md:text-6xl font-semibold"
          >
            {t("title")} {/* Use translation for the title */}
          </h1>
        </div>
        <div className="w-full md:w-5/12 px-4 flex items-end justify-center md:justify-end">
          <p className="text-gray-600 text-lg md:text-base">
            {t("description")} {/* Use translation for the description */}
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-8 md:mt-16">
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
