import React from "react";
import Carousel from "./carousel/Carousel";

const Events = () => {
  return (
    <>
      <div id="events" className="mt-24 mb-12 flex justify-center">
        <div className="w-1/4">
          <h1 className=" text-xl text-gray-600">Events</h1>
        </div>
        <div className="w-2/3 px-6">
          <h1 className="text-4xl text-green-900">Latest Events</h1>
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
