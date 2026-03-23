import { useState, useEffect, useRef } from "react";
import type { Dispatch, SetStateAction, RefObject } from "react";
import type { DragStartEvent, DragEndEvent } from "@dnd-kit/core";
import { Cartesian3, Cartographic, Math, Viewer } from "cesium";
import type { ILayer, IWidgetState } from "./types";
import useLocalStorage from "use-local-storage";

export const defaultMainView = {
  height: 1230000,
  lat: 27.5,
  lon: 55,
  heading: 6.283185307179583,
  pitch: -1.5682332501783933,
  roll: 0,
};
export const defaultPipView = {
  height: 8000,
  lat: 29.24,
  lon: 50.314,
  heading: 6.283185307179581,
  pitch: -1.5684928999831915,
  roll: 0,
};
export const defaultPipView2 = {
  height: 160000,
  lat: 26.55,
  lon: 56.45,
  heading: 6.283185307179581,
  pitch: -1.5684928999831915,
  roll: 0,
};

export interface IMapState {
  containerRef: RefObject<HTMLDivElement | null>;
  mainViewerRef: RefObject<Viewer | null>;
  overviewViewerRef: RefObject<Viewer | null>;
  pipViewerRef: RefObject<Viewer | null>;
  pipViewer2Ref: RefObject<Viewer | null>;
  handleDragStart: (event: DragStartEvent) => void;
  handleDragEnd: (event: DragEndEvent) => void;
  layer: ILayer;
  setLayer: Dispatch<SetStateAction<ILayer>>;
  showOverviewMap: boolean;
  setShowOverviewMap: Dispatch<SetStateAction<boolean>>;
  showPipMap: boolean;
  setShowPipMap: Dispatch<SetStateAction<boolean>>;
  showPipMap2: boolean;
  setShowPipMap2: Dispatch<SetStateAction<boolean>>;
  widgetState: IWidgetState;
  takeScreenshot: () => void;
}

const useMapState = (): IMapState => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mainViewerRef = useRef<Viewer | null>(null);
  const overviewViewerRef = useRef<Viewer | null>(null);
  const pipViewerRef = useRef<Viewer | null>(null);
  const pipViewer2Ref = useRef<Viewer | null>(null);
  const startPositionRef = useRef<Position>({ x: 0, y: 0 });
  const [layer, setLayer] = useState<ILayer>("esriSat");
  const [showOverviewMap, setShowOverviewMap] = useState(true);
  const [showPipMap, setShowPipMap] = useState(true);
  const [showPipMap2, setShowPipMap2] = useState(true);
  const [_init, setInitCameraView] = useLocalStorage("main-cam-init", defaultMainView);
  const initWidgetState: IWidgetState = {
    overview: {
      top: 70,
      left: 2,
      width: 20,
      aspect: 1,
    },
    pip: {
      top: 2,
      left: 39,
      width: 12,
      aspect: 3 / 4,
    },
    pip2: {
      top: 2,
      left: 68,
      width: 30,
      aspect: 4 / 3,
    },
  };
  type Position = {
    x: number;
    y: number;
  };
  const [widgetState, setWidgetState] = useLocalStorage<IWidgetState>("widget-state", initWidgetState);
  const handleDragStart = (event: DragStartEvent) => {
    const { id } = event.active;

    switch (id) {
      case "overview":
        startPositionRef.current = {
          x: widgetState.overview.left,
          y: widgetState.overview.top,
        };
        break;
      case "pip":
        startPositionRef.current = {
          x: widgetState.pip.left,
          y: widgetState.pip.top,
        };
        break;
      case "pip-2":
        startPositionRef.current = {
          x: widgetState.pip2.left,
          y: widgetState.pip2.top,
        };
        break;
      default:
        console.log("missing id");
    }
  };
  const handleDragEnd = (event: DragEndEvent) => {
    const { delta } = event;
    if (!containerRef.current) return;
    const { id } = event.active;
    const containerRect = containerRef.current.getBoundingClientRect();

    let xDiff = (100 * delta.x) / containerRect.width;
    let yDiff = (100 * delta.y) / containerRect.height;
    let newX = startPositionRef.current.x + xDiff;
    let newY = startPositionRef.current.y + yDiff;

    switch (id) {
      case "overview":
        setWidgetState({
          ...widgetState,
          overview: {
            ...widgetState.overview,
            left: newX,
            top: newY,
          },
        });
        break;
      case "pip":
        setWidgetState({
          ...widgetState,
          pip: {
            ...widgetState.pip,
            left: newX,
            top: newY,
          },
        });
        break;
      case "pip-2":
        setWidgetState({
          ...widgetState,
          pip2: {
            ...widgetState.pip2,
            left: newX,
            top: newY,
          },
        });
        break;
      default:
        console.log("missing id");
    }
  };

  const takeScreenshot = async () => {
    if (!containerRef.current) return;

    const viewers = [
      { ref: mainViewerRef, state: null }, // main viewer fills the canvas
      { ref: overviewViewerRef, state: widgetState.overview },
      { ref: pipViewerRef, state: widgetState.pip },
      { ref: pipViewer2Ref, state: widgetState.pip2 },
    ];

    // Wait for all viewers to render
    for (const viewerObj of viewers) {
      const viewer = viewerObj.ref.current;
      if (!viewer) continue;
      await new Promise<void>((resolve) => {
        viewer.scene.render();
        requestAnimationFrame(() => resolve());
      });
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const combinedCanvas = document.createElement("canvas");
    combinedCanvas.width = containerRect.width;
    combinedCanvas.height = containerRect.height;
    const ctx = combinedCanvas.getContext("2d");
    if (!ctx) return;

    viewers.forEach((viewerObj, i) => {
      const viewer = viewerObj.ref.current;
      if (!viewer) return;
      const canvas = viewer.scene.canvas;

      if (viewerObj.state) {
        const { top, left, width, aspect } = viewerObj.state;
        const pxLeft = (left / 100) * containerRect.width;
        const pxTop = (top / 100) * containerRect.height;
        const pxWidth = (width / 100) * containerRect.width;
        const pxHeight = pxWidth / aspect;

        ctx.drawImage(canvas, pxLeft, pxTop, pxWidth, pxHeight);

        ctx.lineWidth = 1;
        ctx.strokeStyle = i === 1 ? "white" : "red";
        ctx.strokeRect(pxLeft, pxTop, pxWidth, pxHeight);
      } else {
        ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height);
      }
    });

    // Export combined screenshot
    const dataUrl = combinedCanvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "combined-maps.png";
    link.click();
  };

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

        setInitCameraView({
          lon: Math.toDegrees(carto.longitude),
          lat: Math.toDegrees(carto.latitude),
          height: carto.height,
          heading: mainCam.heading,
          pitch: mainCam.pitch,
          roll: mainCam.roll,
        });
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
    pipViewer2Ref,
    handleDragStart,
    handleDragEnd,
    layer,
    setLayer,
    showOverviewMap,
    setShowOverviewMap,
    showPipMap,
    setShowPipMap,
    showPipMap2,
    setShowPipMap2,
    widgetState,
    containerRef,
    takeScreenshot,
  };
};

export default useMapState;
