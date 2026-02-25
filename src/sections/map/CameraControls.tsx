import { useCesium } from "resium";
import { Cartesian3 } from "cesium";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";

const CameraControls = () => {
  const { viewer } = useCesium();

  const zoomIn = () => viewer?.camera?.zoomIn(1000000);
  const zoomOut = () => viewer?.camera?.zoomOut(1000000);

  const reset = () => {
    viewer?.camera?.flyTo({
      destination: Cartesian3.fromDegrees(-95, 40, 25000000),
    });
  };

  return (
    <div className="absolute bottom-0 right-0 z-99 p-3 rounded bg-(--foreground)/30 flex flex-row gap-2">
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
