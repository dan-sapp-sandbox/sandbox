import { useState, useEffect } from "react";
import { type ViewState } from "react-map-gl/mapbox";

export type IProjection = "globe" | "mercator";

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
  viewState: ViewState;
  setViewState: React.Dispatch<React.SetStateAction<ViewState>>;
  projection: IProjection;
  setProjection: React.Dispatch<React.SetStateAction<IProjection>>;
  projectionOptions: { id: string; name: string }[];
  mapStyleOptions: { id: string; name: string }[];
  mapStyle: string;
  setMapStyle: React.Dispatch<React.SetStateAction<string>>;
  drawer: string | undefined;
  setDrawer: React.Dispatch<React.SetStateAction<string | undefined>>;
}
export const useMapState = (): IMapState => {
  //TODO: setup an observer to update map size of map size change
  const [drawer, setDrawer] = useState<string | undefined>();
  const [mapStyle, setMapStyle] = useState<string>("mapbox://styles/mapbox/satellite-streets-v12");
  const [projection, setProjection] = useState<IProjection>(
    (localStorage.getItem("projection") as IProjection) || "globe",
  );
  const [viewState, setViewState] = useState<ViewState>({
    longitude: -98.5795,
    latitude: 39.8283,
    zoom: 2,
    bearing: 0,
    pitch: 0,
    padding: { top: 0, left: 0, right: 0, bottom: 0 },
  });
  useEffect(() => {
    localStorage.setItem("projection", projection);
  }, [projection]);
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
  };
};
