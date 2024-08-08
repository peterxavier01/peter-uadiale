import { forwardRef, useContext, useRef } from "react";
import { getRouterContext, Outlet } from "@tanstack/react-router";
import { useIsPresent } from "framer-motion";
import cloneDeep from "lodash.clonedeep";

export const AnimatedOutlet = forwardRef<HTMLDivElement>((_, ref) => {
  const RouterContext = getRouterContext();

  const routerContext = useContext(RouterContext);

  const renderedContext = useRef(routerContext);

  const isPresent = useIsPresent();

  if (isPresent) {
    renderedContext.current = cloneDeep(routerContext);
  }

  return (
    <div ref={ref}>
      <RouterContext.Provider value={renderedContext.current}>
        <Outlet />
      </RouterContext.Provider>
    </div>
  );
});
