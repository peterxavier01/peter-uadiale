import {
  createRootRoute,
  useMatch,
  useMatches,
  Outlet,
} from "@tanstack/react-router";
import { AnimatePresence } from "framer-motion";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const Root = () => {
  const matches = useMatches();
  const match = useMatch({ strict: false });
  const nextMatchIndex = matches.findIndex((d) => d.id === match.id) + 1;
  const nextMatch = matches[nextMatchIndex];

  const isHomePage = window.location.pathname === "/";

  return (
    <div className="relative min-h-screen bg-dark-brown text-off-white">
      <Navbar />

      <div className="wrapper">
        <AnimatePresence mode="wait">
          <Outlet key={nextMatch.id} />
        </AnimatePresence>
      </div>

      {!isHomePage ? <Footer /> : null}
    </div>
  );
};

export const Route = createRootRoute({
  component: Root,
});
