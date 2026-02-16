import { Button } from "@/components/ui/button";
import type { DrawMode } from "../../useMapState";

type DrawControlsProps = {
  mode: DrawMode;
  setMode: (m: DrawMode) => void;
  clear: () => void;
};
const DrawControls = ({ mode, setMode, clear }: DrawControlsProps) => {
  const btn = (m: DrawMode, label: string) => (
    <Button variant="default" onClick={() => setMode(m)} className={mode === m ? "border-blue-400 text-blue-400" : ""}>
      {label}
    </Button>
  );

  return (
    <div className="flex flex-col gap-2 p-2 rounded">
      {btn("simple_select", "Select")}
      {btn("draw_point", "Point")}
      {btn("draw_line_string", "Line")}
      {btn("draw_polygon", "Polygon")}
      <Button onClick={clear}>Clear</Button>
    </div>
  );
};

export default DrawControls;
