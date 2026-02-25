import { useContext, useEffect } from "react";
import type { JSX } from "react";
import { Viewer, useCesium } from "resium";
import { CameraContext } from "./MapApp";
import { Cartesian3 } from "cesium";

const OverviewInitializer = () => {
  const { viewer } = useCesium();
  const { overviewViewerRef } = useContext(CameraContext);

  // Register viewer once
  useEffect(() => {
    if (!viewer) return;
    overviewViewerRef.current = viewer;
  }, [viewer, overviewViewerRef]);

  // Configure overview camera + controls
  useEffect(() => {
    if (!viewer) return;

    // Set a default zoomed-out view (so globe is visible immediately)
    viewer.camera.setView({
      destination: Cartesian3.fromDegrees(0, 0, 20_000_000),
    });

    // Disable all user interaction (minimap behavior)
    const controller = viewer.scene.screenSpaceCameraController;
    controller.enableRotate = false;
    controller.enableZoom = false;
    controller.enableTilt = false;
    controller.enableTranslate = false;
    controller.enableLook = false;

    // Ensure continuous rendering so sync looks smooth
    viewer.useDefaultRenderLoop = true;
    viewer.scene.requestRenderMode = false;
  }, [viewer]);

  return null;
};

const OverviewMap = ({ children }: { children?: JSX.Element | JSX.Element[] }) => {
  return (
    <div className="absolute top-3 right-3 rounded h-[15vh] w-[15vh] border border-(--text) overflow-hidden">
      <Viewer
        full
        contextOptions={{
          webgl: { alpha: true },
        }}
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
        <OverviewInitializer />
        {children}
      </Viewer>
    </div>
  );
};

export default OverviewMap;
