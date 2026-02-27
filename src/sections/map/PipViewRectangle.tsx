import { useContext, useMemo } from "react";
import { Entity } from "resium";
import { CameraContext } from "./types";
import { CallbackProperty, Color, Rectangle } from "cesium";

const PipViewRectangle = () => {
  const { pipViewerRef } = useContext(CameraContext);

  const rectangle = useMemo(() => {
    return new CallbackProperty(() => {
      const main = pipViewerRef.current;

      if (!main || main.isDestroyed()) return undefined;

      const rect = main.camera.computeViewRectangle();

      if (!rect) return undefined;

      const padding = 0.0;

      return Rectangle.fromRadians(
        rect.west - padding,
        rect.south - padding,
        rect.east + padding,
        rect.north + padding,
      );
    }, false);
  }, [pipViewerRef]);

  return (
    <Entity
      rectangle={{
        coordinates: rectangle,
        material: Color.YELLOWGREEN.withAlpha(0.25),
        outline: true,
        outlineColor: Color.fromCssColorString("#ff8143"),
        height: 0,
      }}
    />
  );
};

export default PipViewRectangle;
