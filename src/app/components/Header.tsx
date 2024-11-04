"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../../public/assets/HeroLogo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useTranslations } from "next-intl";
import "../styles/Header.css";

const Header = () => {
  const t = useTranslations("Header");
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Default language
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Load language from session storage on mount
  useEffect(() => {
    const lang = sessionStorage.getItem("selectedLanguage");
    if (lang) {
      setSelectedLanguage(lang);
    }
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false); // Close the menu when a link is clicked
  };

  const changeLanguage = (lang: string) => {
    setSelectedLanguage(lang);
    setDropdownOpen(false); // Close dropdown when changing language
    sessionStorage.setItem("selectedLanguage", lang); // Store the language in session storage
    window.location.href = `/${lang}`; // Adjust this path as per your routing setup
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div id="home">
      <nav className="py-8">
        <div className="container mx-auto flex flex-wrap justify-between items-center px-4 md:px-0">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-800">
            <Image src={logo} alt="Logo" width={80} height={80} />
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="text-gray-800 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <RxCross2 size={30} />
              ) : (
                <GiHamburgerMenu size={30} />
              )}
            </button>
          </div>

          {/* Navigation Menu */}
          <ul
            className={`flex flex-col items-center  md:flex-row lg:space-x-20 md:space-x-12 md:flex-nowrap ${
              isMobileMenuOpen ? "block" : "hidden md:flex"
            }`}
          >
            <li>
              <Link
                href="/"
                className={`text-gray-600 hover:text-green-900 ${
                  pathname === "/"
                    ? "underline underline-offset-8 decoration-2 decoration-green-900"
                    : ""
                }`}
                onClick={handleLinkClick}
              >
                {t("home")}
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className={`text-gray-600 hover:text-green-900 ${
                  pathname === "/about"
                    ? "underline underline-offset-8 decoration-2 decoration-green-900"
                    : ""
                }`}
                onClick={handleLinkClick}
              >
                {t("about")}
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className={`text-gray-600 hover:text-green-900 ${
                  pathname === "/services"
                    ? "underline underline-offset-8 decoration-2 decoration-green-900"
                    : ""
                }`}
                onClick={handleLinkClick}
              >
                {t("services")}
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className={`text-gray-600 hover:text-green-900 ${
                  pathname === "/projects"
                    ? "underline underline-offset-8 decoration-2 decoration-green-900"
                    : ""
                }`}
                onClick={handleLinkClick}
              >
                {t("projects")}
              </Link>
            </li>
            {/* Contact Button */}
            <a
              href="#contact"
              className="bg-green-900 text-white px-5 py-1 flex justify-center items-center rounded-full hover:bg-green-700 transition-all"
            >
              {t("contact")}
            </a>
            {/* Language Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="bg-gray-200 text-gray-800 py-2 px-4 rounded w-fit"
                onClick={() => setDropdownOpen((prev) => !prev)}
              >
                {selectedLanguage.toUpperCase()} ▼
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                  <button
                    onClick={() => changeLanguage("en")}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                  >
                    English
                  </button>
                  <button
                    onClick={() => changeLanguage("ar")}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                  >
                    العربية
                  </button>
                </div>
              )}
            </div>
          </ul>
        </div>

        {/* Fullscreen Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu open">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="absolute top-4 right-4 text-gray-800 focus:outline-none"
            >
              <RxCross2 size={30} />
            </button>
            <ul className="flex flex-col items-center">
              <li>
                <Link
                  href="/"
                  className={`block text-gray-600 hover:text-green-900 ${
                    pathname === "/"
                      ? "underline underline-offset-8 decoration-2 decoration-green-900"
                      : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className={`block text-gray-600 hover:text-green-900 ${
                    pathname === "/about"
                      ? "underline underline-offset-8 decoration-2 decoration-green-900"
                      : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className={`block text-gray-600 hover:text-green-900 ${
                    pathname === "/services"
                      ? "underline underline-offset-8 decoration-2 decoration-green-900"
                      : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className={`block text-gray-600 hover:text-green-900 ${
                    pathname === "/projects"
                      ? "underline underline-offset-8 decoration-2 decoration-green-900"
                      : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  {t("projects")}
                </Link>
              </li>
              {/* Contact Us Button in Mobile Menu */}
              <li>
                <a
                  href="#contact"
                  className="bg-green-900 text-white px-5 py-1 rounded-full hover:bg-green-700 transition-all"
                  onClick={handleLinkClick}
                >
                  {t("contact")}
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
