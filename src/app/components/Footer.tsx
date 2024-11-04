"use client";
import React from "react";
import FooterLogo from "../../../public/assets/footerLogo.svg"; // Ensure the imported name is capitalized
import { useTranslations } from "next-intl"; // Import the translation hook

const Footer = () => {
  const t = useTranslations("Footer"); // Get translations for the "Footer" namespace

  return (
    <>
      <footer
        style={{ backgroundColor: "#064131" }}
        className="text-white py-6"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center pt-16">
            <FooterLogo className="w-1/3 py-8" alt="Zan Hospitality Logo" />
            <p className="mt-4 px-4 md:px-64 text-gray-300 text-center">
              {t("footerDescription")}{" "}
              {/* Use translation for footer description */}
            </p>
          </div>
          <div className="flex justify-center mt-16">
            <ul className="flex flex-col md:flex-row md:space-x-16 space-y-4 md:space-y-0 text-center md:text-left">
              <li className="hover:underline">
                <a href="#home">{t("home")}</a> {/* Use translation for Home */}
              </li>
              <li className="hover:underline">
                <a href="#about">{t("about")}</a>{" "}
                {/* Use translation for About */}
              </li>
              <li className="hover:underline">
                <a href="#services">{t("services")}</a>{" "}
                {/* Use translation for Services */}
              </li>
              <li className="hover:underline">
                <a href="#projects">{t("projects")}</a>{" "}
                {/* Use translation for Projects */}
              </li>
              <li className="hover:underline">
                <a href="#contact">{t("contactus")}</a>{" "}
                {/* Use translation for Contact Us */}
              </li>
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
          <div className="flex flex-col md:flex-row justify-between items-start mt-6">
            <div className="flex flex-col mb-6 md:mb-0 text-center md:text-left w-full md:w-1/3">
              <h3 className="text-lg font-bold mb-4">{t("address")}</h3>{" "}
              {/* Use translation for Address */}
              <p>{t("addressDescription")}</p>{" "}
              {/* Use translation for Address description */}
            </div>
            <div className="flex flex-col mb-6 md:mb-0 text-center md:text-left w-full md:w-1/3">
              <h3 className="text-lg font-bold mb-4">{t("contact")}</h3>{" "}
              {/* Use translation for Contact */}
              <p>{t("contactDescription")}</p>{" "}
              {/* Use translation for Contact description */}
              <p className="mt-10">{t("contactDetails")}</p>{" "}
              {/* Use translation for Contact details */}
            </div>
            <div className="flex flex-col mb-6 md:mb-0 text-center md:text-left w-full md:w-1/3 items-center">
              <h3 className="text-lg font-bold mb-4">{t("bookNow")}</h3>{" "}
              {/* Use translation for Book Now */}
              <p>{t("bookDescription")}</p>{" "}
              {/* Use translation for Book description */}
              <div className="flex justify-center w-full mt-4">
                <button className="bg-white text-green-800 px-8 py-1 rounded-3xl">
                  {t("contactUs")} {/* Use translation for Contact Us button */}
                </button>
              </div>
            </div>
          </div>
          <hr className="w-full border-t border-gray-300 mt-20" />
          <div className="flex flex-col md:flex-row justify-between items-center mt-6">
            <p className="text-sm">{t("rightsReserved")}</p>{" "}
            {/* Use translation for Rights Reserved */}
            <div className="flex space-x-4">
              <a href="#" className="hover:underline">
                {t("privacyPolicy")} {/* Use translation for Privacy Policy */}
              </a>
              <a href="#" className="hover:underline">
                {t("termsAndServices")}{" "}
                {/* Use translation for Terms and Services */}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
