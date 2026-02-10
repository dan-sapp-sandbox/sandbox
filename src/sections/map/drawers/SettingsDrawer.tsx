import type { IMapState, IProjection } from "../useMapState";
import { MenuItem, Select } from "@mui/material";

const SettingsDrawer = ({ mapState }: { mapState: IMapState }) => {
  if (mapState.drawer !== "settings") return null;

  return (
    <div className="z-1 absolute bg-[var(--background)] top-0 bottom-0 left-14 w-75">
      <span className="text-[var(--foreground)]">Settings</span>
      <div>Projection: {mapState.projection}</div>
      <div>Base Map: {mapState.mapStyle}</div>
      <div>
        <Select value={mapState.projection} onChange={(e) => mapState.setProjection(e.target.value as IProjection)}>
          <MenuItem value="mercator">Mercator</MenuItem>
          <MenuItem value="globe">Globe</MenuItem>
        </Select>
      </div>
    </div>
  );
};

export default SettingsDrawer;
