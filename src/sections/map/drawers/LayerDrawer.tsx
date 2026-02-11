import type { IMapState } from "../useMapState";

const LayerDrawer = ({ mapState }: { mapState: IMapState }) => {
  if (mapState.drawer !== "layer") return null;

  return (
    <div className="z-1 absolute bg-[var(--background)] top-0 bottom-0 left-14 w-50">
      <span className="text-[var(--foreground)]">Layers</span>
    </div>
  );
};

export default LayerDrawer;
