import React from "react";
import Image from "next/image";
import aboutImage from "../../../public/assets/aboutUsSectionImg.jpg";
import { Raleway } from "next/font/google";
import { useTranslations } from "next-intl"; // Import the translation hook

const raleway = Raleway({ subsets: ["latin"] });

const About = () => {
  const t = useTranslations("About"); // Get the translation for the "About" namespace

  return (
    <>
      <div
        className="flex flex-col lg:flex-row justify-center mt-20"
        id="about"
      >
        <div className="w-full lg:w-1/4 px-4">
          <h1 className="-mt-6 text-xl text-gray-600 text-center lg:text-left">
            {t("title")} {/* Use translation for the title */}
          </h1>
        </div>
        <div className="w-full lg:w-1/3 px-4">
          <h1
            className={`${raleway.className} font-semibold my-8 text-green-900 text-4xl`}
          >
            {t("introductionTitle")}{" "}
            {/* Use translation for introduction title */}
          </h1>
          <p className="pr-0 lg:pr-16 text-justify text-gray-600">
            {t("introductionText")}{" "}
            {/* Use translation for introduction text */}
          </p>
        </div>
        <div className="w-full lg:w-1/3 flex justify-center px-4">
          <div className="w-full md:w-11/12 py-4 md:px-0">
            <Image
              src={aboutImage}
              alt="about-image"
              className="md:rounded-lg" // Add border radius for medium screens and larger
              layout="responsive" // Make the image responsive
              objectFit="cover" // Ensure the image covers its container
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center mt-20">
        <div className="w-full lg:w-1/4 px-4"></div>
        <div className="w-full lg:w-1/3 flex items-end px-4">
          <h1
            className={`${raleway.className} text-green-900 font-semibold text-4xl mb-8 lg:mb-0`}
          >
            {t("commitmentTitle")} {/* Use translation for commitment title */}
          </h1>
        </div>
        <div className="w-full lg:w-1/3 flex justify-center px-4 flex-col gap-4">
          <div className="grid gap-8 grid-cols-2">
            <div className="flex flex-col">
              <p className="text-4xl font-bold text-green-900">
                {t("projectsCount")}
              </p>
              <hr className="w-full border-t border-2 border-green-900 my-2" />
              <p className="text-sm font-normal">{t("projectsLabel")}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-4xl font-bold text-green-900">
                {t("experienceCount")}
              </p>
              <hr className="w-full border-t border-2 border-green-900 my-2" />
              <p className="text-sm font-normal">{t("experienceLabel")}</p>
            </div>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-900">
              {t("clientsCount")}
            </p>
            <hr className="w-full border-t border-2 border-green-900 my-2" />
            <p className="text-sm font-normal">{t("clientsLabel")}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="w-full lg:w-3/4 lg:px-16 px-6">
          <button className="w-full hover:bg-transparent hover:border transition-all border-green-900 hover:border-green-900 hover:text-gray-900 mt-12 lg:mt-24 px-4 py-4 uppercase bg-green-900 text-gray-200">
            {t("learnMore")} {/* Use translation for the learn more button */}
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
