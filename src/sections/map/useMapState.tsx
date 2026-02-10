import { useState } from "react";
import { type ViewState } from "react-map-gl/mapbox";

export type IProjection = "globe" | "mercator";

const mapStyleOptions = [
  "mapbox://styles/mapbox/standard",
  "mapbox://styles/mapbox/streets-v12",
  "mapbox://styles/mapbox/outdoors-v12",
  "mapbox://styles/mapbox/light-v11",
  "mapbox://styles/mapbox/dark-v11",
  "mapbox://styles/mapbox/satellite-v9",
  "mapbox://styles/mapbox/satellite-streets-v12",
];

export interface IMapState {
  viewState: ViewState;
  setViewState: React.Dispatch<React.SetStateAction<ViewState>>;
  projection: IProjection;
  setProjection: React.Dispatch<React.SetStateAction<IProjection>>;
  mapStyleOptions: string[];
  mapStyle: string;
  setMapStyle: React.Dispatch<React.SetStateAction<string>>;
  drawer: string | undefined;
  setDrawer: React.Dispatch<React.SetStateAction<string | undefined>>;
}
export const useMapState = (): IMapState => {
  //TODO: setup an observer to update map size of map size change
  const [drawer, setDrawer] = useState<string | undefined>();
  const [mapStyle, setMapStyle] = useState<string>("mapbox://styles/mapbox/standard");
  const [projection, setProjection] = useState<IProjection>("mercator");
  const [viewState, setViewState] = useState<ViewState>({
    longitude: -98.5795,
    latitude: 39.8283,
    zoom: 4,
    bearing: 0,
    pitch: 0,
    padding: { top: 0, left: 0, right: 0, bottom: 0 },
  });
  return {
    viewState,
    setViewState,
    projection,
    setProjection,
    mapStyleOptions,
    mapStyle,
    setMapStyle,
    drawer,
    setDrawer,
  };
};
