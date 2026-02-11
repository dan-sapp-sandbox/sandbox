import type { IMapState } from "../useMapState";

const IconDrawer = ({ mapState }: { mapState: IMapState }) => {
  if (mapState.drawer !== "icon") return null;

  return (
    <div className="z-1 absolute bg-[var(--background)] top-0 bottom-0 left-14 w-50">
      <span className="text-[var(--foreground)]">Icons</span>
    </div>
  );
};

export default IconDrawer;
