import { Switch } from "@/components/ui/switch";

interface Props {
  showOverviewMap: boolean;
  setShowOverviewMap: (show: boolean) => void;
}
const OverviewMapSwitch = ({ showOverviewMap, setShowOverviewMap }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs text-(--text) font-bold">Show Overview Map</span>
      <Switch checked={showOverviewMap} onCheckedChange={(checked: boolean) => setShowOverviewMap(checked)} />
    </div>
  );
};

export default OverviewMapSwitch;
