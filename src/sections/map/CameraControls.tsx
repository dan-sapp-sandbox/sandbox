import { useCesium } from "resium";
import { Cartesian3 } from "cesium";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import useLocalStorage from "use-local-storage";
import { useContext } from "react";
import { CameraContext } from "./types";

const CameraControls = () => {
  const defaultMainView = {
    lat: 42,
    lon: 0,
    height: 2_000_000,
    heading: 0,
    pitch: -Math.PI / 2,
    roll: 0,
  };
  const defaultPipView = {
    lat: 42,
    lon: 0,
    height: 100_000,
    heading: 0,
    pitch: -Math.PI / 2,
    roll: 0,
  };
  const [_initMainView, setInitMainView] = useLocalStorage("main-cam-init", defaultMainView);
  const [_initPipView, setInitPipView] = useLocalStorage("pip-cam-init", defaultPipView);
  const { viewer } = useCesium();
  const { pipViewerRef } = useContext(CameraContext);

  const zoomIn = () => viewer?.camera?.zoomIn(150_000);
  const zoomOut = () => viewer?.camera?.zoomOut(150_000);

  const reset = () => {
    setInitMainView(defaultMainView);
    setInitPipView(defaultPipView);
    viewer?.camera?.flyTo({
      destination: Cartesian3.fromDegrees(defaultMainView.lon, defaultMainView.lat, defaultMainView.height),
      orientation: {
        heading: defaultMainView.heading,
        pitch: defaultMainView.pitch,
        roll: defaultMainView.roll,
      },
    });
    pipViewerRef.current?.camera?.flyTo({
      destination: Cartesian3.fromDegrees(defaultPipView.lon, defaultPipView.lat, defaultPipView.height),
      orientation: {
        heading: defaultPipView.heading,
        pitch: defaultPipView.pitch,
        roll: defaultPipView.roll,
      },
    });
  };

  return (
    <div className="absolute bottom-1 right-1 z-99 flex flex-row gap-2">
      <Button size="icon" onClick={zoomIn}>
        <Plus />
      </Button>
      <Button size="icon" onClick={zoomOut}>
        <Minus />
      </Button>
      <Button size="default" onClick={reset}>
        Reset
      </Button>
    </div>
  );
};

export default CameraControls;
