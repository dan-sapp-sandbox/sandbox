import Switch from "@/components/Switch";
import type { IMapState } from "../useMapState";

const LayerDrawer = ({ mapState }: { mapState: IMapState }) => {
  if (mapState.drawer !== "layer") return null;

  return (
    <div className="z-999 absolute bg-[var(--background)] top-0 bottom-0 left-14 w-50">
      <div className="flex flex-col gap-8 p-4">
        <span className="text-[var(--foreground)]">Layers</span>
        <Switch
          label="Show Dot Layer"
          value={mapState.showLayer1}
          onChange={(checked: boolean) => mapState.setShowLayer1(checked)}
        />
        <Switch
          label="Show Arc Layer"
          value={mapState.showLayer2}
          onChange={(checked: boolean) => mapState.setShowLayer2(checked)}
        />
      </div>
    </div>
  );
};

export default LayerDrawer;
