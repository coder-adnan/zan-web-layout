import React from "react";
import { useTranslations } from "next-intl"; // Import the translation hook

const Specialization = () => {
  const t = useTranslations("Specialization"); // Get translations for the "Specialization" namespace

  const data = [
    {
      id: "01",
      title: t("exclusiveSpecialEvents.title"), // Use translation for title
      description: t("exclusiveSpecialEvents.description"), // Use translation for description
    },
    {
      id: "02",
      title: t("corporateEvents.title"), // Use translation for title
      description: t("corporateEvents.description"), // Use translation for description
    },
    {
      id: "03",
      title: t("lavishWeddings.title"), // Use translation for title
      description: t("lavishWeddings.description"), // Use translation for description
    },
    {
      id: "04",
      title: t("corporateMealPlans.title"), // Use translation for title
      description: t("corporateMealPlans.description"), // Use translation for description
    },
    {
      id: "05",
      title: t("privateGatherings.title"), // Use translation for title
      description: t("privateGatherings.description"), // Use translation for description
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
