import { Switch } from "@/components/ui/switch";

interface Props {
  showPipMap: boolean;
  setShowPipMap: (show: boolean) => void;
  isPip2: boolean;
}
const PipMapSwitch = ({ showPipMap, setShowPipMap, isPip2 }: Props) => {
  const label = isPip2 ? "Show Pip Map 2" : "Show Pip Map";
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs text-(--text) font-bold">{label}</span>
      <Switch checked={showPipMap} onCheckedChange={(checked: boolean) => setShowPipMap(checked)} />
    </div>
  );
};

export default PipMapSwitch;
