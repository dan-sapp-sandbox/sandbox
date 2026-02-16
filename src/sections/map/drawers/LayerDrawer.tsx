import { Switch } from "@/components/ui/switch";
import type { IMapState } from "../useMapState";

const LayerDrawer = ({ mapState }: { mapState: IMapState }) => {
  if (mapState.drawer !== "layer") return null;

  return (
    <div className="z-999 absolute bg-[var(--background)] top-0 bottom-0 left-14 w-55">
      <div className="flex flex-col gap-8 p-4">
        <span className="text-[var(--foreground)]">Layers</span>
        <div className="flex flex-row justify-between">
          <span>Show Dot Layer</span>
          <Switch
            checked={mapState.showLayer1}
            onCheckedChange={(checked: boolean) => mapState.setShowLayer1(checked)}
          />
        </div>
        <div className="flex flex-row justify-between">
          <span>Show Arc Layer</span>
          <Switch
            checked={mapState.showLayer2}
            onCheckedChange={(checked: boolean) => mapState.setShowLayer2(checked)}
          />
        </div>
      </div>
    </div>
  );
};

export default LayerDrawer;
