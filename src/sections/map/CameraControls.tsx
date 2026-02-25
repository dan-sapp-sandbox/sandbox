import { useCesium } from "resium";
import { Cartesian3 } from "cesium";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";

const CameraControls = () => {
  const { viewer } = useCesium();

  const zoomIn = () => viewer?.camera?.zoomIn(150000);
  const zoomOut = () => viewer?.camera?.zoomOut(150000);

  const reset = () => {
    viewer?.camera?.flyTo({
      destination: Cartesian3.fromDegrees(-93.265, 44.9778, 1_200_000),
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
