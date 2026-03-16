import { createRouter, createRootRoute, createRoute, Outlet } from "@tanstack/react-router";
import { useTheme } from "./components/themeToggle/useTheme.ts";
import App from "./App.tsx";
import MapApp from "./sections/map/MapApp.tsx";
import DataGrid from "./sections/userMgmt/dataGrid/DataGrid.tsx";
import ReportBuilder from "./sections/reportBuilder/ReportBuilder.tsx";
import DataVisualizations from "./sections/charts/DataVisualizations.tsx";
import Viewer from "./sections/componentLibrary/Viewer.tsx";

const rootRoute = createRootRoute({
  component: () => {
    useTheme();
    return (
      <div className="h-screen w-screen">
        <Outlet />
      </div>
    );
  },
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
const reportBuilderRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/report-builder",
  component: () => <ReportBuilder />,
});
const chartsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/data-visualization",
  component: () => (
    <div className="mt-12 p-12">
      <DataVisualizations />
    </div>
  ),
});
const componentLibraryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/component-library",
  component: () => <Viewer />,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  mapRoute,
  reportBuilderRoute,
  userMgmtRoute,
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
