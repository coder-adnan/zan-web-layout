import React from "react";

const Specialization = () => {
  const data = [
    {
      id: "01",
      title: "EXCLUSIVE SPECIAL EVENTS",
      description:
        "UNIQUE CULINARY CREATIONS FOR GALAS, INTERNATIONAL EVENTS, CULTURAL ACTIVATIONS, AND OTHER PRESTIGIOUS EVENTS, ADDING A TOUCH OF CLASS AND SOPHISTICATION TO ANY OCCASION.",
    },
    {
      id: "02",
      title: "CORPORATE EVENTS",
      description:
        "TAILORED MENUS FOR HIGH-PROFILE BUSINESS MEETINGS, CONFERENCES, AND CORPORATE GATHERINGS, ENSURING A PROFESSIONAL AND REFINED DINING EXPERIENCE.",
    },
    {
      id: "03",
      title: "LAVISH WEDDINGS",
      description:
        "ELEGANT AND BESPOKE WEDDING CATERING TO MAKE YOUR SPECIAL DAY TRULY UNFORGETTABLE, WITH PERSONALIZED MENUS AND EXQUISITE PRESENTATION THAT REFLECT THE GRANDEUR OF SAUDI ARABIAN WEDDINGS.",
    },
    {
      id: "04",
      title: "CORPORATE MEAL PLANS",
      description:
        "CUSTOMIZABLE, NUTRITIOUS, AND DELICIOUS MEAL PLANS DESIGNED TO FUEL PRODUCTIVITY AND INNOVATION.",
    },
    {
      id: "05",
      title: "PRIVATE GATHERINGS",
      description:
        "EXCLUSIVE CATERING FOR BIRTHDAYS, ANNIVERSARIES, AND INTIMATE GATHERINGS, CREATING A LUXURIOUS AND MEMORABLE ATMOSPHERE FOR YOU AND YOUR ESTEEMED GUESTS.",
    },
  ];

  return (
    <div className="pb-20">
      {data.map((item) => (
        <div key={item.id} className="mb-10">
          <div className="flex gap-4 flex-col md:flex-row md:gap-6 pt-16 pb-6 text-xl md:text-2xl">
            <h1 className="text-green-900">{item.id}.</h1>
            <h1 className="text-green-900">{item.title}</h1>
          </div>
          <div>
            <p className="text-gray-600 text-base md:text-lg">
              {item.description}
            </p>
            <hr className="mt-4 mb-4 w-full border-t border-gray-600" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Specialization;
