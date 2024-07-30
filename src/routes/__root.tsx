import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export const Route = createRootRoute({
  component: () => {
    const isHomePage = window.location.pathname === "/";

    return (
      <div className="relative min-h-screen bg-dark-brown text-off-white">
        <Navbar />

        <div className="wrapper">
          <Outlet />
        </div>

        <TanStackRouterDevtools />

        {!isHomePage ? <Footer /> : null}
      </div>
    );
  },
});
