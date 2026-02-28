import { useContext, useEffect, useMemo } from "react";
import type { JSX } from "react";
import { Grip } from "lucide-react";
import { Viewer, useCesium } from "resium";
import { CameraContext, type IWidget } from "./types";
import { Cartesian3 } from "cesium";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

const PipInitializer = () => {
  const { viewer } = useCesium();
  const { pipViewerRef } = useContext(CameraContext);

  useEffect(() => {
    if (!viewer) return;
    pipViewerRef.current = viewer;
  }, [viewer, pipViewerRef]);

  useEffect(() => {
    if (!viewer) return;

    viewer.camera.setView({
      destination: Cartesian3.fromDegrees(0, 45, 100_000),
    });
  }, [viewer]);

  return null;
};

const PipMap = ({ children, pipState }: { children?: JSX.Element | JSX.Element[]; pipState: IWidget }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "pip",
  });
  const contextOptions = useMemo(() => ({ webgl: { alpha: true } }), []);
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
      <div ref={pipState.ref} className="absolute top-0 left-0 h-full w-full pointer-events-auto">
        <Viewer
          full
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
