import Button from "@/components/Button";
import type { DrawMode } from "../../useMapState";

type DrawControlsProps = {
  mode: DrawMode;
  setMode: (m: DrawMode) => void;
  clear: () => void;
};
const DrawControls = ({ mode, setMode, clear }: DrawControlsProps) => {
  const btn = (m: DrawMode, label: string) => (
    <Button onClick={() => setMode(m)} className={mode === m ? "bg-blue-500" : "bg-gray-700"}>
      {label}
    </Button>
  );

  return (
    <div className="flex flex-col gap-2 p-2 bg-black/70 rounded">
      {btn("simple_select", "Select")}
      {btn("draw_point", "Point")}
      {btn("draw_line_string", "Line")}
      {btn("draw_polygon", "Polygon")}
      <button onClick={clear}>Clear</button>
    </div>
  );
};

export default DrawControls;
