import { createRouter, createRootRoute, createRoute, Outlet } from "@tanstack/react-router";
// import { Link } from "@tanstack/react-router";
import App from "./App.tsx";

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <App />,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: () => <div>About Page</div>,
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

export const router = createRouter({
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
