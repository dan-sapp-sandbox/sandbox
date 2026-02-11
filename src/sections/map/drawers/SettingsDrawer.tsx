import type { IMapState, IProjection } from "../useMapState";
import Select from "@/components/Select";

const SettingsDrawer = ({ mapState }: { mapState: IMapState }) => {
  if (mapState.drawer !== "settings") return null;

  return (
    <div className="z-1 absolute bg-[var(--background)] top-0 bottom-0 left-14 w-50 p-4">
      <div className="flex flex-col gap-6">
        <span className="text-[var(--foreground)]">Settings</span>
        <Select
          label="Base Map"
          options={mapState.mapStyleOptions}
          value={mapState.mapStyle}
          onChange={(value) => mapState.setMapStyle(value as string)}
        />
        <Select
          label="Projection"
          options={mapState.projectionOptions}
          value={mapState.projection}
          onChange={(value) => mapState.setProjection(value as IProjection)}
        />
      </div>
    </div>
  );
};

export default SettingsDrawer;
