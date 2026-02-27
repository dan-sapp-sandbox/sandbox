import { useContext, useEffect } from "react";
import type { JSX } from "react";
import { Viewer, useCesium } from "resium";
import { CameraContext, type IWidget } from "./types";
import { Cartesian3 } from "cesium";
import MainViewRectangle from "./MainViewRectangle";

const OverviewInitializer = () => {
  const { viewer } = useCesium();
  const { overviewViewerRef } = useContext(CameraContext);

  useEffect(() => {
    if (!viewer) return;
    overviewViewerRef.current = viewer;
  }, [viewer, overviewViewerRef]);

  useEffect(() => {
    if (!viewer) return;

    viewer.camera.setView({
      destination: Cartesian3.fromDegrees(0, 0, 5_000_000),
    });

    const controller = viewer.scene.screenSpaceCameraController;
    controller.enableRotate = false;
    controller.enableZoom = false;
    controller.enableTilt = false;
    controller.enableTranslate = false;
    controller.enableLook = false;

    viewer.useDefaultRenderLoop = true;
    viewer.scene.requestRenderMode = false;
  }, [viewer]);

  return null;
};

const OverviewMap = ({
  children,
  overviewState,
}: {
  children?: JSX.Element | JSX.Element[];
  overviewState: IWidget;
}) => {
  return (
    <div
      style={{
        top: `${overviewState.top}%`,
        left: `${overviewState.left}%`,
        width: `${overviewState.width}%`,
        aspectRatio: overviewState.aspect,
      }}
      className="absolute rounded border border-(--text) overflow-hidden"
    >
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
        <OverviewInitializer />
        <MainViewRectangle />
        {children}
      </Viewer>
    </div>
  );
};

export default OverviewMap;
