"use client";
import React from "react";
import { Raleway } from "next/font/google";
import Image, { StaticImageData } from "next/image";
import coffee from "../../../public/assets/coffeeBreaks.jpg";
import tableService from "../../../public/assets/tableService.jpg";
import meal from "../../../public/assets/mealPlan.jpg";
import dessert from "../../../public/assets/dessert.jpg";
import { useTranslations } from "next-intl"; // Import the translation hook

const raleway = Raleway({ subsets: ["latin"] });

type FacilityCardProps = {
  title: string;
  description: string;
  image: StaticImageData;
};

const FacilityCard = ({ title, description, image }: FacilityCardProps) => (
  <div className="relative w-full h-[400px] overflow-hidden group">
    <Image
      src={image}
      alt={title}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover"
    />
    <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-40 transition-opacity duration-300 ease-in-out"></div>
    <h1 className="absolute inset-0 flex items-center justify-center text-gray-300 text-xl font-bold z-10">
      {title}
    </h1>
    <p className="absolute bottom-12 w-full text-gray-300 text-center px-4 z-10 h-16 flex items-center justify-center">
      <span className="transition-opacity duration-300 ease-in-out group-hover:opacity-100 opacity-60 line-clamp-2">
        {description}
      </span>
    </p>
  </div>
);

const Facilities = () => {
  const t = useTranslations("Facilities"); // Get translations for the "Facilities" namespace

  const facilities = [
    {
      title: t("coffeeBreaks.title"), // Use translation for title
      description: t("coffeeBreaks.description"), // Use translation for description
      image: coffee,
    },
    {
      title: t("tableServices.title"), // Use translation for title
      description: t("tableServices.description"), // Use translation for description
      image: tableService,
    },
    {
      title: t("corporateMealPlans.title"), // Use translation for title
      description: t("corporateMealPlans.description"), // Use translation for description
      image: meal,
    },
    {
      title: t("canapesAndFingerBites.title"), // Use translation for title
      description: t("canapesAndFingerBites.description"), // Use translation for description
      image: dessert,
    },
  ];

  return (
    <>
      <h1
        className={`${raleway.className} text-green-900 mb-16 font-semibold text-4xl text-center md:text-left md:ml-24 md:pr-16`}
      >
        {t("header")} {/* Use translation for header */}
      </h1>
      <div className="grid mb-36 grid-cols-1 md:grid-cols-2 gap-6 mt-8 w-11/12 mx-auto">
        {facilities.map((facility, index) => (
          <FacilityCard
            key={index}
            title={facility.title}
            description={facility.description}
            image={facility.image}
          />
        ))}
      </div>
    </>
  );
};

export default Facilities;
