import React from "react";
import Image from "next/image";
import aboutImage from "../../../public/assets/aboutUsSectionImg.jpg";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

const About = () => {
  return (
    <>
      <div
        className="flex flex-col lg:flex-row justify-center mt-20"
        id="about"
      >
        <div className="w-full lg:w-1/4 px-4">
          <h1 className="-mt-6 text-xl text-gray-600 text-center lg:text-left">
            About Us
          </h1>
        </div>
        <div className="w-full lg:w-1/3 px-4">
          <h1
            className={`${raleway.className} font-semibold my-8 text-green-900 text-4xl`}
          >
            Introduction
          </h1>
          <p className="pr-0 lg:pr-16 text-justify text-gray-600">
            With a collective experience exceeding 50 years in the hospitality
            industry, our team boasts extensive backgrounds in event management,
            hotel catering services, food and beverage operations management, as
            well as cafés and fine dining restaurants. Driven by passion and
            creativity, we strive to craft exceptional dining experiences that
            leave a lasting impression and meet the diverse needs and
            preferences of our clients.
          </p>
        </div>
        <div className="w-full lg:w-1/3 flex justify-center px-4">
          <div className="w-full md:w-11/12 py-4 md:px-0">
            {/* Match the wrapper styling */}
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
            Unwavering Commitment to Perfection
          </h1>
        </div>
        <div className="w-full lg:w-1/3 flex justify-center px-4 flex-col gap-4">
          <div className="grid gap-8 grid-cols-2">
            <div className="flex flex-col">
              <p className="text-4xl font-bold text-green-900">30+</p>
              <hr className="w-full border-t border-2 border-green-900 my-2" />
              <p className="text-sm font-normal">Projects</p>
            </div>
            <div className="flex flex-col">
              <p className="text-4xl font-bold text-green-900">5</p>
              <hr className="w-full border-t border-2 border-green-900 my-2" />
              <p className="text-sm font-normal">Years in Experience</p>
            </div>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-900">20</p>
            <hr className="w-full border-t border-2 border-green-900 my-2" />
            <p className="text-sm font-normal">Clients</p>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="w-full lg:w-3/4 lg:px-16 px-6">
          <button className="w-full hover:bg-transparent hover:border transition-all border-green-900 hover:border-green-900 hover:text-gray-900 mt-12 lg:mt-24 px-4 py-4 uppercase bg-green-900 text-gray-200">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
