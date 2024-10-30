import React from "react";
import Specialization from "./Specialization";

const Service = () => {
  return (
    <div id="" style={{ backgroundColor: "#e4e3d6" }}>
      <div className="mt-12 pt-12 mb-12 flex justify-center flex-col items-center md:flex-row">
        <div className="w-full md:w-1/4">
          <h1 className="text-xl text-gray-600 text-center md:text-left">
            Services
          </h1>
        </div>
        <div className="w-full md:w-2/3 px-6"></div>
      </div>
      <div className="mt-24 mb-12 flex justify-center flex-col items-center md:flex-row">
        <div className="w-full md:w-1/4"></div>
        <div className="w-full md:w-2/3 px-6">
          <h1 className="text-4xl text-green-900 font-semibold text-center md:text-left">
            AREAS OF SPECIALIZATION
          </h1>
          <Specialization />
        </div>
      </div>
    </div>
  );
};

export default Service;
