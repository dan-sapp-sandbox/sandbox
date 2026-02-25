import { useContext, useEffect } from "react";
import type { JSX } from "react";
import { Viewer, useCesium } from "resium";
import { CameraContext } from "./MapApp";
import { Viewer as CesiumViewer } from "cesium";

const RegisterMainViewer = () => {
  const { viewer } = useCesium();
  const { mainViewerRef } = useContext(CameraContext);

  useEffect(() => {
    if (!viewer) return;
    mainViewerRef.current = viewer as CesiumViewer;
  }, [viewer, mainViewerRef]);

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
      {children}
      <RegisterMainViewer />
    </Viewer>
  );
};

export default MainMap;
