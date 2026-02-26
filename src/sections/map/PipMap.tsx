import { useContext, useEffect } from "react";
import type { JSX } from "react";
import { Viewer, useCesium } from "resium";
import { CameraContext } from "./MapApp";
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

const PipMap = ({ children }: { children?: JSX.Element | JSX.Element[] }) => {
  return (
    <div className="absolute bottom-1/6 left-1/5 rounded h-1/3 aspect-square border border-(--pip-border) overflow-hidden">
      <Viewer
        full
        contextOptions={{ webgl: { alpha: true } }}
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
