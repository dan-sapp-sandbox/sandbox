import type { IMapState } from "../useMapState";

const IconDrawer = ({ mapState }: { mapState: IMapState }) => {
  if (mapState.drawer !== "icon") return null;

  return (
    <div className="z-999 absolute bg-(--background) top-0 bottom-0 left-14 w-55">
      <span className="text(--foreground)">Icons</span>
    </div>
  );
};

export default IconDrawer;
