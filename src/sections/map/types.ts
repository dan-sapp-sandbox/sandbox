import { createContext, type RefObject } from "react";
import { Viewer } from "cesium";

export type ILayer = "esriSat" | "osm" | "satellite" | "carto-light" | "carto-dark" | "carto-voyager";

type CameraContextType = {
  mainViewerRef: RefObject<Viewer | null>;
  overviewViewerRef: RefObject<Viewer | null>;
  pipViewerRef: RefObject<Viewer | null>;
};

export const CameraContext = createContext<CameraContextType>({
  mainViewerRef: { current: null },
  overviewViewerRef: { current: null },
  pipViewerRef: { current: null },
});
