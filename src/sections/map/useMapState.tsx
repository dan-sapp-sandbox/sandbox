import { useState, useEffect, useRef } from "react";
import type { Dispatch, SetStateAction, RefObject } from "react";
import type { DragStartEvent, DragEndEvent } from "@dnd-kit/core";
import { Cartesian3, Cartographic, Viewer } from "cesium";
import type { ILayer, IWidgetState } from "./types";

export interface IMapState {
  containerRef: RefObject<HTMLDivElement | null>;
  mainViewerRef: RefObject<Viewer | null>;
  overviewViewerRef: RefObject<Viewer | null>;
  pipViewerRef: RefObject<Viewer | null>;
  handleDragStart: (event: DragStartEvent) => void;
  handleDragEnd: (event: DragEndEvent) => void;
  layer: ILayer;
  setLayer: Dispatch<SetStateAction<ILayer>>;
  showOverviewMap: boolean;
  setShowOverviewMap: Dispatch<SetStateAction<boolean>>;
  widgetState: IWidgetState;
}

const useMapState = (): IMapState => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const overviewDomRef = useRef<HTMLDivElement | null>(null);
  const pipDomRef = useRef<HTMLDivElement | null>(null);
  const mainViewerRef = useRef<Viewer | null>(null);
  const overviewViewerRef = useRef<Viewer | null>(null);
  const pipViewerRef = useRef<Viewer | null>(null);
  const startPositionRef = useRef<Position>({ x: 0, y: 0 });
  const [layer, setLayer] = useState<ILayer>("satellite");
  const [showOverviewMap, setShowOverviewMap] = useState(true);
  const initWidgetState: IWidgetState = {
    overview: {
      ref: overviewDomRef,
      top: 2,
      left: 83,
      width: 15,
      aspect: 1,
    },
    pip: {
      ref: pipDomRef,
      top: 50,
      left: 10,
      width: 25,
      aspect: 1,
    },
  };
  type Position = {
    x: number;
    y: number;
  };
  const [widgetState, setWidgetState] = useState<IWidgetState>(initWidgetState);
  const handleDragStart = (event: DragStartEvent) => {
    const { id } = event.active;

    if (id === "overview") {
      startPositionRef.current = {
        x: widgetState.overview.left,
        y: widgetState.overview.top,
      };
    }

    if (id === "pip" || id === "pip-target") {
      startPositionRef.current = {
        x: widgetState.pip.left,
        y: widgetState.pip.top,
      };
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

    if (id === "overview") {
      setWidgetState({
        ...widgetState,
        overview: {
          ...widgetState.overview,
          left: newX,
          top: newY,
        },
      });
    }

    if (id === "pip") {
      setWidgetState({
        ...widgetState,
        pip: {
          ...widgetState.pip,
          left: newX,
          top: newY,
        },
      });
    }

    if (id === "pip-target") {
      setWidgetState({
        ...widgetState,
        pip: {
          ...widgetState.pip,
          left: newX,
          top: newY,
        },
      });
    }
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
    layer,
    setLayer,
    showOverviewMap,
    setShowOverviewMap,
    widgetState,
    containerRef,
  };
};

export default useMapState;
