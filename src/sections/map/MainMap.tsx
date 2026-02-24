import { useContext, useEffect } from "react";
import type { JSX } from "react";
import { Viewer, useCesium } from "resium";
import { CameraContext } from "./MapApp";

const CameraPublisher = () => {
  const { viewer } = useCesium();
  const { setCenter } = useContext(CameraContext);

  useEffect(() => {
    if (!viewer) return;

    const removeListener = viewer.camera.changed.addEventListener(() => {
      const carto = viewer.camera.positionCartographic;
      setCenter(carto);
    });

    return () => {
      removeListener();
    };
  }, [viewer, setCenter]);

  useEffect(() => {
    if (!viewer) return;

    const resizeObserver = new ResizeObserver(() => {
      viewer.resize();
    });

    resizeObserver.observe(viewer.container);

    return () => resizeObserver.disconnect();
  }, [viewer]);

  return null;
};

const RegisterViewer = () => {
  const { viewer } = useCesium();
  const { setMainViewer } = useContext(CameraContext);

  useEffect(() => {
    if (!viewer) return;
    setMainViewer(viewer);
  }, [viewer, setMainViewer]);

  return null;
};

const Map = ({ children }: { children?: JSX.Element | JSX.Element[] }) => {
  const { viewer } = useCesium();
  useEffect(() => {
    if (!viewer) return;

    setTimeout(() => {
      viewer.resize();
    }, 0);
  }, [viewer]);
  return (
    <Viewer
      style={{
        position: "absolute",
        inset: 0,
      }}
      contextOptions={{
        webgl: {
          alpha: true,
        },
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
      <RegisterViewer />
      <CameraPublisher />
    </Viewer>
  );
};

export default Map;
