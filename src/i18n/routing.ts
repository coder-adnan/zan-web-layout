import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

// Define routing for the application
export const routing = defineRouting({
  locales: ["en", "ar"], // Supported locales
  defaultLocale: "en", // Default locale when none is specified
  pathnames: {
    "/": "/", // Root path for both locales
    "/pathnames": {
      en: "/pathnames", // English path
      ar: "/pfadnamen", // Arabic path
    },
    // Add more paths as needed
    "/about": {
      en: "/about", // English path for about
      ar: "/عن", // Arabic path for about
    },
  },
});

// Type definitions for pathnames and locales
export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

// Create navigation helpers
export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);
