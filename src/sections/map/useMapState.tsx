import { useState, useEffect, useRef } from "react";
import type { Dispatch, SetStateAction, RefObject } from "react";
import type { DragStartEvent, DragEndEvent } from "@dnd-kit/core";
import { Cartesian3, Cartographic, Viewer } from "cesium";
import type { ILayer } from "./types";

export interface IMapState {
  mainViewerRef: RefObject<Viewer | null>;
  overviewViewerRef: RefObject<Viewer | null>;
  pipViewerRef: RefObject<Viewer | null>;
  handleDragStart: (event: DragStartEvent) => void;
  handleDragEnd: (event: DragEndEvent) => void;
  handleDragCancel: () => void;
  layer: ILayer;
  setLayer: Dispatch<SetStateAction<ILayer>>;
  showOverviewMap: boolean;
  setShowOverviewMap: Dispatch<SetStateAction<boolean>>;
}

const useMapState = (): IMapState => {
  const mainViewerRef = useRef<Viewer | null>(null);
  const overviewViewerRef = useRef<Viewer | null>(null);
  const pipViewerRef = useRef<Viewer | null>(null);
  const [layer, setLayer] = useState<ILayer>("satellite");
  const [showOverviewMap, setShowOverviewMap] = useState(true);
  const handleDragStart = (event: DragStartEvent) => {};
  const handleDragEnd = (event: DragEndEvent) => {};
  const handleDragCancel = () => {};
  useEffect(() => {
    let cleanup: (() => void) | undefined;

    const tryAttach = () => {
      const main = mainViewerRef.current;
      const overview = overviewViewerRef.current;

      if (!main || !overview) {
        requestAnimationFrame(tryAttach);
        return;
      }

      const sync = () => {
        const main = mainViewerRef.current;
        const overview = overviewViewerRef.current;
        if (!main || !overview) return;

        const mainCam = main.camera;

        const carto = Cartographic.fromCartesian(mainCam.position);
        const boostedHeight = carto.height * 3 < 4500000 ? carto.height * 3 : 3800000;

        const boostedPosition = Cartesian3.fromRadians(carto.longitude, carto.latitude, boostedHeight);

        overview.camera.setView({
          destination: boostedPosition,
          orientation: {
            heading: 0,
            pitch: -Math.PI / 2,
            roll: 0,
          },
        });
      };

      main.camera.changed.addEventListener(sync);
      sync();

      cleanup = () => {
        main.camera.changed.removeEventListener(sync);
      };
    };

    tryAttach();

    return () => {
      cleanup?.();
    };
  }, []);

  return {
    mainViewerRef,
    overviewViewerRef,
    pipViewerRef,
    handleDragStart,
    handleDragEnd,
    handleDragCancel,
    layer,
    setLayer,
    showOverviewMap,
    setShowOverviewMap,
  };
};

export default useMapState;
