import { createRootRoute, useMatch, useMatches } from "@tanstack/react-router";
import { AnimatePresence } from "framer-motion";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { AnimatedOutlet } from "@/components/AnimatedOutlet";

const Root = () => {
  const matches = useMatches();
  const match = useMatch({ strict: false });
  const nextMatchIndex = matches.findIndex((d) => d.id === match.id) + 1;
  const nextMatch = matches[nextMatchIndex];

  const isHomePage = window.location.pathname === "/";

  return (
    <div className="relative min-h-screen bg-dark-brown text-off-white">
      <Navbar />

      <div className="wrapper overflow-hidden">
        <AnimatePresence mode="wait">
          <AnimatedOutlet key={nextMatch.id} />
        </AnimatePresence>
      </div>

      {!isHomePage ? <Footer /> : null}
    </div>
  );
};

export const Route = createRootRoute({
  component: Root,
});
