"use client";
import React from "react";
import { Raleway } from "next/font/google";
import Image from "next/image";
import coffee from "../../../public/assets/coffeeBreaks.jpg";
import tableService from "../../../public/assets/tableService.jpg";
import meal from "../../../public/assets/mealPlan.jpg";
import dessert from "../../../public/assets/dessert.jpg";

const raleway = Raleway({ subsets: ["latin"] });

const FacilityCard = ({ title, description, image }: any) => (
  <div className="relative w-full h-[400px] overflow-hidden group">
    <Image
      src={image}
      alt={title}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover"
    />
    {/* Dark overlay with hover effect */}
    <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-40 transition-opacity duration-300 ease-in-out"></div>

    <h1 className="absolute inset-0 flex items-center justify-center text-gray-300 text-xl font-bold z-10">
      {title}
    </h1>

    {/* Description with dotted effect when not hovered */}
    <p className="absolute bottom-12 w-full text-gray-300 text-center px-4 z-10 h-16 flex items-center justify-center">
      <span className="transition-opacity duration-300 ease-in-out group-hover:opacity-100 opacity-60 line-clamp-2">
        {description}
      </span>
    </p>
  </div>
);

const Facilities = () => {
  const facilities = [
    {
      title: "COFFEE BREAKS",
      description:
        "Coffee break services for events, meetings, and conferences. Menus can be customized. For example, coffee machines, espresso machine, teas, baked goods.",
      image: coffee,
    },
    {
      title: "TABLE SERVICES",
      description:
        "For your lunch and dinner catering needs, we offer a range of dining styles including silver service, set menus, buffets, and interactive table buffets. Our customizable menus and service options are designed to enhance the dining experience for your guests.",
      image: tableService,
    },
    {
      title: "CORPORATE MEAL PLANS",
      description:
        "We offer B2B daily meal services that are designed to provide nourishing and balanced meals for your workforce, delivering high-quality and delicious meals.",
      image: meal,
    },
    {
      title: "CANAPES AND FINGER BITES",
      description:
        "For upscale events, we provide a refined catering option featuring a selection of elegant canapés and mini sandwiches. These exquisite bites can be passed around or displayed on a buffet, tailored to enhance the sophistication of your event.",
      image: dessert,
    },
  ];

  return (
    <>
      <h1
        className={`${raleway.className} pr-16 text-green-900 mb-16 font-semibold ml-24 text-4xl`}
      >
        WHERE QUALITY
        <br />
        MEETS HOSPITALITY
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
