import type { IMapState } from "../useMapState";

const DrawDrawer = ({ mapState }: { mapState: IMapState }) => {
  if (mapState.drawer !== "draw") return null;

  return (
    <div className="z-1 absolute bg-[var(--background)] top-0 bottom-0 left-14 w-50">
      <span className="text-[var(--foreground)]">Draw</span>
    </div>
  );
};

export default DrawDrawer;
