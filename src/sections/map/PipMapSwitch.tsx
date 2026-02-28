import { Switch } from "@/components/ui/switch";

interface Props {
  showPipMap: boolean;
  setShowPipMap: (show: boolean) => void;
}
const PipMapSwitch = ({ showPipMap, setShowPipMap }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs text-(--text) font-bold">Show Pip Map</span>
      <Switch checked={showPipMap} onCheckedChange={(checked: boolean) => setShowPipMap(checked)} />
    </div>
  );
};

export default PipMapSwitch;
