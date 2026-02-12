import { GeoJsonLayer } from "@deck.gl/layers";
import type { FeatureCollection } from "geojson";

export const drawDeckLayer = (data: FeatureCollection) =>
  new GeoJsonLayer({
    id: "draw-geojson",
    data,
    pickable: true,
    stroked: true,
    filled: true,
    lineWidthMinPixels: 2,

    getFillColor: [0, 160, 255, 80],
    getLineColor: [0, 160, 255, 255],
    getPointRadius: 6,
    pointRadiusMinPixels: 4,
  });
