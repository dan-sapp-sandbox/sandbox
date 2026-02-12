import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import { useEffect, useRef } from "react";
import { useMap } from "react-map-gl/mapbox";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import type { FeatureCollection } from "geojson";
import type { DrawMode } from "./useMapState";

type DrawLayerProps = {
  enabled: boolean;
  mode: DrawMode;
  value: FeatureCollection;
  onChange: (fc: FeatureCollection) => void;
};

export const DrawLayer = ({ enabled, mode, value, onChange }: DrawLayerProps) => {
  const { mainMap } = useMap();
  const drawRef = useRef<MapboxDraw | null>(null);

  useEffect(() => {
    if (!mainMap) return;
    const map = mainMap.getMap();
    if (!map) return;

    if (!drawRef.current) {
      drawRef.current = new MapboxDraw({
        displayControlsDefault: false,
      });
    }

    if (enabled && !map.hasControl(drawRef.current)) {
      map.addControl(drawRef.current);
    }

    if (!enabled && map.hasControl(drawRef.current)) {
      map.removeControl(drawRef.current);
    }

    drawRef.current.changeMode(mode);

    drawRef.current.deleteAll();
    if (value.features.length) {
      drawRef.current.add(value);
    }

    const sync = () => onChange(drawRef.current!.getAll());

    map.on("draw.create", sync);
    map.on("draw.update", sync);
    map.on("draw.delete", sync);

    return () => {
      map.off("draw.create", sync);
      map.off("draw.update", sync);
      map.off("draw.delete", sync);
    };
  }, [mainMap, enabled, mode, value, onChange]);

  return null;
};
