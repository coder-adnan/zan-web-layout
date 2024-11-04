import React from "react";
import Carousel from "./carousel/Carousel";
import { useTranslations } from "next-intl"; // Import the translation hook

const Events = () => {
  const t = useTranslations("Events"); // Get the translation for the "Events" namespace

  return (
    <>
      <div
        id="events"
        className="mt-24 mb-12 flex flex-col sm:flex-row justify-center"
      >
        <div className="w-full sm:w-1/4 text-center sm:text-left">
          <h1 className="text-xl text-gray-600">{t("title")}</h1>{" "}
          {/* Use translation for title */}
        </div>
        <div className="w-full sm:w-2/3 px-6 mt-8 sm:mt-0">
          <h1 className="text-4xl text-green-900">{t("latestEvents")}</h1>{" "}
          {/* Use translation for latest events title */}
          <hr className="event-line w-full border-t border-green-900 my-2" />
        </div>
      </div>

      <div>
        <Carousel />
      </div>
    </>
  );
};

export default Events;
