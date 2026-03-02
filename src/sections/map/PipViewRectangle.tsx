import { useContext, useMemo } from "react";
import { Entity } from "resium";
import { CameraContext } from "./types";
import { Cartographic, Cartesian2, Cartesian3, CallbackProperty, Color, Math, PolygonHierarchy } from "cesium";
import useLocalStorage from "use-local-storage";

const PipViewRectangle = ({ show }: { show: boolean }) => {
  // TODO: fix so rotating doesn't twist lines
  const { mainViewerRef, pipViewerRef } = useContext(CameraContext);
  const [_init, setInitCameraView] = useLocalStorage("pip-cam-init", {
    lat: 42,
    lon: 0,
    height: 100_000,
    heading: 0,
    pitch: -Math.PI / 2,
    roll: 0,
  });

  const frustum = useMemo(
    () =>
      new CallbackProperty(() => {
        const pipViewer = pipViewerRef.current;
        if (!pipViewer) return undefined;

        const scene = pipViewer.scene;
        const camera = pipViewer.camera;
        const canvas = scene.canvas;

        const corners = [
          new Cartesian2(0, 0),
          new Cartesian2(canvas.clientWidth, 0),
          new Cartesian2(canvas.clientWidth, canvas.clientHeight),
          new Cartesian2(0, canvas.clientHeight),
        ];

        const positions: Cartesian3[] = [];

        for (const pixel of corners) {
          const ray = camera.getPickRay(pixel);
          if (!ray) return undefined;

          let hit = scene.globe.pick(ray, scene);

          if (!hit) return undefined;
          positions.push(hit);
        }

        return new PolygonHierarchy(positions);
      }, false),
    [],
  );

  const createDiagonal = (rectCornerIndexA: number[], rectCornerIndexB: number[]) =>
    new CallbackProperty(() => {
      const mainViewer = mainViewerRef.current;
      const pipViewer = pipViewerRef.current;
      if (!mainViewer || !pipViewer) return [];

      const { scene, camera, container } = mainViewer;

      const pipScene = pipViewer.scene;
      const pipCamera = pipScene.camera;
      const pipCanvas = pipScene.canvas;

      const cornerPixels = [
        new Cartesian2(0, 0),
        new Cartesian2(pipCanvas.clientWidth, 0),
        new Cartesian2(0, pipCanvas.clientHeight),
        new Cartesian2(pipCanvas.clientWidth, pipCanvas.clientHeight),
      ];

      let rectWorldCorners: Cartesian3[] = [];

      for (const pixel of cornerPixels) {
        const ray = pipCamera.getPickRay(pixel);
        if (!ray) continue;

        const intersection = pipScene.globe.pick(ray, pipScene);

        if (intersection) {
          rectWorldCorners.push(intersection);
        } else {
          return [];
        }
      }
      const rect = pipViewer.camera.computeViewRectangle();
      if (!rect) return [];

      const rectCorners = rectWorldCorners.map((world) => {
        const ray = camera.getPickRay(mainViewer.scene.cartesianToCanvasCoordinates(world) as Cartesian2);
        return ray ? scene.globe.pick(ray, scene) : undefined;
      });

      const pipBounds = pipViewer.container.getBoundingClientRect();
      const mainBounds = container.getBoundingClientRect();

      const toCanvas = (x: number, y: number) => new Cartesian2(x - mainBounds.left, y - mainBounds.top);

      const pickGlobe = (pos: Cartesian2) => {
        const ray = camera.getPickRay(pos);
        return ray ? scene.globe.pick(ray, scene) : undefined;
      };

      const pipCorners = [
        pickGlobe(toCanvas(pipBounds.left, pipBounds.top)),
        pickGlobe(toCanvas(pipBounds.right, pipBounds.top)),
        pickGlobe(toCanvas(pipBounds.left, pipBounds.bottom)),
        pickGlobe(toCanvas(pipBounds.right, pipBounds.bottom)),
      ];

      if (rectCorners.includes(undefined) || pipCorners.includes(undefined)) return [];

      const rectCenterX = (pipBounds.left + pipBounds.right) / 2;
      const rectCenterY = (pipBounds.top + pipBounds.bottom) / 2;
      const pipCenterX = pipBounds.left + pipBounds.width / 2;
      const pipCenterY = pipBounds.top + pipBounds.height / 2;

      const isEvenQuadrant =
        (rectCenterX > pipCenterX && rectCenterY > pipCenterY) ||
        (rectCenterX < pipCenterX && rectCenterY < pipCenterY);

      const [rectIndex, pipIndex] = isEvenQuadrant ? rectCornerIndexA : rectCornerIndexB;

      const carto = Cartographic.fromCartesian(pipCamera.position);
      setInitCameraView({
        lon: Math.toDegrees(carto.longitude),
        lat: Math.toDegrees(carto.latitude),
        height: carto.height,
        heading: pipCamera.heading,
        pitch: pipCamera.pitch,
        roll: pipCamera.roll,
      });

      return [rectCorners[rectIndex] as Cartesian3, pipCorners[pipIndex] as Cartesian3];
    }, false);

  const diagonal1 = useMemo(() => createDiagonal([1, 1], [0, 0]), []);
  const diagonal2 = useMemo(() => createDiagonal([2, 2], [3, 3]), []);

  if (!show) return null;

  return (
    <>
      <Entity
        polygon={{
          hierarchy: frustum,
          material: Color.ORANGE.withAlpha(0.2),
          outline: true,
          outlineColor: Color.ORANGE,
          outlineWidth: 1,
          // perPositionHeight: false,
        }}
      />
      <Entity
        polyline={{
          positions: diagonal1,
          width: 1,
          material: Color.ORANGE,
          arcType: 0,
        }}
      />
      <Entity
        polyline={{
          positions: diagonal2,
          width: 1,
          material: Color.ORANGE,
          arcType: 0,
        }}
      />
    </>
  );
};

export default PipViewRectangle;
