import type { IMapState } from "../useMapState";

const SettingsDrawer = ({ mapState }: { mapState: IMapState }) => {
  if (mapState.drawer !== "settings") return null;

  return (
    <div className="z-1 absolute bg-[var(--background)] top-0 bottom-0 left-14 w-75">
      <span className="text-[var(--foreground)]">Settings</span>
    </div>
  );
};

export default SettingsDrawer;
