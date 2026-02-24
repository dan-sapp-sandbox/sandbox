import { useContext, useEffect, useRef } from "react";
import type { JSX } from "react";
import { Viewer, useCesium } from "resium";
import { CameraContext } from "./MapApp";
import { Cartesian3 } from "cesium";

const MiniMapController = () => {
  const { viewer } = useCesium();
  const { center } = useContext(CameraContext);
  const initialized = useRef(false);

  // Disable all interaction (run once)
  useEffect(() => {
    if (!viewer || initialized.current) return;

    const controller = viewer.scene.screenSpaceCameraController;

    controller.enableRotate = false;
    controller.enableZoom = false;
    controller.enableTilt = false;
    controller.enableTranslate = false;
    controller.enableLook = false;

    // Optional: force 2D overview map (very common UX)
    viewer.scene.morphTo2D(0);

    initialized.current = true;
  }, [viewer]);

  // Sync camera center (fixed zoom)
  useEffect(() => {
    if (!viewer || !center) return;

    viewer.camera.setView({
      destination: Cartesian3.fromRadians(center.longitude, center.latitude, 4_000_000),
    });

    viewer.scene.requestRender();
  }, [viewer, center]);

  useEffect(() => {
    if (!viewer) return;

    viewer.scene.requestRenderMode = true;
    viewer.scene.maximumRenderTimeChange = Infinity;
  }, [viewer]);

  return null;
};

const OverviewMap = ({ children }: { children?: JSX.Element | JSX.Element[] }) => {
  return (
    <div className="absolute top-3 right-3 rounded h-50 w-50 border border-(--text) overflow-hidden">
      <Viewer
        contextOptions={{
          webgl: {
            alpha: true,
          },
        }}
        style={{
          position: "absolute",
          inset: 0,
          background: "transparent",
        }}
        baseLayerPicker={false}
        timeline={false}
        geocoder={false}
        homeButton={false}
        sceneModePicker={false}
        animation={false}
        fullscreenButton={false}
        navigationHelpButton={false}
      >
        <MiniMapController />
        {children}
      </Viewer>
    </div>
  );
};

export default OverviewMap;
