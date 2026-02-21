import type { IMapState, IProjection } from "../useMapState";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SettingsDrawer = ({ mapState }: { mapState: IMapState }) => {
  if (mapState.drawer !== "settings") return null;

  return (
    <div className="z-9 absolute bg-(--background) top-0 bottom-0 left-14 w-60 p-4">
      <div className="flex flex-col gap-6">
        <span className="text-(--text)">Settings</span>
        <Select value={mapState.mapStyle} onValueChange={(value) => mapState.setMapStyle(value as string)}>
          <SelectTrigger className="w-50">
            <SelectValue placeholder="Projection" />
          </SelectTrigger>
          <SelectContent>
            {mapState.mapStyleOptions.map((option) => (
              <SelectItem key={option.id} value={option.id}>
                {option.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={mapState.projection} onValueChange={(value) => mapState.setProjection(value as IProjection)}>
          <SelectTrigger className="w-50">
            <SelectValue placeholder="Projection" />
          </SelectTrigger>
          <SelectContent>
            {mapState.projectionOptions.map((option) => (
              <SelectItem key={option.id} value={option.id}>
                {option.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SettingsDrawer;
