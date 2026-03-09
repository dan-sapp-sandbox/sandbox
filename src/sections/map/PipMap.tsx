import { useContext, useEffect, useMemo, type ReactNode } from "react";
import { Grip } from "lucide-react";
import { Viewer, useCesium } from "resium";
import { CameraContext, type IWidget } from "./types";
import { Cartesian3, createWorldTerrainAsync } from "cesium";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import useLocalStorage from "use-local-storage";

const PipInitializer = () => {
  const { viewer } = useCesium();
  const { pipViewerRef } = useContext(CameraContext);
  const [init] = useLocalStorage("pip-cam-init", {
    lat: 42,
    lon: 0,
    height: 100_000,
    heading: 0,
    pitch: -Math.PI / 2,
    roll: 0,
  });

  useEffect(() => {
    if (!viewer) return;
    pipViewerRef.current = viewer;
  }, [viewer, pipViewerRef]);

  useEffect(() => {
    if (!viewer) return;

    viewer.camera.setView({
      destination: Cartesian3.fromDegrees(init.lon, init.lat, init.height),
      orientation: {
        heading: init.heading,
        pitch: init.pitch,
        roll: init.roll,
      },
    });
  }, [viewer]);

  return null;
};

const PipMap = ({ children, pipState }: { children?: ReactNode | ReactNode[]; pipState: IWidget }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "pip",
  });
  const contextOptions = useMemo(() => ({ webgl: { alpha: true } }), []);
  const terrainProvider = createWorldTerrainAsync();
  return (
    <div
      style={{
        top: `${pipState.top}%`,
        left: `${pipState.left}%`,
        width: `${pipState.width}%`,
        aspectRatio: pipState.aspect,
        transform: CSS.Translate.toString(transform),
      }}
      className="group absolute rounded border border-(--pip-border) overflow-hidden"
      ref={setNodeRef}
    >
      <div className="z-999 w-full h-full relative pointer-events-none">
        <div className="absolute top-0 w-full flex flex-row justify-center">
          <div
            className="pointer-events-auto cursor-grab active:cursor-grabbing opacity-0 group-hover:opacity-100 transition rounded bg-black/70 p-1"
            {...listeners}
            {...attributes}
          >
            <Grip className="h-5 w-5 stroke-white" />
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 h-full w-full pointer-events-auto">
        <Viewer
          full
          terrainProvider={terrainProvider}
          contextOptions={contextOptions}
          baseLayerPicker={false}
          timeline={false}
          geocoder={false}
          homeButton={false}
          sceneModePicker={false}
          animation={false}
          fullscreenButton={false}
          navigationHelpButton={false}
          selectionIndicator={false}
          infoBox={false}
        >
          <PipInitializer />
          {children}
        </Viewer>
      </div>
    </div>
  );
};

export default PipMap;
