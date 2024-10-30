"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../../public/assets/HeroLogo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import "../styles/Header.css";

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <div>
      <nav className="py-8">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
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
            className={`flex flex-col md:flex-row space-x-0 md:space-x-20 ${
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
                onClick={handleLinkClick} // Close menu on click
              >
                Home
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
                onClick={handleLinkClick} // Close menu on click
              >
                About
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
                onClick={handleLinkClick} // Close menu on click
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#events"
                className={`text-gray-600 hover:text-green-900 ${
                  pathname === "/projects"
                    ? "underline underline-offset-8 decoration-2 decoration-green-900"
                    : ""
                }`}
                onClick={handleLinkClick} // Close menu on click
              >
                Projects
              </Link>
            </li>
          </ul>

          {/* Contact Button */}
          <a
            href="#contact"
            className="bg-green-900 text-white px-5 py-1 rounded-full hover:bg-green-700 transition-all"
          >
            Contact Us
          </a>
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
                  onClick={handleLinkClick} // Close menu on click
                >
                  Home
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
                  onClick={handleLinkClick} // Close menu on click
                >
                  About
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
                  onClick={handleLinkClick} // Close menu on click
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#events"
                  className={`block text-gray-600 hover:text-green-900 ${
                    pathname === "/projects"
                      ? "underline underline-offset-8 decoration-2 decoration-green-900"
                      : ""
                  }`}
                  onClick={handleLinkClick} // Close menu on click
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
