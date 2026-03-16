import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";
import "./index.css";
import "cesium/Build/Cesium/Widgets/widgets.css";
import { registerSW } from "virtual:pwa-register";
import "./polyfills";
import { Toaster } from "react-hot-toast";

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("New version available. Update?")) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    console.log("App ready to work offline");
  },
});
updateSW();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
