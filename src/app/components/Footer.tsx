"use client";
import React from "react";
import FooterLogo from "../../../public/assets/footerLogo.svg"; // Ensure the imported name is capitalized

const Footer = () => {
  return (
    <>
      <footer
        style={{ backgroundColor: "#064131" }}
        className="text-white py-6"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center pt-16">
            <FooterLogo className="w-1/3 py-8" alt="Zan Hospitality Logo" />
          </div>
          <p className="mt-4 px-4 md:px-64 text-gray-300 text-center">
            E CONSEQUAT, VEL ILLUM DOLORE EU FEUGIAT NULLA FACILISIS AT VERO
            EROS ET ACCUMSAN ET IUSTO ODIO DIGNISSIM QUI BLANDIT PRAESENT
            LUPTATUM ZZRIL DELENIT AUGUE DUIS DOLORE TE FEUGAIT .NULLA FACILISI
          </p>
          <div className="flex justify-center mt-16">
            <ul className="flex flex-col md:flex-row md:space-x-16 space-y-4 md:space-y-0 text-center md:text-left">
              <li className="hover:underline">Home</li>
              <li className="hover:underline">About</li>
              <li className="hover:underline">Services</li>
              <li className="hover:underline">Projects</li>
              <li className="hover:underline">Contact Us</li>
            </ul>
          </div>
          <hr className="w-full border-t border-gray-300 my-20" />
        </div>
      </footer>

      <footer
        id="contact"
        style={{ backgroundColor: "#064131" }}
        className="text-white py-6"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col mb-6 md:mb-0">
              <h3 className="text-lg font-bold mb-4">Address</h3>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
            <div className="flex flex-col mb-6 md:mb-0">
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
              <p className="mt-10">Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
            <div className="flex flex-col mb-6 md:mb-0">
              <h3 className="text-lg font-bold mb-4">Book Now</h3>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
              <button className="w-fit bg-white text-green-800 px-8 py-1 rounded-3xl mt-4">
                Contact us
              </button>
            </div>
          </div>
          <hr className="w-full border-t border-gray-300 mt-20" />
          <div className="flex flex-col md:flex-row justify-between mt-6">
            <p className="text-sm">© All Rights Reserved</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Terms and Services
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
