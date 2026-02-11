import { useEffect, useRef } from "react";
import { useMap } from "react-map-gl/mapbox";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";

const DrawLayer = ({ enabled }: { enabled: boolean }) => {
  const { mainMap } = useMap();
  const drawRef = useRef<MapboxDraw | null>(null);

  useEffect(() => {
    console.log("mainMap", mainMap);
    if (!mainMap) return;

    const mbMap = mainMap.getMap();

    if (enabled && !drawRef.current) {
      drawRef.current = new MapboxDraw({
        displayControlsDefault: false,
        controls: {
          point: true,
          line_string: true,
          polygon: true,
          trash: true,
        },
      });

      mbMap.addControl(drawRef.current, "top-right");
    }

    if (!enabled && drawRef.current) {
      mbMap.removeControl(drawRef.current);
      drawRef.current = null;
    }

    return () => {
      if (drawRef.current) {
        mbMap.removeControl(drawRef.current);
        drawRef.current = null;
      }
    };
  }, [mainMap, enabled]);

  return null;
};

export default DrawLayer;
