import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import { useEffect, useRef } from "react";
import { useMap } from "react-map-gl/mapbox";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import type { IMapState } from "./useMapState";

type DrawLayerProps = { mapState: IMapState; enabled: boolean };

const DrawLayer = ({ mapState, enabled }: DrawLayerProps) => {
  const { mainMap } = useMap();
  const drawRef = useRef<MapboxDraw | null>(null);

  useEffect(() => {
    if (!mainMap) return;
    const mbMap = mainMap.getMap();
    if (!mbMap) return;

    drawRef.current = new MapboxDraw({
      displayControlsDefault: false,
      controls: { point: true, line_string: true, polygon: true, trash: true },
    });

    if (enabled) mbMap.addControl(drawRef.current, "top-right");

    // Re-add existing features after map remount
    if (mapState.drawFeatures?.features.length) {
      // Remove existing features first
      const currentFeatures = drawRef.current.getAll();
      if (currentFeatures.features.length) {
        drawRef.current.delete(currentFeatures.features.map((f) => f.id as string));
      }

      // Add saved features
      drawRef.current.add(mapState.drawFeatures);
    }

    const updateFeatures = () => {
      mapState.setDrawFeatures(drawRef.current!.getAll());
    };

    mbMap.on("draw.create", updateFeatures);
    mbMap.on("draw.update", updateFeatures);
    mbMap.on("draw.delete", updateFeatures);

    return () => {
      if (drawRef.current) {
        try {
          if (mbMap.hasControl(drawRef.current)) {
            mbMap.removeControl(drawRef.current);
          }
        } catch {}
        drawRef.current = null;
      }
      mbMap.off("draw.create", updateFeatures);
      mbMap.off("draw.update", updateFeatures);
      mbMap.off("draw.delete", updateFeatures);
    };
  }, [mainMap, enabled]);

  return null;
};

export default DrawLayer;
