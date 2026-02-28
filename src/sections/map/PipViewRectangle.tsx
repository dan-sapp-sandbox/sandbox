import { useContext, useRef, useEffect } from "react";
import { Entity } from "resium";
import { CameraContext } from "./types";
import { Cartesian2, Cartesian3, SceneTransforms, CallbackProperty, Color } from "cesium";

const PipViewRectangle = () => {
  const { mainViewerRef, pipViewerRef } = useContext(CameraContext);
  const rectRef = useRef<HTMLDivElement>(null);

  // Diagonal lines
  const diagonalLines = useRef<CallbackProperty | null>(null);
  if (!diagonalLines.current) {
    diagonalLines.current = new CallbackProperty(() => {
      const mainViewer = mainViewerRef.current;
      const pipViewer = pipViewerRef.current;
      const rectEl = rectRef.current;
      if (!mainViewer || !pipViewer || !rectEl) return undefined;

      const scene = mainViewer.scene;
      const container = mainViewer.container as HTMLDivElement;
      const rectBounds = rectEl.getBoundingClientRect();
      const pipBounds = pipViewer.container.getBoundingClientRect();

      const toCanvas = (x: number, y: number) =>
        new Cartesian2(x - container.getBoundingClientRect().left, y - container.getBoundingClientRect().top);

      const pickGlobe = (pos: Cartesian2) => {
        const ray = mainViewer.camera.getPickRay(pos);
        return ray ? scene.globe.pick(ray, scene) : undefined;
      };

      const rectNW = pickGlobe(toCanvas(rectBounds.left, rectBounds.top));
      const rectSE = pickGlobe(toCanvas(rectBounds.right, rectBounds.bottom));
      const rectNE = pickGlobe(toCanvas(rectBounds.right, rectBounds.top));
      const rectSW = pickGlobe(toCanvas(rectBounds.left, rectBounds.bottom));

      const pipNW = pickGlobe(toCanvas(pipBounds.left, pipBounds.top));
      const pipSE = pickGlobe(toCanvas(pipBounds.right, pipBounds.bottom));
      const pipNE = pickGlobe(toCanvas(pipBounds.right, pipBounds.top));
      const pipSW = pickGlobe(toCanvas(pipBounds.left, pipBounds.bottom));

      if (!rectNW || !rectSE || !rectNE || !rectSW || !pipNW || !pipSE || !pipNE || !pipSW) return undefined;

      const rectCenterX = (rectBounds.left + rectBounds.right) / 2;
      const rectCenterY = (rectBounds.top + rectBounds.bottom) / 2;
      const pipCenterX = pipBounds.left + pipBounds.width / 2;
      const pipCenterY = pipBounds.top + pipBounds.height / 2;

      const isRight = rectCenterX > pipCenterX;
      const isAbove = rectCenterY < pipCenterY;

      return (isRight && isAbove) || (!isRight && !isAbove)
        ? [rectNW, pipNW, rectSE, pipSE]
        : [rectNE, pipNE, rectSW, pipSW];
    }, false);
  }

  // Animate rectangle each frame
  useEffect(() => {
    let frameId: number;

    const updateRect = () => {
      const mainViewer = mainViewerRef.current;
      const pipViewer = pipViewerRef.current;
      const rectEl = rectRef.current;
      if (!mainViewer || !pipViewer || !rectEl) {
        frameId = requestAnimationFrame(updateRect);
        return;
      }

      const rect = pipViewer.camera.computeViewRectangle();
      if (!rect) {
        frameId = requestAnimationFrame(updateRect);
        return;
      }

      const nwWorld = Cartesian3.fromRadians(rect.west, rect.north, pipViewer.camera.positionCartographic.height);
      const seWorld = Cartesian3.fromRadians(rect.east, rect.south, pipViewer.camera.positionCartographic.height);

      const nwScreen = SceneTransforms.worldToWindowCoordinates(mainViewer.scene, nwWorld);
      const seScreen = SceneTransforms.worldToWindowCoordinates(mainViewer.scene, seWorld);

      if (!nwScreen || !seScreen) {
        frameId = requestAnimationFrame(updateRect);
        return;
      }

      const container = mainViewer.container as HTMLDivElement;

      // Update DOM directly
      Object.assign(rectEl.style, {
        position: "absolute",
        left: `${(nwScreen.x / container.clientWidth) * 100}%`,
        top: `${(nwScreen.y / container.clientHeight) * 100}%`,
        width: `${((seScreen.x - nwScreen.x) / container.clientWidth) * 100}%`,
        height: `${((seScreen.y - nwScreen.y) / container.clientHeight) * 100}%`,
        border: "1px solid orange",
        backgroundColor: "rgba(173, 255, 47, 0.25)",
        zIndex: "20",
      });

      frameId = requestAnimationFrame(updateRect);
    };

    updateRect();
    return () => cancelAnimationFrame(frameId);
  }, [mainViewerRef, pipViewerRef]);

  return (
    <>
      <div ref={rectRef} />
      <Entity
        polyline={{
          positions: diagonalLines.current!,
          width: 1,
          material: Color.ORANGE,
          arcType: 0,
        }}
      />
    </>
  );
};

export default PipViewRectangle;
