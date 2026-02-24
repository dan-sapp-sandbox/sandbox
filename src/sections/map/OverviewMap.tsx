import { useContext, useEffect, useRef, useMemo } from "react";
import type { JSX } from "react";
import { Viewer, useCesium, Entity } from "resium";
import { CameraContext } from "./MapApp";
import { Color, CallbackProperty, Rectangle, Cartographic, Cartesian2, Cartesian3 } from "cesium";

const OverviewController = () => {
  const { viewer } = useCesium();
  const { center, mainViewer } = useContext(CameraContext);
  const initialized = useRef(false);

  // Initial setup (run once)
  useEffect(() => {
    if (!viewer || initialized.current) return;

    // Default zoom (global overview)
    viewer.camera.setView({
      destination: Cartesian3.fromDegrees(0, 0, 4_000_000),
    });

    viewer.scene.requestRenderMode = false;

    const controller = viewer.scene.screenSpaceCameraController;

    controller.enableRotate = false;
    controller.enableZoom = false;
    controller.enableTilt = false;
    controller.enableTranslate = false;
    controller.enableLook = false;

    controller.inertiaSpin = 0;
    controller.inertiaTranslate = 0;
    controller.inertiaZoom = 0;

    // viewer.scene.morphTo2D(0);

    initialized.current = true;
  }, [viewer]);

  useEffect(() => {
    if (!viewer || !mainViewer) return;

    const tick = viewer.scene.postRender.addEventListener(() => {
      if (!viewer.isDestroyed()) {
        viewer.scene.requestRender();
      }
    });

    return () => {
      if (tick) tick();
    };
  }, [viewer, mainViewer]);

  // Sync center when main map moves
  useEffect(() => {
    if (!viewer || !center) return;

    viewer.camera.setView({
      destination: Cartesian3.fromRadians(center.longitude, center.latitude, 4_000_000),
    });

    viewer.scene?.requestRender();
  }, [viewer, center]);

  // Force overview render when main camera moves
  useEffect(() => {
    console.log("mainViewer", mainViewer);
    console.log("viewer", viewer);
    if (!viewer || !mainViewer) return;

    const remove = mainViewer.camera.changed.addEventListener(() => {
      if (!viewer.isDestroyed()) {
        viewer.scene?.requestRender();
      }
    });

    return () => remove();
  }, [viewer, mainViewer]);

  useEffect(() => {
    if (!viewer) return;
    viewer.useDefaultRenderLoop = true;
  }, [viewer]);

  return null;
};

const ViewExtentOverlay = () => {
  const { mainViewer } = useContext(CameraContext);

  const rectangle = useMemo(() => {
    if (!mainViewer) return undefined;

    const ellipsoid = mainViewer.scene.globe.ellipsoid;

    return new CallbackProperty(() => {
      if (!mainViewer || mainViewer.isDestroyed()) return undefined;

      const canvas = mainViewer.scene.canvas;

      const corners = [
        new Cartesian2(0, 0),
        new Cartesian2(canvas.clientWidth, 0),
        new Cartesian2(canvas.clientWidth, canvas.clientHeight),
        new Cartesian2(0, canvas.clientHeight),
      ];

      const cartographics = corners
        .map((corner) => {
          const cartesian = mainViewer.camera.pickEllipsoid(corner, ellipsoid);
          return cartesian ? Cartographic.fromCartesian(cartesian, ellipsoid) : null;
        })
        .filter(Boolean) as Cartographic[];

      if (cartographics.length < 2) return undefined;

      let west = Infinity,
        east = -Infinity,
        south = Infinity,
        north = -Infinity;

      for (const c of cartographics) {
        west = Math.min(west, c.longitude);
        east = Math.max(east, c.longitude);
        south = Math.min(south, c.latitude);
        north = Math.max(north, c.latitude);
      }

      return Rectangle.fromRadians(west, south, east, north);
    }, false);
  }, [mainViewer]);

  if (!rectangle) return null;

  return (
    <Entity
      rectangle={{
        coordinates: rectangle,
        material: Color.RED.withAlpha(0.25),
        outline: true,
        outlineColor: Color.YELLOW,
        height: 0, // IMPORTANT: keep this 0 in 2D overview
      }}
    />
  );
};

const OverviewMap = ({ children }: { children?: JSX.Element | JSX.Element[] }) => {
  return (
    <div className="absolute top-3 right-3 rounded h-[15vh] w-[15vh] border border-(--text) overflow-hidden">
      <Viewer
        contextOptions={{ webgl: { alpha: true } }}
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
        <OverviewController />
        <ViewExtentOverlay />
        {children}
      </Viewer>
    </div>
  );
};

export default OverviewMap;
