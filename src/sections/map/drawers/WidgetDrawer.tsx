import type { IMapState } from "../useMapState";

const WidgetDrawer = ({ mapState }: { mapState: IMapState }) => {
  if (mapState.drawer !== "widget") return null;

  return (
    <div className="z-999 absolute bg-(--background) top-0 bottom-0 left-14 w-55">
      <span className="text-(--text)">Widgets</span>
    </div>
  );
};

export default WidgetDrawer;
