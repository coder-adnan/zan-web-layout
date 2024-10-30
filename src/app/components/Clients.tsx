import React from "react";
import Image from "next/image";
import MinistryOfEnergy from "../../../public/assets/ministryOfEnergy.svg";
import Leap from "../../../public/assets/Leap.svg";
import MinistryOfI from "../../../public/assets/MinistryOfI&CT.svg";
import fintechSaudi from "../../../public/assets/fintechSaudi.svg";
import Tahaluf from "../../../public/assets/Tahaluf.svg";
import fourSeasons from "../../../public/assets/fourSeasons.svg";
import twentyFourF from "../../../public/assets/24f.svg";

function Clients() {
  const images = [
    {
      src: MinistryOfEnergy,
      alt: "Ministry of Energy",
    },
    {
      src: Leap,
      alt: "LEAP",
    },
    {
      src: MinistryOfI,
      alt: "Ministry of ICT",
    },
    {
      src: fintechSaudi,
      alt: "Fintech Saudi",
    },
    {
      src: Tahaluf,
      alt: "Tahaluf",
    },
    {
      src: fourSeasons,
      alt: "Four Seasons",
    },
    {
      src: twentyFourF,
      alt: "24 F",
    },
  ];

  return (
    <>
      <div style={{ backgroundColor: "#e4e3d6" }} className="w-full py-16">
        <h1 className="text-xl text-gray-600 text-center mb-12">Clients</h1>
        <div className="flex flex-wrap justify-center gap-12 px-4">
          {images.map((image, index) => (
            <div key={index} className="flex flex-col items-center">
              {typeof image.src === "string" ? (
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={120}
                  height={70}
                  className="max-w-full h-auto"
                />
              ) : (
                <image.src width={120} height={70} />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Clients;
