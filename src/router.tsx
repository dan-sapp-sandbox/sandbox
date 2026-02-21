import { createRouter, createRootRoute, createRoute, Outlet } from "@tanstack/react-router";
import ThemeToggle from "@/components/themeToggle";
import App from "./App.tsx";
import MapApp from "./sections/map/MapApp.tsx";
import DataGrid from "./components/DataGrid.tsx";
import TaskBoard from "./sections/dnd/TaskBoard.tsx";
import DataVisualizations from "./sections/charts/DataVisualizations.tsx";
import Viewer from "./sections/componentLibrary/Viewer.tsx";

const rootRoute = createRootRoute({
  component: () => (
    <div className="h-screen w-screen">
      <ThemeToggle />
      <Outlet />
    </div>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <App />,
});

const mapRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/map",
  component: () => (
    <div className="relative h-full flex-1 w-full flex flex-row">
      <MapApp />
    </div>
  ),
});
const userMgmtRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/user-management",
  component: () => (
    <div className="h-full w-full flex flex-col justify-center items-center p-px md:p-2">
      <DataGrid />
    </div>
  ),
});
const dndRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/drag-and-drop",
  component: () => <TaskBoard />,
});
const chartsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/data-visualization",
  component: () => <DataVisualizations />,
});
const componentLibraryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/component-library",
  component: () => <Viewer />,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  mapRoute,
  userMgmtRoute,
  dndRoute,
  chartsRoute,
  componentLibraryRoute,
]);

export const router = createRouter({
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
