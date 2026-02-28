import { useContext, useMemo } from "react";
import { Entity } from "resium";
import { CameraContext } from "./types";
import { CallbackProperty, Color, Rectangle, Cartesian3, Cartesian2, SceneTransforms } from "cesium";

type Props = {
  pipDomRef: React.RefObject<HTMLDivElement | null>;
};

const PipViewRectangle = ({ pipDomRef }: Props) => {
  if (!pipDomRef) return null;
  const { pipViewerRef, mainViewerRef } = useContext(CameraContext);

  const rectangle = useMemo(() => {
    return new CallbackProperty(() => {
      const pip = pipViewerRef.current;
      if (!pip || pip.isDestroyed()) return undefined;

      const rect = pip.camera.computeViewRectangle();
      if (!rect) return undefined;

      return Rectangle.fromRadians(rect.west, rect.south, rect.east, rect.north);
    }, false);
  }, [pipViewerRef]);

  const cornerLines = useMemo(() => {
    return new CallbackProperty(() => {
      const pip = pipViewerRef.current;
      const main = mainViewerRef.current;
      const pipEl = pipDomRef.current;

      if (!pip || !main || !pipEl) return undefined;

      const rect = pip.camera.computeViewRectangle();
      if (!rect) return undefined;

      const scene = main.scene;

      // === Rectangle world corners
      const nw = Cartesian3.fromRadians(rect.west, rect.north);
      const ne = Cartesian3.fromRadians(rect.east, rect.north);
      const sw = Cartesian3.fromRadians(rect.west, rect.south);
      const se = Cartesian3.fromRadians(rect.east, rect.south);

      // === Rectangle center (world → screen)
      const centerWorld = Cartesian3.fromRadians((rect.west + rect.east) / 2, (rect.north + rect.south) / 2);

      const centerScreen = SceneTransforms.worldToWindowCoordinates(scene, centerWorld);

      if (!centerScreen) return undefined;

      // === PiP center (screen)
      const bounds = pipEl.getBoundingClientRect();
      const canvasBounds = main.canvas.getBoundingClientRect();

      const pipCenterX = bounds.left + bounds.width / 2 - canvasBounds.left;
      const pipCenterY = bounds.top + bounds.height / 2 - canvasBounds.top;

      const isRight = centerScreen.x > pipCenterX;
      const isAbove = centerScreen.y < pipCenterY;
      // NOTE: screen Y is inverted (top = smaller value)

      // === PiP corners (screen → globe)
      const toCanvasCoords = (x: number, y: number) => new Cartesian2(x - canvasBounds.left, y - canvasBounds.top);

      const pickGlobe = (windowPos: Cartesian2) => {
        const ray = main.camera.getPickRay(windowPos);
        if (!ray) return undefined;
        return scene.globe.pick(ray, scene);
      };

      const pipNW = pickGlobe(toCanvasCoords(bounds.left, bounds.top));
      const pipNE = pickGlobe(toCanvasCoords(bounds.right, bounds.top));
      const pipSW = pickGlobe(toCanvasCoords(bounds.left, bounds.bottom));
      const pipSE = pickGlobe(toCanvasCoords(bounds.right, bounds.bottom));

      if (!pipNW || !pipNE || !pipSW || !pipSE) return undefined;

      // === Choose diagonal
      if ((isRight && isAbove) || (!isRight && !isAbove)) {
        // Top-right OR Bottom-left → TL + BR
        return {
          a: [nw, pipNW],
          b: [se, pipSE],
        };
      } else {
        // Top-left OR Bottom-right → TR + BL
        return {
          a: [ne, pipNE],
          b: [sw, pipSW],
        };
      }
    }, false);
  }, [pipViewerRef, mainViewerRef, pipDomRef]);

  return (
    <>
      <Entity
        rectangle={{
          coordinates: rectangle,
          material: Color.YELLOWGREEN.withAlpha(0.25),
          outline: true,
          outlineColor: Color.fromCssColorString("#ff8143"),
          height: 0,
        }}
      />

      <Entity
        polyline={{
          positions: new CallbackProperty(() => cornerLines.getValue()?.a, false),
          width: 1,
          material: Color.fromCssColorString("#ff8143"),
          arcType: 0,
        }}
      />

      <Entity
        polyline={{
          positions: new CallbackProperty(() => cornerLines.getValue()?.b, false),
          width: 1,
          material: Color.fromCssColorString("#ff8143"),
          arcType: 0,
        }}
      />
    </>
  );
};

export default PipViewRectangle;
