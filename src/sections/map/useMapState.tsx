import { useState, useEffect } from "react";
import type { MapViewState } from "deck.gl";

export type IProjection = "globe" | "mercator";
export type DrawMode = "simple_select" | "draw_point" | "draw_line_string" | "draw_polygon";

const mapStyleOptions = [
  { id: "mapbox://styles/mapbox/standard", name: "Standard" },
  { id: "mapbox://styles/mapbox/streets-v12", name: "Streets" },
  { id: "mapbox://styles/mapbox/outdoors-v12", name: "Outdoors" },
  { id: "mapbox://styles/mapbox/light-v11", name: "Light" },
  { id: "mapbox://styles/mapbox/dark-v11", name: "Dark" },
  { id: "mapbox://styles/mapbox/satellite-v9", name: "Satellite" },
  { id: "mapbox://styles/mapbox/satellite-streets-v12", name: "Satellite Streets" },
];

const projectionOptions = [
  { id: "mercator", name: "Mercator" },
  { id: "globe", name: "Globe" },
];

export interface IMapState {
  viewState: MapViewState;
  setViewState: React.Dispatch<React.SetStateAction<MapViewState>>;
  projection: IProjection;
  setProjection: React.Dispatch<React.SetStateAction<IProjection>>;
  projectionOptions: { id: string; name: string }[];
  mapStyleOptions: { id: string; name: string }[];
  mapStyle: string;
  setMapStyle: React.Dispatch<React.SetStateAction<string>>;
  drawer: string | undefined;
  setDrawer: React.Dispatch<React.SetStateAction<string | undefined>>;
  drawEnabled: boolean;
  setDrawEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  drawFeatures: GeoJSON.FeatureCollection | undefined;
  setDrawFeatures: (features: GeoJSON.FeatureCollection | undefined) => void;
  drawMode: DrawMode;
  setDrawMode: React.Dispatch<React.SetStateAction<DrawMode>>;
  clearDraw: () => void;
}
export const useMapState = (): IMapState => {
  //TODO: setup an observer to update map size of map size change

  const [drawMode, setDrawMode] = useState<DrawMode>("simple_select");
  const [drawFeatures, setDrawFeatures] = useState<GeoJSON.FeatureCollection | undefined>();
  const [drawEnabled, setDrawEnabled] = useState<boolean>(true);
  const [drawer, setDrawer] = useState<string | undefined>();
  const [mapStyle, setMapStyle] = useState<string>("mapbox://styles/mapbox/satellite-streets-v12");
  const [projection, setProjection] = useState<IProjection>(
    (localStorage.getItem("projection") as IProjection) || "globe",
  );
  const lsViewState = localStorage.getItem("viewState");
  const [viewState, setViewState] = useState<MapViewState>(
    lsViewState
      ? JSON.parse(lsViewState)
      : {
          longitude: -98.5795,
          latitude: 39.8283,
          zoom: 2,
          bearing: 0,
          pitch: 0,
          padding: { top: 0, left: 0, right: 0, bottom: 0 },
        },
  );

  const clearDraw = () => {
    setDrawFeatures({ type: "FeatureCollection", features: [] });
  };

  useEffect(() => {
    localStorage.setItem("projection", projection);
  }, [projection]);
  useEffect(() => {
    localStorage.setItem("viewState", JSON.stringify(viewState));
  }, [viewState]);
  return {
    viewState,
    setViewState,
    projection,
    setProjection,
    projectionOptions,
    mapStyleOptions,
    mapStyle,
    setMapStyle,
    drawer,
    setDrawer,
    drawEnabled,
    setDrawEnabled,
    drawFeatures,
    setDrawFeatures,
    drawMode,
    setDrawMode,
    clearDraw,
  };
};
