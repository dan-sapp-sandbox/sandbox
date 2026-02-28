import { useContext, useRef, useEffect, useMemo } from "react";
import { Entity } from "resium";
import { CameraContext } from "./types";
import { Cartesian2, Cartesian3, SceneTransforms, CallbackProperty, Color } from "cesium";

const PipViewRectangle = ({ show }: { show: boolean }) => {
  const { mainViewerRef, pipViewerRef } = useContext(CameraContext);
  const rectRef = useRef<HTMLDivElement>(null);

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

  const createDiagonal = (rectCornerIndexA: number[], rectCornerIndexB: number[]) =>
    new CallbackProperty(() => {
      const mainViewer = mainViewerRef.current;
      const pipViewer = pipViewerRef.current;
      const rectEl = rectRef.current;
      if (!mainViewer || !pipViewer || !rectEl) return undefined;

      const { scene, container } = mainViewer;
      const rectBounds = rectEl.getBoundingClientRect();
      const pipBounds = pipViewer.container.getBoundingClientRect();

      const toCanvas = (x: number, y: number) =>
        new Cartesian2(x - container.getBoundingClientRect().left, y - container.getBoundingClientRect().top);

      const pickGlobe = (pos: Cartesian2) => {
        const ray = mainViewer.camera.getPickRay(pos);
        return ray ? scene.globe.pick(ray, scene) : undefined;
      };

      const rectCorners = [
        pickGlobe(toCanvas(rectBounds.left, rectBounds.top)),
        pickGlobe(toCanvas(rectBounds.right, rectBounds.top)),
        pickGlobe(toCanvas(rectBounds.left, rectBounds.bottom)),
        pickGlobe(toCanvas(rectBounds.right, rectBounds.bottom)),
      ];

      const pipCorners = [
        pickGlobe(toCanvas(pipBounds.left, pipBounds.top)),
        pickGlobe(toCanvas(pipBounds.right, pipBounds.top)),
        pickGlobe(toCanvas(pipBounds.left, pipBounds.bottom)),
        pickGlobe(toCanvas(pipBounds.right, pipBounds.bottom)),
      ];

      if (rectCorners.includes(undefined) || pipCorners.includes(undefined)) return undefined;

      const rectCenterX = (rectBounds.left + rectBounds.right) / 2;
      const rectCenterY = (rectBounds.top + rectBounds.bottom) / 2;
      const pipCenterX = pipBounds.left + pipBounds.width / 2;
      const pipCenterY = pipBounds.top + pipBounds.height / 2;
      const isEvenQuadrant =
        (rectCenterX > pipCenterX && rectCenterY > pipCenterY) ||
        (rectCenterX < pipCenterX && rectCenterY < pipCenterY);

      const [rectIndex, pipIndex] = isEvenQuadrant ? rectCornerIndexA : rectCornerIndexB;

      return [rectCorners[rectIndex], pipCorners[pipIndex]];
    }, false);

  const diagonal1 = useMemo(() => createDiagonal([1, 1], [0, 0]), [mainViewerRef, pipViewerRef]);
  const diagonal2 = useMemo(() => createDiagonal([2, 2], [3, 3]), [mainViewerRef, pipViewerRef]);

  if (!show) return null;
  return (
    <>
      <div ref={rectRef} />
      <Entity polyline={{ positions: diagonal1, width: 1, material: Color.ORANGE, arcType: 0 }} />
      <Entity polyline={{ positions: diagonal2, width: 1, material: Color.ORANGE, arcType: 0 }} />
    </>
  );
};

export default PipViewRectangle;
