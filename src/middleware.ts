import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Matches all routes including root and locale-prefixed paths
  matcher: [
    "/",
    "/en/:path*", // Matches paths prefixed with "/en"
    "/ar/:path*", // Matches paths prefixed with "/ar"
  ],
};
