import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";

import { routeTree } from "./routeTree.gen.ts";
import MotionProvider from "@/components/motion-provider.tsx";
import ModalProvider from "@/components/modal-provider.tsx";
import { Toaster } from "@/components/ui/toaster";

import "./index.css";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MotionProvider>
      <RouterProvider router={router} />
      <Toaster />
      <ModalProvider />
    </MotionProvider>
  </React.StrictMode>,
);
