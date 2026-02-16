import type { IMapState } from "../../useMapState";
import DrawControls from "./DrawControls";

const DrawDrawer = ({ mapState }: { mapState: IMapState }) => {
  if (mapState.drawer !== "draw") return null;

  return (
    <div className="z-999 absolute bg-(--background) top-0 bottom-0 left-14 w-55">
      <DrawControls mode={mapState.drawMode} setMode={mapState.setDrawMode} clear={mapState.clearDraw} />
    </div>
  );
};

export default DrawDrawer;
