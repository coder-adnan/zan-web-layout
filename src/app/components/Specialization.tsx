import React from "react";

const Specialization = () => {
  const data = [
    {
      id: "01",
      title: "EXCLUSIVE SPECIAL EVENTS",
      description:
        "Exclusive catering for birthdays, anniversaries, and intimate gatherings, creating a luxurious and memorable atmosphere for you and your esteemed guests.",
    },
    {
      id: "02",
      title: "CORPORATE EVENTS",
      description:
        "Tailored menus for high-profile business meetings, conferences, and corporate gatherings, ensuring a professional and refined dining experience.",
    },
    {
      id: "03",
      title: "LAVISH WEDDINGS",
      description:
        "Elegant and bespoke wedding catering to make your special day truly unforgettable, with personalized menus and exquisite presentation that reflect the grandeur of saudi arabian weddings.",
    },
    {
      id: "04",
      title: "CORPORATE MEAL PLANS",
      description:
        "Customizable, nutritious, and delicious meal plans designed to fuel productivity and innovation.",
    },
    {
      id: "05",
      title: "PRIVATE GATHERINGS",
      description:
        "Exclusive catering for birthdays, anniversaries, and intimate gatherings, creating a luxurious and memorable atmosphere for you and your esteemed guests.",
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
            <p className="text-gray-600  text-base md:text-lg">
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
