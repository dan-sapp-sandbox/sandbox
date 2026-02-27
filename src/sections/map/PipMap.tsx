import { useContext, useEffect, useMemo } from "react";
import type { JSX } from "react";
import { Viewer, useCesium } from "resium";
import { CameraContext, type IWidget } from "./types";
import { Cartesian3 } from "cesium";

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
  const contextOptions = useMemo(() => ({ webgl: { alpha: true } }), []);
  return (
    <div
      style={{
        top: `${pipState.top}%`,
        left: `${pipState.left}%`,
        width: `${pipState.width}%`,
        aspectRatio: pipState.aspect,
      }}
      className="absolute rounded border border-(--pip-border) overflow-hidden"
    >
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
  );
};

export default PipMap;
