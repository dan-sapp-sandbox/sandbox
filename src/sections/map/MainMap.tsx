import { useContext, useEffect } from "react";
import type { JSX } from "react";
import { Viewer, useCesium } from "resium";
import { CameraContext } from "./MapApp";
import { Viewer as CesiumViewer, Cartesian3 } from "cesium";

const RegisterMainViewer = () => {
  const { viewer } = useCesium();
  const { mainViewerRef } = useContext(CameraContext);

  useEffect(() => {
    if (!viewer) return;
    mainViewerRef.current = viewer as CesiumViewer;
  }, [viewer, mainViewerRef]);

  return null;
};

const InitialCamera = () => {
  const { viewer } = useCesium();

  useEffect(() => {
    if (!viewer) return;

    viewer.camera.setView({
      destination: Cartesian3.fromDegrees(0, 45, 2_000_000),
    });
  }, [viewer]);

  return null;
};

const MainMap = ({ children }: { children?: JSX.Element | JSX.Element[] }) => {
  const { viewer } = useCesium();

  useEffect(() => {
    if (!viewer) return;
    setTimeout(() => viewer.resize(), 0);
  }, [viewer]);

  return (
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
    >
      <InitialCamera />
      <RegisterMainViewer />
      {children}
    </Viewer>
  );
};

export default MainMap;
